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
        bg-zinc-900
        relative
        "        
        >
        <Image src="/images/developer-workspace.png"
        alt="Espacio de trabajo de desarrollo web"
        fill
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


    </main>
  )

  
}