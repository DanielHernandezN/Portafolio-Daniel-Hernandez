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
        px-12
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
            
            />
            </div>
          <div className="
          flex
          flex-col
          justify-center
          px-8
          gap-4
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
            
            />
            </div>
          <div className="
          flex
          flex-col
          justify-center
          px-8
          gap-4
          md:w-1/2">
          
          <h3 className="text-2xl font-semibold text-white">GUARDI VIRTUAL</h3>
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


    </main>
  )

  
}