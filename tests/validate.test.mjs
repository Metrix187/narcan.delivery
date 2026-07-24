// tests for the data quality gate. run with: npm test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateData } from '../validate-data.mjs';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

// a minimal state that should pass everything
const goodState = (over = {}) => ({
  state: 'Testonia', abbreviation: 'TT', last_updated: '2026-07-01',
  legal_framework: {
    naloxone_legal_status: 'Statewide standing order',
    good_samaritan_overdose_immunity: { exists: true, scope: 'Protects the caller.' },
  },
  access_channels: {
    pharmacies: { mechanism: 'Ask at the counter.', medicaid_coverage_notes: 'Covered.', typical_cost: 'OTC ~$45' },
    community_programs: [{ name: 'Test Org', website: 'https://example.org', phone: '555-123-4567' }],
    mail_based_programs: [{ name: 'Mail Org', website: 'https://example.org' }],
  },
  practical_guidance: { how_to_get_naloxone_quickly: 'Walk into a pharmacy.', barriers_and_workarounds: 'None.' },
  sources: ['https://example.org/proof'],
  ...over,
});

// 50 distinct passing states (AA, AB, AC...), sorted by name
const fifty = () => Array.from({ length: 50 }, (_, i) => goodState({
  state: 'State' + String(i).padStart(2, '0'),
  abbreviation: String.fromCharCode(65 + Math.floor(i / 26)) + String.fromCharCode(65 + (i % 26)),
}));

test('the real data.js passes with zero errors', async () => {
  const load = (src) => { const w = {}; new Function('window', src)(w); return w; };
  const w = load(await fs.readFile(path.join(ROOT, 'data.js'), 'utf8'));
  let esStates = null;
  try { esStates = load(await fs.readFile(path.join(ROOT, 'data.es.js'), 'utf8')).NALOXONE_ES || null; } catch {}
  const { errors } = validateData(w.NALOXONE_DATA, w.NALOXONE_ADJACENCY || {}, { esStates });
  assert.deepEqual(errors, []);
});

test('a clean synthetic dataset passes', () => {
  const { errors } = validateData(fifty());
  assert.deepEqual(errors, []);
});

test('wrong state count is an error', () => {
  const { errors } = validateData(fifty().slice(0, 49));
  assert.ok(errors.some(e => e.includes('expected 50')));
});

test('the UNKNOWN sentinel is an error', () => {
  const data = fifty();
  data[3].access_channels.pharmacies.typical_cost = 'UNKNOWN';
  const { errors } = validateData(data);
  assert.ok(errors.some(e => e.includes('UNKNOWN sentinel')));
});

test('em dashes violate house style', () => {
  const data = fifty();
  data[7].practical_guidance.how_to_get_naloxone_quickly = 'Pharmacy — just ask.';
  const { errors } = validateData(data);
  assert.ok(errors.some(e => e.includes('em dash')));
});

test('missing required fields are errors', () => {
  const data = fifty();
  delete data[0].legal_framework.good_samaritan_overdose_immunity.scope;
  data[1].access_channels.pharmacies.mechanism = '';
  const { errors } = validateData(data);
  assert.ok(errors.some(e => e.includes('good_samaritan.scope')));
  assert.ok(errors.some(e => e.includes('pharmacies.mechanism')));
});

test('duplicate abbreviations are errors', () => {
  const data = fifty();
  data[1].abbreviation = data[0].abbreviation;
  const { errors } = validateData(data);
  assert.ok(errors.some(e => e.includes('duplicate abbreviation')));
});

test('bad urls in sources and org websites are errors', () => {
  const data = fifty();
  data[2].sources = ['not a url'];
  data[4].access_channels.community_programs[0].website = 'ftp://old.example';
  const { errors } = validateData(data);
  assert.ok(errors.some(e => e.includes('sources[0]')));
  assert.ok(errors.some(e => e.includes('bad website url')));
});

test('future last_updated is an error', () => {
  const data = fifty();
  data[5].last_updated = '2099-01-01';
  const { errors } = validateData(data);
  assert.ok(errors.some(e => e.includes('future')));
});

test('letters in phone numbers are errors (they break tel: links)', () => {
  const data = fifty();
  data[6].access_channels.community_programs[0].phone = '1-800-4NALOXONE';
  const { errors } = validateData(data);
  assert.ok(errors.some(e => e.includes('phone has letters')));
});

test('unsorted states are an error', () => {
  const data = fifty();
  [data[0], data[1]] = [data[1], data[0]];
  const { errors } = validateData(data);
  assert.ok(errors.some(e => e.includes('sorted')));
});

test('asymmetric adjacency is an error', () => {
  const data = fifty();
  const [a, b] = [data[0].abbreviation, data[1].abbreviation];
  const { errors } = validateData(data, { [a]: [b] });
  assert.ok(errors.some(e => e.includes('not vice versa')));
});

test('adjacency self-loops and unknown states are errors', () => {
  const data = fifty();
  const a = data[0].abbreviation;
  const { errors } = validateData(data, { [a]: [a, 'ZZ'] });
  assert.ok(errors.some(e => e.includes('borders itself')));
  assert.ok(errors.some(e => e.includes('unknown neighbor')));
});
