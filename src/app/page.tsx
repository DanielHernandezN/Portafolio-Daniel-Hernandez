import Image from "next/image"


export default function Home() {

  return (
    
    
    <main>

      <section className="
      min-h-screen
      w-full
      flex
      flex-col
      gap-8
      md:gap-0
      bg-zinc-950
      md:flex-row
      ">
        
        <div className="
        flex
        flex-col
        justify-center
        w-full
        md:w-1/2
        px-12
        md:min-h-screen
        bg-zinc-950
        gap-4
        ">

          <h1 className="
          text-3xl
          font-semibold
          tracking-tight
          text-white
          ">Daniel Hernández Norambuena
          </h1>

          <p className="bg-blue-900 w-fit
          px-3
          py-1
          rounded-xl
          text-white">Desarrollador Web</p>
          
          <h2 className="
          text-2xl
          font-semibold
          tracking-tight
          text-white">
          Construyendo soluciones con <span className="text-blue-500"> código </span> 
          y <span className="text-purple-500">propósito</span>
          </h2>
          
          <p className="
          text-zinc-300
          ">Programador enfocado en desarrollo web con React, 
          Next.js y TypeScript. Combino tecnología, análisis y 
          experiencia resolviendo problemas reales para construir
          aplicaciones funcionales y con propósito.
          </p>
        
        </div>


        <div className="
        flex
        flex-col
        justify-center
        w-full
        md:w-1/2
        h-80
        md:h-auto
        md:min-h-screen
        bg-zinc-950
        relative
        "        
        >
        <Image src="/images/developer-workspace.png"
        alt="Espacio de trabajo de desarrollo web"
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        loading="eager"
        className="
        object-cover
        object-right
        "
        />
          <div className="
            absolute
            inset-0
            bg-linear-to-r
           from-zinc-950
            to-transparent
          "></div>

        
        </div>


      </section>

      <section className="
        min-h-screen
        w-full
       bg-zinc-950
        px-6
        md:px-12
        ">

          <h2 className="
          pt-20
          text-3xl
          font-semibold
          tracking-tight
          text-white
          ">
            Proyectos
          </h2>
            <p className="text-white">
              Proyectos desarrollados para resolver necesidades reales,
              aplicando tecnología, análisis y buenas prácticas de desarrollo.
            </p>

      <div className=" flex flex-col gap-16">

        
      {/* PROYECTO UNO */}

        <div className="
          flex
          flex-col
          gap-8
          md:flex-row
        ">

          <div className="md:w-1/2">
            <Image 
            src="/images/logo-siged.jpeg"
            alt="Logo SIGED"
            width={800}
            height={450}
            className="w-full rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.18)]"
            
            />
            </div>
          <div className="
          flex
          flex-col
          justify-center
          px-0
          gap-4
          md:px-8
          md:w-1/2">
          
          <h3 className="text-2xl font-semibold text-white">SIGED</h3>
            <p className="text-zinc-300">
              Sistema web orientado a la gestión y seguimiento de eventos
              delictuales en establecimientos de retail.
            </p>
            <p className="text-sm text-zinc-400">
              Tecnologías: React, Next.js, TypeScript, PostgreSQL y Prisma.
            </p>

            <button className="
            self-center
            bg-blue-600
            text-white
            px-3
            py-1
            rounded-lg
            ">

              VER PROYECTOS
            </button>

          </div>
        </div>




      {/* PROYECTO DOS */}

        <div className="
          flex
          flex-col
          gap-8
          md:flex-row-reverse
        ">

          <div className="md:w-1/2">
            <Image 
            src="/images/logo-siged.jpeg"
            alt="Logo SIGED"
            width={800}
            height={450}
            className="w-full rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.18)]"

            
            />
            </div>
          <div className="
          flex
          flex-col
          justify-center
          px-8
          gap-4
          md:w-1/2">
          
          <h3 className="text-2xl font-semibold text-white">GUARDIA VIRTUAL</h3>
            <p className="text-zinc-300">
              Asistente inteligente orientado a optimizar
              la elaboración de documentación policial.
            </p>
            <p className="text-sm text-zinc-400">
              Tecnologías: Next.js, React, TypeScript, IA...
            </p>

            <button className="
            self-center
            bg-blue-600
            text-white
            px-3
            py-1
            rounded-lg
            ">

              VER PROYECTOS
            </button>

          </div>             

        </div>
    </div>
        
  
</section>


{/**SOBRE MI */}


<section className="
    min-h-screen
    w-full
    bg-zinc-950
    px-12
    ">
    <h2 className="
    pt-20
    text-3xl
    font-semibold
    tracking-tight
    text-white
    ">
      Sobre mí
    </h2>
      <p className="text-zinc-300">
        Mi experiencia profesional y mi camino hacia el desarrollo web.
      </p>


      <div className="
          flex
          flex-col
          gap-8
          md:flex-row
          ">

        <div className="
              flex
              flex-col
              gap-4
              md:w-1/2
              ">

          <h3 className="
              text-xl
              font-semibold
              text-white
              ">Perfil Profesional</h3>
            <p className="
              text-zinc-300
              leading-relaxed
              max-w-xl
              text-left
              md:text-justify
              ">
              Cuento con más de 13 años de experiencia profesional en Carabineros de Chile,
              desarrollando funciones que requieren disciplina, responsabilidad, 
              capacidad de adaptación y toma de decisiones en contextos de alta exigencia.
              Esta experiencia me ha permitido fortalecer el análisis de problemas,
              el trabajo en equipo y la búsqueda de soluciones prácticas.
            </p>

            <ul className="text-zinc-300 space-y-2">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-500"></span>  
                Análisis y resolución de problemas</li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                Trabajo en equipo</li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                Capacidad de adaptación</li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                Responsabilidad y disciplina</li>
            </ul>


        </div>

        <div className="
              flex
              flex-col
              gap-4
              md:w-1/2
              ">

          <h3 className="
              text-xl
              font-semibold
              text-white">Desarrollo web</h3>
            <p className="
              text-zinc-300
              leading-relaxed
              max-w-xl
              text-justify
              ">
              Mi formación en desarrollo web me ha llevado a trabajar con React,
              Next.js y TypeScript, enfocándome en construir aplicaciones funcionales,
              comprender cómo se conectan sus distintas partes y aplicar buenas
              prácticas durante el desarrollo.
            </p>
            <ul className="
              text-zinc-300
              space-y-2
              ">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                React y Next.js
              </li>

              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                TypeScript
              </li>

              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                Bases de datos y Prisma
              </li>

              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                Desarrollo de aplicaciones web
              </li>
            </ul>

        </div>
      </div>
</section>

<section className="
      min-h-screen
      w-full
     bg-zinc-950
      px-12
      ">
        <h2 className="
          pt-20
          text-3xl
          font-semibold
          tracking-tight
         text-white
        ">
        Contacto
      </h2>
        <p className="text-zinc-300">
          ¿Tienes un proyecto o una idea?
        </p>
      
      <div className="
        flex
        flex-col
        gap-8
        md:flex-row
        ">

        <div className="
            md:w-1/2
            flex 
            flex-col 
            gap-4">
              <h3 className="
                text-xl
                font-semibold
                text-white
              "> ¿Hablamos?
              </h3>

          <p className="
            text-zinc-300
            leading-relaxed
          ">
            Estoy abierto a conversar sobre proyectos, oportunidades de desarrollo
            y nuevas ideas relacionadas con tecnología.
          </p>
              
              <a href="mailto:hernandez.norambuenadaniel@gmail.com"
                  className="
                  w-fit
                  bg-blue-600
                  px-4
                  py-2
                  rounded-lg
                  text-white
                  hover:bg-blue-500
                  transition-colors
                ">Hablemos</a>



          </div>

          <div className="md:w-1/2 text-zinc-300">
          
            <h3 className="
              text-xl
              font-semibold
              text-white
            ">
            Medios  de  Contacto
            </h3>
            <ul>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                    <a className="hover:text-blue-400 transition-colors" href="mailto:hernandez.norambuenadaniel@gmail.com">Correo Electrónico</a>
                </li>

                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                  <a className="hover:text-purple-400 transition-colors" href="https://www.linkedin.com/in/daniel-hern%C3%A1ndez-norambuena-a27333368/"
                  target="_blank"
                  rel="noopener noreferrer"                  
                  >LinkedIn</a>
                </li>

                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                    <a className="hover:text-blue-400 transition-colors" href="https://github.com/DanielHernandezN"
                      target="_blank"
                      rel="noopener noreferrer"                  
                      >GitHub</a>
                </li>

            </ul>


          </div>
      </div>
</section>


<footer className="
  bg-zinc-950
  border-t
  border-zinc-800
  px-12
  py-8
">
  <p className="
  text-center
  text-sm
  text-zinc-400
">
  © 2026 Daniel Hernández Norambuena. <br /> Todos los derechos reservados.
</p>
  
</footer>

</main>



  )

  
}