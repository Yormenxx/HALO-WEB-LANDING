import { FaArrowRight } from "react-icons/fa";
import gamepass from "../assets/gamepass.png"
import seriexs from "../assets/seriexs.png"
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
function Add() {
  return (
    <div>

        <motion.div variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                vieport={{ once: false, amount: 0.5 }} className="md:w-[400px] px-2 py-6 md:py-12 space-y-2 absolute z-10 bottom-15 right-[20%] md:bottom-12 md:right-7 rounded-2xl  flex flex-col justify-center items-center bg-white/5 bg-opacity-10 backdrop-filter backdrop-blur-lg">

                <h2 className="text-[#adff2f] font-bold capitalize text-lg md:text-4xl">Halo infinite</h2>
                <img src={gamepass} className=" w-[50px] md:w-[150px]" alt="game pass" />
                <a href="" className="flex items-center justify-around text-black bg-[#adff2f] p-1 md:py-2  md:px-12 capitalize rounded-lg font-bold hover:opacity-80 duration-150 ease-in-out ">Obtener ahora<FaArrowRight className="text-sm md:text-xl ml-3"/> </a>

                <h3 className="text-white capitalize text-sm md:text-xl font-bold">Disponible ahora con Xbox game pass</h3>
                <img src={seriexs} className=" w-[50px] md:w-[150px]" alt="serie xs" />
                <a href="" className="text-xl font-bold text-[#adff2f] border-b-2 border-[#adff2f]">Obtener pase de batalla</a>

        </motion.div>

    </div>
  )
}

export default Add