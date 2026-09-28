/* ============ contenido ============ */
const PROBLEMS = [
  { pain: { es: "Hicimos un piloto de IA que funcionaba en la demo y nunca llegó a producción.", en: "We built an AI pilot that worked in the demo and never reached production." },
    fix:  { es: "<b>Lo construimos para producción desde el día uno:</b> API, evaluación contra casos reales, trazas de cada respuesta y control humano donde importa.", en: "<b>We build for production from day one:</b> an API, evaluation against real cases, traces for every answer and human review where it matters." } },
  { pain: { es: "Tenemos muchos datos, pero cada área tiene su número y nadie confía en los reportes.", en: "We have plenty of data, but every team has its own number and nobody trusts the reports." },
    fix:  { es: "<b>Una sola fuente de verdad:</b> pipelines y modelos de datos con definiciones compartidas y dueños claros.", en: "<b>One source of truth:</b> pipelines and data models with shared definitions and clear owners." } },
  { pain: { es: "Invertimos en marketing y no sabemos qué parte realmente genera ventas.", en: "We spend on marketing and don't know which part actually drives sales." },
    fix:  { es: "<b>Medición causal:</b> controles sintéticos y experimentos para separar el impacto incremental de lo que iba a pasar igual.", en: "<b>Causal measurement:</b> synthetic controls and experiments to separate incremental impact from what would have happened anyway." } },
  { pain: { es: "Damos el mismo descuento a todos y gastamos presupuesto en clientes que iban a comprar igual.", en: "We give everyone the same discount and waste budget on customers who would have bought anyway." },
    fix:  { es: "<b>Decisiones personalizadas:</b> modelos que eligen la mejor oferta para cada cliente y aprenden de cada resultado.", en: "<b>Personalized decisions:</b> models that pick the best offer for each customer and learn from every outcome." } },
  { pain: { es: "Aprobamos crédito o detectamos fraude con reglas que ya no alcanzan.", en: "We approve credit or catch fraud with rules that no longer keep up." },
    fix:  { es: "<b>Modelos de riesgo y fraude</b> para clientes nuevos y recurrentes, con el punto de corte elegido según cuánto riesgo tolera el negocio.", en: "<b>Risk and fraud models</b> for new and returning customers, with the cut-off set by how much risk the business will accept." } },
  { pain: { es: "El equipo pierde horas clasificando, buscando y copiando datos de documentos.", en: "The team loses hours classifying, searching and copying data from documents." },
    fix:  { es: "<b>Agentes que hacen el trabajo repetitivo:</b> leen, clasifican y completan, y derivan a una persona solo los casos dudosos.", en: "<b>Agents that do the repetitive work:</b> they read, classify and fill in, and hand only the unclear cases to a person." } },
];

const ICONS = {
  compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M15.5 8.5 13.5 13.5 8.5 15.5 10.5 10.5Z"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M13 3 5 14h6l-1 7 8-11h-6l1-7Z"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/></svg>',
  people: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="8" r="3.2"/><path d="M3 20c.6-3.4 3-5.4 6-5.4s5.4 2 6 5.4"/><circle cx="17" cy="9" r="2.4"/><path d="M16.5 14.2c2.4.2 4 1.9 4.5 4.8"/></svg>',
};

