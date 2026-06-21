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
  },
  "TX": {
    "naloxone_legal_status": "Orden permanente estatal",
    "gs_scope": "Limitada. Es una defensa ante el enjuiciamiento (no inmunidad ante el arresto) por posesión de pequeñas cantidades, para la primera persona que llama, se queda y coopera, y no puede usarse de nuevo dentro de 18 meses. Administrar naloxona conlleva inmunidad civil.",
    "pharmacy_mechanism": "Las farmacias la entregan bajo la orden permanente estatal; disponible sin receta.",
    "medicaid_notes": "Cubierta por Medicaid de Texas.",
    "typical_cost": "Sin receta ~$45; gratis por correo a través de Naloxone Texas",
    "how": "More Narcan Please cerró en febrero de 2026. La naloxona gratuita ahora proviene de Naloxone Texas, administrado por Be Well Texas y UT Health San Antonio: pedidos gratis por correo a cualquier dirección de Texas, más 10 centros regionales de recogida y capacitación, en naloxonetexas.com. NEXT Distro también la envía gratis en nextdistro.org/texas.",
    "barriers": "La protección del Buen Samaritano es débil (una defensa, no inmunidad), y la demanda a veces supera el suministro estatal, así que pídela antes de necesitarla.",
    "community_services": ["Distribución comunitaria"]
  },
  "FL": {
    "naloxone_legal_status": "Orden permanente estatal",
    "gs_scope": "Inmunidad civil para quienes administran naloxona de buena fe.",
    "pharmacy_mechanism": "Los farmacéuticos la entregan a cualquiera que la pida.",
    "medicaid_notes": "Cubierta.",
    "typical_cost": "Sin receta, alrededor de $45 a $50",
    "how": "Usa el localizador iSaveFL, o entra a cualquier farmacia.",
    "barriers": "Si no tienes seguro, usa el programa estatal en lugar de pagar sin receta.",
    "community_services": ["Herramienta de localización estatal"]
  },
  "NY": {
    "naloxone_legal_status": "Orden permanente estatal",
    "gs_scope": "Protege a quien llama y a la persona con la sobredosis de cargos por posesión (no cubre delitos de venta ni órdenes de arresto pendientes).",
    "pharmacy_mechanism": "Orden permanente en casi todas las farmacias de cadena y la mayoría de las independientes; N-CAP cubre hasta $40 del copago para neoyorquinos con seguro.",
    "medicaid_notes": "Cubierta por Medicaid de NY, $0.",
    "typical_cost": "Sin receta ~$45; gratis mediante programas OEND y correo en NYC",
    "how": "En NYC: kits de naloxona gratis por correo en nyc.gov/naloxone (campaña \"Just in Case\" de 2026, gestionada con NEXT Distro), además de kits gratis en farmacias, eventos del departamento de salud y organizaciones comunitarias; en el resto del estado: directorio de programas OOPP registrados en health.ny.gov (overdose@health.ny.gov) y correo gratuito para zonas rurales en nextdistro.org/newyork.",
    "barriers": "El correo en NYC tarda de tres a cuatro semanas, así que usa un punto de acceso comunitario si la necesitas ahora.",
    "community_services": ["Kits y capacitación gratis"]
  },
  "NM": {
    "naloxone_legal_status": "Orden permanente estatal",
    "gs_scope": "Protege a quien llama y a la persona con la sobredosis de cargos por posesión.",
    "pharmacy_mechanism": "Las farmacias la entregan bajo la orden permanente estatal; disponible sin receta.",
    "medicaid_notes": "Cubierta, sin copago.",
    "typical_cost": "Sin receta ~$45; gratis por correo del programa estatal",
    "how": "El Programa de Reducción de Daños de NMDOH envía naloxona gratis a cualquier domicilio o apartado postal de Nuevo México. Pídela en nmharmreduction.org/naloxone-saves (lanzado en septiembre de 2023; línea de ayuda 505-270-5943). También es gratis sin receta en cada oficina de salud pública, y NEXT Distro está en nextdistro.org/newmexico.",
    "barriers": "Para el acceso en zonas rurales y pueblos, el programa estatal de correo envía a todo el estado y es la solución prevista.",
    "community_services": ["Capacitación virtual y kits gratis"]
  },
  "IL": {
    "naloxone_legal_status": "Orden permanente estatal",
    "gs_scope": "Inmunidad ante cargos por posesión para quien llama y la víctima, pero con límites estrictos de cantidad (por ejemplo, menos de ~3g de heroína); no cubre cantidades mayores.",
    "pharmacy_mechanism": "Cualquier farmacia puede entregarla bajo la orden permanente estatal del IDPH; Narcan sin receta también disponible.",
    "medicaid_notes": "Cubierta por Medicaid de Illinois.",
    "typical_cost": "Sin receta ~$45; gratis mediante sitios DOPP/OEND y por correo",
    "how": "El portal de naloxona del IDPH (idph.illinois.gov/Naloxone) explica el acceso; el programa DOPP de prevención de sobredosis del IDHS (\"Access Narcan\") suministra kits gratis a través de organizaciones comunitarias; alcance comunitario de Chicago Recovery Alliance (anypositivechange.org); correo gratuito en nextdistro.org/illinois.",
    "barriers": "La inmunidad del Buen Samaritano tiene límites de cantidad, y la disponibilidad varía según el condado, así que el pedido por correo cubre los vacíos.",
    "community_services": ["Naloxona gratis y alcance comunitario"]
  },
  "CO": {
    "naloxone_legal_status": "Orden permanente estatal",
    "gs_scope": "Protege a quien llama y a la persona con la sobredosis. Las protecciones aplican incluso cuando se usa naloxona vencida.",
    "pharmacy_mechanism": "Cualquier farmacia puede entregarla bajo la orden permanente.",
    "medicaid_notes": "Cubierta sin copago.",
    "typical_cost": "Sin receta, alrededor de $45",
    "how": "Entra a cualquier farmacia, o visita el Harm Reduction Action Center en Denver.",
    "barriers": "Los condados rurales tienen menos puntos de distribución, así que los programas por correo llenan el vacío.",
    "community_services": ["Distribución gratuita", "Acceso a jeringas y naloxona"]
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
  "dateLocale": "es-ES",
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
