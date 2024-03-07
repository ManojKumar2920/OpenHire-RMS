import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            <div className="text-gray-500 px-[3%]  py-[1.5%] flex flex-row items-center bg-white border border-gray-300 shadow-md fixed top-0 w-screen z-50">

                <div className=" pr-[2%] flex flex-row items-center gap-[7%] flex-[2]">
                    <p className="hover:text-blue-600 cursor-pointer">Logo</p>

                    <p className="hover:text-blue-600 cursor-pointer">Why&#160;recruit&#160;?</p>

                    <p className="hover:text-blue-600 cursor-pointer">Use&#160;Case</p>

                    <p className="hover:text-blue-600 cursor-pointer">Customers</p>

                    <p className="hover:text-blue-600 cursor-pointer">Resources</p>
                </div>

                <div className=" flex flex-row items-center justify-end gap-6 flex-[1]">
                    <p className="hover:text-blue-600 cursor-pointer">Log&#160;in</p>
                    <Link to={"/dashboard"} className="text-white bg-blue-600 rounded-[5px] px-3 py-2 cursor-pointer font-semibold hover:shadow-lg">
                        <p>Get Start Free</p>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default NavBar;