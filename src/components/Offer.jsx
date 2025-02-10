import React from 'react'
import Newsletter from './Newsletter'

const Offer = () => {
    return (
        <div className=' lg:h-auto h-screen max-sm:h-auto mb-80 relative flex flex-row justify-center items-center '>
            <div className=' flex  h-auto   max-sm:pt-50   flex-col justify-center items-center'>
                <h1 className='text-[#179800] self-start  font-semibold text-[36px]'>Arrival & Offers</h1>
                <div className='flex  flex-col space-y-3 lg:flex-row mt-10 justify-between space-x-[10%]'>
                    <div className='w-[344px] max-sm:h-[580px] relative sm:min-w-[540px] md:w-[780px] h-[344px] rounded-2xl bg-[#115414] flex flex-col md:flex-row md:space-x-7 md:justify-between md:items-center px-8'>
                        <div className=' mt-8 space-y-5 '>
                            <img className='md:ml-10 w-[247px] h-[76px] ' src="image_54.png" alt="" />
                            <button className='max-sm:w-[270px]  md:ml-3 text-2xl w-[320px] h-[60px] bg-[#63B76D] rounded-xl text-white font-semibold transition delay-100 duration-200 ease-in-out hover:bg-[#53915f] cursor-pointer'>Cook Exotic Dishes</button>
                            <h1 className='md:ml-3  text-4xl font-medium text-white'>UP to <span className='font-bold'>20% OFF</span></h1>
                        </div>
                        <div className=''>
                            <img className='absolute md:right-35 right-8 max-md:w-60 bottom-0' src="image_53.png" alt="" />
                            <img className='absolute md:right-3 bottom-0 -right-8 max-md:w-70' src="image_50.png" alt="" />
                        </div>
                    </div>
                    <div className='relative w-[344px] bg-[#102861] sm:min-w-[540px] lg:w-[520px] min-md:w-[780px] h-[344px] rounded-2xl pl-6'>
                        <div className='mt-6'>
                            <img src="image_55.png" alt="" />
                            <img className="absolute left-6 top-19" src="image 57.png" alt="" />
                            <button className='w-[270px] h-[65px] bg-[#2A4D97] text-white font-semibold text-2xl mt-3 rounded-2xl transition delay-100 duration-200 ease-in-out hover:bg-[#574d80] cursor-pointer'>World's No.1 Rice</button>
                            <h1 className='text-4xl font-medium text-white mt-3 ml-2 '>UP to <span className='font-bold'>40% OFF</span></h1>
                            <img className="max-sm:w-[100px] max-sm:top-0 absolute right-6 bottom-3" src="image_52.png" alt="" />
                        </div>

                    </div>
                </div>
            </div>
            
        
        </div>
    )
}

export default Offer