const SERVICES = [
  { id: "estrategia", icon: "compass", tint: "var(--t1)", ink: "#2c5561",
    name: { es: "Estrategia de IA y datos", en: "AI & data strategy" },
    promise: { es: "Saber dónde la IA genera ventaja en tu empresa y dónde no conviene usarla.", en: "Know where AI creates an advantage in your company and where it isn't worth it." },
    intro: { es: "Muchas empresas saben que necesitan IA pero no saben por dónde empezar. Relevamos procesos y datos, priorizamos casos de uso con un caso de negocio para cada uno y armamos una hoja de ruta que va de resultados rápidos a nuevas fuentes de ingreso.", en: "Many companies know they need AI but not where to start. We map processes and data, prioritize use cases with a business case for each, and build a roadmap that goes from quick wins to new revenue streams." },
    tracks: [{ items: [
      { t: { es: "Taller de estrategia de IA", en: "AI strategy workshop" }, d: { es: "Sesiones con la dirección para entender qué puede y qué no puede hacer la IA hoy, y salir con los primeros casos de uso concretos.", en: "Sessions with leadership to understand what AI can and can't do today, and leave with the first concrete use cases." }, c: { es: ["Alfabetización ejecutiva", "Casos priorizados", "Visión compartida"], en: ["Executive literacy", "Prioritized use cases", "Shared vision"] } },
      { t: { es: "Diagnóstico y hoja de ruta", en: "Assessment & roadmap" }, d: { es: "Diagnóstico de datos y procesos, priorización por impacto y costo, y casos de negocio con retorno estimado, ordenados en fases.", en: "Data and process assessment, prioritization by impact and cost, and business cases with estimated return, laid out in phases." }, c: { es: ["Diagnóstico", "Casos de negocio con ROI", "Plan por fases"], en: ["Assessment", "ROI business cases", "Phased plan"] } },
      { t: { es: "Madurez de datos", en: "Data maturity review" }, d: { es: "Revisión de la calidad, disponibilidad y gobierno de tus datos antes de invertir en modelos. Sabés qué hay que arreglar primero.", en: "Review of data quality, availability and governance before investing in models. You learn what to fix first." }, c: { es: ["Calidad de datos", "Brechas", "Próximos pasos"], en: ["Data quality", "Gaps", "Next steps"] } },
      { t: { es: "Gobierno y cumplimiento de IA", en: "AI governance & compliance" }, d: { es: "Principios, roles, políticas de riesgo y reglas de acceso a datos para usar IA con control a medida que crece.", en: "Principles, roles, risk policies and data-access rules to use AI with control as it scales." }, c: { es: ["Modelo operativo", "Roles y decisiones", "Políticas de riesgo"], en: ["Operating model", "Roles & decision rights", "Risk policies"] } },
    ] }] },
  { id: "sistemas", icon: "bolt", tint: "var(--t2)", ink: "#7a5718",
    name: { es: "Sistemas de IA y decisión", en: "AI & decision systems" },
    promise: { es: "IA que decide y actúa sobre tus procesos, no solo que responde preguntas.", en: "AI that decides and acts on your processes, not just answers questions." },
    intro: { es: "Agentes, modelos predictivos y sistemas de decisión construidos sobre tu stack y puestos en producción, con evaluación, trazabilidad y revisión humana donde hace falta. Trabajamos en dos frentes: tu operación interna y los productos que le vendés a tus clientes.", en: "Agents, predictive models and decision systems built on your stack and shipped to production, with evaluation, traceability and human review where needed. We work on two fronts: your internal operations and the products you sell to your customers." },
    tracks: [
      { name: { es: "IA para tu operación", en: "AI for your operations" }, items: [
        { t: { es: "Automatización de procesos con IA", en: "AI process automation" }, d: { es: "Flujos de punta a punta con muchas excepciones, donde las reglas fijas no alcanzan: clasificación, extracción, ruteo y decisiones asistidas.", en: "End-to-end workflows full of exceptions, where fixed rules fall short: classification, extraction, routing and assisted decisions." }, c: { es: ["Flujos de trabajo", "Excepciones", "Ruteo asistido"], en: ["Workflows", "Exceptions", "Assisted routing"] } },
        { t: { es: "Procesamiento y generación de documentos", en: "Document processing & generation" }, d: { es: "Lectura de facturas, contratos y formularios, y generación de informes y manuales a partir de muchas fuentes.", en: "Reading invoices, contracts and forms, and generating reports and manuals from many sources." }, c: { es: ["Extracción", "Validación", "Generación"], en: ["Extraction", "Validation", "Generation"] } },
        { t: { es: "Agentes de conocimiento interno", en: "Internal knowledge agents" }, d: { es: "Asistentes que responden con la documentación de la empresa (RAG), citando la fuente y respetando permisos por rol.", en: "Assistants that answer from company documentation (RAG), citing sources and respecting role-based permissions." }, c: { es: ["RAG", "Permisos por rol", "Citas a la fuente"], en: ["RAG", "Role permissions", "Source citations"] } },
        { t: { es: "Copilotos por área", en: "Function copilots" }, d: { es: "Asistentes pensados para una función concreta: atención al cliente, comercial, riesgo, operaciones.", en: "Assistants built for one function: customer service, sales, risk, operations." }, c: { es: ["Atención", "Comercial", "Operaciones"], en: ["Support", "Sales", "Operations"] } },
        { t: { es: "Analítica conversacional", en: "Conversational analytics" }, d: { es: "Preguntas en lenguaje natural sobre tus datos, traducidas a SQL validado, y agentes que explican por qué se movió una métrica.", en: "Natural-language questions over your data, turned into validated SQL, and agents that explain why a metric moved." }, c: { es: ["Texto a SQL", "Diagnóstico de KPIs", "Tableros"], en: ["Text to SQL", "KPI diagnosis", "Dashboards"] } },
        { t: { es: "Modelos predictivos y de riesgo", en: "Predictive & risk models" }, d: { es: "Riesgo crediticio, fraude, abandono de clientes, pronóstico de demanda y segmentación, integrados a la operación.", en: "Credit risk, fraud, churn, demand forecasting and segmentation, wired into operations." }, c: { es: ["Riesgo y fraude", "Churn", "Forecasting"], en: ["Risk & fraud", "Churn", "Forecasting"] } },
        { t: { es: "Optimización y personalización", en: "Optimization & personalization" }, d: { es: "Sistemas que eligen la mejor acción para cada cliente (bandits, uplift) o el mejor equilibrio entre ganancia y riesgo.", en: "Systems that pick the best action for each customer (bandits, uplift) or the best balance between profit and risk." }, c: { es: ["Multi-armed bandits", "Uplift", "Frontera de Pareto"], en: ["Multi-armed bandits", "Uplift", "Pareto frontier"] } },
        { t: { es: "Medición causal y experimentación", en: "Causal measurement & experimentation" }, d: { es: "Cuánto aporta realmente cada campaña o iniciativa, con controles sintéticos, tests A/B y diseño de experimentos.", en: "How much each campaign or initiative really adds, using synthetic controls, A/B tests and experiment design." }, c: { es: ["Controles sintéticos", "Tests A/B", "Incrementalidad"], en: ["Synthetic controls", "A/B tests", "Incrementality"] } },
      ] },
      { name: { es: "IA en tus productos", en: "AI in your products" }, items: [
        { t: { es: "Interfaces conversacionales", en: "Conversational interfaces" }, d: { es: "Experiencias en lenguaje natural dentro de tu producto: diálogo, manejo de intención, contexto y acciones seguras.", en: "Natural-language experiences inside your product: dialogue, intent handling, context and safe actions." }, c: { es: ["Diseño de diálogo", "Intenciones", "Acciones seguras"], en: ["Dialogue design", "Intents", "Safe actions"] } },
        { t: { es: "Productos agénticos", en: "Agentic products" }, d: { es: "Agentes que resuelven tareas de varios pasos para tus usuarios, con guardrails y evaluación continua.", en: "Agents that complete multi-step tasks for your users, with guardrails and continuous evaluation." }, c: { es: ["Orquestación", "Guardrails", "Evaluación"], en: ["Orchestration", "Guardrails", "Evaluation"] } },
        { t: { es: "Funciones de IA embebidas", en: "Embedded AI features" }, d: { es: "Clasificación, búsqueda semántica, resúmenes o visión por computadora como funciones de tu producto, expuestas por API.", en: "Classification, semantic search, summaries or computer vision as product features, exposed through an API." }, c: { es: ["API", "Visión", "Búsqueda semántica"], en: ["API", "Vision", "Semantic search"] } },
        { t: { es: "Conectores, plugins y skills", en: "Connectors, plugins & skills" }, d: { es: "Integraciones de tu producto con las principales plataformas de IA, incluidos servidores MCP.", en: "Integrations between your product and the major AI platforms, including MCP servers." }, c: { es: ["MCP", "Plugins", "Integraciones"], en: ["MCP", "Plugins", "Integrations"] } },
      ] },
    ] },
  { id: "plataforma", icon: "layers", tint: "var(--t3)", ink: "#3b5a3a",
    name: { es: "Plataforma de datos e IA", en: "Data & AI platform" },
    promise: { es: "La infraestructura que mantiene la IA funcionando, barata y trazable una vez que está en todos lados.", en: "The infrastructure that keeps AI running, affordable and traceable once it's everywhere." },
    intro: { es: "La mayoría de los proyectos de IA no fallan en el modelo: fallan en los datos, los costos y la operación. Construimos las bases para que tus modelos y agentes rindan, cuesten lo previsto y cada decisión se pueda auditar.", en: "Most AI projects don't fail at the model: they fail at the data, the costs and the operations. We build the foundations so your models and agents perform, cost what you planned and every decision can be audited." },
    tracks: [{ items: [
      { t: { es: "Plataformas de datos listas para IA", en: "AI-ready data platforms" }, d: { es: "Datos unificados, modelados y gobernados para analítica y modelos confiables.", en: "Unified, modeled and governed data for reliable analytics and models." }, c: { es: ["Modelado de datos", "Gobierno", "Pipelines"], en: ["Data modeling", "Governance", "Pipelines"] } },
      { t: { es: "MLOps", en: "MLOps" }, d: { es: "Orquestación con Airflow, CI/CD y monitoreo de modelos en producción, para que no se degraden sin que nadie lo note.", en: "Airflow orchestration, CI/CD and monitoring for models in production, so they don't degrade unnoticed." }, c: { es: ["Airflow", "CI/CD", "Monitoreo"], en: ["Airflow", "CI/CD", "Monitoring"] } },
      { t: { es: "Capa de conocimiento para agentes", en: "Knowledge layer for agents" }, d: { es: "Ingesta, indexado, embeddings, control de acceso y trazabilidad: la base sobre la que razonan tus agentes.", en: "Ingestion, indexing, embeddings, access control and traceability: the base your agents reason on." }, c: { es: ["Ingesta e indexado", "Recuperación", "Control de acceso"], en: ["Ingestion & indexing", "Retrieval", "Access control"] } },
      { t: { es: "Plataforma de agentes", en: "Agent platform" }, d: { es: "Orquestación, gobierno y observabilidad estándar para que muchos agentes convivan sin caos.", en: "Standard orchestration, governance and observability so many agents can coexist without chaos." }, c: { es: ["Orquestación", "Ciclo de vida", "Escalabilidad"], en: ["Orchestration", "Lifecycle", "Scalability"] } },
      { t: { es: "Cloud, costos y observabilidad", en: "Cloud, cost & observability" }, d: { es: "Arquitecturas cloud seguras, control de costos de modelos y trazas de punta a punta de cada respuesta en producción.", en: "Secure cloud architectures, model cost control and end-to-end traces for every answer in production." }, c: { es: ["Arquitectura cloud", "Control de costos", "Trazas"], en: ["Cloud architecture", "Cost control", "Tracing"] } },
    ] }] },
  { id: "adopcion", icon: "people", tint: "var(--t4)", ink: "#4d4873",
    name: { es: "Adopción y capacitación", en: "Adoption & enablement" },
    promise: { es: "Que tu equipo use de verdad lo que se construye, con uso medido y no solo capacitaciones.", en: "Make sure your team actually uses what gets built, with measured usage, not just training." },
    intro: { es: "La tecnología no transforma una organización: la transforma la gente que la usa. Diagnosticamos qué tan preparado está tu equipo, capacitamos por rol, formamos referentes internos y medimos que el uso crezca.", en: "Technology doesn't transform an organization; the people using it do. We assess how ready your team is, train by role, build internal champions and measure that usage grows." },
    tracks: [{ items: [
      { t: { es: "Diagnóstico de preparación", en: "Readiness assessment" }, d: { es: "Qué tan lista está tu organización para adoptar IA, dónde están las brechas y por dónde empezar.", en: "How ready your organization is to adopt AI, where the gaps are and where to start." }, c: { es: ["Madurez", "Brechas", "Próximos pasos"], en: ["Maturity", "Gaps", "Next steps"] } },
      { t: { es: "Programas de IA por rol", en: "Role-based AI programs" }, d: { es: "Formación distinta para dirección, mandos medios y equipos, para pasar de la curiosidad a la práctica.", en: "Different training for leadership, middle management and teams, to go from curiosity to practice." }, c: { es: ["Dirección", "Mandos medios", "Equipos"], en: ["Leadership", "Managers", "Teams"] } },
      { t: { es: "Red de referentes internos", en: "Internal champions network" }, d: { es: "Personas de cada área que impulsan el uso de IA y ayudan a sus compañeros, con un método para que el impulso dure.", en: "People in each team who drive AI use and help their peers, with a method that keeps momentum going." }, c: { es: ["Selección", "Guías", "Seguimiento"], en: ["Selection", "Playbooks", "Follow-up"] } },
      { t: { es: "Gestión del cambio", en: "Change management" }, d: { es: "Un proceso estructurado para convertir la resistencia en adopción, con métricas de uso.", en: "A structured process to turn resistance into adoption, with usage metrics." }, c: { es: ["Plan de cambio", "Resistencias", "Métricas de uso"], en: ["Change plan", "Resistance", "Usage metrics"] } },
      { t: { es: "Taller de ingeniería de IA", en: "AI engineering workshop" }, d: { es: "Formación práctica para equipos técnicos: diseño de sistemas de IA, agentes, integración y evaluación.", en: "Hands-on training for technical teams: AI system design, agents, integration and evaluation." }, c: { es: ["Diseño de sistemas", "Agentes", "Evaluación"], en: ["System design", "Agents", "Evaluation"] } },
      { t: { es: "Desarrollo asistido por IA", en: "AI-assisted development" }, d: { es: "Puesta en marcha de agentes de código, reglas y flujos de trabajo para que tu equipo programe con IA de forma segura.", en: "Setting up coding agents, guardrails and workflows so your team codes with AI safely." }, c: { es: ["Agentes de código", "Guardrails", "Flujo de trabajo"], en: ["Coding agents", "Guardrails", "Workflow"] } },
    ] }] },
];

