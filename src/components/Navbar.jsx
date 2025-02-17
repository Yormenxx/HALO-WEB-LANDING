import { navItems } from "../constants"
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import microsoft from "../assets/microsoft.png"
import halo from "../assets/halo.jpeg"
import { useState } from "react";
import Add from "./Add";
function Navbar() {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }

    return (
        <>

            <header className="relative  w-full h-screen ">

                <nav className="relative z-20  py-5 px-1.5 text-white bg-white/5 bg-opacity-10 backdrop-filter backdrop-blur-lg">

                    <div className="flex justify-around items-center">

                        <img src={microsoft} className="w-[150px]" alt="" />

                        <div className="lg:flex hidden">
                            <ul className="flex justify-between items-center space-x-5 ">
                                {
                                    navItems.map((item, index) => (

                                        <li key={index} className="relative">
                                            <a href={item.link} className="capitalize text-lg hover:opacity-80 duration-200 ease-in-out" >{item.name}</a>
                                        </li>

                                    ))
                                }
                            </ul>
                        </div>

                        <div className="lg:flex hidden justify-around items-center space-x-3">
                            <CiSearch className="text-2xl" />
                            <FaShoppingCart className="text-2xl" />
                            <button>Sign in</button>
                        </div>

                        <div className="lg:hidden flex justify-end" >
                            <button onClick={toggleNavbar}>
                                {mobileDrawerOpen ? <IoClose className="text-4xl" /> : <IoMdMenu className="text-4xl" />}
                            </button>
                        </div>

                    </div>


                    {
                        mobileDrawerOpen && (

                            <div className=" z-20  w-full p-12 flex flex-col justify-center items-center lg:hidden">

                                <ul className="relative z-20 flex flex-col justify-between items-center  space-y-1.5">
                                    {
                                        navItems.map((item, index) => (

                                            <li key={index} className="relative">
                                                <a href={item.link} className="capitalize text-lg hover:opacity-80 ease-in-out" >{item.name}</a>
                                            </li>

                                        ))
                                    }
                                </ul>

                                <div className="flex flex-col justify-around items-center space-y-3">
                                    <CiSearch />
                                    <FaShoppingCart />
                                    <button>Sign in</button>
                                </div>

                            </div>





                        )
                    }
                </nav>
                <Add />

            </header>

          

        </>
    )
}

export default Navbar
