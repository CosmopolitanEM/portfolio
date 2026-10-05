// Javier Munoz portfolio — career segments (from the CV) and the AI-first finance tools
// with live previews from previews.js. Figures come from the CV; tool previews use sample data.
(() => {
  const CAREER = [
    { when: 'Sep 2023 – Present', whenEs: 'Sep 2023 – actualidad',
      en: { label: '4.1 · Current role', t: 'Chief Financial Officer, Wayfarer', where: 'Kyoto, Japan · hospitality investment group',
        ctx: 'US$200M+ in assets across 13 properties and three brands, proprietary hotel technology, F&B and development JVs. Member of the executive team, leading a finance team of five plus external advisors across jurisdictions.',
        kpi: [['¥200M', 'strategic investment at a ¥2.7B valuation: business plan and due diligence'], ['+7%', 'ROI year on year'], ['< 30 s', 'per management report']],
        pts: ['Built the group business plan and financial model behind a ¥200M strategic corporate investment at a ¥2.7B valuation, and led the investor\'s financial and operational due diligence.',
              'Leading the due diligence of an ongoing liquidity event (confidential): designed the response structure and answered every finance and operating question for the counterparty.',
              'Built the board reporting, valuation and KPI framework behind the group\'s capital raising and IPO/exit readiness, aligned with public-company governance standards.',
              'Structured joint ventures and development projects through project-specific SPEs; owns audit preparation and Japanese statutory filings across multiple entities.',
              'Drove AI adoption across finance: in-house tools built with Claude, mandatory AI training for the team, and reporting automated to under 30 seconds per report.'] },
      es: { label: '4.1 · Puesto actual', t: 'Director financiero, Wayfarer', where: 'Kioto, Japón · grupo de inversión hotelera',
        ctx: 'Más de 200 M US$ en activos, 13 hoteles y tres marcas, tecnología hotelera propia, restauración y joint ventures de desarrollo. Miembro del comité de dirección, con un equipo financiero de cinco personas y asesores externos en varias jurisdicciones.',
        kpi: [['¥200M', 'de inversión estratégica a una valoración de ¥2.700M: plan de negocio y due diligence'], ['+7%', 'ROI interanual'], ['< 30 s', 'por informe de gestión']],
        pts: ['Construí el plan de negocio y el modelo financiero del grupo detrás de una inversión corporativa estratégica de ¥200M a una valoración de ¥2.700M, y lideré la due diligence financiera y operativa del inversor.',
              'Lidero la due diligence de un evento de liquidez en curso (confidencial): diseñé la estructura de respuesta y respondí todas las preguntas financieras y operativas de la contraparte.',
              'Construí el reporting al consejo, la valoración y el marco de KPIs para la captación de capital y la preparación para salida a bolsa o venta, con estándares de empresa cotizada.',
              'Estructuré joint ventures y proyectos de desarrollo mediante SPEs por proyecto; responsable de la preparación de auditorías y de las obligaciones legales japonesas en varias sociedades.',
              'Impulsé la adopción de IA en finanzas: herramientas propias hechas con Claude, formación obligatoria en IA para el equipo y reporting automatizado a menos de 30 segundos por informe.'] } },
    { when: 'Jan 2018 – Aug 2023', whenEs: 'Ene 2018 – ago 2023',
      en: { label: '4.2 · Turnaround and exit', t: 'Chief Financial Officer, GoGo World', where: 'Tokyo, Japan · technology start-up in Japan, Hong Kong and Korea',
        ctx: 'Recruited by the CEO after two years of profit decline. Member of the executive leadership team with teams in three Asian branches; owned finance, treasury, tax and bank relationships.',
        kpi: [['+4,500%', 'EBT growth'], ['US$400K+', 'annual tax savings'], ['−28 days', 'cash-to-cash cycle']],
        pts: ['Turned the business around, growing EBT by 4,500%, and supported the owner\'s exit strategy, maximising company valuation.',
              'Improved the cash-to-cash cycle by 28 days and reduced financial costs 23% through standardised procedures and centralised cash management across Asia.',
              'Generated US$400K+ in annual tax savings with compliant transfer-pricing structures; unified reporting under JGAAP and HK GAAP.',
              'Steered the company through COVID-19, protecting liquidity and reallocating resources against the revenue decline.'] },
      es: { label: '4.2 · Reestructuración y salida', t: 'Director financiero, GoGo World', where: 'Tokio, Japón · start-up tecnológica en Japón, Hong Kong y Corea',
        ctx: 'Fichado por el CEO tras dos años de caída del beneficio. Miembro del comité de dirección con equipos en tres sedes asiáticas; responsable de finanzas, tesorería, fiscalidad y relación con bancos.',
        kpi: [['+4.500%', 'crecimiento del EBT'], ['400K+ US$', 'de ahorro fiscal anual'], ['−28 días', 'en el ciclo de caja']],
        pts: ['Reestructuré el negocio, multiplicando el EBT un 4.500%, y acompañé la estrategia de salida del propietario maximizando la valoración.',
              'Reduje el ciclo de caja en 28 días y los costes financieros un 23% con procedimientos estandarizados y tesorería centralizada en Asia.',
              'Generé más de 400K US$ de ahorro fiscal anual con estructuras de precios de transferencia conformes; unifiqué el reporting bajo JGAAP y HK GAAP.',
              'Guié a la empresa durante la COVID-19, protegiendo la liquidez y reasignando recursos frente a la caída de ingresos.'] } },
    { when: 'Jun 2016 – May 2017', whenEs: 'Jun 2016 – may 2017',
      en: { label: '4.3 · Rescue', t: 'CFO, U.S. subsidiary, Grupo Sesé', where: 'Chattanooga, Tennessee, USA · automotive supply chain',
        ctx: 'Promoted to CFO of the U.S. subsidiary of one of Europe\'s largest transport and logistics groups (revenue up to US$1B), with a mandate to avoid bankruptcy.',
        kpi: [['+US$0.8M', 'EBT improvement'], ['+87.5%', 'working capital raised'], ['−10 days', 'month-end close']],
        pts: ['Turned the business around, reversing 2+ years of profit decline and improving EBT by US$0.8M.',
              'Secured liquidity by raising working capital 87.5% and cutting interest expense by US$100K+.',
              'Reduced the month-end close by 10 days, giving management and HQ faster visibility under US GAAP and IFRS.',
              'Supported the structuring and capital planning of a cross-border automotive CAPEX project integrating parts production in Mexico with assembly in the U.S.'] },
      es: { label: '4.3 · Rescate', t: 'CFO filial EE. UU., Grupo Sesé', where: 'Chattanooga, Tennessee, EE. UU. · cadena de suministro de automoción',
        ctx: 'Ascendido a CFO de la filial estadounidense de uno de los mayores grupos europeos de transporte y logística (ingresos de hasta 1.000 M US$), con el mandato de evitar la quiebra.',
        kpi: [['+0,8 M US$', 'de mejora del EBT'], ['+87,5%', 'de circulante captado'], ['−10 días', 'en el cierre mensual']],
        pts: ['Reestructuré el negocio, revirtiendo más de dos años de caída y mejorando el EBT en 0,8 M US$.',
              'Aseguré la liquidez aumentando el circulante un 87,5% y recortando más de 100K US$ de gastos financieros.',
              'Reduje el cierre mensual en 10 días, dando más visibilidad a la dirección y a la central bajo US GAAP y NIIF.',
              'Apoyé la estructuración y planificación de capital de un proyecto de CAPEX de automoción transfronterizo, con producción en México y montaje en EE. UU.'] } },
    { when: 'Jun 2014 – May 2016', whenEs: 'Jun 2014 – may 2016',
      en: { label: '4.4 · Group finance and M&A', t: 'Deputy CFO, Grupo Sesé HQ', where: 'Zaragoza, Spain · 7+ European and 3+ American subsidiaries',
        ctx: 'Promoted to headquarters one year after joining, to create the financial shared-service centre and set financial strategy for the foreign subsidiaries.',
        kpi: [['4+', 'acquisitions completed'], ['€80M', 'syndicated loan modelled'], ['€200K', 'saved per year in accounting']],
        pts: ['Completed 4+ M&A transactions across Europe and the Americas; built the group\'s valuation model and integrated each acquisition into the IFRS consolidated statements.',
              'Designed, built and tracked the dynamic financial model used to forecast the impact of an €80M syndicated loan.',
              'With the CFO, unified reporting for 10+ countries: group chart of accounts and consistent IFRS across all branches.',
              'Cut accounting costs 73% in Poland and 48% in Germany through the shared-service model; led the Navision roll-out in the USA, Mexico and the UK.'] },
      es: { label: '4.4 · Finanzas de grupo y M&A', t: 'Deputy CFO, central de Grupo Sesé', where: 'Zaragoza, España · 7+ filiales europeas y 3+ americanas',
        ctx: 'Ascendido a la central un año después de incorporarme, para crear el centro de servicios financieros compartidos y fijar la estrategia financiera de las filiales extranjeras.',
        kpi: [['4+', 'adquisiciones completadas'], ['80 M€', 'de préstamo sindicado modelado'], ['200K €', 'de ahorro anual en contabilidad']],
        pts: ['Completé más de 4 operaciones de M&A en Europa y América; construí el modelo de valoración del grupo e integré cada adquisición en los estados consolidados NIIF.',
              'Diseñé, construí y seguí el modelo financiero dinámico para prever el impacto de un préstamo sindicado de 80 M€.',
              'Con el CFO, unifiqué el reporting de más de 10 países: plan de cuentas de grupo y aplicación homogénea de NIIF.',
              'Reduje los costes contables un 73% en Polonia y un 48% en Alemania con el modelo de servicios compartidos; lideré la implantación de Navision en EE. UU., México y Reino Unido.'] } },
    { when: 'May 2013 – May 2014', whenEs: 'May 2013 – may 2014',
      en: { label: '4.5 · Controls', t: 'Financial Controller, Grupo Sesé', where: 'Frankfurt am Main, Germany · German subsidiary in growth',
        ctx: 'Recruited to improve the information flow between the subsidiary and group headquarters.',
        kpi: [['−50%', 'accounts receivable'], ['+17%', 'credit rating']],
        pts: ['Reduced accounts receivable 50% through tighter internal controls and collections management.',
              'Improved the company\'s credit rating by 17%, strengthening terms with suppliers and financial partners; led the subsidiary\'s Navision implementation.'] },
      es: { label: '4.5 · Control', t: 'Financial Controller, Grupo Sesé', where: 'Fráncfort, Alemania · filial alemana en crecimiento',
        ctx: 'Fichado para mejorar el flujo de información entre la filial y la central del grupo.',
        kpi: [['−50%', 'cuentas a cobrar'], ['+17%', 'rating crediticio']],
        pts: ['Reduje las cuentas a cobrar un 50% con controles internos y gestión de cobros más estrictos.',
              'Mejoré un 17% el rating crediticio de la empresa, reforzando las condiciones con proveedores y financiadores; lideré la implantación de Navision en la filial.'] } }
  ];

  const TOOLS = [
    { kind: 'cash', en: { t: 'Cash runway and GOP scenarios', d: 'An interactive runway model the leadership team can question: shared scenarios, levers for collections, ramp-up and opex, and the working-capital floor that defines runway.', ai: 'Built with Claude from the treasury report and forecast workbook; questions are tied to the exact month and line.' },
      es: { t: 'Runway de caja y escenarios de GOP', d: 'Un modelo de runway interactivo que la dirección puede interrogar: escenarios compartidos, palancas de cobros, crecimiento y gastos, y el suelo de circulante que define el runway.', ai: 'Construido con Claude a partir del informe de tesorería y del modelo de previsión; las preguntas quedan ligadas al mes y a la línea exactos.' } },
    { kind: 'register', en: { t: 'Legal-entity map and contract register', d: 'The group structure, leases and intercompany agreements in one live register, with a clean legal map for auditors and one-click PDF export.', ai: 'An assistant answers questions on the register, cites the source record, and says "not available" instead of guessing.' },
      es: { t: 'Mapa de sociedades y registro de contratos', d: 'La estructura del grupo, los arrendamientos y los contratos intercompañía en un registro vivo, con un mapa legal limpio para auditores y exportación a PDF.', ai: 'Un asistente responde sobre el registro, cita el documento de origen y dice "no disponible" en lugar de inventar.' } },
    { kind: 'pipeline', en: { t: 'Project pipeline CRM', d: 'The hotel-opening pipeline with stage probabilities, weighted keys against the multi-year target, idle-deal flags and the legal vehicle each hotel will use.', ai: 'The team adds deals by voice or by dropping a file; AI maps the data and asks back for anything missing.' },
      es: { t: 'CRM del pipeline de proyectos', d: 'El pipeline de aperturas con probabilidad por fase, llaves ponderadas frente al objetivo plurianual, alertas de operaciones paradas y la sociedad que usará cada hotel.', ai: 'El equipo añade operaciones hablando o soltando un archivo; la IA ordena los datos y pregunta por lo que falte.' } },
    { kind: 'approvals', en: { t: 'Approvals and delegation of authority', d: 'A working prototype of twelve approval workflows with DOA routing, T&E policy checks, SLAs and an audit-trail export, to validate the rules before buying an ERP.', ai: 'Describe a request or drop a receipt: AI picks the workflow, prefills the form and lists its doubts.' },
      es: { t: 'Aprobaciones y delegación de autoridad', d: 'Un prototipo funcional de doce flujos de aprobación con ruta por DOA, controles de política de gastos, SLAs y exportación de auditoría, para validar las reglas antes de comprar un ERP.', ai: 'Describe una solicitud o suelta un ticket: la IA elige el flujo, rellena el formulario y lista sus dudas.' } }
  ];

  const CONCEPTS = [
    { kind: 'board', en: { t: 'One-page board pack', d: 'Quarter results, the bridge from budget to actual, cash and covenants, and the three decisions the board needs to take, on one page and in the same format every quarter.', ai: 'Drafted from the closed ledger and the KPI dataset; the commentary cites the line behind every number and flags what changed since last quarter.' },
      es: { t: 'Board pack de una página', d: 'Resultados del trimestre, el puente de presupuesto a real, caja y covenants, y las tres decisiones que el consejo debe tomar, en una página y con el mismo formato cada trimestre.', ai: 'Se redacta desde el cierre contable y el dataset de KPIs; el comentario cita la línea detrás de cada cifra y señala qué cambió desde el trimestre anterior.' } },
    { kind: 'management', en: { t: 'Monthly pack by property', d: 'Revenue, GOP, occupancy and ADR for every hotel against budget and last year, ready on day three after close, with the exceptions ranked first.', ai: 'AI writes the first variance commentary for each property; the controller reviews and signs it off.' },
      es: { t: 'Pack mensual por hotel', d: 'Ingresos, GOP, ocupación y ADR de cada hotel frente a presupuesto y año anterior, listo el tercer día tras el cierre, con las excepciones primero.', ai: 'La IA redacta el primer comentario de desviaciones de cada hotel; el controller lo revisa y lo firma.' } },
    { kind: 'consolidated', en: { t: 'Multi-entity consolidation', d: 'Group close across the operating companies and project SPEs, with intercompany eliminations, a JGAAP-to-IFRS bridge and an audit trail per adjustment.', ai: 'Intercompany mismatches are matched and explained automatically before the close meeting, not after it.' },
      es: { t: 'Consolidación multisociedad', d: 'Cierre de grupo de las operadoras y las SPEs de proyecto, con eliminaciones intercompañía, puente de JGAAP a NIIF y trazabilidad de cada ajuste.', ai: 'Los descuadres intercompañía se cruzan y se explican solos antes de la reunión de cierre, no después.' } },
    { kind: 'model', en: { t: 'Valuation and exit-readiness model', d: 'A DCF by asset and for the group, tied to the business plan, with sensitivities on rate, occupancy and exit yield: the model an investor\'s due diligence asks for first.', ai: 'Built-in checks catch broken links and circular logic; questions from the data room are answered from the model with the cell reference.' },
      es: { t: 'Modelo de valoración y preparación para la salida', d: 'Un DCF por activo y de grupo, ligado al plan de negocio, con sensibilidades a tipo, ocupación y exit yield: el modelo que pide primero la due diligence de un inversor.', ai: 'Los controles integrados detectan vínculos rotos y lógica circular; las preguntas del data room se responden desde el modelo con la referencia de la celda.' } }
  ];

  const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const careerEl = document.getElementById('career-list'), toolEl = document.getElementById('tool-list'), conceptEl = document.getElementById('concept-list');
  let unmounts = [];
  function render() {
    unmounts.forEach(u => u()); unmounts = [];
    const l = document.documentElement.lang === 'es' ? 'es' : 'en';
    careerEl.innerHTML = CAREER.map(c => {
      if (c.gap) return `<p class="gap">${esc(c.gap[l])}</p>`;
      const d = c[l];
      return `<article class="seg">
        <div>
          <span class="when">${esc(l === 'es' ? c.whenEs : c.when)}</span>
          <div class="label">${esc(d.label)}</div>
          <h3>${esc(d.t)}</h3>
          <div class="where">${esc(d.where)}</div>
          <div class="kpi">${d.kpi.map(([v, s]) => `<div><b>${esc(v)}</b><span>${esc(s)}</span></div>`).join('')}</div>
        </div>
        <div><p class="ctx">${esc(d.ctx)}</p><ul>${d.pts.map(p => `<li>${esc(p)}</li>`).join('')}</ul></div>
      </article>`; }).join('');
    const fig = l === 'es' ? 'Figura' : 'Figure', smp = l === 'es' ? 'Datos de ejemplo' : 'Sample data';
    const card = (c, i, n, tag, cls) => { const d = c[l];
      return `<article class="tool">
        <figure><div class="frame"><canvas data-kind="${c.kind}" aria-hidden="true"></canvas></div><figcaption><span>${fig} 3.${n + i}</span><span>${smp}</span></figcaption></figure>
        <span class="tag ${cls}">${tag}</span><h3>${esc(d.t)}</h3><p>${esc(d.d)}</p><p class="ai">${esc(d.ai)}</p>
      </article>`; };
    toolEl.innerHTML = TOOLS.map((c, i) => card(c, i, 1, l === 'es' ? 'Construido y en uso' : 'Built and in use', '')).join('');
    conceptEl.innerHTML = CONCEPTS.map((c, i) => card(c, i, TOOLS.length + 1, l === 'es' ? 'Concepto' : 'Concept', 'concept')).join('');
    [...toolEl.querySelectorAll('canvas'), ...conceptEl.querySelectorAll('canvas')].forEach((cv, i) => unmounts.push(PrizmaPreview.mount(cv, cv.dataset.kind, { lazy: true, offset: i * 1.4 })));
    if (window.PrizmaReveal) PrizmaReveal([...careerEl.querySelectorAll('.seg'), ...toolEl.querySelectorAll('.tool'), ...conceptEl.querySelectorAll('.tool')]);
  }
  window.Portfolio = { render };
})();
