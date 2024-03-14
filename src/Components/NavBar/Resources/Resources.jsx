import React from 'react'

const Resources = ({ navItem, setNavItem }) => {
  return (
    <div onMouseOver={()=>{setNavItem("resources")}} onMouseLeave={()=>{setNavItem(null)}}>
      <div className=' absolute top-[14%] left-[25%] border border-gray-200 bg-white shadow-lg z-50 w-[45%] flex flex-row justify-around p-8 rounded-[10px] text-[16px] text-gray-600'>

        <div className='flex flex-col gap-5'>
          <h1 className=' text-[21px] text-black font-semibold'>Learn</h1>

          <div className='flex flex-col gap-3'>
            <p className='hover:underline hover:text-black cursor-pointer'>Blog</p>
            <p className='hover:underline hover:text-black cursor-pointer'>AI Hiring Tool</p>
            <p className='hover:underline hover:text-black cursor-pointer'>HR Glossary</p>
            <p className='hover:underline hover:text-black cursor-pointer'>Template</p>
            <p className='hover:underline hover:text-black cursor-pointer'>Help Center</p>
          </div>
        </div>

        <div className='flex flex-col gap-5'>
          <h1 className=' text-[21px] text-black font-semibold'>Company</h1>

          <div className='flex flex-col gap-3'>
            <p className='hover:underline hover:text-black cursor-pointer'>About Recruit</p>
            <p className='hover:underline hover:text-black cursor-pointer'>Careers</p>
            <p className='hover:underline hover:text-black cursor-pointer'>Affiliated Partners</p>
            <p className='hover:underline hover:text-black cursor-pointer'>Solution Partners</p>
            <p className='hover:underline hover:text-black cursor-pointer'>White-label Partners</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Resources