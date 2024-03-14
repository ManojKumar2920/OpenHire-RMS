import React from 'react'

const UseCase = ({navItem,setNavItem}) => {
  return (
    <div onMouseOver={()=>{setNavItem("usecase")}} onMouseLeave={()=>{setNavItem(null)}}>
        <div className=' absolute top-[14%] left-[15%] border border-gray-200 bg-white shadow-lg z-50 w-[45%] flex flex-row justify-around p-8 rounded-[10px] text-[16px] text-gray-600'>

            <div className='flex flex-col gap-5'>
                <h1 className=' text-[21px] text-black font-semibold'>Industries</h1>

                <div className=' flex flex-col gap-3 '>
                    <p className='hover:underline hover:text-black cursor-pointer'>Saas</p>
                    <p className='hover:underline hover:text-black cursor-pointer'>Teach</p>
                    <p className='hover:underline hover:text-black cursor-pointer'>Software Company</p>
                    <p className='hover:underline hover:text-black cursor-pointer'>Hospitals</p>
                    <p className='hover:underline hover:text-black cursor-pointer'>Restaurents</p>
                </div>
            </div>

            <div className='flex flex-col gap-5'>
                <h1 className=' text-[21px] text-black font-semibold'>Who uses Recruit ?</h1>

                <div className=' flex flex-col gap-3 '>
                    <p className='hover:underline hover:text-black cursor-pointer'>CEO</p>
                    <p className='hover:underline hover:text-black cursor-pointer'>Manager</p>
                    <p className='hover:underline hover:text-black cursor-pointer'>HR Team</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default UseCase