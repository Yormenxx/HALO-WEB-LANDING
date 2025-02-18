import serie from "../assets/serie.png"
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
function Serie() {
  return (
    <>
        <motion.article variants={fadeIn("down", 0.1)}
                initial="hidden"
                whileInView={"show"}
                vieport={{ once: false, amount: 0.5 }}> 

            <img src={serie} alt="serie" className="h-[300px] w-full object-cover" />

            <div className="text-center space-y-3 py-7 text-white">
                <h3 className="uppercase text-5xl font-extrabold">LA SERIE DE HALO</h3>
                <p className="leading-relaxed text-lg">Ver el avance oficial de la temporada 2 a continuación.
                Nueva temporada en streaming el 8 de febrero en Paramount+</p>
                <a href="" className="bg-[#adff2f] text-[#026b07] capitalize font-bold px-10 py-1 rounded-lg hover:opacity-80 duration-200 ease-in-out">ver ahora</a>
            </div>

        </motion.article>
    
    
    </>
  )
}

export default Serie