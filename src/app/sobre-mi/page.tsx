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

        {/* Presentación: foto + titular */}
        <div className="mt-10 flex flex-col items-center gap-8 md:flex-row md:items-start">
          <div className="relative aspect-[3/4] w-full shrink-0 overflow-hidden rounded border border-line bg-panel sm:max-w-xs">
            <Image
              src="/images/perfil.png"
              alt="Foto de Daniel Hernández Norambuena"
              fill
              sizes="(min-width: 768px) 320px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-xs font-medium tracking-[0.25em]">SOBRE MI</p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
              Daniel Antonio Hernández Norambuena
            </h1>
            <p className="mt-4 leading-relaxed text-mist">
              Funcionario de Carabineros de Chile y Desarrollador Full-Stack.
            </p>
            <p className="mt-2 text-sm tracking-wide text-accent">
              Desde la Región de La Araucanía, Chile — para el mundo.
            </p>
          </div>
        </div>

        {/* Historia */}
        <section className="mt-12 max-w-3xl">
          <h2 className="text-xs font-medium tracking-[0.25em]">
            MI HISTORIA
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-mist">
            <p>
              Soy Daniel Hernández Norambuena, funcionario activo de
              Carabineros de Chile, con más de 13 años de trayectoria en el
              servicio público. Durante este tiempo he desarrollado habilidades
              fundamentales como la disciplina, el liderazgo, la comunicación
              efectiva, el trabajo en equipo y la toma de decisiones bajo
              presión, competencias que hoy forman parte de mi identidad
              profesional. Actualmente, estoy ampliando mis conocimientos a
              través de mis estudios en desarrollo de software, con formación
              en gestión y desarrollo de software, orientando mi aprendizaje
              hacia la creación de soluciones tecnológicas que respondan a
              necesidades reales.
            </p>
            <p>
              Mi interés por la programación nació de la motivación por
              comprender cómo funciona la tecnología y cómo puede utilizarse
              para optimizar procesos, resolver problemas y facilitar el
              trabajo de las personas. Por eso, he enfocado mi aprendizaje en
              tecnologías como React, Next.js, TypeScript y bases de datos,
              aplicando estos conocimientos en proyectos propios que me
              permiten aprender, experimentar y crecer como desarrollador.
              Entre mis proyectos destaca Guardia Virtual, una iniciativa que
              busca aplicar inteligencia artificial para apoyar la elaboración
              de documentos y optimizar procesos administrativos. También
              trabajo en SIGED, un proyecto orientado a la gestión de eventos
              delictuales en el sector retail. Creo que la experiencia
              adquirida durante años de servicio, combinada con mi formación
              tecnológica, me permite abordar los desafíos desde una
              perspectiva diferente: comprender las necesidades, analizar los
              problemas y buscar soluciones prácticas, eficientes y
              responsables.
            </p>
          </div>
        </section>

        {/* Experiencia */}
        <section className="mt-12 max-w-3xl pb-16">
          <h2 className="text-xs font-medium tracking-[0.25em]">
            EXPERIENCIA
          </h2>
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
