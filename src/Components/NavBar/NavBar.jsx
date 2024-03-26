import { Link } from "react-router-dom";
import { IoMenu as MenuIcon } from "react-icons/io5";
import { motion } from "framer-motion";
import { useState } from "react";
import WhyRecruit from "./WhyRecruit/WhyRecruit";
import UseCase from "./Usecase/UseCase";
import Resources from "./Resources/Resources";

const NavBar = () => {
    const [navItem, setNavItem] = useState(null);
    const handleNavItem = (item) => {
        setNavItem(item);
    };

    const handleSubNav = () => {
        switch (navItem) {
            case "recruit":
                return <WhyRecruit navItem={navItem} setNavItem={setNavItem} />;
            case "usecase":
                return <UseCase navItem={navItem} setNavItem={setNavItem} />;
            case "resources":
                return <Resources navItem={navItem} setNavItem={setNavItem} />;
            default:
                return;
        }
    }
    return (
        <div>
            <div className="text-gray-500 px-[3%] sm:px-[5%]  py-[1.5%] sm:py-[3%] flex flex-row items-center bg-white border border-gray-300 shadow-md fixed top-0 w-screen z-50" onMouseLeave={() => { handleNavItem(null) }}>

                <div className=" pr-[2%] flex flex-row items-center gap-[7%] flex-[2] sm:hidden">
                    <Link to={'/'} className=" cursor-pointer font-bold text-[24px]">Open<span className=" text-blue-600">Hire</span></Link>

                    <p className="hover:text-blue-600 cursor-pointer" onMouseOver={() => { handleNavItem("recruit") }} >Why&#160;recruit&#160;?</p>

                    <p className="hover:text-blue-600 cursor-pointer" onMouseOver={() => { handleNavItem("usecase") }}  >Use&#160;Case</p>

                    <p className="hover:text-blue-600 cursor-pointer">Customers</p>

                    <p className="hover:text-blue-600 cursor-pointer" onMouseOver={() => { handleNavItem("resources") }}  >Resources</p>
                </div>

                <div className=" flex flex-row items-center justify-end gap-6 flex-[1] sm:hidden">
                    <Link to={"/login"}>
                        <p className="hover:text-blue-600 cursor-pointer">Log&#160;in</p>
                    </Link>
                    <Link to={"/dashboard"} className="text-white bg-blue-600 rounded-[5px] px-3 py-2 cursor-pointer font-semibold hover:shadow-lg">
                        <p>Get Start Free</p>
                    </Link>
                </div>


                {/**Mobile Nav */}
                <div className="hidden sm:flex flex-row items-center w-screen justify-between text-[16px] ">
                    <div className=" cursor-pointer hover:text-blue-600">
                        <p>Logo</p>
                    </div>

                    <Link to={"/dashboard"} className=" uppercase underline text-blue-600 font-bold cursor-pointer">
                        <motion.p whileTap={{ scale: 0.6 }}>Try for Free</motion.p>
                    </Link>

                    <motion.div whileTap={{ scale: 0.6 }} className="text-black text-[35px] cursor-pointer">
                        <MenuIcon />
                    </motion.div>
                </div>

            </div >
            <div className="fixed top-[75px] bg-white shadow-md w-screen z-50">
                {handleSubNav()}
            </div>
        </div>
    );
}

export default NavBar;