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
  },
  "TN": {
    "naloxone_legal_status": "Orden permanente estatal",
    "gs_scope": "Protege a quien llama y a la persona con la sobredosis de cargos por posesión simple o intercambio casual; inmunidad civil por administrar naloxona.",
    "pharmacy_mechanism": "Las farmacias la entregan bajo la orden permanente; disponible sin receta.",
    "medicaid_notes": "TennCare la cubre.",
    "typical_cost": "Sin receta ~$45; gratis mediante ROPS en los 95 condados",
    "how": "Los Regional Overdose Prevention Specialists (ROPS) son 20 especialistas que cubren los 95 condados y dan naloxona y capacitación gratis (encuentra el tuyo en la página ROPS de tn.gov; más de 1 millón de unidades distribuidas, más de 114,000 rescates documentados). Hay una capacitación en línea de 15 minutos con certificado. Llama a la TN REDLINE al 800-889-9789 para referencias, usa nextdistro.org/tennessee para correo gratis, o consulta la guía en tennesseeharmreduction.com.",
    "barriers": "Las distancias del este rural de TN; los ROPS van a ti para capacitaciones grupales, y el pedido por correo cubre a las personas.",
    "community_services": ["Capacitación y distribución"]
  },
  "OK": {
    "naloxone_legal_status": "Autoridad de prescripción del farmacéutico",
    "gs_scope": "Protege a la persona que busca ayuda, pero la persona con la sobredosis no está cubierta. Es una de las leyes más limitadas.",
    "pharmacy_mechanism": "Los farmacéuticos la entregan sin receta; disponible sin receta.",
    "medicaid_notes": "Cubierta por SoonerCare.",
    "typical_cost": "Sin receta ~$45; gratis por correo a través de OK I'M READY",
    "how": "Las 25 máquinas expendedoras de naloxona del estado se retiraron a finales de 2024. El reemplazo es el programa de correo OK I'M READY (ODMHSAS): pide Narcan y tiras reactivas de fentanilo gratis enviados a tu casa en okimready.org. NEXT Distro también la envía gratis en nextdistro.org/oklahoma, y la información de naloxona de OSDH está en oklahoma.gov.",
    "barriers": "La víctima no tiene protección del Buen Samaritano, así que planifica en consecuencia. Las máquinas expendedoras ya no están, así que el pedido por correo es ahora el principal canal gratuito.",
    "community_services": ["Pedidos gratis en línea y máquinas expendedoras", "Servicios de prevención estatales"]
  },
  "KS": {
    "naloxone_legal_status": "Protocolo farmacéutico estatal",
    "gs_scope": "La SB 419 (firmada en mayo de 2024) otorga inmunidad ante el enjuiciamiento por posesión o uso a la persona que llama por ayuda y a la persona con la sobredosis. Excluye a las personas en libertad condicional, vigilada o en trabajo externo.",
    "pharmacy_mechanism": "Los farmacéuticos la entregan bajo el protocolo estatal; Narcan sin receta disponible.",
    "medicaid_notes": "Cubierta (copago de $0 a $3).",
    "typical_cost": "Sin receta ~$45; gratis mediante DCCCA",
    "how": "El Kansas Naloxone Program de DCCCA envía kits de Narcan y tiras reactivas de fentanilo gratis a residentes de Kansas (dccca.org/naloxone) y abastece máquinas expendedoras gratuitas en ocho ciudades; correo de NEXT Distro en nextdistro.org/kansas.",
    "barriers": "La ley del Buen Samaritano es nueva (2024) y excluye a las personas bajo supervisión, y la concienciación aún es baja. El correo y las máquinas expendedoras siguen siendo las opciones de baja barrera.",
    "community_services": ["Kits gratis por correo"]
  },
  "UT": {
    "naloxone_legal_status": "Orden permanente estatal",
    "gs_scope": "Inmunidad para quienes llaman a reportar sobredosis.",
    "pharmacy_mechanism": "Orden permanente.",
    "medicaid_notes": "Cubierta.",
    "typical_cost": "Sin receta, alrededor de $45",
    "how": "Pídela en Stop the Opidemic, o pídeselo a un farmacéutico.",
    "barriers": "En los condados rurales, el pedido por correo es la opción realista.",
    "community_services": ["Capacitación y pedidos"]
  },
  "WI": {
    "naloxone_legal_status": "Orden permanente estatal",
    "gs_scope": "Inmunidad amplia de emergencia. Quien ayuda o llama está protegido de cargos por posesión cuando busca ayuda de buena fe.",
    "pharmacy_mechanism": "Las farmacias participantes la entregan bajo la orden permanente; disponible sin receta.",
    "medicaid_notes": "Cubierta por BadgerCare.",
    "typical_cost": "Sin receta ~$45; gratis en sitios de NARCAN Direct y cajas Nalox-ZONE",
    "how": "El NARCAN Direct Program abastece de naloxona gratis a través de departamentos de salud de los condados, servicios humanos, clínicas tribales, programas de jeringas y organizaciones de recuperación (más de 28,000 kits por trimestre; mapa de puntos de recogida gratuita en dhs.wisconsin.gov/aoda/naloxone.htm); las cajas Nalox-ZONE dan acceso gratuito 24/7 en lugares públicos (wisconsinvoicesforrecovery.org/naloxzone).",
    "barriers": "Revisa el mapa de agencias inscritas. El correo directo a personas no es el modelo estatal aquí, pero las cajas Nalox-ZONE están disponibles 24/7.",
    "community_services": ["Directorio de farmacias inscritas"]
  },
  "MI": {
    "naloxone_legal_status": "Orden permanente estatal",
    "gs_scope": "Limitada a cantidades de uso personal. Protege a quien llama y a la víctima de cargos por posesión por cantidades acordes con el uso personal.",
    "pharmacy_mechanism": "Cualquier farmacia la entrega bajo la orden permanente estatal; disponible sin receta.",
    "medicaid_notes": "Cubierta por Medicaid de Michigan.",
    "typical_cost": "Sin receta ~$45; gratis en oficinas de MDHHS y por correo",
    "how": "Kits de naloxona gratis disponibles en las oficinas locales de MDHHS en todo el estado en horario laboral. El Naloxone Direct Portal de Michigan (michigan.gov/opioids) ha enviado más de 1.7 millones de kits a organizaciones; las personas pueden obtener entrega gratis por correo en nextdistro.org/michigan, además de agencias de reducción de daños y máquinas expendedoras.",
    "barriers": "El acceso rural es desigual; la recogida en oficinas de MDHHS (nueva en 2026) y el pedido por correo son las rutas confiables.",
    "community_services": ["Envío gratuito al por mayor"]
  },
  "OH": {
    "naloxone_legal_status": "Orden permanente estatal",
    "gs_scope": "Protege de cargos menores por posesión a quien busca ayuda, quien ayuda y la víctima; limitada a dos usos y requiere una derivación a tratamiento.",
    "pharmacy_mechanism": "Las farmacias la entregan bajo la orden permanente; disponible sin receta.",
    "medicaid_notes": "Cubierta por Medicaid de Ohio.",
    "typical_cost": "Sin receta ~$45; gratis mediante Project DAWN y el correo de HRO",
    "how": "Project DAWN opera más de 310 programas de distribución gratuita en 73 de los 88 condados (localizador y panel en odh.ohio.gov). Harm Reduction Ohio envía Narcan y tiras reactivas gratis por correo a los 88 condados; pide en harmreductionohio.org. NEXT Distro está en nextdistro.org/ohio.",
    "barriers": "Los 15 condados sin sitios de Project DAWN están totalmente cubiertos por el programa de correo de Harm Reduction Ohio.",
    "community_services": ["Distribución gratuita estatal"]
  },
  "MN": {
    "naloxone_legal_status": "Protocolo estatal",
    "gs_scope": "Conocida como Steve's Law. Protege a quien llama y a la persona con la sobredosis del enjuiciamiento por posesión o intercambio de pequeñas cantidades cuando se busca ayuda de buena fe.",
    "pharmacy_mechanism": "Los farmacéuticos la entregan bajo el protocolo; disponible sin receta.",
    "medicaid_notes": "Cubierta por Medical Assistance.",
    "typical_cost": "Sin receta ~$45; gratis mediante los Naloxone Access Points",
    "how": "Steve Rummler HOPE Network: kits gratis en los Naloxone Access Points en todo el estado (mapa en steverummlerhopenetwork.org) o entrega gratis por correo a cualquier lugar de Minnesota mediante su formulario de solicitud (952-943-3937); el MDH Naloxone Finder lista más sitios; NEXT Distro en nextdistro.org/minnesota.",
    "barriers": "El norte y las zonas rurales de Minnesota tienen poca población, así que el programa de correo de SRHN las cubre.",
    "community_services": ["Kits gratis en Duluth", "Alcance culturalmente específico"]
  },
  "SC": {
    "naloxone_legal_status": "Protocolo conjunto",
    "gs_scope": "Limitada. Solo protege de cargos por posesión a la primera persona que llama; los demás en la escena no están cubiertos.",
    "pharmacy_mechanism": "Las farmacias la entregan sin receta bajo el protocolo conjunto; disponible sin receta.",
    "medicaid_notes": "Cubierta por Healthy Connections Medicaid.",
    "typical_cost": "Sin receta ~$45; gratis en clínicas del DPH y distribuidores comunitarios",
    "how": "Hay kits gratuitos de seguridad ante sobredosis (naloxona más tiras reactivas de fentanilo y xilacina) en cada clínica de salud del SC DPH. Los Community Distributors designados por el DPH operan en todo el estado (lista en dph.sc.gov, o llama a la Care Line al 1-855-472-3432), naloxonesavessc.org lista los distribuidores, y hay correo gratis en nextdistro.org/southcarolina.",
    "barriers": "La inmunidad solo para la primera persona que llama es un riesgo real en grupos; se recomiendan los distribuidores comunitarios en lugar de comprar en la farmacia.",
    "community_services": ["Kits gratis"]
  },
  "NE": {
    "naloxone_legal_status": "Orden permanente estatal",
    "gs_scope": "Débil. Es solo una protección probatoria (la evidencia de la llamada no puede usarse), no una verdadera inmunidad ante el arresto o el enjuiciamiento.",
    "pharmacy_mechanism": "Las farmacias participantes entregan kits de Narcan gratis, sin receta, a través del programa de DHHS/Nebraska Pharmacists Association (formulario corto en la farmacia; residentes de NE).",
    "medicaid_notes": "Cubierta por Medicaid de Nebraska.",
    "typical_cost": "Gratis en más de 60 farmacias participantes; sin receta ~$45 en otros lugares",
    "how": "Stop Overdose Nebraska (stopodne.com): búsqueda por código postal de más de 60 farmacias que dan Narcan gratis a residentes de Nebraska, sin receta; detalles del programa de Nebraska Pharmacists Association en npharm.org/ne-narcanprogram.",
    "barriers": "Como la ley del Buen Samaritano es débil (solo probatoria), llamar al 911 conlleva más riesgo legal que en los estados vecinos. La concienciación sobre el programa gratuito en farmacias también es baja en zonas rurales.",
    "community_services": ["Localizador de farmacias gratuitas"]
  },
  "ID": {
    "naloxone_legal_status": "Autoridad de prescripción del farmacéutico",
    "gs_scope": "Estrecha. Protege de responsabilidad legal a quien administra naloxona, pero no protege a quien llama de cargos por posesión de drogas.",
    "pharmacy_mechanism": "Los farmacéuticos recetan y entregan directamente; Narcan sin receta ampliamente disponible. Cualquiera con una identificación de Medicaid puede obtener naloxona gratis en una farmacia sin receta.",
    "medicaid_notes": "Medicaid de Idaho la cubre gratis en las farmacias, sin necesidad de receta.",
    "typical_cost": "Sin receta ~$45; gratis por correo de IHRP",
    "how": "El Idaho Harm Reduction Project envía naloxona gratis por correo tras un breve video de capacitación (idahoharmreductionproject.org); correo de NEXT Distro en nextdistro.org/idaho; el Idaho DHW lista las farmacias del Drug Overdose Prevention Program local.",
    "barriers": "La débil protección del Buen Samaritano (sin inmunidad por posesión) hace que el pedido anónimo por correo sea el canal preferido para muchos.",
    "community_services": ["Suministros gratis"]
  },
  "RI": {
    "naloxone_legal_status": "Acuerdo de práctica colaborativa",
    "gs_scope": "Integral. Protege a quien llama y a la víctima de cargos por posesión y parafernalia, así como de violaciones de libertad condicional y vigilada.",
    "pharmacy_mechanism": "Todas las farmacias principales la entregan sin receta bajo la práctica colaborativa; disponible sin receta.",
    "medicaid_notes": "Totalmente cubierta, $0.",
    "typical_cost": "Sin receta ~$45; gratis por correo del programa estatal",
    "how": "Preventoverdoseri.org/get-naloxone envía un kit gratis a cualquier dirección de Rhode Island tras una breve capacitación en línea. PONI (poniri.org) y otras organizaciones de reducción de daños la distribuyen gratis en todo el estado con entrega entre semana, y NEXT Distro está en nextdistro.org/rhodeisland.",
    "barriers": "Estado con excelente acceso; el correo es solo para residentes de RI.",
    "community_services": ["Centros de acogida sin cita"]
  },
  "AL": {
    "naloxone_legal_status": "Receta / orden permanente / sin receta",
    "gs_scope": "Protege a quien llama (si usa su nombre real y se queda en la escena) de cargos menores por posesión.",
    "pharmacy_mechanism": "Orden permanente estatal; cualquier farmacéutico puede entregarla.",
    "medicaid_notes": "Medicaid la cubre con un copago de $0 a $3.",
    "typical_cost": "Sin receta, alrededor de $45 a $65",
    "how": "Lo más rápido: entra a cualquier farmacia (orden permanente / sin receta), o solicita kits gratis al Jefferson County Health Department.",
    "barriers": "El acceso a farmacias en zonas rurales es limitado, y el costo sin seguro puede ser una barrera. Usa programas por correo como NEXT Distro si la distancia o el precio son un problema.",
    "community_services": ["Kits de naloxona y tiras reactivas de fentanilo gratis", "Coordinación y referencias estatales"]
  },
  "AK": {
    "naloxone_legal_status": "Prescripción independiente del farmacéutico",
    "gs_scope": "Protege tanto a quien llama como a la persona con la sobredosis si buscan ayuda médica de buena fe.",
    "pharmacy_mechanism": "Los farmacéuticos pueden recetar naloxona por su propia autoridad.",
    "medicaid_notes": "Cubierta por Medicaid de Alaska.",
    "typical_cost": "Sin receta, alrededor de $45 a $65",
    "how": "Pregunta en cualquier farmacia, o encuentra un socio de Project HOPE en tu comunidad.",
    "barriers": "Muchos pueblos remotos no tienen farmacias. Los programas por correo y los distribuidores comunitarios son la opción confiable.",
    "community_services": ["Kits gratis mediante los Overdose Response Programs"]
  },
  "AR": {
    "naloxone_legal_status": "Protocolo farmacéutico estatal",
    "gs_scope": "Quienes llaman actuando de buena fe están protegidos del enjuiciamiento.",
    "pharmacy_mechanism": "Los farmacéuticos pueden iniciar el tratamiento con naloxona bajo el protocolo estatal.",
    "medicaid_notes": "Cubierta por Medicaid de Arkansas.",
    "typical_cost": "Sin receta, alrededor de $45 a $65",
    "how": "Pregunta en una farmacia bajo el protocolo estatal, o visita el departamento de salud de tu condado.",
    "barriers": "Las zonas rurales pueden tener cobertura limitada de farmacias, así que usa NEXT Distro para entrega gratis por correo.",
    "community_services": ["Información y defensa"]
  },
  "DE": {
    "naloxone_legal_status": "Orden permanente y acceso comunitario",
    "gs_scope": "Protege a las personas comunes y a los oficiales de seguridad pública que responden de buena fe.",
    "pharmacy_mechanism": "Cualquier farmacia puede entregarla bajo la orden permanente.",
    "medicaid_notes": "Cubierta sin copago.",
    "typical_cost": "Sin receta, alrededor de $45",
    "how": "Usa el programa estatal de correo (gratis) o entra a una farmacia.",
    "barriers": "El programa de correo requiere ver primero un breve video de capacitación en línea.",
    "community_services": ["Kits gratis por correo"]
  },
  "HI": {
    "naloxone_legal_status": "Autoridad de prescripción del farmacéutico",
    "gs_scope": "Protege tanto a quien llama como a la persona con la sobredosis de cargos por posesión de drogas y parafernalia cuando se busca ayuda de buena fe.",
    "pharmacy_mechanism": "Los farmacéuticos pueden recetar y entregar directamente; el Narcan sin receta aprobado por la FDA también se vende sin necesidad de ninguna interacción.",
    "medicaid_notes": "Cubierta por Med-QUEST.",
    "typical_cost": "Sin receta ~$45 (caja de 2 dosis); gratis mediante HHHRC y máquinas expendedoras",
    "how": "El Hawaii Health & Harm Reduction Center (HHHRC) ofrece naloxona gratis y confidencial en Oahu, Kauai, Maui y la Isla de Hawái. Llama al 808-521-2437 o pídela por correo en hhhrc.org/naloxone. Hay cerca de 30 máquinas expendedoras de naloxona gratuitas en todo el estado mediante una alianza de HHHRC/DOH. NEXT Distro también la envía: nextdistro.org/hawaii.",
    "barriers": "Los residentes de las islas vecinas enfrentan barreras de viaje; el servicio de correo de HHHRC y las máquinas expendedoras llenan el vacío.",
    "community_services": ["Kits gratis", "Distribución en Maui", "Distribución en la Isla de Hawái"]
  },
  "IA": {
    "naloxone_legal_status": "Orden permanente estatal",
    "gs_scope": "Limitada. La inmunidad para quien reporta y la persona con la sobredosis cubre solo delitos de tipo posesión, y solo puede usarse una vez. Un uso previo de la protección te descalifica.",
    "pharmacy_mechanism": "Orden permanente estatal; las farmacias participantes también entregan kits gratis a través del programa comunitario de naloxona en farmacias de Iowa HHS.",
    "medicaid_notes": "Cubierta por Medicaid de Iowa.",
    "typical_cost": "Sin receta ~$45; gratis en farmacias participantes y organizaciones comunitarias",
    "how": "El programa estatal de correo TeleNaloxone terminó el 30 de septiembre de 2024. Usa el directorio Naloxone Iowa (naloxoneiowa.org) para encontrar kits gratis en farmacias participantes, organizaciones comunitarias, máquinas expendedoras y cajas de naloxona.",
    "barriers": "La inmunidad del Buen Samaritano de un solo uso es riesgosa para quienes responden de forma repetida. Ya no hay un programa estatal de correo, así que apóyate en el directorio y los distribuidores comunitarios.",
    "community_services": ["Suministro por mensaje de texto"]
  },
  "KY": {
    "naloxone_legal_status": "Protocolo de farmacia",
    "gs_scope": "Protege a quien llama y a la persona con la sobredosis de cargos por posesión o parafernalia cuando quien llama se queda y coopera.",
    "pharmacy_mechanism": "Las farmacias la entregan sin receta individual bajo el protocolo; disponible sin receta.",
    "medicaid_notes": "Cubierta por Medicaid de Kentucky.",
    "typical_cost": "Sin receta ~$45; gratis en más de 136 ubicaciones mapeadas",
    "how": "Findnaloxone.ky.gov es el localizador oficial del estado (lanzado en 2024). Mapea más de 136 ubicaciones con naloxona gratis, con búsqueda por código postal o condado, y tiene una herramienta de pedidos para agencias. NEXT Distro también la envía, en nextdistro.org/kentucky.",
    "barriers": "Vacíos de distribución en zonas rurales; el localizador estatal y el pedido por correo cubren la mayoría.",
    "community_services": ["Localizador estatal"]
  },
  "LA": {
    "naloxone_legal_status": "Orden permanente estatal",
    "gs_scope": "Protege a quien llama y a la persona con la sobredosis de cargos por posesión cuando se busca ayuda médica de buena fe.",
    "pharmacy_mechanism": "Las farmacias participantes la entregan a personas comunes, cuidadores, familiares y amigos bajo la orden permanente.",
    "medicaid_notes": "Cubierta por Medicaid de Louisiana, sin copago.",
    "typical_cost": "Sin receta ~$45; gratis mediante Trystereo / NEXT",
    "how": "Trystereo (New Orleans Harm Reduction Network) reparte naloxona gratis. Envía un mensaje de texto al 504-535-4766 o visita un centro de acogida (trystereo.org/overdose-prevention). Para correo gratis a todo el estado (naloxona intramuscular o RiVive nasal), usa nextdistro.org/louisiana, que Trystereo gestiona.",
    "barriers": "La cobertura es más fuerte en Nueva Orleans; el pedido por correo es la opción confiable en todo el estado.",
    "community_services": ["Centro estatal de respuesta a opioides"]
  },
  "ME": {
    "naloxone_legal_status": "Orden permanente estatal",
    "gs_scope": "Amplia. Protege del arresto o el enjuiciamiento por la mayoría de los delitos de drogas no violentos, además de violaciones de fianza y libertad condicional, tanto para quien llama como para la víctima.",
    "pharmacy_mechanism": "Las farmacias la entregan bajo la orden permanente; disponible sin receta.",
    "medicaid_notes": "Cubierta por MaineCare.",
    "typical_cost": "Sin receta ~$45; gratis mediante la red por niveles de MNDI",
    "how": "Maine Access Points: llama o envía un mensaje de texto al 207-319-8284 o pide en línea para obtener naloxona y educación sobre sobredosis gratis en cualquier lugar de Maine (maineaccesspoints.org/naloxone); getmainenaloxone.org lista todos los distribuidores de Nivel 1; una alianza de correo con NEXT cubre las zonas remotas.",
    "barriers": "La geografía rural; la red de distribuidores por niveles más el pedido por correo llegan a todos los condados.",
    "community_services": ["Kits y capacitación gratis"]
  },
  "MS": {
    "naloxone_legal_status": "Orden permanente (participación voluntaria de las farmacias)",
    "gs_scope": "Estrecha. Cubre solo cantidades muy pequeñas de uso personal, y es una de las protecciones más débiles del país.",
    "pharmacy_mechanism": "Existe una orden permanente, pero la participación de las farmacias es voluntaria; Narcan sin receta disponible donde haya existencias.",
    "medicaid_notes": "Cubierta por Medicaid de Mississippi.",
    "typical_cost": "Sin receta ~$45; gratis por correo de MSDH",
    "how": "El Mississippi State Department of Health envía kits de naloxona gratis por correo a todo el estado. Completa el formulario en línea y el breve video de capacitación en msdh.ms.gov (busca naloxone; más de 20,000 kits enviados desde diciembre de 2022; correo electrónico naloxone@msdh.ms.gov). Otras opciones son MS Harm Reduction (msharmreduction.org), NEXT Distro (nextdistro.org/mississippi) y el centro de recursos en odfree.org.",
    "barriers": "El rechazo o la falta de existencias en las farmacias es común; el programa de correo de MSDH es la opción más confiable.",
    "community_services": ["Alcance y educación"]
  },
  "MO": {
    "naloxone_legal_status": "Orden permanente estatal",
    "gs_scope": "Protege a quien llama y a la víctima de cargos por posesión o parafernalia cuando se busca ayuda de emergencia de buena fe.",
    "pharmacy_mechanism": "Cualquier farmacia la entrega bajo la orden permanente estatal de 2026; disponible sin receta.",
    "medicaid_notes": "Cubierta por MO HealthNet.",
    "typical_cost": "Sin receta ~$45; gratis mediante GetMissouriNaloxone",
    "how": "Getmissourinaloxone.com es un localizador estatal para recoger naloxona gratis y pedirla gratis por correo. La MO Network gestiona las solicitudes de correo gratis a través de nextdistro.org/missouri en empaque discreto, y la University of Missouri MIMH la distribuye a organizaciones.",
    "barriers": "El estigma puede ser un problema en zonas rurales, así que el pedido discreto por correo es una buena opción. La orden permanente se actualizó en 2026, así que los rechazos en farmacias deberían disminuir.",
    "community_services": ["Educación y acceso"]
  },
  "MT": {
    "naloxone_legal_status": "Orden permanente estatal",
    "gs_scope": "Protege a quien llama y a la persona con la sobredosis de cargos por posesión cuando se busca ayuda de buena fe.",
    "pharmacy_mechanism": "Las farmacias la entregan bajo la orden permanente; disponible sin receta.",
    "medicaid_notes": "Cubierta por Medicaid de Montana.",
    "typical_cost": "Sin receta ~$45; gratis mediante Open Aid Alliance",
    "how": "Open Aid Alliance (Missoula) es el centro estatal. Pide Narcan gratis en openaidalliance.org/savealife o llama al 406-543-4770. Como afiliado de NEXT Distro (nextdistro.org/montana), gestionan cada solicitud de correo gratis de Montana en empaque discreto, sin seguro de por medio.",
    "barriers": "Grandes distancias entre los servicios; el pedido por correo es infraestructura esencial aquí.",
    "community_services": ["Servicios de reducción de daños"]
  },
  "NH": {
    "naloxone_legal_status": "Orden permanente estatal",
    "gs_scope": "Protege del arresto o el enjuiciamiento por posesión cuando se busca ayuda de buena fe.",
    "pharmacy_mechanism": "Las farmacias la entregan bajo la orden permanente; disponible sin receta.",
    "medicaid_notes": "Cubierta por Medicaid de NH.",
    "typical_cost": "Sin receta ~$45; gratis mediante los Doorway y los programas de jeringas",
    "how": "Llama o envía un mensaje de texto al 211 a cualquier hora para comunicarte con uno de los nueve centros Doorway en hospitales comunitarios, que tienen naloxona gratis (thedoorway.nh.gov). Trece programas de jeringas registrados también distribuyen kits gratis (directorio en nhhrc.org/nhssps), el estado está instalando cerca de 700 sitios públicos de naloxona, y hay correo gratis en nextdistro.org/newhampshire.",
    "barriers": "El viaje a los centros en el North Country; los programas de jeringas y el pedido por correo son el respaldo.",
    "community_services": ["Centros regionales de acceso"]
  },
  "ND": {
    "naloxone_legal_status": "Autoridad de prescripción del farmacéutico",
    "gs_scope": "Protege hasta a tres personas por incidente de sobredosis de cargos por posesión si se quedan y cooperan.",
    "pharmacy_mechanism": "Los farmacéuticos la entregan sin receta; la orden permanente de HHS la cubre sin costo para los miembros de Medicaid.",
    "medicaid_notes": "Una orden permanente hace que la naloxona cueste $0 para los miembros de Medicaid de ND en las farmacias inscritas.",
    "typical_cost": "Sin receta ~$45; kits gratis de ND HHS",
    "how": "Pide un kit gratuito de dos dosis a ND HHS en hhs.nd.gov/opioids o llama al 701-328-8920. También hay naloxona gratis por correo mediante una alianza de NEXT Distro y Grand Forks Public Health (nextdistro.org/northdakota); requiere un video de capacitación y un cuestionario, y se envía en un sobre discreto.",
    "barriers": "Población extremadamente dispersa; tanto el programa estatal como el de NEXT envían por correo a cualquier lugar de ND.",
    "community_services": ["Kits gratis a pedido", "Capacitación gratis"]
  },
  "SD": {
    "naloxone_legal_status": "Orden permanente estatal",
    "gs_scope": "Dakota del Sur sí tiene inmunidad (SDCL 34-20A-111). Protege a quien llama, y a quienes se autodenuncian, de cargos por posesión y uso si se quedan y cooperan, pero solo aplica una vez por persona, para siempre.",
    "pharmacy_mechanism": "Las farmacias la entregan bajo la orden permanente; disponible sin receta.",
    "medicaid_notes": "Cubierta por Medicaid de Dakota del Sur.",
    "typical_cost": "Sin receta ~$45; gratis por correo",
    "how": "NEXT Distro envía naloxona gratis por correo a todo el estado (nextdistro.org); el Naloxone Project del SD DOH equipa a los socorristas (doh.sd.gov); el Helpline Center (helplinecenter.org, marca 211) explica la ley del Buen Samaritano y conecta con kits gratuitos locales; Emily's Hope PORT da seguimiento tras las sobredosis.",
    "barriers": "Con inmunidad de un solo uso y una infraestructura de distribución escasa, el pedido por correo es la opción confiable.",
    "community_services": ["Kits gratis para organizaciones"]
  },
  "VT": {
    "naloxone_legal_status": "Orden permanente estatal",
    "gs_scope": "Fuerte. Protege a quien llama y a la víctima de cargos por posesión y violaciones relacionadas cuando se busca ayuda de buena fe.",
    "pharmacy_mechanism": "Las farmacias la entregan bajo la orden permanente; disponible sin receta.",
    "medicaid_notes": "Cubierta por Medicaid de Vermont.",
    "typical_cost": "Sin receta ~$45; gratis por correo del programa estatal",
    "how": "El Vermont Health Department envía kits de Narcan gratis (incluidas tiras reactivas de fentanilo e instrucciones) a tu casa; pide a través de la página de prevención de sobredosis de opioides en healthvermont.gov. También hay kits gratis en las oficinas de salud de distrito y en cada programa de jeringas, y puedes marcar 211 o VT Helplink para conexiones.",
    "barriers": "Estado pequeño con sistemas sólidos; el principal vacío es la concienciación, no el acceso.",
    "community_services": ["Distribución gratuita"]
  },
  "WV": {
    "naloxone_legal_status": "Orden permanente estatal",
    "gs_scope": "Inmunidad para la persona que busca ayuda, condicionada a quedarse en la escena y cooperar con los socorristas.",
    "pharmacy_mechanism": "Las grandes cadenas (CVS, Kroger, Fruth, Rite Aid) están todas registradas para entregarla sin receta bajo la orden permanente.",
    "medicaid_notes": "Cubierta por Medicaid de WV.",
    "typical_cost": "Sin receta ~$45; gratis mediante organizaciones de reducción de daños, correo y el Save a Life Day",
    "how": "La página de naloxona gratuita de SOAR WV (soarwv.org) mapea las fuentes gratuitas en todo el estado; pedido gratis por correo para personas en riesgo en nextdistro.org/westvirginia; ODCP y la University of Charleston suministran kits gratis a organizaciones comunitarias; el \"Free Naloxone Distribution Day\" anual de junio y el Appalachian Save a Life Day de septiembre (más de 29,000 dosis en 2023); helpandhopewv.org/naloxone.html lista todas las opciones.",
    "barriers": "Hay vacíos documentados de existencias a nivel de farmacia, así que los canales comunitarios y de reducción de daños son más confiables que el comercio minorista.",
    "community_services": ["Programas certificados en todo el estado"]
  },
  "WY": {
    "naloxone_legal_status": "Autoridad de prescripción del farmacéutico",
    "gs_scope": "Bajo la SF0074 (2025), Wyoming se convirtió en el último estado en adoptar la inmunidad del Buen Samaritano por sobredosis. Quienes llaman de buena fe, describen la ubicación y se quedan hasta que lleguen los socorristas están protegidos, hasta por dos incidentes cada 12 meses; el segundo requiere aceptar un programa de tratamiento.",
    "pharmacy_mechanism": "Los farmacéuticos recetan o entregan directamente; disponible sin receta.",
    "medicaid_notes": "Cubierta por Medicaid de Wyoming.",
    "typical_cost": "Sin receta ~$45; gratis en 30 sitios mapeados",
    "how": "El WDH lanzó el Community Naloxone Resource Map, con Narcan gratis en 30 sitios en 22 de los 23 condados. Las empresas y organizaciones también pueden obtener Narcan gratuito suministrado por el estado para distribuir (página de respuesta a sobredosis de opioides en health.wyo.gov), y hay correo gratis mediante NEXT Distro (nextdistro.org).",
    "barriers": "La ley del Buen Samaritano es completamente nueva (2025), así que la concienciación pública es mínima. Un condado todavía no tiene un sitio mapeado, así que el pedido por correo sigue siendo relevante.",
    "community_services": ["Recursos de respuesta a sobredosis"]
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
