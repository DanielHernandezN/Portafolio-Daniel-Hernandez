

export default function Home() {

  return (
    
    
    <main>

      <section className="
      min-h-screen
      w-full
      flex
      flex-col
      md:flex-row
      gap-8
      md:gap-0
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
          ">Daniel Hernández Norambuena
          </h1>

          <p className="bg-blue-900 w-fit
          px-3
          py-1
          rounded-xl">Desarrollador Web</p>
          
          <h2 className="
          text-2xl
          font-semibold
          tracking-tight">
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
        py-8
        px-8
        md:py-0
        md:min-h-screen
        bg-zinc-900
        ">
          <h1>DERECHO DE PRUEBA</h1>
          <p>solo es un lado de prueba</p>
        </div>


      </section>


    </main>
  )

  
}