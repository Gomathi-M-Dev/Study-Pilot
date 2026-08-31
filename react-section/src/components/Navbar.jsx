import React from 'react'
import logo from "../assets/rocket.png";
import Button from "./Button";


const Navbar = () => {
    return (
        <div className='w-full bg-[#0B0750]'>
            <div className='container mx-auto flex justify-between items-center py-3 px-4'>
                <div className='flex items-center'>
                    <img src={logo} alt="brand-logo" className='w-[50px]' />
                    <h2 className='mt-1 font-semibold text-white'>StudyPilot</h2>
                </div>
                <div className='nav-link'>
                    <ul className='flex gap-8 text-white'>
                        <li><a className='text-[16px] font-[450] hover:border-b-2 border-[#3F20B9] pb-2 cursor-pointer'>Home</a></li>
                        <li><a className='text-[16px] font-[450] hover:border-b-2 border-[#3F20B9] pb-2 cursor-pointer'>Study</a></li>
                        <li><a className='text-[16px] font-[450] hover:border-b-2 border-[#3F20B9] pb-2 cursor-pointer'>Practice</a></li>
                        <li><a className='text-[16px] font-[450] hover:border-b-2 border-[#3F20B9] pb-2 cursor-pointer'>Project</a></li>
                        <li><a className='text-[16px] font-[450] hover:border-b-2 border-[#3F20B9] pb-2 cursor-pointer'>Interview</a></li>
                    </ul>
                </div>
                <div className='flex gap-5 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-white/85">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-white/85">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                    <Button name="Login" padding="px-4 py-2" text_size="text-[16px]" bg="bg-blue-800" />



                </div>


            </div>
        </div>
    )
}

export default Navbar