const CASES = [
  { sector: { es: "Comercio exterior", en: "Foreign trade" }, tech: "Agentes · LangGraph",
    title: { es: "Clasificación arancelaria NCM con agentes", en: "NCM tariff classification with agents" },
    problem: { es: "Clasificar un producto en la nomenclatura aduanera lleva tiempo de un especialista y un error se paga caro en aranceles y demoras.", en: "Classifying a product in the customs nomenclature takes a specialist's time, and a mistake is costly in duties and delays." },
    solution: { es: "Un agente recorre la nomenclatura capítulo por capítulo hasta la posición NCM y, en paralelo, busca precios de referencia en el mercado local.", en: "An agent walks the nomenclature chapter by chapter down to the NCM code and, in parallel, searches local reference prices." },
    result: { es: "Evaluado contra un set de 50 productos validados, con trazas completas de cada corrida y expuesto por API.", en: "Evaluated against a set of 50 validated products, with full traces of every run, and exposed through an API." },
    feature: true },
  { sector: { es: "E-commerce · Fintech", en: "E-commerce · Fintech" }, tech: "Multi-armed bandit",
    title: { es: "El cupón correcto para cada usuario", en: "The right coupon for each user" },
    problem: { es: "Los cupones se asignaban con reglas generales y gran parte del presupuesto iba a usuarios que habrían convertido igual.", en: "Coupons were assigned by broad rules, and much of the budget went to users who would have converted anyway." },
    solution: { es: "Un modelo de bandits elige el mejor cupón para cada usuario y aprende de cada canje para optimizar uso y activación de tarjeta.", en: "A bandit model picks the best coupon for each user and learns from every redemption to optimize usage and card activation." },
    metrics: [{ v: "+53%", l: { es: "ROAS vs. estrategia habitual", en: "ROAS vs. business as usual" } }, { v: "−35%", l: { es: "costo por adquisición", en: "cost per acquisition" } }, { v: "+30%", l: { es: "activaciones incrementales", en: "incremental activations" } }] },
  { sector: { es: "E-commerce", en: "E-commerce" }, tech: "Feature store · ETL",
    title: { es: "Un feature store para todos los modelos", en: "One feature store for every model" },
    problem: { es: "Cada modelo recalculaba sus propias variables: procesos duplicados, costos altos y caídas frecuentes en producción.", en: "Every model recomputed its own features: duplicated jobs, high costs and frequent production outages." },
    solution: { es: "Arquitectura de un feature store centralizado con más de 10 ETLs y más de 200 variables reutilizables.", en: "Architecture for a centralized feature store with 10+ ETLs and 200+ reusable features." },
    metrics: [{ v: "−90%", l: { es: "costo de procesamiento", en: "processing cost" } }, { v: "−95%", l: { es: "caídas en producción", en: "production downtime" } }] },
  { sector: { es: "Marketing", en: "Marketing" }, tech: "Inferencia causal",
    title: { es: "Cuánto vende de verdad cada campaña", en: "How much each campaign really sells" },
    problem: { es: "La atribución tradicional no distinguía entre ventas causadas por la campaña y ventas que iban a ocurrir igual.", en: "Traditional attribution couldn't tell sales caused by a campaign from sales that would have happened anyway." },
    solution: { es: "Co-desarrollo de un framework de inferencia causal con controles sintéticos para medir el impacto incremental de cada inversión.", en: "Co-developed a causal inference framework with synthetic controls to measure the incremental impact of each investment." },
    result: { es: "El equipo de marketing decide presupuesto con impacto incremental medido, no con correlaciones.", en: "The marketing team sets budget using measured incremental impact, not correlations." } },
  { sector: { es: "Analítica", en: "Analytics" }, tech: "Agente LLM",
    title: { es: "Un agente que explica por qué cambió un KPI", en: "An agent that explains why a KPI moved" },
    problem: { es: "Explicar la variación mensual del valor por usuario llevaba días de análisis manual antes de cada reunión.", en: "Explaining the monthly change in value per user took days of manual analysis before every meeting." },
    solution: { es: "Un agente que descompone la variación, identifica los factores que la explican y redacta los hallazgos.", en: "An agent that breaks down the change, identifies the drivers behind it and writes up the findings." },
    result: { es: "Sus conclusiones se usan en presentaciones a la dirección.", en: "Its findings are used in board-level presentations." } },
  { sector: { es: "Fintech", en: "Fintech" }, tech: "Optimización",
    title: { es: "Cuánto fraude tolerar sin perder ventas", en: "How much fraud to tolerate without losing sales" },
    problem: { es: "Un filtro de fraude muy estricto rechaza buenos clientes; uno laxo deja pasar pérdidas.", en: "A strict fraud filter rejects good customers; a loose one lets losses through." },
    solution: { es: "Sistema de optimización que traza la frontera de Pareto entre ganancia y riesgo para elegir el nivel de tolerancia óptimo.", en: "An optimization system that maps the Pareto frontier between profit and risk to choose the optimal tolerance level." },
    result: { es: "El punto de corte pasa a ser una decisión de negocio explícita y medible.", en: "The cut-off becomes an explicit, measurable business decision." } },
  { sector: { es: "Banca · Fintech", en: "Banking · Fintech" }, tech: "ML · Grafos",
    title: { es: "Riesgo crediticio y detección temprana", en: "Credit risk and early warning" },
    problem: { es: "Los criterios de aprobación no detectaban a tiempo a los malos pagadores, ni nuevos ni recurrentes.", en: "Approval criteria didn't catch bad payers in time, whether new or returning." },
    solution: { es: "Modelos para clientes nuevos y recurrentes, detección de comunidades de fraude con grafos, alertas tempranas, rating de empresas a partir de balances y estimación de ingresos con pocos datos.", en: "Models for new and returning customers, graph-based fraud community detection, early warnings, company ratings from financial statements, and income estimation with sparse data." },
    result: { es: "Riesgo gestionado de forma preventiva, antes del impago.", en: "Risk managed proactively, before default." } },
  { sector: { es: "Atención al cliente", en: "Customer service" }, tech: "LangChain · RAG",
    title: { es: "Asistente de atención con la base de conocimiento", en: "Support assistant on the knowledge base" },
    problem: { es: "Las consultas repetidas saturaban al equipo de atención.", en: "Repeated questions overloaded the support team." },
    solution: { es: "Chatbot con RAG sobre la documentación de la empresa, acompañado de un modelo de churn y segmentación de clientes con embeddings.", en: "A RAG chatbot on company documentation, alongside a churn model and embedding-based customer segmentation." },
    result: { es: "Respuestas consistentes para las preguntas frecuentes y foco del equipo en los casos complejos.", en: "Consistent answers to common questions, with the team focused on complex cases." } },
  { sector: { es: "Industria · Farma", en: "Manufacturing · Pharma" }, tech: "Forecasting",
    title: { es: "Pronóstico de demanda y satisfacción", en: "Demand and satisfaction forecasting" },
    problem: { es: "La planificación dependía de proyecciones manuales y la satisfacción del cliente se medía tarde.", en: "Planning relied on manual projections and customer satisfaction was measured too late." },
    solution: { es: "Modelos de series de tiempo para demanda, predicción de NPS y tableros de KPIs para marketing y ventas.", en: "Time-series demand models, NPS prediction and KPI dashboards for marketing and sales." },
    result: { es: "Planificación basada en pronósticos y alertas antes de que caiga la satisfacción.", en: "Forecast-driven planning and warnings before satisfaction drops." } },
];

