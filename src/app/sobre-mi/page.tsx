import Image from "next/image";
import Link from "next/link";

export default function SobreMi() {
  return (
    <main className="bg-abyss text-slate-100">
      <div className="mx-auto max-w-[1100px] px-6 py-10 md:px-10">
        <Link
          href="/"
          className="text-sm text-accent underline decoration-accent/60 underline-offset-4 hover:text-slate-100"
        >
          ← Volver
        </Link>

        <p className="mt-10 text-xs font-medium tracking-[0.25em]">SOBRE MI</p>
        <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
          Daniel Hernández Norambuena
        </h1>
        <p className="mt-4 max-w-xl leading-relaxed text-mist">
          Desarrollador Full-Stack. Aquí irá tu historia profesional.
        </p>

        {/* Foto — coloca tu foto en public/images/perfil.jpg */}
        <div className="relative mt-10 h-72 w-full overflow-hidden rounded border border-line bg-panel md:h-96 md:w-1/2">
          <Image
            src="/images/perfil.jpg"
            alt="Foto de Daniel Hernández Norambuena"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* Historia */}
        <section className="mt-12 max-w-2xl">
          <h2 className="text-xs font-medium tracking-[0.25em]">MI HISTORIA</h2>
          <p className="mt-4 leading-relaxed text-mist">
            Más de 13 años de experiencia profesional en Carabineros de Chile,
            en funciones que requieren disciplina, responsabilidad y toma de
            decisiones en contextos de alta exigencia. Esa experiencia me dio
            análisis de problemas, trabajo en equipo y búsqueda de soluciones
            prácticas, que hoy aplico al desarrollo web.
          </p>
          <p className="mt-4 leading-relaxed text-mist">
            Mi formación en desarrollo web me llevó a trabajar con React,
            Next.js y TypeScript, construyendo aplicaciones funcionales y
            comprendiendo cómo se conectan sus distintas partes.
          </p>
        </section>

        {/* Experiencia */}
        <section className="mt-12 max-w-2xl pb-16">
          <h2 className="text-xs font-medium tracking-[0.25em]">EXPERIENCIA</h2>
          <ul className="mt-4 space-y-4 text-mist">
            <li className="rounded border border-line bg-panel p-5">
              <p className="font-semibold text-slate-100">
                Desarrollo web — React / Next.js / TypeScript
              </p>
              <p className="mt-1 text-sm">
                Aplicaciones funcionales, bases de datos con Prisma y buenas
                prácticas de desarrollo.
              </p>
            </li>
            <li className="rounded border border-line bg-panel p-5">
              <p className="font-semibold text-slate-100">
                Carabineros de Chile — 13+ años
              </p>
              <p className="mt-1 text-sm">
                Disciplina, adaptación, análisis y resolución de problemas en
                entornos exigentes.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
