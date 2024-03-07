import { FaLinkedinIn as LinkedInIcon } from "react-icons/fa6";
import { IoLogoGithub as GithubIcon } from "react-icons/io";
import { FaFacebook as FaceBookIcon } from "react-icons/fa";
import { FaInstagram as InstagramIcon } from "react-icons/fa";
import { FaXTwitter as XIcon } from "react-icons/fa6";

import { PiLadderSimpleBold as LaddersIcon } from "react-icons/pi";
import { AiOutlineGoogle as GoogleIcon } from "react-icons/ai";
import { SiIndeed as IndeedIcon } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className=" text-white text-[15px] bg-black px-[4%] mt-[10%] py-[5%]">
            <div className=" flex flex-row items-start justify-around">

                <div>
                    <h1>Features</h1>

                    <div className="mt-[20%] mb-[2%] text-gray-400 flex flex-col gap-2">
                        <p className=" cursor-pointer">Why Recruit&#160;?</p>
                        <p className=" cursor-pointer">Candidate Sourcing</p>
                        <p className=" cursor-pointer">Hiring System</p>
                        <p className=" cursor-pointer">ATS</p>
                        <p className=" cursor-pointer">Virtual Interviews</p>
                        <p className=" cursor-pointer">Job Posting</p>
                        <p className=" cursor-pointer">Support</p>
                    </div>
                </div>

                <div>
                    <h1>Job Posting</h1>

                    <div className="my-[20%] text-gray-400 flex flex-col gap-2">

                        <div className="flex flex-row items-center gap-3 cursor-pointer">
                            <GoogleIcon />
                            <p>Google</p>
                        </div>
                        <div className="flex flex-row items-center gap-3 cursor-pointer">
                            <LinkedInIcon />
                            <p>LinkedIn</p>
                        </div>
                        <div className="flex flex-row items-center gap-3 cursor-pointer">
                            <IndeedIcon />
                            <p>Indeed</p>
                        </div>
                        <div className="flex flex-row items-center gap-3 cursor-pointer">
                            <LaddersIcon />
                            <p>Ladders</p>
                        </div>

                    </div>
                </div>

                <div>
                    <h1>Company</h1>

                    <div className="mt-[20%] mb-[2%] text-gray-400 flex flex-col gap-2">
                        <p className=" cursor-pointer">About Us</p>
                        <p className=" cursor-pointer">Careers</p>
                        <p className=" cursor-pointer">Customer Stories</p>
                        <p className=" cursor-pointer">Affiliate Program</p>
                    </div>
                </div>

                <div>
                    <h1>Resources</h1>

                    <div className="mt-[20%] mb-[2%] text-gray-400 flex flex-col gap-2">
                        <p className=" cursor-pointer">Blog</p>
                        <p className=" cursor-pointer">Help Center</p>
                        <p className=" cursor-pointer">Gloserry</p>
                        <p className=" cursor-pointer">Templates</p>
                    </div>
                </div>

                <div>
                    <h1>Get In Touch</h1>

                    <div className="mt-[20%] mb-[2%] text-gray-400 flex flex-col gap-2">
                        <p className=" cursor-pointer">Contact Us</p>
                        <Link to={"https://github.com/BALASANTHOSH01/Next_Gen_RMS"} target="_blank" className="flex flex-row items-center gap-3 cursor-pointer">
                            <GithubIcon />
                            <p>GitHub</p>
                        </Link>
                        <div className="flex flex-row items-center gap-3 cursor-pointer">
                            <LinkedInIcon />
                            <p>LinkedIn</p>
                        </div>
                        <div className="flex flex-row items-center gap-3 cursor-pointer">
                            <InstagramIcon />
                            <p>Instagram</p>
                        </div>
                        <div className="flex flex-row items-center gap-3 cursor-pointer">
                            <FaceBookIcon />
                            <p>Facebook</p>
                        </div>
                        <div className="flex flex-row items-center gap-3 cursor-pointer">
                            <XIcon />
                            <p>X</p>
                        </div>
                    </div>
                </div>

            </div>

            <hr className="h-[1px] bg-gray-400 w-[100%] my-[3%]" />

            <div className=" flex flex-row items-center justify-between text-gray-400">

                <div>
                    <p>2024 Recruit.All rights are reserved</p>
                </div>

                <div>
                    <p>Terms of Service · Privacy Policy · GDPR · Security · Data Processing Agreement</p>
                </div>

            </div>
        </div>
    )
}

export default Footer;