/* ============ render ============ */
let LANG = "es";
try { LANG = localStorage.getItem("lang") === "en" ? "en" : "es"; } catch (e) {}
const L = o => (o && typeof o === "object" && "es" in o) ? o[LANG] : o;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const T = { problem: { es: "Problema", en: "Problem" }, solution: { es: "Solución", en: "Solution" }, result: { es: "Resultado", en: "Result" },
  explore: { es: "Ver catálogo", en: "See catalog" }, close: { es: "Cerrar", en: "Close" },
  ctaT: { es: "¿Tenés un problema de este tipo?", en: "Have a problem like this?" },
  ctaP: { es: "Contanos qué querés resolver y te recomendamos por dónde empezar.", en: "Tell us what you want to solve and we'll recommend where to start." },
  ctaB: { es: "Hablemos", en: "Let's talk" }, other: { es: "Otro / no sé todavía", en: "Other / not sure yet" },
  msgPh: { es: "Qué proceso o decisión, qué datos tienen hoy, qué les gustaría lograr", en: "Which process or decision, what data you have today, what you'd like to achieve" },
  err: { es: "Completá tu nombre y un email válido para que podamos responderte.", en: "Enter your name and a valid email so we can reply." },
  ok: { es: "Listo. Esta versión es una maqueta: todavía no envía mensajes.", en: "Done. This version is a mockup: it doesn't send messages yet." },
  items: { es: "servicios", en: "services" } };

