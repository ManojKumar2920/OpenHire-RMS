import { IoRemoveOutline as LineIcon } from "react-icons/io5";
import Form from "./Form.jsx"
import { motion } from "framer-motion";


const Signup = () => {
    return (
        <div className="h-[90vh]">

            <div className=" bg-[#ff9200] rounded-[50%] absolute -z-10 "></div>

            <div className="flex flex-row items-center justify-around ">
                <div className=" sm:hidden">

                    <div className=" flex flex-col gap-2 my-[10%]">
                        <h1 className=" font-bold text-[40px]">CodersCave</h1>
                        <p className="text-[20px] font-semibold">Make Impact together</p>
                    </div>

                    <motion.button whileTap={{scale:0.6}} className=" flex flex-row items-center gap-2 border bg-[#ff9200] text-white p-2 rounded-[5px]">Learn Now <LineIcon /></motion.button>

                </div>

                <div>
                    <Form />
                </div>
            </div>

            <div className=" flex flex-row sm:flex-col sm:gap-3 items-center w-screen justify-around absolute bottom-[5%]">

                {/**Terms & Conditions */}
                <div className="text-gray-500 cursor-pointer flex flex-row gap-2 items-center">
                    <p>Terms & Conditions</p>
                    <p>|</p>
                    <p>Privacy Policy</p>
                </div>

                {/** Mini Footer */}
                <div className="flex flex-row items-center h-auto gap-4 text-gray-500">
                    <motion.div whileTap={{ scale: 0.6 }} className="flex flex-row items-center gap-1 cursor-pointer">
                        <p>LinkedIn</p>
                    </motion.div>
                    <motion.div whileTap={{ scale: 0.6 }} className="flex flex-row items-center gap-1 cursor-pointer">
                        <p>Whatsapp</p>
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default Signup;