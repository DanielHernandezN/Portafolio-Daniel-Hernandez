import Link from "next/link";
import ContactForm from "./components/contact-form";

function MountainIllustration() {
  return (
    <svg
      viewBox="0 0 520 300"
      role="img"
      aria-label="Ilustración lineal de una montaña con pinos y nodos"
      className="h-auto w-full"
    >
      <g
        fill="none"
        stroke="#7dd3e0"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Mountain layers */}
        <path d="M170 250 L300 60 L430 250" strokeWidth="1.4" opacity="0.9" />
        <path d="M190 250 L300 92 L410 250" strokeWidth="1.1" opacity="0.7" />
        <path d="M210 250 L300 124 L390 250" strokeWidth="1" opacity="0.55" />
        <path d="M230 250 L300 156 L370 250" strokeWidth="1" opacity="0.4" />
        <path d="M255 250 L300 188 L345 250" strokeWidth="1" opacity="0.3" />
        {/* Base lines */}
        <path d="M60 250 H180" strokeWidth="1" opacity="0.35" />
        <path d="M420 250 H470" strokeWidth="1" opacity="0.35" />
        <path d="M90 272 H460" strokeWidth="1" opacity="0.25" />
        {/* Trees left */}
        <g strokeWidth="1" opacity="0.8">
          <path d="M110 200 V244 M110 208 L96 220 M110 208 L124 220 M110 220 L98 231 M110 220 L122 231 M110 232 L100 241 M110 232 L120 241" />
          <path d="M150 210 V248 M150 217 L138 227 M150 217 L162 227 M150 228 L140 237 M150 228 L160 237" />
        </g>
        {/* Trees right */}
        <g strokeWidth="1" opacity="0.8">
          <path d="M420 196 V244 M420 204 L406 216 M420 204 L434 216 M420 216 L408 227 M420 216 L432 227 M420 228 L410 238 M420 228 L430 238" />
          <path d="M455 210 V246 M455 218 L444 228 M455 218 L466 228 M455 230 L446 239 M455 230 L464 239" />
        </g>
        {/* Circuit nodes */}
        <g strokeWidth="1" opacity="0.6">
          <path d="M90 90 H130 L145 105 H175" />
          <path d="M370 70 H410 L425 85 H455" />
          <path d="M375 140 H415 L428 128 H458" />
          <path d="M85 180 H115 L128 168 H155" />
          <path d="M445 240 L460 225 L475 225" />
        </g>
        <g fill="#7dd3e0" stroke="none">
          <circle cx="178" cy="105" r="2.5" />
          <circle cx="300" cy="60" r="2.5" />
          <circle cx="432" cy="140" r="2.5" />
          <circle cx="120" cy="196" r="2.5" />
          <circle cx="448" cy="252" r="2.5" />
        </g>
      </g>
    </svg>
  );
}

function GitHubIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 448 512" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
    </svg>
  );
}

const PROJECTS = [
  {
    title: "Guardia Virtual",
    stack: "TypeScript",
    href: "/proyectos/guardia-virtual",
  },
  {
    title: "S.I.G.E.D",
    stack: "React",
    href: "/proyectos/siged",
  },
  {
    title: "API Tareas",
    stack: "JavaScript",
    href: "/proyectos/api-tareas",
  },
];

const SKILLS = [
  "React",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Node.js",
  "SQL",
  "Vercel",
  "GitHub",
];

export default function Home() {
  return (
    <main className="bg-abyss text-slate-100">
      {/* Topbar */}
      <header className="border-b border-line">
        <div className="mx-auto max-w-[1100px] px-6 py-5 md:px-10">
          <Link
            href="/sobre-mi"
            className="text-xs font-medium tracking-[0.25em] hover:text-accent"
          >
            SOBRE MI
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        {/* Hero */}
        <section className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-xs font-medium tracking-[0.25em] text-slate-200">
              DANIEL A. HERNANDEZ NORAMBUENA
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-[56px]">
              FULL-STACK DEVELOPER
            </h1>
            <p className="mt-6 max-w-md leading-relaxed text-mist">
              Construyo experiencias digitales donde la lógica del código y la
              sensibilidad del diseño trabajan juntas.
            </p>
          </div>
          <div aria-hidden="true">
            <MountainIllustration />
          </div>
        </section>

        <hr className="border-line" />

        {/* Proyectos */}
        <section className="py-14">
          <h2 className="text-xs font-medium tracking-[0.25em]">
            PROYECTOS DESTACADOS
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {PROJECTS.map((project) => (
              <article
                key={project.title}
                className="flex min-h-[160px] flex-col rounded border border-line bg-panel p-6"
              >
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm text-mist">{project.stack}</p>
                {"href" in project && project.href && (
                  <Link
                    href={project.href}
                    className="mt-auto pt-4 text-sm font-medium text-accent underline-offset-4 hover:underline"
                  >
                    Ir a proyecto →
                  </Link>
                )}
              </article>
            ))}
          </div>

          {/* Stack */}
          <ul className="mt-6 flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <li
                key={skill}
                className="rounded border border-line px-3 py-1 text-sm text-mist"
              >
                {skill}
              </li>
            ))}
          </ul>

          {/* Links — URLs pendientes del dueño */}
          <div className="mt-6 flex gap-6 text-sm">
            <a
              href="https://github.com/DanielHernandezN"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-mist hover:text-accent"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-hern%C3%A1ndez-norambuena-a27333368/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-mist hover:text-accent"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </section>

        <hr className="border-line" />

        {/* Contacto */}
        <section className="grid gap-10 py-10 md:grid-cols-2">
          <div>
            <h2 className="text-xs font-medium tracking-[0.25em]">Contacto:</h2>
            <p className="mt-4 text-2xl font-light">
              Hablemos de tu próximo proyecto
            </p>
            <p className="mt-4 text-sm leading-relaxed text-mist">
              Completa el formulario y te responderé a la brevedad.
            </p>
            <a
              href="mailto:hernandez.norambuenadaniel@gmail.com"
              className="mt-4 inline-block text-sm text-mist underline decoration-accent/60 underline-offset-4 hover:text-accent"
            >
              o escríbeme directo a hernandez.norambuenadaniel@gmail.com
            </a>
          </div>
          <ContactForm />
        </section>
      </div>
    </main>
  );
}
