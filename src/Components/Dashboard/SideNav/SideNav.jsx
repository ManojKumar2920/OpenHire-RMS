import { IoMdHome as HomeIcon } from "react-icons/io";
import { AiOutlineBank as OrganizationIcon } from "react-icons/ai";
import { IoBag as JobIcon } from "react-icons/io5";
import { IoPeople as PeoplesIcon } from "react-icons/io5";

import { MdRecommend as RecommandIcon } from "react-icons/md";
import { MdOutlinePermContactCalendar as SuppliersIcon } from "react-icons/md";
import { FaUserCheck as PlacementIcon } from "react-icons/fa";
import { RiFilePaperFill as ApplicationIcon } from "react-icons/ri";
import { HiCurrencyDollar as DollarIcon } from "react-icons/hi2";
import { FaRegCalendarAlt as ActivityIcon } from "react-icons/fa";
import { TiMessage as InboxIcon } from "react-icons/ti";

import { IoAnalyticsSharp as AnalyticsIcon } from "react-icons/io5";


const SideNav = () => {
  const NotSelected = {
    "-webkit-user-select": "none",
    "-moz-user-select": "none",
    "-ms-user-select": "none",
    "user-select": "none",
  };

  return (
    <div className=" shadow-sm bg-blue-300 border-gray-400 font-semibold text-[15px]  absolute w-[100%]" style={NotSelected}>

      <div className=" pt-[5%] ">

        <div className="flex flex-row items-center py-[3%] px-[2%] gap-3 hover:bg-white cursor-pointer pl-[7%] ">
          <HomeIcon className="text-gray-700 " />
          <p>Home</p>
        </div>

        <div className="flex flex-row items-center py-[3%] px-[2%] gap-3 hover:bg-white cursor-pointer pl-[7%]">
          <OrganizationIcon className="text-gray-700" />
          <p>Organisation</p>
        </div>

        <div className="flex flex-row items-center py-[3%] px-[2%] gap-3 hover:bg-white cursor-pointer pl-[7%]">
          <JobIcon className="text-gray-700" />
          <p>Vacantes</p>
        </div>

        <div className="flex flex-row items-center py-[3%] px-[2%] gap-3 hover:bg-white cursor-pointer pl-[7%]">
          <PeoplesIcon className="text-gray-700" />
          <p>Candidates</p>
        </div>
      </div>

      <hr className="mx-auto my-[3%] w-[90%]" />

      <div>

        <div className="flex flex-row items-center py-[3%] px-[2%] gap-3 hover:bg-white cursor-pointer pl-[7%]">
          <RecommandIcon className="text-gray-700" />
          <p>Recommandation</p>
        </div>

        <div className="flex flex-row items-center py-[3%] px-[2%] gap-3 hover:bg-white cursor-pointer pl-[7%]">
          <SuppliersIcon className="text-gray-700" />
          <p>Suppliers</p>
        </div>

        <div className="flex flex-row items-center py-[3%] px-[2%] gap-3 hover:bg-white cursor-pointer pl-[7%]">
          <PlacementIcon className="text-gray-700" />
          <p>Placements</p>
        </div>

        <div className="flex flex-row items-center py-[3%] px-[2%] gap-3 hover:bg-white cursor-pointer pl-[7%]">
          <ApplicationIcon className="text-gray-700" />
          <p>Application</p>
        </div>

        <div className="flex flex-row items-center py-[3%] px-[2%] gap-3 hover:bg-white cursor-pointer pl-[7%]">
          <DollarIcon className="text-gray-700" />
          <p>Income</p>
        </div>

        <div className="flex flex-row items-center py-[3%] px-[2%] gap-3 hover:bg-white cursor-pointer pl-[7%]">
          <ActivityIcon className="text-gray-700" />
          <p>Activities</p>
        </div>

        <div className="flex flex-row items-center py-[3%] px-[2%] gap-3 hover:bg-white cursor-pointer pl-[7%]">
          <InboxIcon className="text-gray-700" />
          <p>Inbox</p>
        </div>

      </div>

      <hr className="mx-auto my-[3%] w-[90%]" />

      <div>

        <div className="flex flex-row items-center py-[3%] px-[2%] gap-3 hover:bg-white cursor-pointer pl-[7%]">
          <AnalyticsIcon className="text-gray-700" />
          <p>Reports</p>
        </div>

      </div>

    </div>
  )
}

export default SideNav