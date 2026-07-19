// narcan.delivery state reference data
// Embedded baseline. Can be overridden at runtime by a published Google Sheet CSV
// (see SHEET_CSV_URL in app.js). Keep this file sorted alphabetically by state name.

window.NALOXONE_DATA = [
  { "state":"Alabama","abbreviation":"AL","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Prescription/Standing Order/OTC","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects the caller (if they use their real name and stay at the scene) from misdemeanor possession charges."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Statewide standing order; any pharmacist can dispense.","medicaid_coverage_notes":"Medicaid covers with a $0-3 copay.","typical_cost":"OTC around $45-65"},
      "community_programs":[
        {"name":"Jefferson County Dept. of Health","services":"Free naloxone kits and fentanyl test strips","website":"https://www.jcdh.org","phone":"205-933-9110"},
        {"name":"Alabama Dept. of Mental Health","services":"Free naloxone mailed after a short online training; statewide coordination","website":"https://mh.alabama.gov/faq/standing-order-for-naloxone/"}
      ],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Fastest: walk into any pharmacy (standing order / OTC), or request free kits from the Jefferson County Health Department.","barriers_and_workarounds":"Rural pharmacy access is limited, and uninsured cost can be a barrier. Use mail programs like NEXT Distro if distance or price is an issue."},
  },
  { "state":"Alaska","abbreviation":"AK","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Pharmacist independent prescribing","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects both the caller and the person overdosing if they are seeking medical help in good faith."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Pharmacists can prescribe naloxone on their own authority.","medicaid_coverage_notes":"Covered by Alaska Medicaid.","typical_cost":"OTC around $45-65"},
      "community_programs":[{"name":"Project HOPE","services":"Free kits through Overdose Response Programs","website":"https://health.alaska.gov/en/services/project-hope-get-naloxone/"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org"},{"name":"iknowmine (ANTHC)","cost":"Free","website":"https://www.iknowmine.org/narcan"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Ask at any pharmacy, or find a Project HOPE partner in your community.","barriers_and_workarounds":"Many remote villages don't have pharmacies. Mail programs and community distributors are the reliable path."}
  },
  { "state":"Arizona","abbreviation":"AZ","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects the caller and the person overdosing from drug possession charges."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Any pharmacy can dispense naloxone under the statewide standing order.","medicaid_coverage_notes":"AHCCCS (Arizona Medicaid) covers it with no copay.","typical_cost":"OTC around $45-65"},
      "community_programs":[
        {"name":"Arizona Dept. of Health Services","services":"Provides free naloxone to community organizations","website":"https://www.azdhs.gov/opioid/"},
        {"name":"Sonoran Prevention Works","services":"Free naloxone by mail to any Arizona resident, plus in-person outreach in 7 counties","website":"https://spwaz.org/get-supplies/","phone":"480-442-7086"}
      ],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/arizona"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Walk into any pharmacy and ask. No prescription needed.","barriers_and_workarounds":"If you're uninsured, use a community program instead of paying OTC."},
  },
  { "state":"Arkansas","abbreviation":"AR","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide pharmacy protocol","good_samaritan_overdose_immunity":{"exists":true,"scope":"Callers acting in good faith are protected from prosecution."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Pharmacists can initiate naloxone therapy under the statewide protocol.","medicaid_coverage_notes":"Covered by Arkansas Medicaid.","typical_cost":"OTC around $45-65"},
      "community_programs":[{"name":"ARORP / ReviveAR (formerly Narcansas)","services":"Naloxone locator + overdose response help via the ReviveAR app","website":"https://www.arorp.org/revivear-app/"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Ask at a pharmacy under the statewide protocol, or visit your county health department.","barriers_and_workarounds":"Rural areas may have limited pharmacy coverage, so use NEXT Distro for free mail delivery."},
  },
  { "state":"California","abbreviation":"CA","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Pharmacist furnishing protocol","good_samaritan_overdose_immunity":{"exists":true,"scope":"Broad protection for both the caller and the person overdosing."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Pharmacists can furnish naloxone directly under state protocol.","medicaid_coverage_notes":"Medi-Cal covers it with a $0 copay.","typical_cost":"OTC around $45-65"},
      "community_programs":[
        {"name":"DHCS Naloxone Distribution Project","services":"Free bulk naloxone for qualifying organizations","website":"https://californiaopioidresponse.org"},
        {"name":"Santa Barbara Opioid Coalition","services":"Local distribution and training","website":"https://opioidsafetysb.org"}
      ],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/california"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Ask a pharmacist to furnish it, or contact your county health department.","barriers_and_workarounds":"Cost is the main issue for uninsured people, so use free community programs."},
  },
  { "state":"Colorado","abbreviation":"CO","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects the caller and the person overdosing. Protections apply even when expired naloxone is used."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Any pharmacy can dispense under the standing order.","medicaid_coverage_notes":"Covered with no copay.","typical_cost":"OTC around $45"},
      "community_programs":[
        {"name":"Denver Dept. of Public Health & Environment","services":"Free naloxone by mail order, at libraries, the Wellness Winnie mobile unit, and syringe access sites","website":"https://denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Public-Health-Environment/Community-Behavioral-Health/Behavioral-Health-Strategies/Overdose-Prevention/Overdose-Prevention-Resources"},
        {"name":"Harm Reduction Action Center","services":"Syringe access and naloxone","website":"https://www.harmreductionactioncenter.org","phone":"303-572-7800"},
        {"name":"Denver Health Naloxone Vending Machines","services":"Free 24/7 vending machine, no ID needed; started at Denver Health's main campus, expanding to more sites","website":"https://www.denverhealth.org","phone":"303-436-4949"}
      ],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/colorado"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Walk into any pharmacy, or visit the Harm Reduction Action Center in Denver.","barriers_and_workarounds":"Rural counties have fewer distribution sites, so mail programs fill the gap."},
  },
  { "state":"Connecticut","abbreviation":"CT","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Pharmacist prescribing protocol","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects both the caller and the person overdosing from prosecution."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Certified pharmacists can prescribe naloxone directly.","medicaid_coverage_notes":"Covered by HUSKY Health.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"ACT Programs","services":"Syringe services and naloxone","website":"https://act-ct.org","phone":"860-922-3173"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/connecticut"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Ask for a certified pharmacist at a pharmacy, or contact your local health department.","barriers_and_workarounds":"Use the Department of Consumer Protection's map to locate certified pharmacists."}
  },
  { "state":"Delaware","abbreviation":"DE","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Standing order and community access","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects laypeople and public-safety officials who respond in good faith."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Any pharmacy can dispense under the standing order.","medicaid_coverage_notes":"Covered with no copay.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"Delaware Division of Public Health (Help Is Here DE)","services":"Naloxone at community training events, Bridge Clinics, and statewide distribution days; free mail order via NEXT Distro partnership.","website":"https://www.helpisherede.com/addiction/harm-reduction/naloxone"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/delaware"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Use the state mail program (free) or walk into a pharmacy.","barriers_and_workarounds":"The mail program requires watching a short online training video first."}
  },
  { "state":"Florida","abbreviation":"FL","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Civil immunity for people who administer naloxone in good faith."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Pharmacists dispense to anyone who asks.","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45-50"},
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
        {"name":"Georgia Overdose Prevention","services":"Free kits by mail, plus a live map of 121+ pickup points statewide with 40+ open 24/7","website":"https://georgiaoverdoseprevention.org"},
        {"name":"Georgia Harm Reduction Coalition","services":"Community outreach","phone":"404-817-9994"}
      ],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/georgia"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Request a kit from Georgia Overdose Prevention, or ask a pharmacist.","barriers_and_workarounds":"Rural access is limited, but mail programs reach everywhere."},
  },
  { "state":"Hawaii","abbreviation":"HI","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Pharmacist prescriptive authority","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects both the caller and the person overdosing from drug possession and paraphernalia charges when help is sought in good faith."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Pharmacists can prescribe and dispense directly; FDA-approved OTC Narcan also sold without any interaction required.","medicaid_coverage_notes":"Covered by Med-QUEST.","typical_cost":"OTC ~$45 (2-dose box); free via HHHRC and vending machines"},
      "community_programs":[
        {"name":"Hawaii Health & Harm Reduction Center","services":"Free kits","website":"https://www.hhhrc.org","phone":"808-521-2437"},
        {"name":"Maui AIDS Foundation","services":"Distribution on Maui","website":"https://mauiaids.org/narcan-overdose-prevention/","phone":"808-242-4900"},
        {"name":"Kumukahi Health + Wellness","services":"Distribution on Hawaiʻi Island","phone":"808-982-8800"},
        {"name":"Hawaiʻi Island Fentanyl Task Force","services":"Vending machines, weekly pop-ups & distribution hubs across Hawaiʻi Island (Hilo, Kohala, Kamuela)","website":"https://www.hiftf.org/naloxone"}
      ],
      "mail_based_programs":[{"name":"HHHRC / NEXT Distro","cost":"Free","website":"https://nextdistro.org/hawaii"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Hawaii Health & Harm Reduction Center (HHHRC) provides free, confidential naloxone on Oahu, Kauai, Maui, and Hawaii Island. Call 808-521-2437 or request it by mail at hhhrc.org/naloxone. About 30 free naloxone vending machines are placed statewide through an HHHRC/DOH partnership. NEXT Distro also mails it: nextdistro.org/hawaii.","barriers_and_workarounds":"Neighbor-island residents face travel barriers; HHHRC mail service and vending machines fill the gap."},
    "sources":["https://www.hhhrc.org/naloxone","https://nextdistro.org/hawaii","https://health.hawaii.gov/harmreduction/for-providers/overdose-prevention-and-naloxone/"]
  },
  { "state":"Idaho","abbreviation":"ID","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Pharmacist prescriptive authority","good_samaritan_overdose_immunity":{"exists":true,"scope":"Narrow. It protects the person administering naloxone from liability, but it does not shield the caller from drug possession charges."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Pharmacists prescribe and dispense directly; OTC Narcan widely sold. Anyone with a Medicaid ID can get naloxone free at a pharmacy without a prescription.","medicaid_coverage_notes":"Idaho Medicaid covers it free at pharmacies, no prescription needed.","typical_cost":"OTC ~$45; free via IHRP mail"},
      "community_programs":[{"name":"Central District Health","services":"Free naloxone via walk-in \"Barney Box\" locations and free mail order (covers Ada, Boise, Elmore, and Valley counties)","website":"https://cdh.idaho.gov/support-programs/drug-overdose-prevention/","phone":"208-327-8639"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/idaho"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Idaho Harm Reduction Project mails free naloxone after a short training video (idahoharmreductionproject.org); NEXT Distro mail at nextdistro.org/idaho; Idaho DHW lists local Drug Overdose Prevention Program pharmacies.","barriers_and_workarounds":"Weak Good Samaritan protection (no possession immunity) makes anonymous mail order the preferred channel for many."},
    "sources":["https://www.idahoharmreductionproject.org/community-naloxone-distribution","https://nextdistro.org/idaho","https://healthandwelfare.idaho.gov/services-programs/behavioral-health/naloxone-information"]
  },
  { "state":"Illinois","abbreviation":"IL","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Immunity from possession charges for caller and victim, but with strict quantity caps (e.g., under ~3g heroin); does not cover larger amounts."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Any pharmacy can dispense under the IDPH statewide standing order; OTC Narcan also available.","medicaid_coverage_notes":"Covered by Illinois Medicaid.","typical_cost":"OTC ~$45; free via DOPP/OEND sites and mail"},
      "community_programs":[{"name":"Chicago Recovery Alliance","services":"Free naloxone and outreach","website":"https://anypositivechange.org","phone":"312-953-3797"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/illinois"},{"name":"Live4Lali","cost":"Free","website":"https://live4lali.org/our-programs/harmreductionoutreach/"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"IDPH naloxone portal (idph.illinois.gov/Naloxone) explains access; IDHS Drug Overdose Prevention Program (DOPP) \"Access Narcan\" supplies free kits through community organizations; Chicago Recovery Alliance outreach (anypositivechange.org); free mail via nextdistro.org/illinois.","barriers_and_workarounds":"Good Samaritan immunity has quantity limits, and availability varies by county, so mail order covers the gaps."},
    "sources":["https://idph.illinois.gov/Naloxone/","https://www.dhs.state.il.us/page.aspx?item=58142","https://nextdistro.org/illinois","https://anypositivechange.org"]
  },
  { "state":"Indiana","abbreviation":"IN","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Aaron's Law / standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Limited. There is immunity from a possession arrest if the person stays, cooperates with responders, and naloxone or EMS is provided. Conditions apply."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Pharmacies dispense under Aaron's Law standing order; OTC Narcan available.","medicaid_coverage_notes":"Covered by Indiana Medicaid.","typical_cost":"OTC ~$45; free via NaloxBoxes and Overdose Lifeline"},
      "community_programs":[{"name":"OptIN Registry","services":"Statewide provider locator","website":"https://optin.in.gov"},{"name":"Overdose Lifeline","services":"Free naloxone via 24/7 public NaloxBoxes, vending machines, and a mail-request form; partners with IDOH to supply local health departments statewide","website":"https://www.overdoselifeline.org/naloxone-indiana-distribution/"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/indiana"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Overdose Lifeline coordinates statewide free distribution including 24/7 public NaloxBoxes (overdoselifeline.org/naloxone-indiana-distribution); optin.in.gov lists registered naloxone providers; IDOH naloxone page lists local health department supplies.","barriers_and_workarounds":"Rural access uneven; NaloxBoxes and vending machines are the 24/7 backup."},
    "sources":["https://www.overdoselifeline.org/naloxone-indiana-distribution/","https://optin.in.gov","https://www.in.gov/health/overdose-prevention/naloxone/"]
  },
  { "state":"Iowa","abbreviation":"IA","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Limited. Immunity for the reporter and the person overdosing covers possession-type offenses only, and it can be used only once. A prior use of the protection disqualifies you."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Statewide standing order; participating pharmacies also dispense free kits through Iowa HHS's community-based pharmacy naloxone program.","medicaid_coverage_notes":"Covered by Iowa Medicaid.","typical_cost":"OTC ~$45; free at participating pharmacies and community orgs"},
      "community_programs":[{"name":"Iowa Harm Reduction Coalition","services":"Text-based supply","website":"https://www.iowaharmreductioncoalition.org","phone":"319-214-0540"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/iowa"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"The state TeleNaloxone mail program ended on Sept 30, 2024. Use the Naloxone Iowa directory (naloxoneiowa.org) to find free kits at participating pharmacies, community organizations, vending machines, and naloxone boxes.","barriers_and_workarounds":"The one-time-only Good Samaritan immunity is risky for repeat responders. There is no longer a state-run mail program, so rely on the directory and community distributors."},
    "sources":["https://www.naloxoneiowa.org/","https://hhs.iowa.gov/health-prevention/addiction-substance-use-disorders/medications-addiction-treatment/naloxone","https://pharmacy.iowa.gov/naloxone-standing-order"]
  },
  { "state":"Kansas","abbreviation":"KS","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Statewide pharmacy protocol","good_samaritan_overdose_immunity":{"exists":true,"scope":"SB 419 (signed May 2024) grants immunity from prosecution for possession/use to the person who calls for help and the person overdosing. Excludes people on parole, probation, or work release."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Pharmacists dispense under statewide protocol; OTC Narcan available.","medicaid_coverage_notes":"Covered ($0-3 copay).","typical_cost":"OTC ~$45; free via DCCCA"},
      "community_programs":[{"name":"DCCCA Naloxone Program","services":"Free kits by mail","website":"https://www.dccca.org/program/kansas-naloxone-program/"}],
      "mail_based_programs":[{"name":"DCCCA","cost":"Free","website":"https://www.dccca.org/naloxone-kit-request-form/"},{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/kansas"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"DCCCA's Kansas Naloxone Program ships free Narcan kits and fentanyl test strips to Kansas residents (dccca.org/naloxone) and stocks free vending machines in eight cities; NEXT Distro mail at nextdistro.org/kansas.","barriers_and_workarounds":"The Good Samaritan law is new (2024) and excludes people under supervision, and awareness is still low. Mail and vending machines remain the low-barrier options."},
    "sources":["https://www.dccca.org/naloxone/","https://nextdistro.org/kansas"]
  },
  { "state":"Kentucky","abbreviation":"KY","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Pharmacy protocol","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects the caller and the person overdosing from possession/paraphernalia charges when the caller stays and cooperates."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Pharmacies dispense without an individual prescription under protocol; OTC available.","medicaid_coverage_notes":"Covered by Kentucky Medicaid.","typical_cost":"OTC ~$45; free at 136+ mapped locations"},
      "community_programs":[{"name":"Find Naloxone Now KY","services":"Statewide locator","website":"https://findnaloxone.ky.gov"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/kentucky"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Findnaloxone.ky.gov is the state's official locator (launched 2024). It maps 136+ locations with free naloxone, searchable by zip or county, and has an order tool for agencies. NEXT Distro mails it too, at nextdistro.org/kentucky.","barriers_and_workarounds":"Rural distribution gaps; the state locator and mail order cover most of them."},
    "sources":["https://findnaloxone.ky.gov","https://nextdistro.org/kentucky"]
  },
  { "state":"Louisiana","abbreviation":"LA","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects the caller and the person overdosing from possession charges when medical help is sought in good faith."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Participating pharmacies dispense to laypeople, caregivers, family, and friends under the standing order.","medicaid_coverage_notes":"Covered by Louisiana Medicaid, no copay.","typical_cost":"OTC ~$45; free via Trystereo / NEXT"},
      "community_programs":[{"name":"Louisiana Health Hub","services":"Statewide opioid response hub","website":"https://louisianahealthhub.org/oprh/"}],
      "mail_based_programs":[{"name":"NEXT Distro / Trystereo","cost":"Free","website":"https://nextdistro.org/louisiana"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Trystereo (New Orleans Harm Reduction Network) gives out free naloxone. Text 504-535-4766 or visit a drop-in (trystereo.org/overdose-prevention). For statewide free mail (IM naloxone or RiVive nasal), use nextdistro.org/louisiana, which Trystereo fulfills.","barriers_and_workarounds":"Coverage strongest in New Orleans; mail order is the reliable statewide path."},
    "sources":["https://trystereo.org/overdose-prevention/","https://nextdistro.org/louisiana","https://ldh.la.gov/assets/opioid/StandingOrder2.pdf"]
  },
  { "state":"Maine","abbreviation":"ME","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Broad. It protects against arrest or prosecution for most non-violent drug offenses, plus bail and probation violations, for both the caller and the victim."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Pharmacies dispense under standing order; OTC available.","medicaid_coverage_notes":"Covered by MaineCare.","typical_cost":"OTC ~$45; free via MNDI tier network"},
      "community_programs":[{"name":"Maine Access Points","services":"Free kits and training","website":"https://www.maineaccesspoints.org/naloxone","phone":"207-319-8284"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/maine"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Maine Access Points: call/text 207-319-8284 or order online for free naloxone and overdose education anywhere in Maine (maineaccesspoints.org/naloxone); getmainenaloxone.org lists all Tier 1 distributors; mail partnership with NEXT covers remote areas.","barriers_and_workarounds":"Rural geography; the tiered distributor network plus mail order reach all counties."},
    "sources":["https://www.maineaccesspoints.org/naloxone","https://getmainenaloxone.org/end-user/","https://nextdistro.org/maine"]
  },
  { "state":"Maryland","abbreviation":"MD","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects the caller and the person overdosing from possession/paraphernalia charges; assisting in good faith also shielded from civil liability."}},
    "access_channels":{
      "pharmacies":{"mechanism":"All Maryland licensed pharmacists can dispense naloxone plus administration supplies to anyone under the statewide standing order.","medicaid_coverage_notes":"Covered by Maryland Medicaid.","typical_cost":"OTC ~$45; free via Overdose Response Programs"},
      "community_programs":[{"name":"Staying Alive (Baltimore)","services":"Free kits","website":"https://www.baltimorecity.gov/health/our-work/staying-alive-drug-overdose-response-program"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/maryland"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"MDH-authorized Overdose Response Programs (local health departments and community orgs) hand out free naloxone plus fentanyl and xylazine test strips. Find one at health.maryland.gov/pha/NALOXONE. Several counties offer home mail delivery, statewide guidance is at stopoverdose.maryland.gov, and NEXT Distro mails it at nextdistro.org/maryland.","barriers_and_workarounds":"Mail delivery availability varies by county, so ask your local ORP."},
    "sources":["https://health.maryland.gov/pha/NALOXONE/Pages/Home.aspx","https://stopoverdose.maryland.gov/naloxone/","https://nextdistro.org/maryland"]
  },
  { "state":"Massachusetts","abbreviation":"MA","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects caller and victim from possession charges and related probation/parole violations."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Every retail pharmacy carries naloxone under the statewide standing order; OTC also available.","medicaid_coverage_notes":"MassHealth covers with $0 copay.","typical_cost":"OTC ~$45; free by mail and via CNP sites"},
      "community_programs":[{"name":"Community Naloxone Program","services":"Free distribution","website":"https://www.mass.gov/info-details/community-naloxone-program-cnp","phone":"617-624-5135"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/massachusetts"},{"name":"You Can","cost":"Free","website":"https://store.youcan.info/"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Mass.gov \"Where to get Naloxone\" hub covers all routes: free mail-order kits for MA residents (DPH-funded), Community Naloxone Program (CNP) sites distributing free kits statewide, and the harm reduction program locator.","barriers_and_workarounds":"Private-insurance copays at pharmacies; CNP sites and the free mail program avoid all cost."},
    "sources":["https://www.mass.gov/info-details/where-to-get-naloxone-in-massachusetts","https://www.mass.gov/info-details/community-naloxone-program-cnp","https://nextdistro.org/massachusetts"]
  },
  { "state":"Michigan","abbreviation":"MI","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Limited to personal-use amounts. It protects the caller and victim from possession charges for quantities consistent with personal use."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Any pharmacy dispenses under the statewide standing order; OTC available.","medicaid_coverage_notes":"Covered by Michigan Medicaid.","typical_cost":"OTC ~$45; free at MDHHS offices and by mail"},
      "community_programs":[{"name":"MDHHS Portal","services":"Free bulk shipping","website":"https://www.michigan.gov/opioids/find-help/naloxone-page"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/michigan"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Free naloxone kits available at local MDHHS offices statewide during business hours. Michigan's Naloxone Direct Portal (michigan.gov/opioids) has shipped 1.7M+ kits to organizations; individuals can get free mail delivery via nextdistro.org/michigan, plus harm reduction agencies and vending machines.","barriers_and_workarounds":"Rural access uneven; MDHHS office pickup (new in 2026) and mail order are the reliable paths."},
    "sources":["https://www.michigan.gov/opioids","https://nextdistro.org/michigan","https://www.michigan.gov/mdhhs/inside-mdhhs/newsroom/2026/03/05/naloxone"]
  },
  { "state":"Minnesota","abbreviation":"MN","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Statewide protocol","good_samaritan_overdose_immunity":{"exists":true,"scope":"Known as Steve's Law. It protects the caller and the person overdosing from prosecution for small-amount possession or sharing when help is sought in good faith."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Pharmacists dispense under protocol; OTC available.","medicaid_coverage_notes":"Covered by Medical Assistance.","typical_cost":"OTC ~$45; free via Naloxone Access Points"},
      "community_programs":[
        {"name":"Harm Reduction Sisters","services":"Free kits in Duluth","website":"https://www.harmreductionsisters.org/"},
        {"name":"Indigenous Peoples Task Force","services":"Culturally specific outreach","phone":"612-870-1723"}
      ],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/minnesota"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Steve Rummler HOPE Network: free kits at Naloxone Access Points statewide (map at steverummlerhopenetwork.org) or free mail delivery anywhere in Minnesota via their request form (952-943-3937); MDH Naloxone Finder lists more sites; NEXT Distro at nextdistro.org/minnesota.","barriers_and_workarounds":"Northern and rural Minnesota is sparse, so the SRHN mail program covers it."},
    "sources":["https://steverummlerhopenetwork.org/what-we-do/naloxone-access-points/","https://www.health.state.mn.us/communities/opioids/basics/naloxone.html","https://nextdistro.org/minnesota"]
  },
  { "state":"Mississippi","abbreviation":"MS","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Standing order (voluntary pharmacy participation)","good_samaritan_overdose_immunity":{"exists":true,"scope":"Narrow. It covers only very small personal-use amounts, and is one of the weaker protections in the country."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Standing order exists but pharmacy participation is voluntary; OTC Narcan available where stocked.","medicaid_coverage_notes":"Covered by Mississippi Medicaid.","typical_cost":"OTC ~$45; free by mail from MSDH"},
      "community_programs":[{"name":"MS Harm Reduction","services":"Outreach, education, and free naloxone distribution","website":"https://msharmreduction.org","phone":"601-613-7017"},{"name":"Stand Up Mississippi","services":"Free naloxone locator via 14 regional mental health centers","website":"https://standupms.org/naloxone/","phone":"601-359-1288"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/mississippi"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"The Mississippi State Department of Health mails free naloxone kits statewide. Complete the online form and short training video at msdh.ms.gov (search for naloxone; over 20,000 kits shipped since Dec 2022; email naloxone@msdh.ms.gov). Other options are MS Harm Reduction (msharmreduction.org), NEXT Distro (nextdistro.org/mississippi), and the resources hub at odfree.org.","barriers_and_workarounds":"Pharmacy refusal/non-stocking is common; the MSDH mail program is the most reliable route."},
    "sources":["https://msdh.ms.gov/page/44,0,382,61.html","https://msharmreduction.org/","https://nextdistro.org/mississippi","https://odfree.org/prevention/"]
  },
  { "state":"Missouri","abbreviation":"MO","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects caller and victim from possession/paraphernalia charges when emergency help is sought in good faith."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Any pharmacy dispenses under the 2026 statewide standing order; OTC available.","medicaid_coverage_notes":"Covered by MO HealthNet.","typical_cost":"OTC ~$45; free via GetMissouriNaloxone"},
      "community_programs":[{"name":"Missouri Network","services":"Harm reduction and statewide naloxone by mail","website":"https://www.monetwork.org","phone":"844-732-3587"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/missouri"},{"name":"Get MO Naloxone","cost":"Free","website":"https://getmissourinaloxone.com/"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Getmissourinaloxone.com is a statewide locator for free pickup and free mail-order naloxone. The MO Network fulfills free mail requests through nextdistro.org/missouri in plain packaging, and the University of Missouri MIMH distributes to organizations.","barriers_and_workarounds":"Stigma can be an issue in rural areas, so discreet mail order is a good option. The standing order was refreshed in 2026, so pharmacy refusals should decline."},
    "sources":["https://getmissourinaloxone.com/","https://nextdistro.org/missouri","https://health.mo.gov/data/opioids/pdf/naloxone-standing-order.pdf"]
  },
  { "state":"Montana","abbreviation":"MT","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects the caller and the person overdosing from possession charges when help is sought in good faith."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Pharmacies dispense under standing order; OTC available.","medicaid_coverage_notes":"Covered by Montana Medicaid.","typical_cost":"OTC ~$45; free via Open Aid Alliance"},
      "community_programs":[{"name":"Open Aid Alliance","services":"Harm reduction services","website":"https://www.openaidalliance.org/","phone":"406-543-6691"}],
      "mail_based_programs":[{"name":"Open Aid Alliance / NEXT Distro","cost":"Free","website":"https://www.openaidalliance.org/savealife/"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Open Aid Alliance (Missoula) is the statewide hub. Order free Narcan at openaidalliance.org/savealife or call 406-543-4770. As the NEXT Distro affiliate (nextdistro.org/montana), they fulfill every Montana free-mail request in plain packaging, with no insurance involved.","barriers_and_workarounds":"Vast distances between services; mail order is essential infrastructure here."},
    "sources":["https://www.openaidalliance.org/savealife/","https://nextdistro.org/montana"]
  },
  { "state":"Nebraska","abbreviation":"NE","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Weak. It is evidentiary protection only (evidence from the call can't be used), not true arrest or prosecution immunity."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Participating pharmacies dispense free Narcan kits, no prescription, through the DHHS/Nebraska Pharmacists Association program (short form at pharmacy; NE residents).","medicaid_coverage_notes":"Covered by Nebraska Medicaid.","typical_cost":"Free at 60+ participating pharmacies; OTC ~$45 elsewhere"},
      "community_programs":[{"name":"Stop Overdose Nebraska","services":"Free pharmacy locator","website":"https://stopodne.com/"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/nebraska"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Stop Overdose Nebraska (stopodne.com): zip-code search of 60+ pharmacies giving free Narcan to Nebraska residents, no prescription needed; Nebraska Pharmacists Association program details at npharm.org/ne-narcanprogram.","barriers_and_workarounds":"Because the Good Samaritan law is weak (evidentiary only), calling 911 carries more legal risk than in neighboring states. Awareness of the free pharmacy program is also low in rural areas."},
    "sources":["https://stopodne.com/","https://www.npharm.org/ne-narcanprogram","https://dhhs.ne.gov/Pages/State-Opioid-Response.aspx"]
  },
  { "state":"Nevada","abbreviation":"NV","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Immunity from arrest/prosecution for small-amount possession/use for caller and victim."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Pharmacies dispense under standing order; OTC available.","medicaid_coverage_notes":"Covered by Nevada Medicaid.","typical_cost":"OTC ~$45; free via vending machines, HOPES, and mail"},
      "community_programs":[{"name":"Trac-B Exchange","services":"Harm reduction vending machines","website":"https://www.tracbexchange.com/","phone":"702-840-6693"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/nevada"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"In Las Vegas, Trac-B/Impact Exchange public-health vending machines dispense free naloxone (southernnevadahealthdistrict.org). In Reno, Northern Nevada HOPES/Change Point offers free walk-in Narcan with no appointment (nnhopes.org). For statewide free mail, use nextdistro.org/nevada, shipped by Trac-B.","barriers_and_workarounds":"For rural counties far from Vegas and Reno services, mail order is the bridge."},
    "sources":["https://nextdistro.org/nevada","https://www.southernnevadahealthdistrict.org/news-release/public-health-vending-machine-to-be-unveiled-at-southern-nevada-health-district/","https://www.nnhopes.org/nnh-blog/changes-atchangepoint/"]
  },
  { "state":"New Hampshire","abbreviation":"NH","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects from arrest/prosecution for possession when help is sought in good faith."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Pharmacies dispense under standing order; OTC available.","medicaid_coverage_notes":"Covered by NH Medicaid.","typical_cost":"OTC ~$45; free via Doorways and SSPs"},
      "community_programs":[{"name":"The Doorway NH","services":"Regional access hubs","website":"https://www.thedoorway.nh.gov/","phone":"211"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/newhampshire"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Call or text 211 any time to reach one of nine Doorway hubs at community hospitals, which all stock free naloxone (thedoorway.nh.gov). Thirteen registered syringe service programs also distribute free kits (directory at nhhrc.org/nhssps), the state is installing about 700 public naloxone sites, and free mail is available via nextdistro.org/newhampshire.","barriers_and_workarounds":"Travel to hubs in the North Country; SSPs and mail order are the backup."},
    "sources":["https://www.thedoorway.nh.gov/","https://www.nhhrc.org/nhssps","https://nextdistro.org/newhampshire"]
  },
  { "state":"New Jersey","abbreviation":"NJ","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Standing order / Naloxone365","good_samaritan_overdose_immunity":{"exists":true,"scope":"Under the Overdose Prevention Act, both the caller and the victim have immunity from arrest or prosecution for use and simple possession."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Naloxone365: anyone 14 or older can get a free 2-dose Narcan kit anonymously at 650+ participating pharmacies, with no name, no prescription, and no reason required, any day of the year.","medicaid_coverage_notes":"Covered, though it rarely matters: Naloxone365 is free without ID or insurance.","typical_cost":"FREE at 650+ pharmacies (Naloxone365)"},
      "community_programs":[{"name":"NJ Harm Reduction Coalition","services":"Hotline and mail-based supply","website":"https://njharmreduction.org/","phone":"1-877-4NARCAN"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/newjersey"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Walk into any participating pharmacy and ask; the locator is at nj.gov/humanservices/stopoverdoses. The NJ Harm Reduction Coalition mails free naloxone statewide (njharmreduction.org), and NEXT Distro is at nextdistro.org/newjersey.","barriers_and_workarounds":"Essentially none. New Jersey has some of the lowest-barrier access anywhere; just check the participating-pharmacy list first."},
    "sources":["https://www.nj.gov/humanservices/stopoverdoses/","https://njharmreduction.org","https://nextdistro.org/newjersey"]
  },
  { "state":"New Mexico","abbreviation":"NM","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects the caller and the person overdosing from possession charges."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Pharmacies dispense under statewide standing order; OTC available.","medicaid_coverage_notes":"Covered, no copay.","typical_cost":"OTC ~$45; free by state mail order"},
      "community_programs":[{"name":"CORE Program","services":"Free virtual training and kits","website":"https://projectecho.unm.edu/new-mexico-opioid-use-disorder-continuing-education/","phone":"505-925-1116"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/newmexico"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"The NMDOH Harm Reduction Program ships free naloxone to any New Mexico residence or P.O. Box. Order at nmharmreduction.org/naloxone-saves (launched Sept 2023; help line 505-270-5943). It is also free without a prescription at every public health office, and NEXT Distro is at nextdistro.org/newmexico.","barriers_and_workarounds":"For rural and pueblo access, the state mail program ships statewide and is the intended answer."},
    "sources":["https://www.nmharmreduction.org/naloxone-saves/","https://www.nmhealth.org/about/phd/idb/hrp/","https://nextdistro.org/newmexico"]
  },
  { "state":"New York","abbreviation":"NY","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects the caller and the person overdosing from possession charges (does not cover sale offenses or outstanding warrants)."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Standing order at virtually all chain and most independent pharmacies; N-CAP covers up to $40 of copay for insured New Yorkers.","medicaid_coverage_notes":"Covered by NYS Medicaid, $0.","typical_cost":"OTC ~$45; free via OEND programs and NYC mail"},
      "community_programs":[{"name":"OEND Programs","services":"Free kits and training","website":"https://www.nyoverdose.org/"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/newyork"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"NYC: free naloxone kits by mail at nyc.gov/naloxone (2026 \"Just in Case\" campaign, fulfilled with NEXT Distro) plus free kits at pharmacies, health dept events, and community orgs; rest of NYS: registered OOPP directory at health.ny.gov (overdose@health.ny.gov) and free rural mail via nextdistro.org/newyork.","barriers_and_workarounds":"NYC mail takes three to four weeks, so use a community access point if you need it now."},
    "sources":["https://www.nyc.gov/site/doh/health/health-topics/naloxone.page","https://www.health.ny.gov/diseases/aids/general/opioid_overdose_prevention/","https://nextdistro.org/newyork"]
  },
  { "state":"North Carolina","abbreviation":"NC","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects the caller and the person overdosing from possession charges for small amounts; civil immunity for administering naloxone."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Most retail pharmacies dispense without a prescription under the statewide standing order; covered by most insurance.","medicaid_coverage_notes":"Covered by NC Medicaid.","typical_cost":"OTC ~$45; free via NCHRC and SSPs"},
      "community_programs":[{"name":"NC Harm Reduction Coalition","services":"Free kits","website":"https://www.nchrc.org","phone":"336-543-8050"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/northcarolina"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Naloxonesaves-nc.org is the statewide access hub (pharmacies, health departments, syringe service programs); NC Harm Reduction Coalition distributes free kits (224,000+ distributed, nchrc.org); free IM naloxone mailed statewide via nextdistro.org/ncgate; NCDHHS syringe/naloxone access page lists SSPs.","barriers_and_workarounds":"Rural east/west gaps; NCHRC network and mail order cover them."},
    "sources":["https://naloxonesaves-nc.org/","https://www.nchrc.org","https://nextdistro.org/ncgate","https://www.ncdhhs.gov/about/department-initiatives/overdose-epidemic/syringe-and-naloxone-access"]
  },
  { "state":"North Dakota","abbreviation":"ND","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Pharmacist prescriptive authority","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects up to three people per overdose incident from possession charges if they remain and cooperate."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Pharmacists dispense without prescription; HHS standing order covers Medicaid members at no cost.","medicaid_coverage_notes":"A standing order makes naloxone $0 for ND Medicaid members at enrolled pharmacies.","typical_cost":"OTC ~$45; free kits from ND HHS"},
      "community_programs":[
        {"name":"ND HHS Opioid Response","services":"Free kits by request","website":"https://www.hhs.nd.gov/opioids","phone":"701-328-8920"},
        {"name":"Bismarck-Burleigh Public Health","services":"Free training","phone":"701-355-1540"}
      ],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/northdakota"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Order a free two-dose kit from ND HHS at hhs.nd.gov/opioids or call 701-328-8920. Free mail-based naloxone is also available through a NEXT Distro and Grand Forks Public Health partnership (nextdistro.org/northdakota); it requires a training video and quiz, and ships in a plain mailer.","barriers_and_workarounds":"Extremely sparse population; both state and NEXT mail programs ship anywhere in ND."},
    "sources":["https://www.hhs.nd.gov/opioids","https://nextdistro.org/northdakota"]
  },
  { "state":"Ohio","abbreviation":"OH","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects seeker, helper, and victim from minor possession charges; limited to two uses and requires a treatment referral."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Pharmacies dispense under standing order; OTC available.","medicaid_coverage_notes":"Covered by Ohio Medicaid.","typical_cost":"OTC ~$45; free via Project DAWN and HRO mail"},
      "community_programs":[{"name":"Project DAWN","services":"Free statewide distribution","website":"https://odh.ohio.gov/know-our-programs/project-dawn/"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/ohio"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Project DAWN runs 310+ free distribution programs across 73 of 88 counties (locator and dashboard at odh.ohio.gov). Harm Reduction Ohio mails free Narcan and test strips to all 88 counties; order at harmreductionohio.org. NEXT Distro is at nextdistro.org/ohio.","barriers_and_workarounds":"The 15 counties without Project DAWN sites are fully covered by Harm Reduction Ohio's mail program."},
    "sources":["https://odh.ohio.gov/know-our-programs/project-dawn/","https://www.harmreductionohio.org/order-naloxone-free-from-harm-reduction-ohio/","https://nextdistro.org/ohio"]
  },
  { "state":"Oklahoma","abbreviation":"OK","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Pharmacist prescriptive authority","good_samaritan_overdose_immunity":{"exists":true,"scope":"It protects the person who seeks help, but the person overdosing is not covered. This is one of the narrower laws."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Pharmacists dispense without prescription; OTC available.","medicaid_coverage_notes":"Covered by SoonerCare.","typical_cost":"OTC ~$45; free by mail from OK I'M READY"},
      "community_programs":[
        {"name":"OK I'm Ready","services":"Free mail-order naloxone and test strips, plus a locator map","website":"https://okimready.org/overdose/"},
        {"name":"ODMHSAS Prevention","services":"Statewide prevention services"}
      ],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/oklahoma"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"The state's 25 naloxone vending machines were removed at the end of 2024. The replacement is the OK I'M READY mail program (ODMHSAS): order free Narcan and fentanyl test strips shipped to your home at okimready.org. NEXT Distro also mails it free at nextdistro.org/oklahoma, and OSDH naloxone info is at oklahoma.gov.","barriers_and_workarounds":"The victim has no Good Samaritan protection, so plan accordingly. The vending machines are gone, so mail order is now the main free channel."},
    "sources":["https://okimready.org/","https://nextdistro.org/oklahoma","https://oklahoma.gov/health/health-education/injury-prevention-service/drug-overdose/opioid-overdose/naloxone.html"]
  },
  { "state":"Oregon","abbreviation":"OR","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Pharmacist prescribing","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects the caller and the person overdosing from possession/paraphernalia charges and certain probation violations."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Pharmacists prescribe/dispense under OHA standing order or OBOP protocol; OTC available.","medicaid_coverage_notes":"Oregon Health Plan covers at $0.","typical_cost":"OTC ~$45; free via SSPs and clearinghouse partners"},
      "community_programs":[
        {"name":"Save Lives Oregon","services":"Free supplies","website":"https://www.savelivesoregon.org"},
        {"name":"County health departments","services":"Free distribution","website":"https://multco.us/info/overdose-prevention"}
      ],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/oregon"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"The Save Lives Oregon Harm Reduction Clearinghouse supplies free naloxone to community orgs statewide; find a partner near you at savelivesoregon.org. Syringe service programs give free kits and fentanyl test strips to people who use drugs, the OHA overdose-reversal page lists every route, and county health departments distribute it, some with zero-barrier pickup stations.","barriers_and_workarounds":"Cost if uninsured at retail; clearinghouse partners and county health departments are free."},
    "sources":["https://www.savelivesoregon.org/","https://www.oregon.gov/oha/ph/preventionwellness/substanceuse/opioids/pages/reverseoverdose.aspx"]
  },
  { "state":"Pennsylvania","abbreviation":"PA","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Immunity applies when the caller stays at the scene and cooperates with responders."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Standing order.","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"Prevention Point Pittsburgh","services":"Mail-to-home kits","website":"https://pppgh.org"}],
      "mail_based_programs":[{"name":"NEXT Distro / PPP","cost":"Free","website":"https://nextdistro.org/pennsylvania"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Ask any pharmacist, or use the PA mail-to-home program.","barriers_and_workarounds":"Immunity depends on how you act at the scene: stay and cooperate."},
  },
  { "state":"Rhode Island","abbreviation":"RI","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Collaborative practice agreement","good_samaritan_overdose_immunity":{"exists":true,"scope":"Comprehensive. It protects the caller and victim from possession and paraphernalia charges as well as probation and parole violations."}},
    "access_channels":{
      "pharmacies":{"mechanism":"All major pharmacies dispense without prescription under collaborative practice; OTC available.","medicaid_coverage_notes":"Fully covered, $0.","typical_cost":"OTC ~$45; free by state mail order"},
      "community_programs":[{"name":"Prevent Overdose RI","services":"Drop-in centers","website":"https://preventoverdoseri.org","phone":"401-383-4888"}],
      "mail_based_programs":[{"name":"URI Community First Responder","cost":"Free","website":"https://web.uri.edu/pharmacy/community-first-responder-program/"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Preventoverdoseri.org/get-naloxone mails a free kit to any Rhode Island address after a short online training. PONI (poniri.org) and other harm reduction orgs distribute it free statewide with weekday delivery, and NEXT Distro is at nextdistro.org/rhodeisland.","barriers_and_workarounds":"Excellent-access state; mail is RI-residents-only."},
    "sources":["https://preventoverdoseri.org/get-naloxone/","https://poniri.org/","https://nextdistro.org/rhodeisland"]
  },
  { "state":"South Carolina","abbreviation":"SC","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Joint protocol","good_samaritan_overdose_immunity":{"exists":true,"scope":"Limited. It protects only the first caller from possession charges; others on the scene are not covered."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Pharmacies dispense without prescription under the joint protocol; OTC available.","medicaid_coverage_notes":"Covered by Healthy Connections Medicaid.","typical_cost":"OTC ~$45; free at DPH clinics and community distributors"},
      "community_programs":[{"name":"DAODAS Community Distributors","services":"Free kits","website":"https://www.daodas.sc.gov/services/prevention/overdose-death-prevention/"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/southcarolina"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Free opioid overdose safety kits (naloxone plus fentanyl and xylazine test strips) are available at every SC DPH health clinic. DPH-designated Community Distributors operate across the state (list at dph.sc.gov, or call the Care Line at 1-855-472-3432), naloxonesavessc.org lists distributors, and free mail is available via nextdistro.org/southcarolina.","barriers_and_workarounds":"First-caller-only immunity is a real risk in groups; community distributors recommended over pharmacy purchase."},
    "sources":["https://dph.sc.gov/diseases-conditions/substance-use-prevention-resources/naloxone-community-distributors","http://naloxonesavessc.org/community-distrubutors/","https://nextdistro.org/southcarolina","https://www.daodas.sc.gov/services/prevention/overdose-death-prevention/"]
  },
  { "state":"South Dakota","abbreviation":"SD","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"South Dakota does have immunity (SDCL 34-20A-111). It protects the caller, and self-reporters, from possession and use charges if they stay and cooperate, but it applies only once per person, ever."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Pharmacies dispense under standing order; OTC available.","medicaid_coverage_notes":"Covered by South Dakota Medicaid.","typical_cost":"OTC ~$45; free via mail"},
      "community_programs":[{"name":"SD Dept of Health","services":"Free kits to organizations","website":"https://doh.sd.gov/healthcare-professionals/ems-trauma-program/sd-naloxone-project/"},{"name":"Emily's Hope PORT","services":"Free naloxone + test strips and peer support for overdose survivors (8 eastern SD counties)","website":"https://emilyshope.charity/our-impact/port/","phone":"605-215-0654"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/southdakota"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"NEXT Distro mails free naloxone statewide (nextdistro.org); SD DOH's Naloxone Project equips first responders (doh.sd.gov); Helpline Center (helplinecenter.org, dial 211) explains the Good Samaritan law and connects to local free kits; Emily's Hope PORT follows up after overdoses.","barriers_and_workarounds":"With one-time-only immunity and thin distribution infrastructure, mail order is the dependable route."},
    "sources":["https://nextdistro.org/naloxone","https://doh.sd.gov/healthcare-professionals/ems-trauma-program/sd-naloxone-project/","https://www.helplinecenter.org/good-samaritan-law-for-overdose-safety/"]
  },
  { "state":"Tennessee","abbreviation":"TN","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects the caller and the person overdosing from simple possession/casual exchange charges; civil immunity for administering naloxone."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Pharmacies dispense under standing order; OTC available.","medicaid_coverage_notes":"TennCare covers.","typical_cost":"OTC ~$45; free via ROPS in all 95 counties"},
      "community_programs":[{"name":"TN Save a Life","services":"Training and distribution","website":"https://www.tn.gov/health/"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/tennessee"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Regional Overdose Prevention Specialists (ROPS) are 20 specialists covering all 95 counties who give free naloxone and training (find yours on the tn.gov ROPS page; over 1 million units distributed, 114,000+ documented saves). There is a 15-minute online training with a certificate. Call the TN REDLINE at 800-889-9789 for referrals, use nextdistro.org/tennessee for free mail, or see the how-to guide at tennesseeharmreduction.com.","barriers_and_workarounds":"Rural east TN distances; ROPS will come to you for group trainings, and mail order covers individuals."},
    "sources":["https://www.tn.gov/behavioral-health/substance-abuse-services/prevention/rops.html","https://nextdistro.org/tennessee","https://tennesseeharmreduction.com/how-do-i-get-free-narcan-in-tennessee/"]
  },
  { "state":"Texas","abbreviation":"TX","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Limited. It is a defense to prosecution (not arrest immunity) for small-amount possession, for the first person who calls, stays, and cooperates, and it cannot be reused within 18 months. Administering naloxone carries civil immunity."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Pharmacies dispense under the statewide standing order; OTC available.","medicaid_coverage_notes":"Covered by Texas Medicaid.","typical_cost":"OTC ~$45; free by mail from Naloxone Texas"},
      "community_programs":[{"name":"Texas Targeted Opioid Response","services":"Community distribution","website":"https://txopioidresponse.org/"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"More Narcan Please was shut down in Feb 2026. Free naloxone now comes from Naloxone Texas, run by Be Well Texas and UT Health San Antonio: free mail-order to any Texas address, plus 10 regional pickup and training hubs, at naloxonetexas.com. NEXT Distro also mails it free at nextdistro.org/texas.","barriers_and_workarounds":"Good Samaritan protection is weak (a defense, not immunity), and demand sometimes outstrips state supply, so order before you need it."},
    "sources":["https://naloxonetexas.com/","https://nextdistro.org/texas","https://bewelltexas.org"]
  },
  { "state":"Utah","abbreviation":"UT","last_updated":"2026-04-17",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Immunity for callers who report overdoses."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Standing order.","medicaid_coverage_notes":"Covered.","typical_cost":"OTC around $45"},
      "community_programs":[{"name":"Stop the Opidemic","services":"Training and ordering","website":"https://opidemic.utah.gov/"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/utah"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"Order from Stop the Opidemic, or ask a pharmacist.","barriers_and_workarounds":"In rural counties, mail order is the realistic path."},
  },
  { "state":"Vermont","abbreviation":"VT","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Strong. It protects the caller and victim from possession charges and related violations when help is sought in good faith."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Pharmacies dispense under standing order; OTC available.","medicaid_coverage_notes":"Covered by Vermont Medicaid.","typical_cost":"OTC ~$45; free by state mail order"},
      "community_programs":[{"name":"Vermont Dept. of Health","services":"Free distribution","website":"https://www.healthvermont.gov"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/vermont"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"The Vermont Health Department mails free Narcan kits (including fentanyl test strips and instructions) to your home; order through the healthvermont.gov opioid overdose prevention page. Free kits are also at district health offices and every syringe services program, and you can dial 211 or VT Helplink for connections.","barriers_and_workarounds":"Small state with strong systems; main gap is awareness, not access."},
    "sources":["https://www.healthvermont.gov/emergency/injury-prevention/opioid-overdose-prevention","https://humanservices.vermont.gov/our-work/programs-services/mental-health-substance-use-services"]
  },
  { "state":"Virginia","abbreviation":"VA","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"HB 2117 (effective July 1, 2025): anyone who in good faith seeks emergency help for an overdose (or renders aid incl. CPR/naloxone while another seeks help) cannot be arrested or prosecuted for personal-use possession; does not cover distribution quantities, felon-in-possession, or outstanding warrants."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Any pharmacy dispenses under the statewide standing order; OTC available.","medicaid_coverage_notes":"Covered by Virginia Medicaid (Cardinal Care).","typical_cost":"OTC ~$45; free via REVIVE! and health departments"},
      "community_programs":[
        {"name":"Virginia Dept. of Health","services":"Community distribution","website":"https://www.vdh.virginia.gov/naloxone/"},
        {"name":"LENOWISCO Harm Reduction","services":"Southwest VA outreach","phone":"276-298-6657"}
      ],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"REVIVE! is Virginia's official OONE program: free training and naloxone through local health departments and Community Services Boards (dbhds.virginia.gov REVIVE page; about 400,000 doses distributed). Free mail is available via nextdistro.org/virginia, and VDH local health districts stock free kits.","barriers_and_workarounds":"For rural access in southwest Virginia, CSBs and mail order cover it. The 2025 law expansion removes most fear-of-arrest barriers."},
    "sources":["https://dbhds.virginia.gov/behavioral-health/substance-abuse-services/revive/","https://nextdistro.org/virginia","https://law.lis.virginia.gov/vacode/title18.2/chapter7/section18.2-251.03/"]
  },
  { "state":"Washington","abbreviation":"WA","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Protects caller and victim from drug possession charges when help is sought in good faith."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Any pharmacy dispenses under the statewide standing order; OTC available.","medicaid_coverage_notes":"Covered by Apple Health, $0.","typical_cost":"OTC ~$45; free by state mail order"},
      "community_programs":[{"name":"Stop Overdose WA","services":"Statewide resources","website":"https://stopoverdose.org/"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"The WA DOH free naloxone mail program delivers to your home when you order online, or you can pick it up at a pharmacy without a prescription; start at the DOH Naloxone Finder (doh.wa.gov or stopoverdose.org). The OEND program supplies community orgs, and county programs such as King County's distribute it free.","barriers_and_workarounds":"The state mail program is robust and designed for people far from services; just allow time for shipping."},
    "sources":["https://doh.wa.gov/you-and-your-family/drug-user-health/overdose-education-naloxone-distribution","https://stopoverdose.org/find-naloxone-near-me-washington-state/","https://stopoverdose.org"]
  },
  { "state":"West Virginia","abbreviation":"WV","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Immunity for the person seeking help, conditioned on remaining at the scene and cooperating with responders."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Major chains (CVS, Kroger, Fruth, Rite Aid) all registered to dispense without prescription under the standing order.","medicaid_coverage_notes":"Covered by WV Medicaid.","typical_cost":"OTC ~$45; free via harm reduction orgs, mail, and Save a Life Day"},
      "community_programs":[{"name":"WV Harm Reduction","services":"Certified programs statewide","website":"https://oeps.wv.gov/harm_reduction/"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org/westvirginia"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"SOAR WV's find-free-naloxone page (soarwv.org) maps free sources statewide; free mail-order for at-risk people via nextdistro.org/westvirginia; ODCP + University of Charleston supply free kits to community orgs; annual June \"Free Naloxone Distribution Day\" and September Appalachian Save a Life Day (29,000+ doses in 2023); helpandhopewv.org/naloxone.html lists all options.","barriers_and_workarounds":"There are documented pharmacy-level stocking gaps, so community and harm-reduction channels are more reliable than retail."},
    "sources":["https://soarwv.org/resources/naloxone-narcan/","https://nextdistro.org/westvirginia","https://helpandhopewv.org/naloxone.html"]
  },
  { "state":"Wisconsin","abbreviation":"WI","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Statewide standing order","good_samaritan_overdose_immunity":{"exists":true,"scope":"Broad emergency immunity. The aider or caller is protected from possession charges when seeking help in good faith."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Participating pharmacies dispense under the standing order; OTC available.","medicaid_coverage_notes":"Covered by BadgerCare.","typical_cost":"OTC ~$45; free at NARCAN Direct sites and Nalox-ZONE boxes"},
      "community_programs":[{"name":"DHS Standing Order","services":"Pharmacy enrollment directory","website":"https://www.dhs.wisconsin.gov/opioids/"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"NARCAN Direct Program supplies free naloxone through county health departments, human services, tribal clinics, SSPs, and recovery orgs (28,000+ kits/quarter; map of free-pickup locations at dhs.wisconsin.gov/aoda/naloxone.htm); Nalox-ZONE boxes provide 24/7 free access in public locations (wisconsinvoicesforrecovery.org/naloxzone).","barriers_and_workarounds":"Check the enrolled-agency map. Direct-to-individual mail isn't the state model here, but Nalox-ZONE boxes are available 24/7."},
    "sources":["https://www.dhs.wisconsin.gov/aoda/naloxone.htm","https://wisconsinvoicesforrecovery.org/naloxzone/","https://www.dhs.wisconsin.gov/contracts/narcanr-direct-program.htm"]
  },
  { "state":"Wyoming","abbreviation":"WY","last_updated":"2026-06-10",
    "legal_framework":{"naloxone_legal_status":"Pharmacist prescriptive authority","good_samaritan_overdose_immunity":{"exists":true,"scope":"Under SF0074 (2025), Wyoming became the last state to adopt overdose Good Samaritan immunity. Good-faith callers who describe the location and stay until responders arrive are protected, for up to two incidents per 12 months; the second requires agreeing to a treatment program."}},
    "access_channels":{
      "pharmacies":{"mechanism":"Pharmacists prescribe/dispense directly; OTC available.","medicaid_coverage_notes":"Covered by Wyoming Medicaid.","typical_cost":"OTC ~$45; free at 30 mapped sites"},
      "community_programs":[{"name":"Wyoming Dept. of Health","services":"Overdose response resources","website":"https://health.wyo.gov"}],
      "mail_based_programs":[{"name":"NEXT Distro","cost":"Free","website":"https://nextdistro.org"}]
    },
    "practical_guidance":{"how_to_get_naloxone_quickly":"WDH launched the Community Naloxone Resource Map, with free Narcan at 30 sites across 22 of 23 counties. Businesses and organizations can also get free state-supplied Narcan to distribute (health.wyo.gov opioid overdose response page), and free mail is available via NEXT Distro (nextdistro.org).","barriers_and_workarounds":"The Good Samaritan law is brand new (2025), so public awareness is minimal. One county still lacks a mapped site, so mail order remains relevant."},
    "sources":["https://health.wyo.gov/publichealth/prevention/substanceabuseandsuicide/opioid-information-wyoming/opioid-overdose-response/","https://nextdistro.org/naloxone"]
  }
];

// Land-bordering states, by abbreviation. Used for "near a border?" navigation
// so people close to a state line can compare access on both sides. Alaska and
// Hawaii have no land neighbors. Kept symmetric.
window.NALOXONE_ADJACENCY = {
  "AL":["FL","GA","MS","TN"],
  "AK":[],
  "AZ":["CA","CO","NM","NV","UT"],
  "AR":["LA","MO","MS","OK","TN","TX"],
  "CA":["AZ","NV","OR"],
  "CO":["AZ","KS","NE","NM","OK","UT","WY"],
  "CT":["MA","NY","RI"],
  "DE":["MD","NJ","PA"],
  "FL":["AL","GA"],
  "GA":["AL","FL","NC","SC","TN"],
  "HI":[],
  "ID":["MT","NV","OR","UT","WA","WY"],
  "IL":["IN","IA","KY","MO","WI"],
  "IN":["IL","KY","MI","OH"],
  "IA":["IL","MN","MO","NE","SD","WI"],
  "KS":["CO","MO","NE","OK"],
  "KY":["IL","IN","MO","OH","TN","VA","WV"],
  "LA":["AR","MS","TX"],
  "ME":["NH"],
  "MD":["DE","PA","VA","WV"],
  "MA":["CT","NH","NY","RI","VT"],
  "MI":["IN","OH","WI"],
  "MN":["IA","ND","SD","WI"],
  "MS":["AL","AR","LA","TN"],
  "MO":["AR","IA","IL","KS","KY","NE","OK","TN"],
  "MT":["ID","ND","SD","WY"],
  "NE":["CO","IA","KS","MO","SD","WY"],
  "NV":["AZ","CA","ID","OR","UT"],
  "NH":["MA","ME","VT"],
  "NJ":["DE","NY","PA"],
  "NM":["AZ","CO","OK","TX","UT"],
  "NY":["CT","MA","NJ","PA","VT"],
  "NC":["GA","SC","TN","VA"],
  "ND":["MN","MT","SD"],
  "OH":["IN","KY","MI","PA","WV"],
  "OK":["AR","CO","KS","MO","NM","TX"],
  "OR":["CA","ID","NV","WA"],
  "PA":["DE","MD","NJ","NY","OH","WV"],
  "RI":["CT","MA"],
  "SC":["GA","NC"],
  "SD":["IA","MN","MT","ND","NE","WY"],
  "TN":["AL","AR","GA","KY","MO","MS","NC","VA"],
  "TX":["AR","LA","NM","OK"],
  "UT":["AZ","CO","ID","NM","NV","WY"],
  "VT":["MA","NH","NY"],
  "VA":["KY","MD","NC","TN","WV"],
  "WA":["ID","OR"],
  "WV":["KY","MD","OH","PA","VA"],
  "WI":["IA","IL","MI","MN"],
  "WY":["CO","ID","MT","NE","SD","UT"]
};
