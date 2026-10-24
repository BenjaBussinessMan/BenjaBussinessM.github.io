// Edita estos datos para actualizar el contenido del sitio. / Edit this data to update the site.
// Cada texto visible tiene una version { es, en }. / Every visible text has an { es, en } version.

const ui = {
  es: {
    "meta.title": "Stalin Bonilla | Data Engineer",
    "meta.description": "Portafolio de Stalin Bonilla, Senior Data Engineer y AI Specialist: Data Lakehouse, pipelines, MLOps y gobernanza de datos.",
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.skills": "Habilidades",
    "nav.education": "Educación",
    "nav.contact": "Contacto",
    "lang.label": "Lenguaje",
    "theme.toggle": "Cambiar tema",
    "hero.eyebrow": "Data Science and Data Engineering & AI Specialist · Quito, Ecuador",
    "hero.title": "Soluciones de datos que generan valor de negocio.",
    "hero.lead": "Especialista en Ingeniería de Datos e Inteligencia Artificial con más de 4 años de experiencia en el diseño, construcción y optimización de arquitecturas de datos en la nube. Experto en procesamiento distribuido (PySpark, Databricks), automatización de pipelines (ETL/ELT), gobernanza de datos y despliegue de soluciones MLOps en entornos de producción masivos.",
    "hero.cta.projects": "Ver proyectos",
    "hero.cta.contact": "Contactarme",
    "stats.years": "Años de experiencia",
    "stats.records": "Registros diarios procesados",
    "stats.query": "Reducción en tiempos de consulta",
    "about.title": "Sobre mí",
    "about.p1": "Especialista en Ciencia de Datos e Ingeniería de Datos con más de 4 años de experiencia en el diseño, construcción y optimización de arquitecturas de datos en la nube.",
    "about.p2": "Experto en procesamiento distribuido (PySpark, Databricks), automatización de pipelines ETL/ELT, gobernanza de datos y despliegue de soluciones MLOps en entornos de producción masivos.",
    "projects.title": "Proyectos destacados",
    "projects.problem": "Problema",
    "projects.solution": "Solución",
    "projects.deliverables": "Entregables",
    "projects.demo": "Ver app en vivo",
    "projects.repo": "Ver repositorio",
    "skills.title": "Habilidades",
    "education.title": "Educación y certificaciones",
    "contact.title": "Contacto",
    "contact.text": "¿Tienes un proyecto o una oportunidad? Escríbeme.",
  },
  en: {
    "meta.title": "Stalin Bonilla | Data Engineer",
    "meta.description": "Portfolio of Stalin Bonilla, Senior Data Engineer and AI Specialist: Data Lakehouse, pipelines, MLOps and data governance.",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "lang.label": "Language",
    "theme.toggle": "Toggle theme",
    "hero.eyebrow": "Data Science and Data Engineering & AI Specialist · Quito, Ecuador",
    "hero.title": "Data solutions that create business value.",
    "hero.lead": "Data Engineering and Artificial Intelligence specialist with over 4 years of experience designing, building and optimizing cloud data architectures. Expert in distributed processing (PySpark, Databricks), pipeline automation (ETL/ELT), data governance and deployment of MLOps solutions in large-scale production environments.",
    "hero.cta.projects": "View projects",
    "hero.cta.contact": "Contact me",
    "stats.years": "Years of experience",
    "stats.records": "Daily records processed",
    "stats.query": "Query time reduction",
    "about.title": "About me",
    "about.p1": "Data Science and Data Engineering specialist with over 4 years of experience designing, building and optimizing cloud data architectures.",
    "about.p2": "Expert in distributed processing (PySpark, Databricks), ETL/ELT pipeline automation, data governance and deployment of MLOps solutions in large-scale production environments.",
    "projects.title": "Featured projects",
    "projects.problem": "Problem",
    "projects.solution": "Solution",
    "projects.deliverables": "Deliverables",
    "projects.demo": "View live app",
    "projects.repo": "View repository",
    "skills.title": "Skills",
    "education.title": "Education and certifications",
    "contact.title": "Contact",
    "contact.text": "Have a project or an opportunity? Get in touch.",
  },
};

