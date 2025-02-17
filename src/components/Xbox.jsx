import xs from "../assets/xs-original.png"
import box from "../assets/box.svg"
import kk from "../assets/kk.svg"
import fps from "../assets/fps.svg"
function Xbox() {
  return (
    <>
        <section className=" w-full  bg-neutral-900">

        <div className="container py-5  bgXbox" >
                <div className="flex flex-col items-center z-20 md:flex-row">

                <div className="md:w-1/2">
                        <img  src={xs} alt=""/>
                    </div>
                    <div className="text-center mb-12 md:text-left md:w-1/2 md:pr-10 text-white">
                        <h2 className="text-6xl md:text-4xl font-bold leading-snug mb-4">Optimizado para Xbox Series X|S</h2>
                        <p className="leading-relaxed mb-10">Los juegos creados con el kit de desarrollo para Xbox Series X|S están diseñados para aprovechar las capacidades únicas de la nueva generación de consolas. Mostrarán tiempos de carga, imágenes, capacidad de respuesta y velocidades de fotogramas de hasta 120 FPS sin precedentes.</p>
                        <button className=" text-[#03ec0f] text-xl py-2  rounded-lg font-bold hover:opacity-80 ease-in duration-100">Mas información</button>

                        <div className="flex items-center justify-around md:justify-between ">
                            <div className="flex flex-col w-[100px]">
                                <img src={fps} alt="fps" className="w-[40px]" />
                                <span className="text-sm">60 fotogramas por segundo</span>
                            </div>
                            <div className="flex flex-col w-[100px]">
                                <img src={kk} alt="kk"  className="w-[70px]"/>
                                <span>4K Ultra HD</span>
                            </div>
                            <div className="flex flex-col w-[100px]">
                                <img src={box} alt="box" className="w-[50px]" />
                                <span>Entrega inteligente</span>
                            </div>
                        </div>
                    </div>
               
              </div>
            </div>

        </section>

    
    
    </>
  )
}

export default Xbox