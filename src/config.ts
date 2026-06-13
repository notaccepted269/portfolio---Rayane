import type {
  ProfileConfig,
  Project,
  ExperienceEntry,
  StackCategory,
} from "./types/index.ts";

export const CFG: ProfileConfig = {
  name: "Rayane",
  role: "Bachelor's Degree Student in Computer Science (3rd Year)",
  location: "France",
  email: "rayanemed.pro@gmail.com",
  github: "https://github.com/notaccepted269",
  linkedin: "https://linkedin.com/in/rayane-mohamed269/",
  cv_url: "",
  kernel: "Algorithms · Compilers · Systems · Databases",
  shell: "Fish",
  uptime: "2 years",
  projects_n: "6",
  status: "Open to Opportunities",
  education: "Bachelor's Degree in Computer Science",
  languages: "French (native), English (professional)",
  github_h: "notaccepted269",
  open_to: "Internship · Apprenticeship",
};

export const PROJECTS: Project[] = [
  {
    type: "Systems Programming",
    name: "TowerDefend",
    desc: "Developed a complete Tower Defense game in C with SDL2, featuring procedural pathfinding, real-time entity management, combat logic, and persistent game state serialization.",
    stack: ["C", "SDL2", "Algorithms", "Data Structures"],
    stat: "Solo project · Game development",
  },
  {
    type: "Language Engineering",
    name: "Logo Interpreter",
    desc: "Built a complete interpreter for a Logo-inspired programming language, including tokenization, grammar parsing, AST evaluation, variable environments, control-flow constructs, and turtle graphics execution.",
    stack: ["OCaml", "OCamllex", "OCamlyacc", "Formal Languages"],
    stat: "Compiler theory · Parsing · Language implementation",
  },
  {
    type: "Software Simulation",
    name: "Au Pays du Père Noël",
    desc: "Built a discrete-event simulation of a large-scale production and distribution system, modeling resource allocation, scheduling, logistics, inventory management, and cost tracking.",
    stack: ["C#", ".NET 9", "OOP", "Algorithms"],
    stat: "Production pipeline · Logistics optimization",
  },
  {
    type: "Database Engineering",
    name: "Real Estate Management System",
    desc: "Engineered a relational database solution for managing properties, clients, rentals, and transactions, with normalized schemas, integrity constraints, and advanced SQL reporting.",
    stack: ["SQL", "Database Design", "Data Modeling"],
    stat: "Normalization · Business data management",
  },
  {
    type: "Cybersecurity",
    name: "Passe ton Hack",
    desc: "Built a password security auditing simulator using dictionary-attack algorithms, hash comparison techniques, and functional programming concepts to assess password resilience.",
    stack: ["OCaml", "Functional Programming", "Algorithms", "Hashing"],
    stat: "Security testing · Academic project",
  },
  {
    type: "Frontend Development",
    name: "Manga Character Catalog",
    desc: "Created a responsive frontend application showcasing dynamic content rendering, DOM-based interactions, and modern CSS layouts with Flexbox and Grid.",
    stack: ["JavaScript", "HTML5", "CSS3", "Flexbox", "CSS Grid"],
    stat: "Responsive UI · DOM manipulation",
  },
];

export const JOURNEY: ExperienceEntry[] = [
  {
    year: "[2026]",
    title: "Programming Languages Project",
    org: "Université de Poitiers",
    logs: [
      "Built a Logo interpreter from scratch in OCaml",
      "Implemented lexical analysis, parsing and AST evaluation",
      "Added variables, loops, arithmetic expressions and conditionals",
    ],
    tags: ["OCaml", "OCamllex", "OCamlyacc", "Compiler Design"],
  },
  {
    year: "[2026]",
    title: "Game Development Project",
    org: "Université de Poitiers",
    logs: [
      "Developed a Tower Defense game in C using SDL2",
      "Implemented procedural path generation and combat systems",
      "Managed entities through linked lists and save serialization",
    ],
    tags: ["C", "SDL2", "Algorithms", "Data Structures"],
  },
  {
    year: "[2024]",
    title: "Cybersecurity Project",
    org: "Université de Poitiers",
    logs: [
      "Developed a password auditing simulator in OCaml",
      "Implemented dictionary-attack algorithms on hashed credentials",
      "Applied functional programming techniques for data processing",
    ],
    tags: ["OCaml", "Cybersecurity", "Hashing", "Algorithms"],
  },
  {
    year: "[2023–2026]",
    title: "Computer Science Student",
    org: "Université de Poitiers",
    logs: [
      "Studied algorithms, operating systems, networks and databases",
      "Built projects in systems programming, databases and web development",
      "Worked with C, OCaml, SQL, JavaScript and C#",
    ],
    tags: ["Linux", "Algorithms", "Databases", "Software Engineering"],
  },
];

export const STACK: StackCategory[] = [
  {
    name: "Langages",
    items: ["OCaml", "C", "C#", "Java", "JavaScript/TypeScript", "SQL", "Bash"],
  },
  {
    name: "Programmation",
    items: [
      "Functional Programming",
      "Object-Oriented Programming",
      "Compiler Design",
      "Data Structures",
      "Algorithms",
    ],
  },
  {
    name: "Développement Web",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "DOM Manipulation",
      "Responsive Design",
    ],
  },
  {
    name: "Bases de Données",
    items: [
      "SQL",
      "PostgreSQL",
      "MySQL",
      "Database Design",
      "ER Modeling",
      "Normalization",
    ],
  },
  {
    name: "Systèmes",
    items: [
      "Linux",
      "Bash Scripting",
      "Memory Management",
      "File Systems",
      "Process Management",
    ],
  },
  {
    name: "Langages & Compilation",
    items: [
      "OCamllex",
      "OCamlyacc",
      "Lexical Analysis",
      "Parsing",
      "AST",
      "Interpreters",
    ],
  },
  {
    name: "Outils",
    items: ["Git", "Makefile", "SDL2", ".NET 9", "LibreOffice Base"],
  },
];

export const PALETTE_COLORS: string[] = [
  "#060e18",
  "#3d5168",
  "#00FF9C",
  "#FFB000",
  "#FF4757",
  "#F5F5F5",
  "#D98A00",
  "#00cc7a",
];