const projects = [
  {
    title: "End-to-End Enterprise Data Lakehouse & Governance",
    tags: ["PySpark", "Databricks", "Delta Lake", "Unity Catalog", "Power BI"],
    problem: {
      es: "Fragmentación de datos transaccionales en sistemas aislados, sin control de accesos ni calidad centralizada.",
      en: "Transactional data fragmented across isolated systems, with no centralized access control or data quality.",
    },
    solution: {
      es: [
        "Arquitectura Medallion (Bronze, Silver, Gold) en Databricks para procesar más de 1M de registros diarios.",
        "Gobernanza con Unity Catalog: control de acceso basado en roles (RBAC) y linaje de datos.",
        "Optimización de consultas analíticas con una reducción del 40% en los tiempos de ejecución.",
      ],
      en: [
        "Medallion architecture (Bronze, Silver, Gold) on Databricks to process over 1M daily records.",
        "Governance with Unity Catalog: role-based access control (RBAC) and data lineage.",
        "Analytical query optimization, cutting execution times by 40%.",
      ],
    },
    deliverables: {
      es: "Scripts de PySpark, diagramas de arquitectura (Mermaid.js) y tablero ejecutivo en Power BI.",
      en: "PySpark scripts, architecture diagrams (Mermaid.js) and an executive dashboard in Power BI.",
    },
    repo: "https://github.com/BenjaBussinessMan/end-to-end-pipeline_example5",
  },
  {
    title: "Real-Time Streaming Pipeline & Fraud Detection API",
    tags: ["Python", "Apache Kafka", "FastAPI", "Docker", "PostgreSQL"],
    problem: {
      es: "Detectar transacciones anómalas en tiempo real antes de que impacten el balance financiero.",
      en: "Detect anomalous transactions in real time before they affect the financial balance.",
    },
    solution: {
      es: [
        "Pipeline de ingesta en tiempo real con Kafka y consumidores en Python.",
        "API de inferencia ligera con FastAPI, contenedorizada en Docker.",
        "Despliegue del entorno automatizado con docker-compose.",
      ],
      en: [
        "Real-time ingestion pipeline with Kafka and Python consumers.",
        "Lightweight inference API with FastAPI, containerized in Docker.",
        "Automated environment deployment with docker-compose.",
      ],
    },
    deliverables: {
      es: "Código de la API, Dockerfile optimizado (multi-stage build) y pruebas unitarias con Pytest.",
      en: "API code, optimized Dockerfile (multi-stage build) and unit tests with Pytest.",
    },
    repo: "https://github.com/BenjaBussinessMan/pipeline-mode-fraud-detection",
  },
  {
    title: "Insurance Premium Prediction & Actuarial Pricing Analysis",
    tags: ["Python", "scikit-learn", "LightGBM", "XGBoost", "Actuarial Science", "Jupyter"],
    problem: {
      es: "Predecir la prima de seguro de cada cliente y comprobar si el modelo con mejor error también sirve para fijar precios: que la tarifa cuadre, ordene bien los riesgos y no provoque selección adversa.",
      en: "Predict each customer's insurance premium and check whether the model with the lowest error is also suitable for pricing: the rate must balance, rank risks correctly and avoid adverse selection.",
    },
    solution: {
      es: [
        "Exploración y preprocesamiento de 1,2 M de pólizas (nulos informativos, fechas, transformaciones) con pipelines que evitan fuga de datos.",
        "Comparación con validación cruzada de modelos lineales, LightGBM, XGBoost y un ensamble ponderado (RMSLE 1,0969 del baseline a 1,0484).",
        "Aplicación de teoría actuarial: credibilidad de Bühlmann, bonus-malus, GLM Gamma, boosting Tweedie, corrección de Duan, Gini, lift y doble lift.",
        "Hallazgo clave: el ensamble con mejor RMSLE cubría solo el 68,5 % de lo esperado cobrar y ordenaba peor el riesgo (Gini 0,05 frente a ~0,19 del boosting Gamma/Tweedie).",
      ],
      en: [
        "Exploration and preprocessing of 1.2M policies (informative nulls, dates, transformations) with pipelines that prevent data leakage.",
        "Cross-validated comparison of linear models, LightGBM, XGBoost and a weighted ensemble (RMSLE from 1.0969 at baseline to 1.0484).",
        "Application of actuarial theory: Bühlmann credibility, bonus-malus, Gamma GLM, Tweedie boosting, Duan smearing correction, Gini, lift and double lift.",
        "Key finding: the ensemble with the best RMSLE collected only 68.5% of the expected premium and ranked risk worse (Gini 0.05 versus ~0.19 for Gamma/Tweedie boosting).",
      ],
    },
    deliverables: {
      es: "Notebook reproducible con todo el análisis, README que explica cada decisión y su base actuarial, y dos archivos de envío (uno para RMSLE y otro con la prima equilibrada). Datos de Kaggle, usados como ejemplo.",
      en: "Reproducible notebook with the full analysis, a README explaining each decision and its actuarial basis, and two submission files (one for RMSLE and one with the balanced premium). Kaggle data, used as an example.",
    },
    repo: "https://github.com/BenjaBussinessMan/insurance-cost-prediction-example3",
  },
  {
    title: "Customer Segmentation & Profiling App (Streamlit + Docker)",
    tags: ["Python", "Streamlit", "Plotly", "pandas", "Polars", "Docker", "Render", "Gemini"],
    problem: {
      es: "Un análisis de perfilamiento de clientes de una red de concesionarios automotrices diseñado para ser mostrado mediante una app analitica. El objetivo es mostrar como ir más alla de solo explorarlo en un notebook, sino reproducirlo y compartirlo con el negocio.",
      en: "A customer profiling analysis for an automotive dealership network, designed to be presented through an analytical app. The goal is to show how to go beyond exploring it in a notebook: reproduce it and share it with the business.",
    },
    solution: {
      es: [
        "Dashboard en Streamlit con filtros globales y pestañas de análisis: sociodemográfico, conductual, buyer persona, económico, producto, geografía, clientes con RUC y contactabilidad.",
        "Segmentación por variables derivadas (nivel de riesgo, generación, región y tipo de localidad, tipo de persona) y gráficos Plotly con Sankey y mapa coroplético.",
        "Ficha de buyer persona redactada con IA generativa (Gemini con modelos de respaldo y Groq) sobre estadísticas ya calculadas, con caché en disco.",
        "Datos anonimizados (hash SHA-1 determinista, contactos enmascarados) y lógica compartida en un paquete instalable.",
        "Guía de dockerización: build multi-stage sobre python:3.12-slim, datos horneados en la imagen, docker-compose para desarrollo y despliegue en Render desde Docker Hub.",
      ],
      en: [
        "Streamlit dashboard with global filters and analysis tabs: sociodemographic, behavioral, buyer persona, economic, product, geography, business (RUC) customers and contactability.",
        "Segmentation by derived variables (risk level, generation, region and locality type, person type) and Plotly charts including a Sankey diagram and a choropleth map.",
        "Buyer persona profile written with generative AI (Gemini with fallback models and Groq) from already computed statistics, cached on disk.",
        "Anonymized data (deterministic SHA-1 hash, masked contact details) and shared logic in an installable package.",
        "Dockerization guide: multi-stage build on python:3.12-slim, data baked into the image, docker-compose for development and deployment on Render from Docker Hub.",
      ],
    },
    deliverables: {
      es: "App en producción, repositorio con Dockerfile y docker-compose, script de conversión de datos a Parquet y README del proceso de empaquetado y despliegue.",
      en: "App in production, repository with Dockerfile and docker-compose, a data-to-Parquet conversion script and a README covering packaging and deployment.",
    },
    demo: "https://analityc-app-segmentation5.onrender.com/",
    repo: "https://github.com/BenjaBussinessMan/analityc-app-segmentation5",
  },
];

