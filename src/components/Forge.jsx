import forge from "../assets/forge.png"
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
function Forge() {
  return (
    <>

    <section className="relative w-full py-10  md:py-40">

        <div className="flex flex-col space-y-36 md:flex-row md:justify-between items-center text-white">

            <motion.div variants={fadeIn("right", 0.1)}
                initial="hidden"
                whileInView={"show"}
                vieport={{ once: false, amount: 0.5 }} className="md:w-[50%] w-full px-10">
                <h3 className="text-6xl font-bold pb-10">Forge</h3>
                <p className="leading-relaxed">La legendaria herramienta de creación de contenido de Halo es más potente que nunca con funciones avanzadas, como un sofisticado motor visual de secuencias de comando, editor de modos, escalado de objetos, herramientas de iluminación y audio, así como mejoras notables en la fidelidad y los límites de presupuesto de objetos.</p>
            </motion.div>

            <motion.img variants={fadeIn("left", 0.1)}
                initial="hidden"
                whileInView={"show"}
                vieport={{ once: false, amount: 0.5 }} src={forge} alt="forge" className="absolute -z-10 bottom-20 md:top-9 md:right-20 w-full md:w-[80%] overflow-hidden md:opacity-100 opacity-50" />


        </div>


    </section>
    </>
  )
}

export default Forge