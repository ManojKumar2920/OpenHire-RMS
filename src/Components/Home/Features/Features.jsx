import FeaturesData from "./FeaturesData.js";
import { FaUserFriends as CandidateIcon } from "react-icons/fa";
import { MdOutlineQueryStats as ATSIcon } from "react-icons/md";
import { MdOutlineScreenSearchDesktop as VirtualIcon } from "react-icons/md";
import { BiSolidSelectMultiple as HireIcon } from "react-icons/bi";
import { SiInternetcomputer as JobPostingIcon } from "react-icons/si";
import { MdOutlineSupportAgent as CareerPageIcon } from "react-icons/md";

const Features = () => {

  const handleIcon = (features) => {
    switch (true) {
      case features.title === "Candidate Sourcing":
        return <CandidateIcon className="mx-auto" />;
      case features.title === "Hire System":
        return <HireIcon className="mx-auto" />;
      case features.title === "ATS":
        return <ATSIcon className="mx-auto" />;
      case features.title === "Virtual Interviews":
        return <VirtualIcon className="mx-auto" />;
      case features.title === "Multiple site Job Posting":
        return <JobPostingIcon className="mx-auto" />;
      case features.title === "Career Page Support":
        return <CareerPageIcon className="mx-auto" />;
    }
  };


  return (
    <div>
      <div className="my-[5%]">
        <h1 className="text-center font-bold text-[30px] text-gray-800">Hiring platform</h1>
        <h1 className="text-center font-bold text-[30px] text-gray-800">packed with everything you need</h1>
      </div>
      <div className=" flex flex-wrap w-[100%] justify-evenly gap-6">
        {

          FeaturesData.map((feature) => (
            <div key={feature.title} className=" w-[350px] p-3 rounded-[10px] text-center hover:shadow-xl border border-gray-200 flex flex-col gap-2 justify-center cursor-pointer hover:border-blue-500 hover:border hover:duration-300 py-7 shadow-md">
              <div className="text-[33px]">
                {handleIcon(feature)}
              </div>
              <h1 className=" font-semibold text-[20px]">{feature.title}</h1>
              <p className=" text-[17px] text-gray-400 w-[80%] mx-auto text-center">{feature.desc}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Features;