function renderProblems() {
  document.getElementById("problems").innerHTML = PROBLEMS.map(p =>
    `<article class="prob"><p class="pain">${esc(L(p.pain))}</p><p class="fix">${L(p.fix)}</p></article>`).join("");
}
function countItems(s) { return s.tracks.reduce((n, t) => n + t.items.length, 0); }
function renderServices() {
  document.getElementById("services").innerHTML = SERVICES.map(s => `
    <button class="svc" type="button" data-svc="${s.id}" aria-haspopup="dialog">
      <span class="glyph" style="background:${s.tint};color:${s.ink}">${ICONS[s.icon]}</span>
      <span class="svc-title">${esc(L(s.name))}</span>
      <span class="promise">${esc(L(s.promise))}</span>
      <span class="more"><span>${countItems(s)} ${L(T.items)}</span><span>${L(T.explore)} →</span></span>
    </button>`).join("");
}
function renderCases() {
  document.getElementById("cases").innerHTML = CASES.map(c => {
    const pr = `<div class="pr">
        <div><span class="k">${L(T.problem)}</span><span class="v">${esc(L(c.problem))}</span></div>
        <div><span class="k">${L(T.solution)}</span><span class="v">${esc(L(c.solution))}</span></div>
        ${c.feature && c.result ? `<div><span class="k">${L(T.result)}</span><span class="v">${esc(L(c.result))}</span></div>` : ""}
      </div>`;
    const tail = c.metrics
      ? `<div class="metrics">${c.metrics.map(m => `<div class="metric"><b>${m.v}</b><span>${esc(L(m.l))}</span></div>`).join("")}</div>`
      : (!c.feature && c.result ? `<p class="note">${esc(L(c.result))}</p>` : "");
    const head = `<div class="tag"><span class="pill">${esc(L(c.sector))}</span><span class="pill">${esc(c.tech)}</span></div><h3>${esc(L(c.title))}</h3>`;
    if (c.feature) {
      return `<article class="case feature"><div style="display:flex;flex-direction:column;gap:16px">${head}${pr}</div>
        <div class="flow" role="img" aria-label="${LANG === "es" ? "Recorrido del agente desde la descripción hasta la posición NCM" : "Agent path from product description to NCM code"}">
          <div class="flow-row"><span class="k">${LANG === "es" ? "entrada" : "input"}</span><span class="v">"${LANG === "es" ? "Auriculares inalámbricos bluetooth" : "Wireless bluetooth headphones"}"</span><span class="s">↓</span></div>
          <div class="flow-row"><span class="k">${LANG === "es" ? "capítulo" : "chapter"}</span><span class="v">85 · ${LANG === "es" ? "Máquinas y aparatos eléctricos" : "Electrical machinery"}</span><span class="s">✓</span></div>
          <div class="flow-row"><span class="k">${LANG === "es" ? "partida" : "heading"}</span><span class="v">85.18 · ${LANG === "es" ? "Micrófonos, auriculares…" : "Microphones, headphones…"}</span><span class="s">✓</span></div>
          <div class="flow-row hl"><span class="k">NCM</span><span class="v">8518.30.00</span><span class="s">top-8</span></div>
          <div class="flow-row"><span class="k">${LANG === "es" ? "precios" : "prices"}</span><span class="v">${LANG === "es" ? "búsqueda web en paralelo" : "parallel web search"}</span><span class="s">∥</span></div>
        </div></article>`;
    }
    return `<article class="case">${head}${pr}${tail}</article>`;
  }).join("");
}
function renderForm() {
  const sel = document.getElementById("f-topic");
  const cur = sel.selectedIndex;
  sel.innerHTML = SERVICES.map(s => `<option>${esc(L(s.name))}</option>`).join("") + `<option>${esc(L(T.other))}</option>`;
  if (cur >= 0) sel.selectedIndex = cur;
  document.getElementById("f-msg").placeholder = L(T.msgPh);
}

