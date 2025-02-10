import React from 'react'
import Logo_mobile from '../../public/logo_mobile.png'

const Navbar = () => {
    return (
        <div className='w-screen flex justify-center '>
            <div className=' flex justify-between md:hidden w-full px-3 py-3 border-b-1 border-green-400'>
                <img className="h-11 w-11" src="../../public/logo_mobile.png" alt="" />
                <img className="h-10 w-10" src="../../public/bars-3.png" alt="" />
            </div>

            <div className='hidden items-center md:flex sm:flex-row justify-between md:py-3    w-[1080px] '>
                <img className='w-35 h-15' src="../../public/logo.png" alt="" />

                <ul className='md:flex md:flex-row space-x-4 text-[20px] font-lg'>
                    <li className='cursor-pointer'>Product</li>
                    <li className='cursor-pointer'><a href="services">Services</a></li>
                    <li className='cursor-pointer'>Contact us</li>
                </ul>

                <div className='flex items-center space-x-3'>
                    <img className='w-5 h-5 cursor-pointer' src="../../public/search_icon.png" alt="" />
                    <img className='w-5 h-5 cursor-pointer mr-4' src="../../public/cart.png" alt="" />
                    <button className='font-bold cursor-pointer bg-transparent border-2 border-[#179800] py-2 px-6 rounded-lg hover:bg-[#179800] transition delay-100 ease-in-out duration-300 hover:text-white'>Login</button>
                    <button className='cursor-pointer font-bold   border-2 bg-[#179800] border-[#179800] py-2 px-6 rounded-lg hover:bg-[#179800]  transition delay-100 ease-in-out duration-300 hover:text-white'>Register</button>
                </div>
            </div>





        </div>
    )
}

export default Navbar