import { gamesItems } from "../constants"
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
function Games() {
    return (
        <section className="bg-neutral-950 ">

            <motion.h1 variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                vieport={{ once: false, amount: 0.5 }} className="text-3xl font-bold py-12  md:text-5xl  text-center uppercase text-[#adff2f]">Algunos juegos de la franquicia.</motion.h1>
            <motion.p variants={fadeIn("down", 0.1)}
                initial="hidden"
                whileInView={"show"}
                vieport={{ once: false, amount: 0.5 }} className="text-center m-auto text-white">La legendaria saga Halo regresa con la campaña de Master Chief más amplia hasta la fecha y una experiencia multijugador gratuita revolucionaria.</motion.p>
            <div className="md:px-30 px-10 py-20 grid grid-cols-1 md:grid-cols-2 items-center  ">

                {
                    gamesItems.map((item, index) => (
                        <div key={index} className="text-white w-[90%] ">
                            <img src={item.img} alt="halo" className="w-full rounded-lg" />
                            <h2 className="text-2xl font-bold  ">{item.title}</h2>
                            <p className="leading-relaxed ">{item.desc}</p>
                            <a href="" className="text-[#adff2f]">{item.link}</a>
                        </div>
                    ))
                }

            </div>
        </section>
    )
}

export default Games