/* panel de servicio */
const sheet = document.getElementById("sheet"), backdrop = document.getElementById("backdrop");
let openId = null, lastFocus = null;
function renderSheet(id) {
  const s = SERVICES.find(x => x.id === id);
  let n = 0;
  sheet.innerHTML = `
    <div class="sheet-top">
      <span class="glyph" style="width:40px;height:40px;border-radius:10px;display:grid;place-items:center;background:${s.tint};color:${s.ink}">${ICONS[s.icon].replace('<svg', '<svg width="20" height="20"')}</span>
      <button class="close" type="button" id="sheet-close" aria-label="${L(T.close)}"><svg width="16" height="16" viewBox="0 0 16 16"><path d="M3 3 13 13 M13 3 3 13" stroke="currentColor" stroke-width="1.6"/></svg></button>
    </div>
    <h2 id="sheet-title">${esc(L(s.name))}</h2>
    <p class="intro">${esc(L(s.intro))}</p>
    ${s.tracks.map(tr => `<div class="track">
      ${tr.name ? `<div class="track-h">${esc(L(tr.name))}</div>` : `<div class="track-h">${countItems(s)} ${L(T.items)}</div>`}
      <div class="items">${tr.items.map(it => { n++; return `
        <div class="item"><span class="n">${String(n).padStart(2, "0")}</span><h4>${esc(L(it.t))}</h4>
          <p>${esc(L(it.d))}</p><div class="chips">${L(it.c).map(c => `<span class="chip">${esc(c)}</span>`).join("")}</div></div>`; }).join("")}
      </div></div>`).join("")}
    <div class="sheet-cta"><p><strong>${L(T.ctaT)}</strong>${L(T.ctaP)}</p><a class="btn btn-accent" href="#contacto" id="sheet-cta">${L(T.ctaB)}</a></div>`;
  document.getElementById("sheet-close").onclick = closeSheet;
  document.getElementById("sheet-cta").onclick = () => {
    const idx = SERVICES.findIndex(x => x.id === id);
    document.getElementById("f-topic").selectedIndex = idx;
    closeSheet(false);
  };
}
function openSheet(id) {
  lastFocus = document.activeElement; openId = id;
  renderSheet(id);
  sheet.hidden = false; backdrop.hidden = false;
  document.body.style.overflow = "hidden";
  sheet.scrollTop = 0;
  document.getElementById("sheet-close").focus();
}
function closeSheet(restore = true) {
  sheet.hidden = true; backdrop.hidden = true; openId = null;
  document.body.style.overflow = "";
  if (restore && lastFocus) lastFocus.focus();
}
document.getElementById("services").addEventListener("click", e => {
  const b = e.target.closest("[data-svc]"); if (b) openSheet(b.dataset.svc);
});
backdrop.addEventListener("click", () => closeSheet());
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && openId) closeSheet();
  if (e.key === "Tab" && openId) {
    const f = sheet.querySelectorAll("button, a[href]");
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

/* idioma */
function setLang(l) {
  LANG = l;
  try { localStorage.setItem("lang", l); } catch (e) {}
  document.body.classList.toggle("lang-es", l === "es");
  document.body.classList.toggle("lang-en", l === "en");
  document.documentElement.lang = l;
  document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === l)));
  renderProblems(); renderServices(); renderCases(); renderForm();
  if (openId) renderSheet(openId);
  const note = document.getElementById("form-note"); note.textContent = "";
}
document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
setLang(LANG);

