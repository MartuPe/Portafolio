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
  /** Foto en /public (ej. "/testimonials/nombre.jpg"). Si falta, se muestran las iniciales. */
  photo?: string;
  linkedin?: string;
};

// Recomendaciones de LinkedIn. Para agregar más, copiá un bloque y completá los campos.
// Mientras "quote" esté vacío, la tarjeta no se muestra.
export const testimonials: Testimonial[] = [
  {
    name: "Mati Querel",
    title: { es: "Director en Qreative Software", en: "Director at Qreative Software" },
    photo: "/testimonials/mati.jpg",
    quote: {
      es: "Tuve el placer de trabajar con Martina en Qreative Software. El tiempo que compartimos trabajando juntos fue excelente. Encontré en ella a una gran profesional, con muchas ganas de aprender, de aportar valor y, sobre todo, de desarrollar software de calidad. Además, siempre demostró compromiso, responsabilidad y una muy buena predisposición.",
      en: "I had the pleasure of working with Martina at Qreative Software. The time we spent working together was excellent. I found in her a great professional, eager to learn, to add value and, above all, to build quality software. She also consistently showed commitment, responsibility and a very positive attitude.",
    },
  },
  {
    name: "Teo Demattei",
    title: { es: "Desarrollador Frontend", en: "Frontend Developer" },
    photo: "/testimonials/teo.jpg",
    quote: {
      es: "Trabajé junto a Martina durante el último año en proyectos de equipo, donde ella se encargó del backend con .NET y yo del frontend. Siempre cumplió los plazos en tiempo y forma, y su documentación técnica es prolija y facilita mucho el trabajo en equipo. Seguimos trabajando juntos y la recomiendo sin dudarlo.",
      en: "I worked alongside Martina over the past year on team projects, where she handled the backend with .NET and I handled the frontend. She always met deadlines on time, and her technical documentation is clean and makes teamwork much easier. We're still working together and I recommend her without hesitation.",
    },
  },
  {
    name: "David Mamani",
    title: { es: "Frontend Developer", en: "Frontend Developer" },
    photo: "/testimonials/david.jpg",
    quote: {
      es: "Quiero recomendar a Martina, con quien tuve la oportunidad de trabajar durante varios meses en distintos proyectos freelance y sistemas a medida. Una de las cosas que más destacaría de Martina es su capacidad de adaptación. Su especialidad es .NET, pero siempre mostró mucha predisposición para aprender y trabajar con nuevas tecnologías cuando el proyecto lo requería. Durante el tiempo que trabajamos juntos, siempre fue una persona organizada, proactiva y responsable con su trabajo. Además de su perfil técnico, es una persona muy agradable para trabajar, con buena comunicación y empatía, manteniendo siempre una relación profesional y positiva con el equipo. Mi experiencia trabajando con Martina fue muy buena y considero que es una profesional con mucho potencial, especialmente por sus ganas de aprender y su capacidad para adaptarse a distintos contextos.",
      en: "I'd like to recommend Martina, with whom I had the opportunity to work for several months on different freelance projects and custom systems. One of the things I'd highlight most about Martina is her adaptability. Her specialty is .NET, but she always showed great willingness to learn and work with new technologies when the project required it. During the time we worked together, she was always organized, proactive and responsible with her work. Beyond her technical profile, she's very pleasant to work with, with good communication and empathy, always keeping a professional and positive relationship with the team. My experience working with Martina was very good and I consider her a professional with a lot of potential, especially for her eagerness to learn and her ability to adapt to different contexts.",
    },
  },
];

export function isTestimonialReady(item: Testimonial): boolean {
  return item.name.trim() !== "" && (item.quote.es.trim() !== "" || item.quote.en.trim() !== "");
}

export const hasTestimonials = testimonials.some(isTestimonialReady);
