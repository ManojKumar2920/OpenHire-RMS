import HeroImg from "../../assets/Img/Home/hero.jpg";
import { MdOutlineDone as DoneIcon } from "react-icons/md";
import { HiCurrencyDollar as DollarIcon } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div>
            <div className=" flex flex-row px-[3%] gap-6 pt-[6%]">
                <div className=" flex-1">
                    <h2 className=" text-[16px] text-gray-500 font-semibold">Online Hiring Software For Business</h2>

                    <div className=" font-bold my-[3%] text-[47px]">
                        <h2>Simple Hiring For</h2>
                        <h2>Smart Businesses</h2>
                    </div>

                    <p className=" text-gray-500 text-[18px] my-[2%]">We bring a human touch to hiring. Discover and hire the perfect candidates with our no-fuss hiring software that just works.</p>

                    <Link to={"/dashboard"}>
                        <div className=" rounded-[5px] px-3 py-3 text-white font-semibold bg-blue-600 w-[200px] text-center my-[5%] cursor-pointer hover:shadow-lg text-[17px]">
                            <p>Get Start Free</p>
                        </div>
                    </Link>
                </div>

                <div className="flex-[1.1] relative">
                    <img src={HeroImg} alt="heroImg" className="rounded-[10px] " />

                    {/* Light blue overlay */}
                    <div className="absolute top-0 left-0 w-full h-full bg-blue-400 bg-opacity-50 rounded-[10px] "></div>

                    {/**msg Container */}
                    <div className="absolute bg-transparent w-[350px] top-[60%] right-[50%]">
                        <div className="rounded-[5px] bg-white flex flex-row items-center gap-2 border border-gray-100 mb-[5%] w-auto py-[2%] px-[2%]">
                            <DoneIcon />
                            <div className=" flex flex-row items-center gap-1 text-center">
                                <p>Reduce hiring time by</p>
                                <span className=" font-semibold">30 hours</span>
                                <p>a month</p>
                            </div>
                        </div>

                        <div className="rounded-[5px] bg-white flex flex-row items-center gap-2 border border-gray-100 w-[70%] py-[2%] px-[2%]">
                            <DoneIcon />
                            <div className=" flex flex-row items-center gap-1 text-center">
                                <p>Save your</p>
                                <DollarIcon />
                                <p>money</p>
                                <span className=" font-semibold">100%</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Hero