/* formulario (conectar a un backend o servicio de formularios al desplegar) */
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const note = document.getElementById("form-note");
  const name = this.elements.name.value.trim(), email = this.elements.email.value.trim();
  note.textContent = (!name || !/^\S+@\S+\.\S+$/.test(email)) ? L(T.err) : L(T.ok);
});

/* fondo del hero: grilla de celdas que se encienden en bandas diagonales */
(function () {
  const c = document.getElementById("field"), ctx = c.getContext("2d");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let w, h, t = 0;
  function size() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = c.clientWidth; h = c.clientHeight; c.width = w * dpr; c.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function hash(x, y) { const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return s - Math.floor(s); }
  function draw() {
    ctx.clearRect(0, 0, w, h);
    const g = 14;
    for (let y = 0, j = 0; y < h; y += g, j++) {
      for (let x = 0, i = 0; x < w; x += g, i++) {
        const fx = x / w;
        const wave = Math.sin((x * 0.9 - y * 1.3) * 0.006 - t) * 0.5 + 0.5;
        const n = hash(i, j);
        let a = wave * Math.pow(fx, 1.3) * (0.45 + n * 0.75);
        if (a < 0.1) continue;
        const hot = n > 0.965 && wave > 0.6;
        const s = hot ? 5 : 1.4 + a * 2.4;
        ctx.fillStyle = hot ? `rgba(240,205,142,${Math.min(1, a + .25)})` : `rgba(232,229,222,${a * 0.42})`;
        ctx.fillRect(x + (g - s) / 2, y + (g - s) / 2, s, s);
      }
    }
  }
  function loop() { t += 0.01; draw(); requestAnimationFrame(loop); }
  size(); draw();
  window.addEventListener("resize", () => { size(); draw(); });
  if (!reduce) loop();
})();
