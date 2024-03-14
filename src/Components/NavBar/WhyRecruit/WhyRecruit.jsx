import React from 'react'

const WhyRecruit = ({navItem,setNavItem}) => {
  return (
    <div onMouseOver={()=>{setNavItem("recruit")}} onMouseLeave={()=>{setNavItem(null)}}>
        <div className=' absolute top-[14%] left-[10%] border border-gray-400 bg-white z-50 w-[75%] flex flex-row p-8 rounded-[10px] text-[16px] text-gray-600'>

            <div className="flex-1 flex flex-col gap-6 ">
                <h1 className=" text-[21px] text-black font-semibold" >Why Recruit ?</h1>

                <div className="flex flex-col gap-4">
                    <p className="hover:underline cursor-pointer hover:text-black">Key Features</p>
                    <p className="hover:underline cursor-pointer hover:text-black">Watch Product Video</p>
                </div>
            </div>
            


            <div className="flex-1 flex flex-col gap-6 ">
                <h1 className=" text-[21px] text-black font-semibold" >Sources</h1>

                <div className="flex flex-col gap-4">
                    <p className="hover:underline cursor-pointer hover:text-black">Job Advertising</p>
                    <p className="hover:underline cursor-pointer hover:text-black">Multi-Posting</p>
                    <p className="hover:underline cursor-pointer hover:text-black">Canditate Sourcing</p>
                    <p className="hover:underline cursor-pointer hover:text-black">Career Side Software</p>
                    <p className="hover:underline cursor-pointer hover:text-black">Social Media Recruiting</p>
                </div>

            </div>


            <div className="flex-1 flex flex-col gap-6">
                <h1 className=" text-[21px] text-black font-semibold" >Track</h1>

                <div className="flex flex-col gap-4">
                    <p className="hover:underline cursor-pointer hover:text-black">ATS</p>
                    <p className="hover:underline cursor-pointer hover:text-black">Recruitment Software</p>
                    <p className="hover:underline cursor-pointer hover:text-black">Virtual Interview</p>
                    <p className="hover:underline cursor-pointer hover:text-black">Canditate Experience</p>
                </div>
  
            </div>


            <div className="flex-1 flex flex-col gap-6">
                <h1 className=" text-[21px] text-black font-semibold" >Automate</h1>

                <div className="flex flex-col gap-4">
                    <p className="hover:underline cursor-pointer hover:text-black">Integration</p>
                    <p className="hover:underline cursor-pointer hover:text-black">Data Driven Hiring</p>
                    <p className="hover:underline cursor-pointer hover:text-black">Talent Pools</p>
                    <p className="hover:underline cursor-pointer hover:text-black">Hiring New Employees</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default WhyRecruit