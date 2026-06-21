// narcan.delivery Spanish translation layer
//
// Two globals, both optional overlays on the English data in data.js:
//
//   window.NALOXONE_ES        per-state Spanish text, keyed by abbreviation.
//                             Every field is optional; anything missing falls
//                             back to the English value at build time. A state
//                             only gets an /es/states/<slug>/ page once it has
//                             an entry here.
//   window.NALOXONE_ES_LABELS the Spanish UI chrome (card titles, pills, etc.).
//
// To add a state: copy a block below, change the abbreviation, and translate.
// Per-state fields (all optional):
//   naloxone_legal_status, gs_scope, pharmacy_mechanism, medicaid_notes,
//   typical_cost, how, barriers,
//   community_services / mail_services  (arrays, matched to the English orgs
//                                        by position; org names stay as-is).
// Keep the plain-voice style: no em dashes, no shouty caps.

window.NALOXONE_ES = {
  "CA": {
    "naloxone_legal_status": "Protocolo de suministro por farmacéuticos",
    "gs_scope": "Protección amplia tanto para quien llama como para la persona con la sobredosis.",
    "pharmacy_mechanism": "Los farmacéuticos pueden entregar naloxona directamente bajo el protocolo estatal.",
    "medicaid_notes": "Medi-Cal la cubre con copago de $0.",
    "typical_cost": "Sin receta, alrededor de $45 a $65",
    "how": "Pídele a un farmacéutico que te la entregue, o comunícate con el departamento de salud de tu condado.",
    "barriers": "El costo es el principal obstáculo para quienes no tienen seguro, así que usa los programas comunitarios gratuitos.",
    "community_services": ["Naloxona gratis al por mayor para organizaciones que califiquen", "Distribución local y capacitación"]
  },
  "AZ": {
    "naloxone_legal_status": "Orden permanente estatal",
    "gs_scope": "Protege a quien llama y a la persona con la sobredosis de cargos por posesión de drogas.",
    "pharmacy_mechanism": "Cualquier farmacia puede entregar naloxona bajo la orden permanente estatal.",
    "medicaid_notes": "AHCCCS (Medicaid de Arizona) la cubre sin copago.",
    "typical_cost": "Sin receta, alrededor de $45 a $65",
    "how": "Entra a cualquier farmacia y pídela. No necesitas receta.",
    "barriers": "Si no tienes seguro, usa un programa comunitario en lugar de pagar sin receta.",
    "community_services": ["Proporciona naloxona gratis a organizaciones comunitarias", "Distribución comunitaria"]
  }
};

window.NALOXONE_ES_LABELS = {
  "lang": "es",
  "interactive": false,
  "changeStateHref": "/es/",
  "changeState": "← Cambiar de estado",
  "naloxoneIn": "Naloxona en",
  "gsYes": "Ley del Buen Samaritano: sí",
  "gsLimited": "Ley del Buen Samaritano: limitada",
  "verified": "Verificado ",
  "needsReview": "Revisión pendiente · ",
  "fastest": "Tu opción más rápida",
  "pharmacy": "En la farmacia",
  "howDispensed": "Cómo se entrega",
  "medicaid": "Medicaid",
  "typicalCost": "Costo típico",
  "notListed": "No disponible",
  "mailTitle": "Gratis por correo",
  "communityTitle": "Programas locales",
  "fallbackTitle": "Si un enlace deja de funcionar",
  "fallbackBody": "Los programas y los sitios web cambian. Estas líneas telefónicas gratuitas funcionan en todo el país y pueden indicarte dónde hay naloxona cerca de ti, sin necesidad de internet.",
  "samhsaName": "Línea Nacional de SAMHSA",
  "samhsaDesc": "Gratis, confidencial, 24/7, en español e inglés. Encuentra naloxona y tratamiento en cualquier estado.",
  "crisisName": "Línea 988 de Prevención del Suicidio y Crisis",
  "crisisDesc": "Llama o envía un mensaje de texto, 24/7.",
  "emergencyName": "Si alguien tiene una sobredosis ahora",
  "emergencyDesc": "Servicios de emergencia.",
  "legalTitle": "Qué cubre realmente la ley del Buen Samaritano",
  "noGs": "No hay protecciones específicas del Buen Samaritano documentadas para este estado.",
  "barriersTitle": "Barreras conocidas y soluciones",
  "neighborsTitle": "¿Cerca de una frontera?",
  "neighborsBody": "El acceso y las leyes cambian al cruzar la línea estatal. Si vives cerca de uno de estos, revísalo también.",
  "sourcesSummary": "Fuentes y cómo se verificó",
  "shareLabel": "Copiar el enlace de este estado",
  "howToUse": "Cómo usarla →",
  "howToUseHref": "/es/#pasos",
  "visitWebsite": "Visitar el sitio ↗",
  "newTab": "(se abre en una pestaña nueva)",
  "jsonLdName": "Cómo conseguir naloxona en",
  "home": "Inicio"
};
