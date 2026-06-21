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
  },
  "NJ": {
    "naloxone_legal_status": "Orden permanente / Naloxone365",
    "gs_scope": "Bajo la Ley de Prevención de Sobredosis, tanto quien llama como la víctima tienen inmunidad ante el arresto o el enjuiciamiento por uso y posesión simple.",
    "pharmacy_mechanism": "Naloxone365: cualquier persona de 14 años o más puede obtener un kit gratuito de Narcan de 2 dosis de forma anónima en más de 650 farmacias participantes, sin nombre, sin receta y sin necesidad de dar un motivo, cualquier día del año.",
    "medicaid_notes": "Cubierta, aunque rara vez importa: Naloxone365 es gratis sin identificación ni seguro.",
    "typical_cost": "Gratis en más de 650 farmacias (Naloxone365)",
    "how": "Entra a cualquier farmacia participante y pídela; el localizador está en nj.gov/humanservices/stopoverdoses. La NJ Harm Reduction Coalition envía naloxona gratis por correo a todo el estado (njharmreduction.org), y NEXT Distro está en nextdistro.org/newjersey.",
    "barriers": "Prácticamente ninguna. Nueva Jersey tiene uno de los accesos con menos barreras del país; solo revisa primero la lista de farmacias participantes.",
    "community_services": ["Línea de ayuda y suministro por correo"]
  },
  "GA": {
    "naloxone_legal_status": "Orden permanente estatal",
    "gs_scope": "Protege de responsabilidad legal a quien administra naloxona.",
    "pharmacy_mechanism": "Cualquier farmacia puede entregarla.",
    "medicaid_notes": "Cubierta.",
    "typical_cost": "Sin receta, alrededor de $45",
    "how": "Solicita un kit a Georgia Overdose Prevention, o pídeselo a un farmacéutico.",
    "barriers": "El acceso en zonas rurales es limitado, pero los programas por correo llegan a todas partes.",
    "community_services": ["Kits gratis a pedido", "Alcance comunitario"]
  },
  "NC": {
    "naloxone_legal_status": "Orden permanente estatal",
    "gs_scope": "Protege a quien llama y a la persona con la sobredosis de cargos por posesión de pequeñas cantidades; inmunidad civil por administrar naloxona.",
    "pharmacy_mechanism": "La mayoría de las farmacias minoristas la entregan sin receta bajo la orden permanente estatal; cubierta por la mayoría de los seguros.",
    "medicaid_notes": "Cubierta por Medicaid de NC.",
    "typical_cost": "Sin receta ~$45; gratis mediante NCHRC y programas de jeringas (SSP)",
    "how": "Naloxonesaves-nc.org es el centro de acceso estatal (farmacias, departamentos de salud, programas de jeringas); la NC Harm Reduction Coalition distribuye kits gratis (más de 224,000 distribuidos, nchrc.org); naloxona intramuscular gratis enviada por correo a todo el estado en nextdistro.org/ncgate; la página de acceso a jeringas y naloxona de NCDHHS lista los programas SSP.",
    "barriers": "Vacíos en el este y oeste rurales; la red de NCHRC y el pedido por correo los cubren.",
    "community_services": ["Kits gratis"]
  },
  "NV": {
    "naloxone_legal_status": "Orden permanente estatal",
    "gs_scope": "Inmunidad ante el arresto o el enjuiciamiento por posesión o uso de pequeñas cantidades para quien llama y la víctima.",
    "pharmacy_mechanism": "Las farmacias la entregan bajo la orden permanente; disponible sin receta.",
    "medicaid_notes": "Cubierta por Medicaid de Nevada.",
    "typical_cost": "Sin receta ~$45; gratis mediante máquinas expendedoras, HOPES y correo",
    "how": "En Las Vegas, las máquinas expendedoras de salud pública de Trac-B/Impact Exchange entregan naloxona gratis (southernnevadahealthdistrict.org). En Reno, Northern Nevada HOPES/Change Point ofrece Narcan gratis sin cita (nnhopes.org). Para correo gratis a todo el estado, usa nextdistro.org/nevada, enviado por Trac-B.",
    "barriers": "Para los condados rurales lejos de los servicios de Las Vegas y Reno, el pedido por correo es el puente.",
    "community_services": ["Máquinas expendedoras de reducción de daños"]
  },
  "WA": {
    "naloxone_legal_status": "Orden permanente estatal",
    "gs_scope": "Protege a quien llama y a la víctima de cargos por posesión de drogas cuando se busca ayuda de buena fe.",
    "pharmacy_mechanism": "Cualquier farmacia la entrega bajo la orden permanente estatal; disponible sin receta.",
    "medicaid_notes": "Cubierta por Apple Health, $0.",
    "typical_cost": "Sin receta ~$45; gratis por correo del programa estatal",
    "how": "El programa de correo gratuito de naloxona del WA DOH la entrega en tu casa cuando pides en línea, o puedes recogerla en una farmacia sin receta; empieza en el DOH Naloxone Finder (doh.wa.gov o stopoverdose.org). El programa OEND abastece a organizaciones comunitarias, y programas de condados como el de King County la distribuyen gratis.",
    "barriers": "El programa estatal de correo es sólido y está diseñado para personas lejos de los servicios; solo deja tiempo para el envío.",
    "community_services": ["Recursos estatales"]
  },
  "PA": {
    "naloxone_legal_status": "Orden permanente estatal",
    "gs_scope": "La inmunidad aplica cuando quien llama se queda en la escena y coopera con los socorristas.",
    "pharmacy_mechanism": "Orden permanente.",
    "medicaid_notes": "Cubierta.",
    "typical_cost": "Sin receta, alrededor de $45",
    "how": "Pídeselo a cualquier farmacéutico, o usa el programa de envío a domicilio de PA.",
    "barriers": "La inmunidad depende de cómo actúes en la escena: quédate y coopera.",
    "community_services": ["Kits enviados a domicilio"]
  },
  "MA": {
    "naloxone_legal_status": "Orden permanente estatal",
    "gs_scope": "Protege a quien llama y a la víctima de cargos por posesión y de violaciones relacionadas de libertad condicional o vigilada.",
    "pharmacy_mechanism": "Todas las farmacias minoristas tienen naloxona bajo la orden permanente estatal; también disponible sin receta.",
    "medicaid_notes": "MassHealth la cubre con copago de $0.",
    "typical_cost": "Sin receta ~$45; gratis por correo y mediante sitios del CNP",
    "how": "El centro \"Where to get Naloxone\" de Mass.gov cubre todas las rutas: kits gratis por correo para residentes de MA (financiados por el DPH), sitios del Community Naloxone Program (CNP) que distribuyen kits gratis en todo el estado, y el localizador de programas de reducción de daños.",
    "barriers": "Copagos de seguros privados en las farmacias; los sitios del CNP y el programa gratuito de correo evitan todo costo.",
    "community_services": ["Distribución gratuita"]
  },
  "VA": {
    "naloxone_legal_status": "Orden permanente estatal",
    "gs_scope": "HB 2117 (vigente desde el 1 de julio de 2025): cualquier persona que de buena fe busque ayuda de emergencia para una sobredosis (o que preste auxilio, incluida RCP o naloxona, mientras otra persona busca ayuda) no puede ser arrestada ni enjuiciada por posesión para uso personal; no cubre cantidades de distribución, posesión por un delincuente convicto, ni órdenes de arresto pendientes.",
    "pharmacy_mechanism": "Cualquier farmacia la entrega bajo la orden permanente estatal; disponible sin receta.",
    "medicaid_notes": "Cubierta por Medicaid de Virginia (Cardinal Care).",
    "typical_cost": "Sin receta ~$45; gratis mediante REVIVE! y los departamentos de salud",
    "how": "REVIVE! es el programa oficial OONE de Virginia: capacitación y naloxona gratis a través de los departamentos de salud locales y las Community Services Boards (página REVIVE en dbhds.virginia.gov; cerca de 400,000 dosis distribuidas). Hay correo gratis en nextdistro.org/virginia, y los distritos de salud locales de VDH tienen kits gratis.",
    "barriers": "Para el acceso rural en el suroeste de Virginia, las CSB y el pedido por correo lo cubren. La ampliación de la ley de 2025 elimina la mayoría de las barreras por miedo al arresto.",
    "community_services": ["Distribución comunitaria", "Alcance en el suroeste de VA"]
  },
  "CT": {
    "naloxone_legal_status": "Protocolo de prescripción por farmacéuticos",
    "gs_scope": "Protege del enjuiciamiento tanto a quien llama como a la persona con la sobredosis.",
    "pharmacy_mechanism": "Los farmacéuticos certificados pueden recetar naloxona directamente.",
    "medicaid_notes": "Cubierta por HUSKY Health.",
    "typical_cost": "Sin receta, alrededor de $45",
    "how": "Pide hablar con un farmacéutico certificado en una farmacia, o comunícate con tu departamento de salud local.",
    "barriers": "Usa el mapa del Departamento de Protección al Consumidor para localizar farmacéuticos certificados.",
    "community_services": ["Servicios de jeringas y naloxona"]
  },
  "MD": {
    "naloxone_legal_status": "Orden permanente estatal",
    "gs_scope": "Protege a quien llama y a la persona con la sobredosis de cargos por posesión o parafernalia; ayudar de buena fe también está protegido de responsabilidad civil.",
    "pharmacy_mechanism": "Todos los farmacéuticos con licencia de Maryland pueden entregar naloxona y los suministros para administrarla a cualquier persona bajo la orden permanente estatal.",
    "medicaid_notes": "Cubierta por Medicaid de Maryland.",
    "typical_cost": "Sin receta ~$45; gratis mediante los Overdose Response Programs",
    "how": "Los Overdose Response Programs autorizados por MDH (departamentos de salud locales y organizaciones comunitarias) reparten naloxona gratis junto con tiras reactivas de fentanilo y xilacina. Encuentra uno en health.maryland.gov/pha/NALOXONE. Varios condados ofrecen entrega a domicilio por correo, la guía estatal está en stopoverdose.maryland.gov, y NEXT Distro la envía en nextdistro.org/maryland.",
    "barriers": "La disponibilidad de entrega por correo varía según el condado, así que pregunta a tu ORP local.",
    "community_services": ["Kits gratis"]
  },
  "OR": {
    "naloxone_legal_status": "Prescripción por farmacéuticos",
    "gs_scope": "Protege a quien llama y a la persona con la sobredosis de cargos por posesión o parafernalia y de ciertas violaciones de libertad condicional.",
    "pharmacy_mechanism": "Los farmacéuticos recetan o entregan bajo la orden permanente de OHA o el protocolo de OBOP; disponible sin receta.",
    "medicaid_notes": "El Oregon Health Plan la cubre a $0.",
    "typical_cost": "Sin receta ~$45; gratis mediante programas de jeringas (SSP) y socios del clearinghouse",
    "how": "El Save Lives Oregon Harm Reduction Clearinghouse abastece de naloxona gratis a organizaciones comunitarias en todo el estado; encuentra un socio cerca de ti en savelivesoregon.org. Los programas de jeringas dan kits gratis y tiras reactivas de fentanilo a las personas que consumen drogas, la página de reversión de sobredosis de OHA lista cada ruta, y los departamentos de salud de los condados la distribuyen, algunos con estaciones de recogida sin barreras.",
    "barriers": "El costo si no tienes seguro en la farmacia; los socios del clearinghouse y los departamentos de salud de los condados son gratis.",
    "community_services": ["Suministros gratis", "Distribución gratuita"]
  },
  "IN": {
    "naloxone_legal_status": "Aaron's Law / orden permanente",
    "gs_scope": "Limitada. Hay inmunidad ante un arresto por posesión si la persona se queda, coopera con los socorristas y se proporciona naloxona o se llama a los servicios de emergencia. Aplican condiciones.",
    "pharmacy_mechanism": "Las farmacias la entregan bajo la orden permanente de Aaron's Law; Narcan sin receta disponible.",
    "medicaid_notes": "Cubierta por Medicaid de Indiana.",
    "typical_cost": "Sin receta ~$45; gratis mediante NaloxBoxes y Overdose Lifeline",
    "how": "Overdose Lifeline coordina la distribución gratuita en todo el estado, incluidas las NaloxBoxes públicas disponibles 24/7 (overdoselifeline.org/naloxone-indiana-distribution); optin.in.gov lista los proveedores de naloxona registrados; la página de naloxona de IDOH lista los suministros de los departamentos de salud locales.",
    "barriers": "El acceso rural es desigual; las NaloxBoxes y las máquinas expendedoras son el respaldo disponible 24/7.",
    "community_services": ["Localizador estatal de proveedores"]
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
