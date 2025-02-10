import React from 'react'

const Newsletter = () => {
    return (
        <div className=' rounded-2xl p-8 lg:w-[1320px] lg:h-[457px] bg-[#EFEBE3] flex justify-center items-center lg:px-30'>
            <div  className=' w-full flex flex-col h-full lg:flex-row justify-between items-center'>
                <div>
                    <img className='w-[232px] h-[182px lg:w-[442px] lg:h-[348px]' src="/92 1.png" alt="" />
                </div>

                <div className='flex flex-col justify-between items-center space-y-5 '>
                    <h1 className='font-semibold text-4xl'>Get Grocery News!</h1>
                    <p className=' text-lg '>Exclusive training tips, ticks, product deals and more.</p>
                    <input className='w-[472px] h-[67px] bg-white placeholder:text-stone-500 border-none p-5  rounded-2xl' type="text" placeholder='Enter email...' />
                    <button className='w-[164px] cursor-pointer  transition delay-100 ease-in-out duration-300 hover:bg-green-800 h-[55px] bg-[#179800] text-white font-semibold text-2xl rounded-xl'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter