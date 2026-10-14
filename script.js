// Edita estos arreglos para actualizar el contenido del sitio.

const projects = [
  {
    title: "End-to-End Enterprise Data Lakehouse & Governance",
    tags: ["PySpark", "Databricks", "Delta Lake", "Unity Catalog", "Power BI"],
    problem: "Fragmentación de datos transaccionales en sistemas aislados, sin control de accesos ni calidad centralizada.",
    solution: [
      "Arquitectura Medallion (Bronze, Silver, Gold) en Databricks para procesar más de 1M de registros diarios.",
      "Gobernanza con Unity Catalog: control de acceso basado en roles (RBAC) y linaje de datos.",
      "Optimización de consultas analíticas con una reducción del 40% en los tiempos de ejecución.",
    ],
    deliverables: "Scripts de PySpark, diagramas de arquitectura (Mermaid.js) y tablero ejecutivo en Power BI.",
    repo: "https://github.com/BenjaBussinessMan/end-to-end-pipeline_example5",
  },
  {
    title: "Real-Time Streaming Pipeline & Fraud Detection API",
    tags: ["Python", "Apache Kafka", "FastAPI", "Docker", "PostgreSQL"],
    problem: "Detectar transacciones anómalas en tiempo real antes de que impacten el balance financiero.",
    solution: [
      "Pipeline de ingesta en tiempo real con Kafka y consumidores en Python.",
      "API de inferencia ligera con FastAPI, contenedorizada en Docker.",
      "Despliegue del entorno automatizado con docker-compose.",
    ],
    deliverables: "Código de la API, Dockerfile optimizado (multi-stage build) y pruebas unitarias con Pytest.",
    repo: "https://github.com/BenjaBussinessMan/pipeline-mode-fraud-detection",
  },
  {
  title: "Insurance Premium Prediction & Actuarial Pricing Analysis",
  tags: ["Python", "scikit-learn", "LightGBM", "XGBoost", "Actuarial Science", "Jupyter"],
  problem: "Predecir la prima de seguro de cada cliente y comprobar si el modelo con mejor error también sirve para fijar precios: que la tarifa cuadre, ordene bien los riesgos y no provoque selección adversa.",
  solution: [
    "Exploración y preprocesamiento de 1,2 M de pólizas (nulos informativos, fechas, transformaciones) con pipelines que evitan fuga de datos.",
    "Comparación con validación cruzada de modelos lineales, LightGBM, XGBoost y un ensamble ponderado (RMSLE 1,0969 del baseline a 1,0484).",
    "Aplicación de teoría actuarial: credibilidad de Bühlmann, bonus-malus, GLM Gamma, boosting Tweedie, corrección de Duan, Gini, lift y doble lift.",
    "Hallazgo clave: el ensamble con mejor RMSLE cubría solo el 68,5 % de lo esperado cobrar y ordenaba peor el riesgo (Gini 0,05 frente a ~0,19 del boosting Gamma/Tweedie).",
  ],
  deliverables: "Notebook reproducible con todo el análisis, README que explica cada decisión y su base actuarial, y dos archivos de envío (uno para RMSLE y otro con la prima equilibrada). Datos de Kaggle, usados como ejemplo.",
  repo: "https://github.com/BenjaBussinessMan/insurance-cost-prediction-example3",
  },
];

const skills = {
  "Lenguajes": ["Python", "SQL", "PySpark"],
  "Procesamiento y Big Data": ["Apache Spark", "Databricks", "Delta Lake", "FastAPI"],
  "Orquestación y CI/CD": ["Apache Airflow", "GitHub Actions", "Docker","Azure DataFactory"],
  "Bases de datos y almacenamiento": ["SQL Server","PostgreSQL", "Snowflake", "Azure Blob"],
  "Gobernanza y calidad": ["Unity Catalog", "Data Lineage"],
  "Visualización y BI": ["Power BI", "Streamlit","Dash"],
};

const education = [
  { title: "Master en Inteligencia Artificial", org: "UNIR", kind: "Posgrado" },
  { title: "Ingeniería en Ciencias Económicas y Financieras", org: "Escuela Politécnica Nacional", kind: "Grado" },
  { title: "Data Governance Accredited", org: "Databricks", kind: "Certificación" },
  { title: "Scrum Fundamentals Certified (SFC)", org: "SCRUMstudy", kind: "Certificación" },
];

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
  projects.forEach((p) => {
    const links = el("div", { className: "links" });
    if (p.repo) links.append(el("a", { href: p.repo, textContent: "Ver repositorio", target: "_blank", rel: "noopener" }));
    root.append(
      el("article", { className: "card" }, [
        el("h3", { textContent: p.title }),
        el("ul", { className: "tags" }, p.tags.map((t) => el("li", { textContent: t }))),
        detail("Problema", el("p", { textContent: p.problem })),
        detail("Solución", el("ul", {}, p.solution.map((x) => el("li", { textContent: x })))),
        detail("Entregables", el("p", { textContent: p.deliverables })),
        links,
      ])
    );
  });
}

function renderSkills() {
  const root = document.getElementById("skill-list");
  Object.entries(skills).forEach(([group, items]) => {
    root.append(
      el("div", {}, [
        el("h3", { textContent: group }),
        el("ul", { className: "tags" }, items.map((s) => el("li", { textContent: s }))),
      ])
    );
  });
}

function renderEducation() {
  const root = document.getElementById("education");
  education.forEach((e) => {
    root.append(
      el("li", {}, [
        el("span", { className: "kind", textContent: e.kind }),
        el("h3", { textContent: e.title }),
        el("p", { textContent: e.org }),
      ])
    );
  });
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

renderProjects();
renderSkills();
renderEducation();
setupTheme();
document.getElementById("year").textContent = new Date().getFullYear();