const skills = [
  { group: { es: "Lenguajes", en: "Languages" }, items: ["Python", "SQL", "PySpark"] },
  { group: { es: "Procesamiento y Big Data", en: "Processing & Big Data" }, items: ["Apache Spark", "Databricks", "Delta Lake", "FastAPI"] },
  { group: { es: "Orquestación y CI/CD", en: "Orchestration & CI/CD" }, items: ["Apache Airflow", "GitHub Actions", "Docker", "Azure DataFactory"] },
  { group: { es: "Bases de datos y almacenamiento", en: "Databases & Storage" }, items: ["SQL Server", "PostgreSQL", "Snowflake", "Azure Blob"] },
  { group: { es: "Gobernanza y calidad", en: "Governance & Quality" }, items: ["Unity Catalog", "Data Lineage"] },
  { group: { es: "Visualización y BI", en: "Visualization & BI" }, items: ["Power BI", "Streamlit", "Dash"] },
];

const education = [
  { title: { es: "Master en Inteligencia Artificial", en: "Master's in Artificial Intelligence" }, org: "UNIR", kind: { es: "Posgrado", en: "Postgraduate" } },
  { title: { es: "Ingeniería en Ciencias Económicas y Financieras", en: "Engineering in Economic and Financial Sciences" }, org: { es: "Escuela Politécnica Nacional", en: "Escuela Politécnica Nacional" }, kind: { es: "Grado", en: "Undergraduate" } },
  { title: "Data Governance Accredited", org: "Databricks", kind: { es: "Certificación", en: "Certification" } },
  { title: "Scrum Fundamentals Certified (SFC)", org: "SCRUMstudy", kind: { es: "Certificación", en: "Certification" } },
];

