import React from 'react'
import Newsletter from './Newsletter'

const Footer = () => {
    return (
        <div className='relative h-auto bg-[#179800] pt-[350px]  items-center   max-sm:pb-10 flex flex-row justify-center'>
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>

                <Newsletter />
            </div>
            <div className='flex flex-col lg:flex-row justify-between items-center  w-[90%]'>
                <div className='mb-10 lg:mb-0'>
                    <img className='w-[155px] h-[61px] ' src="logo_Vector.png" alt="" />
                    <p className='max-w-[280px] text-stone-300 mt-3'>Discover a world of treats, toys, and essentials handpicked for your furry friends</p>
                </div>
                <div className='mb-10'>
                    <ul className='text-stone-300 mt-3 flex flex-col space-y-8 font-semibold '>
                        <li className='cursor-pointer hover:text-white transition delay-100 duration-200'>
                            Products
                        </li>
                        <li className='cursor-pointer hover:text-white transition delay-100 duration-200'>
                            Services
                        </li>
                        <li className='cursor-pointer hover:text-white transition delay-100 duration-200'>
                            Contact us
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col justify-end'>
                    <p className='text-stone-300 mt-3'>
                        Follow Us
                    </p>
                    <div >
                        <img className='w-[185px] h-[28px] mt-3' src="Group 9168.png" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer