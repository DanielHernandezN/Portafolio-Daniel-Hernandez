import Image from "next/image";
import Link from "next/link";

const TECHNOLOGIES = [
  "React + Next.js",
  "TypeScript + Tailwind CSS",
  "Prisma + SQLite",
  "PostgreSQL",
  "Deploy Vercel",
];

export default function GuardiaVirtual() {
  return (
    <main className="bg-abyss text-slate-100">
      <div className="mx-auto max-w-[1200px] px-6 py-8 md:px-10">
        <Link
          href="/"
          className="text-lg text-slate-100 hover:text-accent"
        >
          <span aria-hidden="true" className="text-blue-600">
            ←{" "}
          </span>
          Volver a proyectos
        </Link>

        <div className="grid gap-12 py-12 md:grid-cols-[1fr_1.4fr]">
          {/* Columna izquierda */}
          <div>
            <h1 className="text-6xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Guardia
              <br />
              Virtual
            </h1>
            <div aria-hidden="true" className="mt-8 h-0.5 w-16 bg-blue-600" />
            <p className="mt-8 text-xl leading-relaxed">
              Sistema de apoyo para documentación y gestión policial
            </p>

            <h2 className="mt-10 text-sm font-medium tracking-[0.2em] text-blue-400">
              TECNOLOGÍAS
            </h2>
            <ul className="mt-4 space-y-2 text-xl">
              {TECHNOLOGIES.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>

            <div className="mt-10">
              <a
                href="https://github.com/DanielHernandezN/guardiavirtual"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded border border-blue-600 px-8 py-3 text-lg hover:bg-blue-600"
              >
                Ver GitHub
              </a>
            </div>
          </div>

          {/* Collage capturas */}
          <div className="space-y-6">
            <div className="ml-auto md:w-2/3">
              <Image
                src="/images/guardia-virtual/login.png"
                alt="Pantalla de inicio de sesión de Guardia Virtual"
                width={1636}
                height={896}
                className="h-auto w-full rounded border border-line"
              />
            </div>
            <Image
              src="/images/guardia-virtual/dashboard.png"
              alt="Panel principal de Guardia Virtual con asistente documental"
              width={1912}
              height={910}
              className="h-auto w-full rounded border border-line"
            />
            <Image
              src="/images/guardia-virtual/admin.png"
              alt="Panel de administración de funcionarios de Guardia Virtual"
              width={1865}
              height={897}
              className="h-auto w-full rounded border border-line"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
