import resume from "../../assets/Img/Home/parse-resumes.jpg"
import { SiGithub as GithubIcon } from "react-icons/si";
import opensource from "../../assets/Img/Home/opensource.jpg";
import { Link } from "react-router-dom";

const MainContainer = () => {
    return (
        <div>
            <div className=" px-[3%] my-[4%]">

                <div className="mx-auto text-center w-[75%] my-[13%] ">
                    <h1 className="text-[30px] font-bold my-[2%]">How to choose the right recruitment management tool&#160;?</h1>
                    <p className="text-[18px] text-gray-600">Choosing the right recruitment management platform for your staffing firm is an important decision. With the right combination of essential features, you can kick-start your e-recruitment process. Recruit&apos;s integrated recruitment management system gives you a number of essential features including the following.</p>
                </div>

                <div className=" flex flex-row items-center bg-gray-100 rounded-[5px] w-[90%] my-[10%] mx-auto ">
                    <div className="mx-auto text-start w-[55%]">
                        <h1 className="text-[30px] font-bold my-[3%] text-gray-700">Join us in contributing.</h1>
                        <p className="text-[18px] text-gray-600 my-[2%]">Join us in transforming the recruitment industry by contributing to our open source project.</p>
                        <Link to={"https://github.com/BALASANTHOSH01/Next_Gen_RMS"} target="_blank" className="flex flex-row w-[150px] justify-center gap-2 items-center text-[17px] hover:shadow-lg rounded-[5px] py-2 px-1 bg-blue-600 cursor-pointer text-white uppercase font-semibold mt-[5%]">
                            <GithubIcon />
                            <p>Contribute</p>
                        </Link>
                    </div>
                    <div className="  w-[25%] p-2">
                        <img src={opensource} alt="opensource" className="rounded-[10px]"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContainer;