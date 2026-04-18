// narcan.delivery — state reference data
// Embedded baseline. Can be overridden at runtime by a published Google Sheet CSV
// (see SHEET_CSV_URL in app.js). Keep this file sorted alphabetically by state name.

window.NALOXONE_DATA = [
  { "state":"Alabama","abbreviation":"AL","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Prescription/Standing Order/OTC","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects the caller (if they use their real name and stay at the scene) from misdemeanor possession charges."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Statewide standing order — any pharmacist can dispense.","medicaid_coverage_notes":"Medicaid covers with a $0–3 copay.","typical_cost":"OTC around $45–65"},
      "community_programs":[
        {"name":"Jefferson County Dept. of Health","services":"Free naloxone kits and fentanyl test strips","website":"https://www.jcdh.org","phone":"205-933-9110"},
        {"name":"Alabama Dept. of Mental Health","services":"Statewide coordination and referrals","website":"https://mh.alabama.gov"}
      ],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Fastest: walk into any pharmacy (standing order / OTC), or request free kits from the Jefferson County Health Department.","barriers_and_workarounds":"Rural pharmacy access is limited, and uninsured cost can be a barrier. Use mail programs like NEXT Distro if distance or price is an issue."}
  },
  { "state":"Alaska","abbreviation":"AK","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Pharmacist independent prescribing","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects both the caller and the person overdosing if they are seeking medical help in good faith."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Pharmacists can prescribe naloxone on their own authority.","medicaid_coverage_notes":"Covered by Alaska Medicaid.","typical_cost":"OTC around $45–65"},
      "community_programs":[{"name":"Project HOPE","services":"Free kits through Overdose Response Programs","website":"https://health.alaska.gov"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Ask at any pharmacy, or find a Project HOPE partner in your community.","barriers_and_workarounds":"Many remote villages don't have pharmacies. Mail programs and community distributors are the reliable path."}
  },
  { "state":"Arizona","abbreviation":"AZ","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects the caller and the person overdosing from drug possession charges."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Any pharmacy can dispense naloxone under the statewide standing order.","medicaid_coverage_notes":"AHCCCS (Arizona Medicaid) covers it with no copay.","typical_cost":"OTC around $45–65"},
      "community_programs":[
        {"name":"Arizona Dept. of Health Services","services":"Provides free naloxone to community organizations","website":"https://www.azdhs.gov/opioid/"},
        {"name":"The Naloxone Project AZ","services":"Community distribution","website":"https://www.naloxoneproject.com"}
      ],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Walk into any pharmacy and ask — no prescription needed.","barriers_and_workarounds":"If you're uninsured, use a community program instead of paying OTC."}
  },
  { "state":"Arkansas","abbreviation":"AR","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide pharmacy protocol","good_samaritan_overdose_immunity":{"exists":true,"scope":"Callers acting in good faith are protected from prosecution."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Pharmacists can initiate naloxone therapy under the statewide protocol.","medicaid_coverage_notes":"Covered by Arkansas Medicaid.","typical_cost":"OTC around $45–65"},
      "community_programs":[{"name":"CJI Narcansas","services":"Information and advocacy","website":"https://narcansas.com"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Ask at a pharmacy under the statewide protocol, or visit your county health department.","barriers_and_workarounds":"Rural areas may have limited pharmacy coverage — use NEXT Distro for free mail delivery."}
  },
  { "state":"California","abbreviation":"CA","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Pharmacist furnishing protocol","good_samaritan_overdose_immunity":{"exists":true,"scope":"Broad protection for both the caller and the person overdosing."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Pharmacists can furnish naloxone directly under state protocol.","medicaid_coverage_notes":"Medi-Cal covers it with a $0 copay.","typical_cost":"OTC around $45–65"},
      "community_programs":[
        {"name":"DHCS Naloxone Distribution Project","services":"Free bulk naloxone for qualifying organizations","website":"https://californiaopioidresponse.org"},
        {"name":"Santa Barbara Opioid Coalition","services":"Local distribution and training","website":"https://opioidsafetysb.org"}
      ],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Ask a pharmacist to furnish it, or contact your county health department.","barriers_and_workarounds":"Cost is the main issue for uninsured people — use free community programs."}
  },
  { "state":"Colorado","abbreviation":"CO","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects the caller and the person overdosing. Protections apply even when expired naloxone is used."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Any pharmacy can dispense under the standing order.","medicaid_coverage_notes":"Covered with no copay.","typical_cost":"OTC around $45"},
      "community_programs":[
        {"name":"Denver Public Health","services":"Free distribution","website":"https://denvergov.org"},
        {"name":"Harm Reduction Action Center","services":"Syringe access and naloxone","phone":"303-572-7800"}
      ],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Walk into any pharmacy, or visit the Harm Reduction Action Center in Denver.","barriers_and_workarounds":"Rural counties have fewer distribution sites — mail programs fill the gap."}
  },
  { "state":"Connecticut","abbreviation":"CT","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Pharmacist prescribing protocol","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects both the caller and the person overdosing from prosecution."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Certified pharmacists can prescribe naloxone directly.","medicaid_coverage_notes":"Covered by HUSKY Health.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"ACT Programs","services":"Syringe services and naloxone","website":"https://act-ct.org","phone":"860-922-3173"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Ask for a certified pharmacist at a pharmacy, or contact your local health department.","barriers_and_workarounds":"Use the Department of Consumer Protection's map to locate certified pharmacists."}
  },
  { "state":"Delaware","abbreviation":"DE","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Standing order and community access","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects laypeople and public-safety officials who respond in good faith."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Any pharmacy can dispense under the standing order.","medicaid_coverage_notes":"Covered with no copay.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"Delaware Public Health","services":"Free mail-based kits","website":"https://dhss.delaware.gov"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/delaware"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Use the state mail program (free) or walk into a pharmacy.","barriers_and_workarounds":"The mail program requires watching a short online training video first."}
  },
  { "state":"Florida","abbreviation":"FL","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Civil immunity for people who administer naloxone in good faith."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Pharmacists dispense to anyone who asks.","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45–50"},
      "community_programs":[{"name":"iSave FL","services":"Statewide locator tool","website":"https://www.isavefl.com"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/florida"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Use the iSaveFL locator, or walk into any pharmacy.","barriers_and_workarounds":"If you're uninsured, use the state program instead of paying OTC."}
  },
  { "state":"Georgia","abbreviation":"GA","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects the person administering naloxone from liability."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Any pharmacy can dispense.","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45"},
      "community_programs":[
        {"name":"Georgia Overdose Prevention","services":"Free kits by request","website":"https://georgiaoverdoseprevention.org"},
        {"name":"Georgia Harm Reduction Coalition","services":"Community outreach","phone":"404-817-9994"}
      ],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/georgia"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Request a kit from Georgia Overdose Prevention, or ask a pharmacist.","barriers_and_workarounds":"Rural access is limited — mail programs reach everywhere."}
  },
  { "state":"Hawaii","abbreviation":"HI","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Pharmacist prescriptive authority","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects the caller and the person overdosing from drug and paraphernalia charges."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Pharmacists can prescribe directly.","medicaid_coverage_notes":"Covered by QUEST.","typical_cost":"OTC around $45–50"},
      "community_programs":[
        {"name":"Hawaii Health & Harm Reduction Center","services":"Free kits","website":"https://www.hhhrc.org","phone":"808-521-2437"},
        {"name":"Maui AIDS Foundation","services":"Distribution on Maui","phone":"808-242-4900"},
        {"name":"Kumukahi Health + Wellness","services":"Distribution on Hawaiʻi Island","phone":"808-982-8800"}
      ],
      "mail_based_programs":[{"name":"HHHRC / NEXT Distro","cost":"Free","website":"https://nextdistro.org/hawaii"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Contact HHHRC (Oʻahu) or walk into any pharmacy.","barriers_and_workarounds":"Neighbor-island residents should use mail order to avoid travel."}
  },
  { "state":"Idaho","abbreviation":"ID","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Pharmacist prescriptive authority","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects the person administering naloxone, but does NOT protect from simple drug possession."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Pharmacists prescribe directly.","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"Idaho Harm Reduction Project","services":"Free supplies","website":"https://www.idahoharmreductionproject.org"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/idaho"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Order from the Idaho Harm Reduction Project, or ask a pharmacist.","barriers_and_workarounds":"Immunity is weaker here — mail order is often preferred for privacy."}
  },
  { "state":"Illinois","abbreviation":"IL","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Possession immunity applies, with strict limits on the quantity of controlled substances on the caller."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Any pharmacy dispenses under the standing order.","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"Chicago Recovery Alliance","services":"Free naloxone and outreach","website":"https://anypositivechange.org","phone":"312-953-3797"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/illinois"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Ask any pharmacist, or find a Chicago Recovery Alliance outreach van.","barriers_and_workarounds":"Be aware: Good Samaritan immunity has quantity limits."}
  },
  { "state":"Indiana","abbreviation":"IN","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Aaron's Law / standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Immunity from possession charges when naloxone is administered."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Available under Aaron's Law and standing order.","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"OptIN Registry","services":"Statewide provider locator","website":"https://optin.in.gov"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/indiana"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Use optin.in.gov to find a provider, or check for NaloxBoxes.","barriers_and_workarounds":"Rural access is uneven — NaloxBoxes are a good backup."}
  },
  { "state":"Iowa","abbreviation":"IA","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Caller gets a one-time immunity protection."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Any pharmacy dispenses.","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"Iowa Harm Reduction Coalition","services":"Text-based supply","website":"https://www.iowaharmreductioncoalition.org","phone":"319-214-0540"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/iowa"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Text the Iowa Harm Reduction Coalition, or walk into a pharmacy.","barriers_and_workarounds":"The one-time limit on immunity is a real risk — know the law."}
  },
  { "state":"Kansas","abbreviation":"KS","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide pharmacy protocol","good_samaritan_overdose_immunity":{"exists":false,"scope":"Kansas has no specific civilian Good Samaritan drug-overdose law."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Dispensed under statewide protocol.","medicaid_coverage_notes":"Covered ($0–3 copay).","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"DCCCA Naloxone Program","services":"Free kits by mail","website":"https://www.dccca.org/program/kansas-naloxone-program/"}],
      "mail_based_programs":[{"name":"DCCCA","cost":"Free","website":"https://www.dccca.org/naloxone-kit-request-form/"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Request a kit from DCCCA, or ask a pharmacist.","barriers_and_workarounds":"No legal immunity for callers — many people prefer anonymous mail order."}
  },
  { "state":"Kentucky","abbreviation":"KY","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Pharmacy protocol","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects the caller and the person overdosing from possession and use charges."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Any pharmacy dispenses.","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"Find Naloxone Now KY","services":"Statewide locator","website":"https://findnaloxone.ky.gov"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/kentucky"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Use findnaloxone.ky.gov, or ask a pharmacist.","barriers_and_workarounds":"Rural counties have thinner coverage — NEXT Distro mails statewide."}
  },
  { "state":"Louisiana","abbreviation":"LA","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects the caller and the person overdosing from possession charges."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Any pharmacy dispenses.","medicaid_coverage_notes":"Covered with no copay.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"Louisiana Health Hub","services":"Statewide opioid response hub","website":"https://louisianahealthhub.org/oprh/"}],
      "mail_based_programs":[{"name":"NEXT Distro / Trystereo","cost":"Free","website":"https://nextdistro.org/louisiana"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Ask any pharmacist, or order free kits from Trystereo.","barriers_and_workarounds":"Cost is rarely the blocker — Medicaid and free programs are both strong."}
  },
  { "state":"Maine","abbreviation":"ME","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"The broadest in the U.S. — protects callers from all non-violent drug-related crimes."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Standing order.","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"Maine Access Points","services":"Free kits and training","website":"https://www.maineaccesspoints.org/naloxone","phone":"207-319-8284"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/maine"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Contact Maine Access Points, or walk into a pharmacy.","barriers_and_workarounds":"Rural geography is the main barrier — use the Maine Access Points tiered network."}
  },
  { "state":"Maryland","abbreviation":"MD","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects the caller and the person overdosing from possession charges."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Any pharmacy dispenses.","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"Staying Alive (Baltimore)","services":"Free kits","website":"https://health.baltimorecity.gov/naloxone"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/maryland"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Walk into any pharmacy, or order from NEXT Distro.","barriers_and_workarounds":"The urban/rural divide affects in-person access — mail order is a reliable backup."}
  },
  { "state":"Massachusetts","abbreviation":"MA","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects the caller from possession charges and parole violations."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Standing order at every pharmacy.","medicaid_coverage_notes":"MassHealth covers it with a $0 copay.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"Community Naloxone Program","services":"Free distribution","website":"https://www.mass.gov/info-details/community-naloxone-program-cnp","phone":"617-624-5135"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/massachusetts"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Ask a pharmacist (MassHealth covers it) or find a Community Naloxone Program site.","barriers_and_workarounds":"Private-insurance copays can apply — the Community Naloxone Program is free."}
  },
  { "state":"Michigan","abbreviation":"MI","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Limited to personal-use amounts of controlled substances."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Standing order.","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"MDHHS Portal","services":"Free bulk shipping","website":"https://www.michigan.gov/opioids/category-naloxone"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://naloxoneforall.org/michigan"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Ask any pharmacist, or request a kit through MDHHS.","barriers_and_workarounds":"Rural access is uneven — mail programs are the reliable route."}
  },
  { "state":"Minnesota","abbreviation":"MN","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide protocol","good_samaritan_overdose_immunity":{"exists":true,"scope":"Steve's Law: immunity from possession and sharing charges for people seeking help."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Under pharmacy protocol.","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45"},
      "community_programs":[
        {"name":"Harm Reduction Sisters","services":"Free kits in Duluth","website":"https://www.harmreductionsisters.org/"},
        {"name":"Indigenous Peoples Task Force","services":"Culturally specific outreach","phone":"612-870-1723"}
      ],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/minnesota"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Use the state Naloxone Finder, or walk into a pharmacy.","barriers_and_workarounds":"Rural northern Minnesota benefits most from mail order."}
  },
  { "state":"Mississippi","abbreviation":"MS","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Standing order (voluntary pharmacy participation)","good_samaritan_overdose_immunity":{"exists":true,"scope":"Narrow — applies only to very small amounts of drugs."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Standing order — not every pharmacy participates.","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"MS Harm Reduction","services":"Outreach and education","website":"https://msharmreduction.org"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/mississippi"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Order from NEXT Distro, or contact MS Harm Reduction.","barriers_and_workarounds":"Some pharmacies still refuse to stock it — mail order is the reliable path."}
  },
  { "state":"Missouri","abbreviation":"MO","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Immunity from possession and paraphernalia charges."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Any pharmacy dispenses.","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"Missouri Network","services":"Education and access","website":"https://time2actmissouri.com"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/missouri"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Order from NEXT Distro, or walk into a pharmacy.","barriers_and_workarounds":"Rural stigma can discourage in-person access — mail order is discreet."}
  },
  { "state":"Montana","abbreviation":"MT","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects the caller from drug possession charges."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Any pharmacy dispenses.","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"Open Aid Alliance","services":"Harm reduction services","website":"https://www.openaidalliance.org/","phone":"406-543-6691"}],
      "mail_based_programs":[{"name":"Open Aid Alliance / NEXT Distro","cost":"Free","website":"https://www.openaidalliance.org/savealife/"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Order from Open Aid Alliance (mail or in person).","barriers_and_workarounds":"Montana's geography is brutal — mail order is essential."}
  },
  { "state":"Nebraska","abbreviation":"NE","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Evidentiary suppression rule — evidence obtained from the overdose can't be used to prosecute the caller."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Standing order.","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"Stop Overdose Nebraska","services":"Free pharmacy locator","website":"https://stopodne.com/"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/nebraska"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Use the StopODNE pharmacy locator.","barriers_and_workarounds":"Rural awareness is low — the StopODNE map shows every participating pharmacy."}
  },
  { "state":"Nevada","abbreviation":"NV","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Immunity from possession and use charges for the caller and person overdosing."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Standing order.","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"Trac-B Exchange","services":"Harm reduction vending machines","website":"https://www.tracb.org/","phone":"702-840-6693"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/nevada"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Use a Trac-B vending machine (Las Vegas) or ask a pharmacist.","barriers_and_workarounds":"Rural isolation — mail order for anyone outside Las Vegas."}
  },
  { "state":"New Hampshire","abbreviation":"NH","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects the caller from arrest and prosecution for drug possession."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Standing order.","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"The Doorway NH","services":"Regional access hubs","website":"https://www.thedoorway.nh.gov/","phone":"211"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/newhampshire"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Call 2-1-1 or visit a Doorway hub.","barriers_and_workarounds":"Not everyone lives near a hub — mail order is a reliable backup."}
  },
  { "state":"New Jersey","abbreviation":"NJ","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Standing order / Naloxone365","good_samaritan_overdose_immunity":{"exists":true,"scope":"Immunity for drug use and simple possession."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Free through the Naloxone365 program.","medicaid_coverage_notes":"Covered.","typical_cost":"Free (Naloxone365)"},
      "community_programs":[{"name":"NJ Harm Reduction Coalition","services":"Hotline and mail-based supply","website":"https://njharmreduction.org/","phone":"1-877-4NARCAN"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/newjersey"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Use Naloxone365 at any participating pharmacy (free), or call the NJHRC hotline.","barriers_and_workarounds":"Access is among the best in the country — Naloxone365 removes cost entirely."}
  },
  { "state":"New Mexico","abbreviation":"NM","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects the caller and the person overdosing from possession charges."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Standing order.","medicaid_coverage_notes":"Covered with no copay.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"CORE Program","services":"Free virtual training and kits","website":"https://iechodp.umn.edu/projects/echo-new-mexico"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/newmexico"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Ask a pharmacist, or join a CORE virtual session.","barriers_and_workarounds":"Rural New Mexico is huge — CORE ships kits statewide."}
  },
  { "state":"New York","abbreviation":"NY","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects the person helping and the person overdosing from possession charges."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Standing order.","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"OEND Programs","services":"Free kits and training","website":"https://health.ny.gov"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/newyork"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Find a registered OEND program, or ask at any pharmacy.","barriers_and_workarounds":"Cost is rarely the blocker — Medicaid and OEND programs both waive it."}
  },
  { "state":"North Carolina","abbreviation":"NC","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects the caller and the person overdosing from possession charges."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Standing order.","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"NC Harm Reduction Coalition","services":"Free kits","website":"https://www.nchrc.org","phone":"919-523-4303"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/northcarolina"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Contact NCHRC, or ask any pharmacist.","barriers_and_workarounds":"NCHRC has a wide rural reach if in-person pharmacies are far."}
  },
  { "state":"North Dakota","abbreviation":"ND","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Pharmacist prescriptive authority","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects up to three people involved in a single overdose incident."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Pharmacists can prescribe.","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45"},
      "community_programs":[
        {"name":"ND HHS Opioid Response","services":"Free kits by request","website":"https://www.hhs.nd.gov/opioids","phone":"701-328-8920"},
        {"name":"Bismarck-Burleigh Public Health","services":"Free training","phone":"701-355-1540"}
      ],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Call ND HHS for a mailed kit, or ask a pharmacist.","barriers_and_workarounds":"Population is sparse — mail order is the realistic path for most."}
  },
  { "state":"Ohio","abbreviation":"OH","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects the person seeking help, the person helping, and the person overdosing."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Standing order.","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"Project DAWN","services":"Free statewide distribution","website":"https://odh.ohio.gov/wps/portal/gov/odh/know-our-programs/violence-injury-prevention-program/projectdawn/"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Visit a Project DAWN site, or ask any pharmacist.","barriers_and_workarounds":"Project DAWN is one of the most widespread distribution networks in the country."}
  },
  { "state":"Oklahoma","abbreviation":"OK","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Pharmacist prescriptive authority","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects the person helping — NOT the person overdosing."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Pharmacists can prescribe.","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45"},
      "community_programs":[
        {"name":"OK I'm Ready","services":"Free online ordering and vending machines","website":"https://okimready.org/overdose/"},
        {"name":"ODMHSAS Prevention","services":"Statewide prevention services","phone":"405-764-4807"}
      ],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Order from okimready.org or use a vending machine.","barriers_and_workarounds":"The person overdosing isn't legally protected — vending machines offer privacy."}
  },
  { "state":"Oregon","abbreviation":"OR","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Pharmacist prescribing","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects both the caller and the person overdosing."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Pharmacists can prescribe.","medicaid_coverage_notes":"Oregon Health Plan covers it for free.","typical_cost":"OTC around $45"},
      "community_programs":[
        {"name":"Save Lives Oregon","services":"Free supplies","website":"https://www.savelivesoregon.org"},
        {"name":"County health departments","services":"Free distribution","email":"kelsi.junge@multco.us"}
      ],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Ask a pharmacist (OHP covers it) or contact your county health department.","barriers_and_workarounds":"Uninsured cost is the main barrier — county health is the free path."}
  },
  { "state":"Pennsylvania","abbreviation":"PA","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Immunity applies when the caller stays at the scene and cooperates with responders."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Standing order.","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"Prevention Point Pittsburgh","services":"Mail-to-home kits","website":"https://pppgh.org"}],
      "mail_based_programs":[{"name":"NEXT Distro / PPP","cost":"Free","website":"https://nextdistro.org/pennsylvania"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Ask any pharmacist, or use the PA mail-to-home program.","barriers_and_workarounds":"Immunity depends on behavior at the scene — stay and cooperate."}
  },
  { "state":"Rhode Island","abbreviation":"RI","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Collaborative practice agreement","good_samaritan_overdose_immunity":{"exists":true,"scope":"Comprehensive protection for callers and people overdosing."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Collaborative practice — pharmacists dispense.","medicaid_coverage_notes":"Fully covered.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"Prevent Overdose RI","services":"Drop-in centers","website":"https://preventoverdoseri.org","phone":"401-383-4888"}],
      "mail_based_programs":[{"name":"URI Community First Responder","cost":"Free","website":"https://web.uri.edu/pharmacy/community-first-responder-program/"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Ask a pharmacist, or use the URI mail program.","barriers_and_workarounds":"Access here is excellent — few real barriers."}
  },
  { "state":"South Carolina","abbreviation":"SC","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Joint protocol","good_samaritan_overdose_immunity":{"exists":true,"scope":"Only the first caller is protected — subsequent reports at the same scene may not be."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Joint protocol dispensing.","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"DAODAS Community Distributors","services":"Free kits","website":"https://www.daodas.sc.gov/services/prevention/overdose-death-prevention/"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Find a DAODAS community distributor, or ask a pharmacist.","barriers_and_workarounds":"First-caller limit matters — community distribution is advised."}
  },
  { "state":"South Dakota","abbreviation":"SD","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":false,"scope":"South Dakota has no layperson Good Samaritan statute for overdose callers."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Standing order.","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"SD Dept of Health","services":"Free kits to organizations","website":"https://doh.sd.gov"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Order from NEXT Distro, or ask a pharmacist.","barriers_and_workarounds":"No legal immunity for callers — many people prefer anonymous mail order."}
  },
  { "state":"Tennessee","abbreviation":"TN","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Civil immunity for the person administering naloxone; basic training required."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Standing order.","medicaid_coverage_notes":"TennCare covers it.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"TN Save a Life","services":"Training and distribution","website":"https://www.tn.gov/health/"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/tennessee"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Ask a pharmacist, or contact your regional health office.","barriers_and_workarounds":"Rural counties have thinner access — NEXT Distro fills the gap."}
  },
  { "state":"Texas","abbreviation":"TX","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Limited — covers liability for administering naloxone, not broad possession protection."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Standing order.","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"Texas Targeted Opioid Response","services":"Community distribution","website":"https://txopioidresponse.org/"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Ask a pharmacist, or find a TTOR community partner.","barriers_and_workarounds":"Immunity is narrow and uninsured cost is real — use TTOR for free kits."}
  },
  { "state":"Utah","abbreviation":"UT","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Immunity for callers who report overdoses."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Standing order.","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"Stop the Opidemic","services":"Training and ordering","website":"https://opidemic.utah.gov/"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/utah"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Order from Stop the Opidemic, or ask a pharmacist.","barriers_and_workarounds":"Rural counties — mail order is the realistic path."}
  },
  { "state":"Vermont","abbreviation":"VT","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Strong protections for callers and people overdosing."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Standing order.","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"Vermont Dept. of Health","services":"Free distribution","website":"https://www.healthvermont.gov"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/vermont"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Ask a pharmacist, or request a kit from the health department.","barriers_and_workarounds":"Laws are strong and supportive — access is generally smooth."}
  },
  { "state":"Virginia","abbreviation":"VA","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protections were expanded in 2025."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Standing order.","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45"},
      "community_programs":[
        {"name":"Virginia Dept. of Health","services":"Community distribution","website":"https://www.vdh.virginia.gov/naloxone/"},
        {"name":"LENOWISCO Harm Reduction","services":"Southwest VA outreach","phone":"276-298-6657"}
      ],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Ask a pharmacist, or use VDH distribution.","barriers_and_workarounds":"Rural southwest Virginia has dedicated local programs like LENOWISCO."}
  },
  { "state":"Washington","abbreviation":"WA","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects callers from drug possession charges."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Standing order.","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"Stop Overdose WA","services":"Statewide resources","website":"https://stopoverdose.org/"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Use the state mail program, or ask a pharmacist.","barriers_and_workarounds":"The state mail program is robust — use it first."}
  },
  { "state":"West Virginia","abbreviation":"WV","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Immunity may depend on completing follow-up treatment."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Standing order.","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"WV Harm Reduction","services":"Certified programs statewide","website":"https://oeps.wv.gov/harm_reduction/"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/westvirginia"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Find a certified harm reduction program, or ask a pharmacist.","barriers_and_workarounds":"Some pharmacies resist stocking it — community sites are more reliable."}
  },
  { "state":"Wisconsin","abbreviation":"WI","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Broad emergency immunity for callers."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Standing order (pharmacy enrollment required).","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"DHS Standing Order","services":"Pharmacy enrollment directory","website":"https://www.dhs.wisconsin.gov/opioids/"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Use an enrolled participating pharmacy.","barriers_and_workarounds":"Not every pharmacy participates — check the DHS enrolled list."}
  },
  { "state":"Wyoming","abbreviation":"WY","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Pharmacist prescriptive authority","good_samaritan_overdose_immunity":{"exists":true,"scope":"New 2025 immunity law covers callers acting in good faith."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Pharmacists can prescribe.","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"Wyoming Dept. of Health","services":"Overdose response resources","website":"https://health.wyo.gov"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Ask a pharmacist, or order from NEXT Distro.","barriers_and_workarounds":"Rural Wyoming leans on mail order — the 2025 law improves legal safety."}
  }
];
