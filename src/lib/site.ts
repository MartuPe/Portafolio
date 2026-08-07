import type { Language } from "@/i18n/translations";

export const site = {
  name: "Martina Abril Perrone",
  role: "Backend .NET Developer",
  location: "Buenos Aires, Argentina",
  email: "marty4009@gmail.com",
  phone: "+54 11 3403-0066",
  github: "https://github.com/MartuPe",
  linkedin: "https://www.linkedin.com/in/martina-perrone-a36811288",
  cvEs: "/cv-martina-perrone-es.html",
  cvEn: "/cv-martina-perrone-en.html",
};

export type StackGroup = {
  label: Record<Language, string>;
  items: string[];
};

export const stackGroups: StackGroup[] = [
  {
    label: { es: "Backend & Frameworks", en: "Backend & Frameworks" },
    items: [".NET 8 / Core", "C# (POO)", "ASP.NET Core Web API", "ASP.NET MVC", "Entity Framework Core", "LINQ"],
  },
  {
    label: { es: "Arquitectura & Patrones", en: "Architecture & Patterns" },
    items: ["Clean Architecture", "Repository & Unit of Work", "Dependency Injection", "SOLID", "DDD (conceptos)", "Multi-tenant"],
  },
  {
    label: { es: "Bases de Datos", en: "Databases" },
    items: ["SQL Server / T-SQL", "Stored Procedures", "Azure SQL", "MySQL", "EF Migrations", "Modelado / DER"],
  },
  {
    label: { es: "Cloud & DevOps", en: "Cloud & DevOps" },
    items: ["Microsoft Azure", "App Service", "GitHub Actions (CI/CD)", "Azure DevOps", "Docker", "Git"],
  },
  {
    label: { es: "Testing & Calidad", en: "Testing & Quality" },
    items: ["xUnit", "Moq", "Coverlet", "Integration Testing", "TDD"],
  },
  {
    label: { es: "APIs & Integraciones", en: "APIs & Integrations" },
    items: ["REST", "Swagger / OpenAPI", "OAuth 2.0 / JWT", "MercadoLibre API", "SignalR", "WebRTC", "Blockchain (Polygon)"],
  },
  {
    label: { es: "Frontend", en: "Frontend" },
    items: ["React", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap"],
  },
];

export type EducationItem = {
  title: Record<Language, string>;
  place: string;
  period: Record<Language, string>;
};

export const education: EducationItem[] = [
  {
    title: {
      es: "Licenciatura en Gestión de la Tecnología",
      en: "Bachelor's in Technology Management",
    },
    place: "UNLaM",
    period: { es: "abr. 2026 – Actualidad", en: "Apr 2026 – Present" },
  },
  {
    title: {
      es: "Tecnicatura en Desarrollo Web",
      en: "Web Development Technician",
    },
    place: "UNLaM",
    period: { es: "2023 – 2025", en: "2023 – 2025" },
  },
  {
    title: {
      es: "Bachiller en Economía y Administración",
      en: "High School — Economics & Administration",
    },
    place: "Instituto Educacional Almafuerte",
    period: { es: "2017 – 2022", en: "2017 – 2022" },
  },
];

export type Testimonial = {
  /** Completar a mano. Dejar quote vacío ("") para ocultar la tarjeta. */
  quote: Record<Language, string>;
  name: string;
  title: Record<Language, string>;
  linkedin?: string;
};

// TODO Martina: completá el texto de tus 2 recomendaciones de LinkedIn.
// Mientras "quote" esté vacío, la tarjeta no se muestra.
export const testimonials: Testimonial[] = [
  {
    quote: { es: "", en: "" },
    name: "",
    title: { es: "Compañero/a de trabajo — Qreative", en: "Coworker — Qreative" },
    linkedin: "",
  },
  {
    quote: { es: "", en: "" },
    name: "",
    title: { es: "Líder técnico — Qreative", en: "Tech Lead — Qreative" },
    linkedin: "",
  },
];

export function isTestimonialReady(item: Testimonial): boolean {
  return item.name.trim() !== "" && (item.quote.es.trim() !== "" || item.quote.en.trim() !== "");
}

export const hasTestimonials = testimonials.some(isTestimonialReady);
