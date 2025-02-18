import { motion } from "framer-motion";
import {fadeIn} from "../variants";

function Hero() {
  return (
    <section className='relative w-full h-72 control flex justify-end items-center'>

    <motion.div
    variants={fadeIn("up",0.2)} 
    initial="hidden"
    whileInView={"show"}
    vieport={{once:false,amount:0.7}}
    className='max-w-[500px] px-5 text-center md:text-left'>
        <h2 className='text-white text-2xl md:text-5xl font-bold capitalize'> Conviértete en elite.</h2>
        <p className='w-full text-white'> Entra en la armadura del mayor heroe de la humanidad con el Control inálambrico Xbox Elite Series2: Edicion limitada Halo infinite</p>
        <a href="" className='text-[#adff2f] capitalize text-sm hover:opacity-80 ease-in-out duration-200'>Más información</a>
    </motion.div>


    </section>

  )
}

export default Hero