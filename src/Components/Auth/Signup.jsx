import { IoRemoveOutline as LineIcon } from "react-icons/io5";
import Form from "./Form.jsx"
import { motion } from "framer-motion";


const Signup = () => {
    return (
        <div className=" mt-[9%] mx-auto">

            <div className=" bg-blue-600 rounded-[50%] absolute -z-10 "></div>

                <div>
                    <Form />
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