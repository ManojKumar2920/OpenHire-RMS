import { RiMenu2Line as MenuIcon } from "react-icons/ri";
import { CiSearch as SearchIcon } from "react-icons/ci";
import { LuPlus as PlusIcon } from "react-icons/lu";
import { FaQuestion as QuestionIcon } from "react-icons/fa6";
import { IoIosNotifications as NotificationIcon } from "react-icons/io";
import { MdLightMode as LightIcon } from "react-icons/md";
import { IoMoon as DarkIcon } from "react-icons/io5";
import user from "../../../assets/Img/user.jpg";
import { useState } from "react";
import { motion } from "framer-motion";

const Nav = () => {
    const NotSelected = {
        "-webkit-user-select": "none",    
        "-moz-user-select": "none",
        "-ms-user-select": "none",
        "user-select": "none",
      };
    const [theme, setTheme] = useState("light");
    return (
        <div className="w-[100%] fixed top-0 z-50">
            <div className=" flex flex-row bg-blue-500 text-white justify-between px-[3%] py-3 items-center text-[18px]" style={NotSelected}>

                <div className=" flex flex-row flex-1 justify-start gap-[5%] items-center">

                    <motion.div whileTap={{ scale: 0.6 }} className=" cursor-pointer">
                        <MenuIcon className="text-[23px]" />
                    </motion.div>
                    <motion.p whileTap={{scale:0.6}} className="p-1 rounded-[50%] text-[14px] cursor-pointer border border-gray-200 w-[30px] h-auto text-center">S</motion.p>
                    {
                        theme === "light" &&
                        <motion.div className=" duration-300 rounded-[50%] text-[22px] cursor-pointer p-1" whileTap={{ scale: 0.4 }} onClick={() => {
                            setTheme("dark");
                        }}>
                            <LightIcon />
                        </motion.div>
                    }
                    {
                        theme === "dark" &&
                        <motion.div className=" duration-300 rounded-[50%] text-[22px] cursor-pointer p-1" whileTap={{ scale: 0.4 }} onClick={() => {
                            setTheme("light");
                        }}>
                            <DarkIcon />
                        </motion.div>
                    }
                </div>

                <div className=" border rounded-[5px] overflow-hidden border-blue-200 px-2 w-[250px] py-1 bg-blue-200 relative flex flex-row items-center flex-[1]">
                    <input type="text" placeholder="Use your tools by searching.." className="border-none bg-blue-200 text-black outline-none text-[14px]  p-1 w-[90%]" />
                    <SearchIcon className="text-black text-[18px] cursor-pointer" />
                </div>

                <div className=" flex flex-row items-center flex-1 gap-[4%] justify-end">

                    <motion.div whileTap={{scale:0.6}} className=" rounded-[50%] text-[14px] text-blue-500 bg-white p-1 cursor-pointer border border-white">
                        <PlusIcon  />
                    </motion.div>
                    <motion.div whileTap={{scale:0.6}} className=" rounded-[50%] text-[14px] text-blue-500 bg-white border border-white p-1 cursor-pointer">
                        <QuestionIcon />
                    </motion.div>
                    <motion.div whileTap={{scale:0.6}} className=" rounded-[50%] text-[16px] text-blue-500 bg-white p-1 cursor-pointer">
                        <NotificationIcon />
                    </motion.div>

                    <motion.img whileTap={{scale:0.6}} src={user} alt="userImg" className="rounded-[50%] w-[30px] ml-[1%] h-[30px] cursor-pointer" />
                </div>

            </div>
        </div>
    )
}

export default Nav;