
import ImageGallery from "react-image-gallery";
import Forge from './Forge';
import "react-image-gallery/styles/css/image-gallery.css";
import gallery1 from "../assets/gallery/gallery1.jpg"
import gallery2 from "../assets/gallery/gallery2.jpg"
import gallery3 from "../assets/gallery/gallery3.jpg"
import gallery4 from "../assets/gallery/gallery4.jpg"
import gallery5 from "../assets/gallery/gallery5.jpg"
import gallery6 from "../assets/gallery/gallery6.jpg"
import gallery7 from "../assets/gallery/gallery7.jpg"
import { motion } from "framer-motion";
import { fadeIn } from "../variants";



import Serie from './Serie';
function Gallery() {

    const images = [
        {
            original: `${gallery1}`,
            thumbnail: `${gallery1}`
        },
        {
            original: `${gallery2}`,
            thumbnail: `${gallery2}`
        },

        {
            original: `${gallery3}`,
            thumbnail: `${gallery3}`
        },

        {
            original: `${gallery4}`,
            thumbnail: `${gallery4}`
        },

        {
            original: `${gallery5}`,
            thumbnail: `${gallery5}`
        },

        {
            original: `${gallery6}`,
            thumbnail: `${gallery6}`
        },
        {
            original: `${gallery7}`,
            thumbnail: `${gallery7}`
        },

    ]
    return (

        <>
            <section className=' bgCover py-14'>
                <motion.h1 variants={fadeIn("down", 0.1)}
                initial="hidden"
                whileInView={"show"}
                vieport={{ once: false, amount: 0.5 }} className="text-3xl font-bold py-12 md:text-5xl text-center capitalize text-[#adff2f]">CONVIÉRTETE.</motion.h1>
                <motion.p variants={fadeIn("right", 0.1)}
                initial="hidden"
                whileInView={"show"}
                vieport={{ once: false, amount: 0.5 }} className="w-[70%] text-center m-auto text-white pb-8">Halo, una de las sagas más emblemáticas de los videojuegos, está más grande que nunca. Con una amplia campaña de mundo abierto y una experiencia multijugador dinámica gratuita.</motion.p>
                <motion.div variants={fadeIn("down", 0.1)}
                initial="hidden"
                whileInView={"show"}
                vieport={{ once: false, amount: 0.5 }}>
                    <ImageGallery 
                        showPlayButton={false}
                        showFullscreenButton={false}
                        showNav={false}
                        slideInterval={3000}
                        items={images} />


                </motion.div>


                <Forge />
                <Serie />
            </section>
        </>

    )
}

export default Gallery