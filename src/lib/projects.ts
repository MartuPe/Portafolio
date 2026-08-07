import type { Language } from "@/i18n/translations";

export type ProjectSection = {
  title: string;
  content: string;
};

export type ProjectContent = {
  title: string;
  client: string;
  date: string;
  role: string;
  service: string;
  brief: string;
  summary: string;
  award?: string;
  sections: ProjectSection[];
};

export type Project = {
  id: string;
  number: string;
  year: string;
  featured?: boolean;
  isPrivate?: boolean;
  tags: string[];
  /** Cover image path in /public, or undefined to render a monogram cover. */
  cover?: string;
  gallery?: { src: string; alt: string }[];
  links?: {
    demo?: string;
    code?: string;
    landing?: string;
  };
  demoAccess?: { user: string; password: string };
  content: Record<Language, ProjectContent>;
};

export const projects: Project[] = [
  {
    id: "foraria",
    number: "01",
    year: "2025",
    featured: true,
    tags: [".NET 8", "Clean Architecture", "Multi-tenant", "Azure", "Blockchain", "SignalR"],
    cover: "/foraria/01-dashboard.png",
    gallery: [
      { src: "/foraria/01-dashboard.png", alt: "Dashboard del consejo en FORARIA" },
      { src: "/foraria/03-gastos.png", alt: "Gestión de gastos y expensas" },
      { src: "/foraria/04-votacion.png", alt: "Módulo de votaciones" },
      { src: "/foraria/06-reuniones.png", alt: "Reuniones y videollamadas" },
      { src: "/foraria/09-estadisticas.png", alt: "Estadísticas del consorcio" },
      { src: "/foraria/10-auditoria.png", alt: "Auditoría del sistema" },
    ],
    links: {
      demo: "https://foraria.vercel.app",
      code: "https://github.com/MartuPe/Foraria-front",
      landing: "https://github.com/MartuPe/foraria-landing",
    },
    demoAccess: { user: "maria@gmail.com", password: "Tomas23!" },
    content: {
      es: {
        title: "FORARIA",
        client: "UNLaM · Proyecto de tesis",
        date: "Sep – Dic 2025",
        role: "Backend Lead Developer",
        service: "Arquitectura y desarrollo backend",
        award: "🏆 Mejor Proyecto en Transferencia Tecnológica — ExpoProyecto UNLaM 2025",
        brief:
          "Plataforma SaaS multi-tenant para digitalizar la administración de consorcios. Lideré el diseño e implementación completa del backend.",
        summary:
          "FORARIA fue mi proyecto de tesis y el trabajo del que más orgullosa estoy. En un equipo de 8 personas (4 backend .NET + 4 frontend React) ocupé el rol de líder de backend, diseñando la arquitectura desde cero con Clean Architecture (5 capas) y coordinando 41 casos de uso distribuidos en 16 épicas. El proyecto fue premiado como Mejor Proyecto en Transferencia Tecnológica en la ExpoProyecto UNLaM 2025.",
        sections: [
          {
            title: "Arquitectura y multi-tenant",
            content:
              "Clean Architecture en 5 capas; contexto multi-tenant con Query Filters en EF Core para evitar fugas de datos entre consorcios (cross-tenant data leakage); autenticación y autorización con JWT + refresh tokens y roles jerárquicos.",
          },
          {
            title: "Integraciones avanzadas",
            content:
              "Notarización de documentos en blockchain (Polygon), OCR con Azure Document Intelligence, comunicación en tiempo real con SignalR y videollamadas con WebRTC.",
          },
          {
            title: "Calidad y despliegue",
            content:
              "69,6% de cobertura de código (branch) con xUnit, Moq y Coverlet; CI/CD con GitHub Actions y despliegue en Azure.",
          },
          {
            title: "Funcionalidad",
            content:
              "Roles de Consejo y Propietario: dashboard, gestión de usuarios, gastos y expensas, votaciones, proveedores, reuniones, reclamos, estadísticas, auditoría y foros.",
          },
        ],
      },
      en: {
        title: "FORARIA",
        client: "UNLaM · Thesis project",
        date: "Sep – Dec 2025",
        role: "Backend Lead Developer",
        service: "Backend architecture & development",
        award: "🏆 Best Technology Transfer Project — ExpoProyecto UNLaM 2025",
        brief:
          "Multi-tenant SaaS platform to digitize building/HOA management. I led the full design and implementation of the backend.",
        summary:
          "FORARIA was my thesis project and the work I'm most proud of. In a team of 8 (4 backend .NET + 4 frontend React) I held the backend lead role, designing the architecture from scratch with Clean Architecture (5 layers) and coordinating 41 use cases across 16 epics. It was awarded Best Technology Transfer Project at ExpoProyecto UNLaM 2025.",
        sections: [
          {
            title: "Architecture & multi-tenant",
            content:
              "5-layer Clean Architecture; multi-tenant context with EF Core Query Filters to prevent cross-tenant data leakage; authentication and authorization with JWT + refresh tokens and hierarchical roles.",
          },
          {
            title: "Advanced integrations",
            content:
              "Document notarization on blockchain (Polygon), OCR with Azure Document Intelligence, real-time communication with SignalR and video calls with WebRTC.",
          },
          {
            title: "Quality & deployment",
            content:
              "69.6% branch code coverage with xUnit, Moq and Coverlet; CI/CD with GitHub Actions and deployment on Azure.",
          },
          {
            title: "Functionality",
            content:
              "Council and Owner roles: dashboard, user management, expenses, voting, suppliers, meetings, claims, statistics, audit and forums.",
          },
        ],
      },
    },
  },
  {
    id: "bluesoft",
    number: "02",
    year: "2026",
    isPrivate: true,
    tags: [".NET 8", "SQL Server / T-SQL", "React", "TypeScript", "Azure", "MercadoLibre API"],
    cover: "/bluesoft/franquicias-pedido.jpg",
    gallery: [
      { src: "/bluesoft/franquicias-pedido.jpg", alt: "Nuevo pedido de franquicia — importación TXT/Excel, RFID y letra X" },
      { src: "/bluesoft/franquicias-devoluciones.jpg", alt: "Devoluciones de franquicias — control de mercadería y notas de crédito" },
      { src: "/bluesoft/stock.jpg", alt: "Panel de control del módulo de Stock (blueSoft ERP)" },
      { src: "/bluesoft/sucursales.jpg", alt: "Dashboard de sucursales — arquitectura multiempresa" },
    ],
    content: {
      es: {
        title: "blueSoft — Ecosistema ERP/POS",
        client: "Qreative SAS",
        date: "Nov 2025 – Ago 2026",
        role: "Desarrolladora Full Stack (orientada a Backend .NET)",
        service: "Desarrollo backend + frontend",
        brief:
          "Ecosistema ERP/POS para retail textil: una API central en ASP.NET Core 8 + SQL Server consumida por ~28 aplicaciones web, con arquitectura multiempresa (una base de datos por cliente) y despliegue automático en Azure.",
        summary:
          "Formé parte del equipo de desarrollo de blueSoft con ownership completo de varios módulos. Mi aporte más grande fue el módulo de Franquicias de punta a punta (backend + frontend): pedidos por sucursal, cierre por etapas, cuenta corriente, facturación según letra/IVA, notas de crédito con precio editable y el circuito completo de devoluciones a fábrica con control de estados, RFID y TXT. También construí el Cierre de Caja end-to-end, la integración con la API de MercadoLibre y aporté más de 100 PRs en 8 repositorios.",
        sections: [
          {
            title: "Módulo de Franquicias (end-to-end)",
            content:
              "Diseño e implementación completa: pedidos por sucursal, cierre por etapas, cuenta corriente, facturación (letra/IVA), notas de crédito con precio editable y circuito de devoluciones a fábrica (estados, RFID, TXT).",
          },
          {
            title: "Backend financiero y datos",
            content:
              "Cierre de Caja end-to-end (endpoints REST, stored procedures, anulaciones, validaciones con logging); decenas de stored procedures en T-SQL (cuenta corriente, saldos, arqueo, consultas paginadas, operaciones masivas); modelado N:N Cajas↔Sucursales; CRUD de Productos con transacciones atómicas; Órdenes de Producción y de Proceso.",
          },
          {
            title: "Integraciones y calidad",
            content:
              "Integración con MercadoLibre (publicación con/sin variantes, equivalencia de colores, guías de talle, sincronización de estado); testing con xUnit + Moq sobre datos en Docker; seguridad con user-secrets (connection strings, JWT fuera del repositorio).",
          },
          {
            title: "Frontend",
            content:
              "Interfaces en React + TypeScript para las apps Cajero, Stock, Configuración y MisClientes.",
          },
        ],
      },
      en: {
        title: "blueSoft — ERP/POS Ecosystem",
        client: "Qreative SAS",
        date: "Nov 2025 – Aug 2026",
        role: "Full Stack Developer (Backend .NET focused)",
        service: "Backend + frontend development",
        brief:
          "ERP/POS ecosystem for textile retail: a central ASP.NET Core 8 + SQL Server API consumed by ~28 web apps, with a multi-company architecture (one database per client) and automated deployment on Azure.",
        summary:
          "I was part of the blueSoft development team with full ownership of several modules. My biggest contribution was the end-to-end Franchises module (backend + frontend): branch orders, staged closing, current account, invoicing by tax letter/VAT, credit notes with editable price, and the full factory-returns flow with state control, RFID and TXT. I also built the end-to-end Cash Register Closing, the MercadoLibre API integration, and contributed 100+ PRs across 8 repositories.",
        sections: [
          {
            title: "Franchises module (end-to-end)",
            content:
              "Full design and implementation: branch orders, staged closing, current account, invoicing (tax letter/VAT), credit notes with editable price, and factory-returns flow (states, RFID, TXT).",
          },
          {
            title: "Financial backend & data",
            content:
              "End-to-end Cash Register Closing (REST endpoints, stored procedures, voids, validations with logging); dozens of T-SQL stored procedures (current account, balances, cash count, paginated queries, bulk operations); N:N Registers↔Branches modeling; Products CRUD with atomic transactions; Production and Process Orders.",
          },
          {
            title: "Integrations & quality",
            content:
              "MercadoLibre integration (publishing with/without variants, color mapping, size guides, status sync); testing with xUnit + Moq over data in Docker; security with user-secrets (connection strings, JWT kept out of the repo).",
          },
          {
            title: "Frontend",
            content:
              "React + TypeScript interfaces for the Cajero, Stock, Configuración and MisClientes apps.",
          },
        ],
      },
    },
  },
  {
    id: "ypf-luz",
    number: "03",
    year: "2025",
    isPrivate: true,
    tags: [".NET", "C#", "ASP.NET MVC", "SQL Server", "SharePoint", "Azure"],
    cover: "/ypf/home.jpg",
    gallery: [
      { src: "/ypf/home.jpg", alt: "Home del sitio corporativo de YPF Luz" },
      { src: "/ypf/novedades.jpg", alt: "Sección de novedades del sitio de YPF Luz" },
    ],
    content: {
      es: {
        title: "Plataforma web YPF Luz",
        client: "YPF Luz (vía Circo Studio)",
        date: "Nov 2024 – Nov 2025",
        role: "Desarrolladora .NET",
        service: "Desarrollo full-stack y mantenimiento",
        brief:
          "Desarrollo y mantenimiento de la plataforma web corporativa de YPF Luz, con soluciones en backend (.NET, C#) y frontend (HTML/CSS/JS/Bootstrap).",
        summary:
          "Trabajé en el ciclo completo de desarrollo sobre la plataforma corporativa de YPF Luz: backend en C#/.NET y ASP.NET MVC (lógica de negocio, APIs REST, conexión con SQL Server), frontend responsivo con Bootstrap, listas y workflows en SharePoint, despliegue y monitoreo en Azure, control de versiones con Git y Azure DevOps, y trabajo ágil (Scrum) con code reviews.",
        sections: [
          {
            title: "Backend",
            content:
              "C# / .NET y ASP.NET MVC: lógica de negocio, APIs REST y conexión con SQL Server; optimización de consultas y resolución de incidencias en producción.",
          },
          {
            title: "Frontend y SharePoint",
            content:
              "Frontend responsivo con HTML, CSS, Bootstrap y JavaScript; listas y workflows en SharePoint.",
          },
          {
            title: "Proceso y despliegue",
            content:
              "Ciclo completo: análisis de requerimientos, diseño técnico, testing y despliegue; documentación técnica; despliegue y monitoreo en Azure; Git y Azure DevOps; metodología ágil (Scrum) y code reviews.",
          },
        ],
      },
      en: {
        title: "YPF Luz web platform",
        client: "YPF Luz (via Circo Studio)",
        date: "Nov 2024 – Nov 2025",
        role: ".NET Developer",
        service: "Full-stack development & maintenance",
        brief:
          "Development and maintenance of YPF Luz's corporate web platform, with backend (.NET, C#) and frontend (HTML/CSS/JS/Bootstrap) solutions.",
        summary:
          "I worked on the full development cycle of YPF Luz's corporate platform: C#/.NET and ASP.NET MVC backend (business logic, REST APIs, SQL Server), responsive Bootstrap frontend, SharePoint lists and workflows, deployment and monitoring on Azure, version control with Git and Azure DevOps, and agile (Scrum) work with code reviews.",
        sections: [
          {
            title: "Backend",
            content:
              "C# / .NET and ASP.NET MVC: business logic, REST APIs and SQL Server; query optimization and production incident resolution.",
          },
          {
            title: "Frontend & SharePoint",
            content:
              "Responsive frontend with HTML, CSS, Bootstrap and JavaScript; SharePoint lists and workflows.",
          },
          {
            title: "Process & deployment",
            content:
              "Full cycle: requirements analysis, technical design, testing and deployment; technical documentation; deployment and monitoring on Azure; Git and Azure DevOps; agile (Scrum) work and code reviews.",
          },
        ],
      },
    },
  },
];