let lang = "es";

// Devuelve el valor segun el idioma; los textos sin traduccion (strings) se usan tal cual.
function tr(value) {
  return value && typeof value === "object" && !Array.isArray(value) ? value[lang] : value;
}

function t(key) {
  return ui[lang][key];
}

function el(tag, props = {}, children = []) {
  const node = Object.assign(document.createElement(tag), props);
  children.forEach((c) => node.append(c));
  return node;
}

function detail(label, content) {
  return el("div", { className: "detail" }, [el("h4", { textContent: label }), content]);
}

function renderProjects() {
  const root = document.getElementById("project-list");
  root.replaceChildren();
  projects.forEach((p) => {
    const links = el("div", { className: "links" });
    if (p.demo) links.append(el("a", { href: p.demo, textContent: t("projects.demo"), target: "_blank", rel: "noopener" }));
    if (p.repo) links.append(el("a", { href: p.repo, textContent: t("projects.repo"), target: "_blank", rel: "noopener" }));
    root.append(
      el("article", { className: "card" }, [
        el("h3", { textContent: p.title }),
        el("ul", { className: "tags" }, p.tags.map((tag) => el("li", { textContent: tag }))),
        detail(t("projects.problem"), el("p", { textContent: tr(p.problem) })),
        detail(t("projects.solution"), el("ul", {}, tr(p.solution).map((x) => el("li", { textContent: x })))),
        detail(t("projects.deliverables"), el("p", { textContent: tr(p.deliverables) })),
        links,
      ])
    );
  });
}

function renderSkills() {
  const root = document.getElementById("skill-list");
  root.replaceChildren();
  skills.forEach((s) => {
    root.append(
      el("div", {}, [
        el("h3", { textContent: tr(s.group) }),
        el("ul", { className: "tags" }, s.items.map((item) => el("li", { textContent: item }))),
      ])
    );
  });
}

function renderEducation() {
  const root = document.getElementById("education");
  root.replaceChildren();
  education.forEach((e) => {
    root.append(
      el("li", {}, [
        el("span", { className: "kind", textContent: tr(e.kind) }),
        el("h3", { textContent: tr(e.title) }),
        el("p", { textContent: tr(e.org) }),
      ])
    );
  });
}

function applyStaticText() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    node.setAttribute("aria-label", t(node.dataset.i18nAria));
  });
  document.querySelectorAll("[data-i18n-tip]").forEach((node) => {
    node.dataset.tip = t(node.dataset.i18nTip);
  });
  document.title = t("meta.title");
  document.querySelector('meta[name="description"]').content = t("meta.description");
}

function setLanguage(next) {
  lang = next in ui ? next : "es";
  document.documentElement.lang = lang;
  document.querySelectorAll(".lang-switch button").forEach((b) => {
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
  });
  applyStaticText();
  renderProjects();
  renderSkills();
  renderEducation();
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

function setupLanguage() {
  document.querySelectorAll(".lang-switch button").forEach((b) => {
    b.addEventListener("click", () => setLanguage(b.dataset.lang));
  });
  let initial = (navigator.language || "es").slice(0, 2);
  try { initial = localStorage.getItem("lang") || initial; } catch (e) {}
  setLanguage(initial);
}

function setupTheme() {
  const root = document.documentElement;
  document.getElementById("theme-toggle").addEventListener("click", () => {
    const current =
      root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
}

setupLanguage();
setupTheme();
document.getElementById("year").textContent = new Date().getFullYear();
