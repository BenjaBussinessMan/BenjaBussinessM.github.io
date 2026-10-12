// Edita estos arreglos para actualizar el contenido del sitio.

const projects = [
  {
    title: "Dashboard de ventas",
    description: "Panel interactivo con indicadores de ventas, márgenes y cumplimiento de metas por región.",
    tags: ["Power BI", "SQL", "DAX"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Modelo de predicción de demanda",
    description: "Pronóstico mensual de demanda con series de tiempo para optimizar inventarios.",
    tags: ["Python", "pandas", "scikit-learn"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Automatización de reportes",
    description: "Pipeline que consolida fuentes, valida calidad de datos y distribuye reportes cada semana.",
    tags: ["Python", "SQL", "Excel"],
    demo: "",
    repo: "#",
  },
];

const skills = {
  "Análisis y BI": ["Power BI", "Excel avanzado", "DAX", "Tableau"],
  "Programación": ["SQL", "Python", "pandas", "Git"],
  "Datos": ["Modelado dimensional", "ETL", "Calidad de datos", "Estadística"],
};

const experience = [
  {
    role: "Analista de datos",
    company: "Empresa o institución",
    period: "2023 - Actualidad",
    summary: "Describe en una línea tu impacto principal, idealmente con un número.",
  },
  {
    role: "Practicante de analítica",
    company: "Empresa o institución",
    period: "2022 - 2023",
    summary: "Describe qué construiste o mejoraste.",
  },
];

function el(tag, props = {}, children = []) {
  const node = Object.assign(document.createElement(tag), props);
  children.forEach((c) => node.append(c));
  return node;
}

function renderProjects() {
  const root = document.getElementById("project-list");
  projects.forEach((p) => {
    const links = el("div", { className: "links" });
    if (p.demo) links.append(el("a", { href: p.demo, textContent: "Demo", target: "_blank", rel: "noopener" }));
    if (p.repo) links.append(el("a", { href: p.repo, textContent: "Código", target: "_blank", rel: "noopener" }));
    const tags = el("ul", { className: "tags" }, p.tags.map((t) => el("li", { textContent: t })));
    root.append(
      el("article", { className: "card" }, [
        el("h3", { textContent: p.title }),
        el("p", { textContent: p.description }),
        tags,
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

function renderExperience() {
  const root = document.getElementById("timeline");
  experience.forEach((e) => {
    root.append(
      el("li", {}, [
        el("h3", { textContent: e.role }),
        el("p", { className: "meta", textContent: `${e.company} · ${e.period}` }),
        el("p", { textContent: e.summary }),
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
renderExperience();
setupTheme();
document.getElementById("year").textContent = new Date().getFullYear();
