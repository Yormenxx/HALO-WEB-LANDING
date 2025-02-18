import master from "../assets/master.jpg"
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
function BuyGame() {
  return (
    <>
      <section className="py-20">

        <div>
          <div className="container py-5">
            <motion.div variants={fadeIn("down", 0.1)}
                initial="hidden"
                whileInView={"show"}
                vieport={{ once: false, amount: 0.5 }} className="flex flex-col items-center z-20 md:flex-row justify-center">
              <img src={master} alt="master" className="h-[400px] px-10" />

              <div className="text-center mb-6 md:text-left md:w-1/2 md:pr-10">
                <h2 className="text-6xl md:text-4xl font-bold leading-snug mb-4">Halo Infinite (Campaña)</h2>
                <h3 className="text-2xl md:text-2xl font-bold leading-snug mb-4">Se incluye con Game Pass</h3>
                <p className="leading-relaxed mb-10">Disfruta de Halo Infinite y de cientos de juegos de alta calidad por un módico precio mensual con Game Pass.</p>
                <div className="w-full flex flex-col md:flex-row">
                  <a href="" className="bg-[#adff2f] text-[#026b07] uppercase font-bold px-4 py-2 rounded hover:opacity-80 duration-200 ease-in-out">Unete a gamepass</a>

                  <a href="" className=" text-[#026b07] uppercase font-bold px-4 py-2 rounded hover:opacity-80 duration-200 ease-in-out">ya eres miembro?</a>
                </div>

                <h4 className="font-bold text-lg py-2">Comprar Halo Infinite</h4>

                <select name="" id="" className="w-[140px] py-2 border-1 border-neutral-900">
                  <option value="">Steam</option>
                  <option value="">GamePass</option>
                  <option value="">Pc windows 10</option>
                  <option value="">Xbox One</option>
                </select>

                <a href="" className="bg-[#adff2f] text-[#026b07] uppercase font-bold px-4 py-2 rounded hover:opacity-80 duration-200 ease-in-out ml-3">Comprar ahora</a>
              </div>



            </motion.div>
          </div>
        </div>

      </section>

    </>
  )
}

export default BuyGame