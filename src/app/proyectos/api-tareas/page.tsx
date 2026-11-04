import Link from "next/link";

const TECHNOLOGIES = ["Node.js + Express", "JavaScript", "API REST"];

export default function ApiTareas() {
  return (
    <main className="bg-abyss text-slate-100">
      <div className="mx-auto max-w-[1200px] px-6 py-8 md:px-10">
        <Link href="/" className="text-lg text-slate-100 hover:text-accent">
          <span aria-hidden="true" className="text-blue-600">
            ←{" "}
          </span>
          Volver a proyectos
        </Link>

        <div className="max-w-2xl py-12">
          <h1 className="text-6xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            API Tareas
          </h1>
          <div aria-hidden="true" className="mt-8 h-0.5 w-16 bg-blue-600" />
          <p className="mt-8 text-justify text-lg leading-relaxed text-slate-200">
            API REST de tareas desarrollada con Node.js y Express
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
              href="https://github.com/DanielHernandezN/api-tareas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded border border-blue-600 px-8 py-3 text-lg hover:bg-blue-600"
            >
              Ver GitHub
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
