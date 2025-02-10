import React from 'react'

const Hero = () => {
    return (
        <div className='mt-20 flex  flex-col items-center sm:justify-center '>
            <div className="max-w-[827px]">
                <h1 className='text-5xl font-semibold text-center leading-15 text-gray-900'>Freshness <span className='text-[#179800]'>You Can<br/> Count</span> On, Prices You'll Love!</h1>
                <p className='mt-8 text-center text-lg text-gray-700'>Shop Your daily essentials at unbeatable prices. From fresh produce to pantry<br/>staples, we've got you covered every day!</p>
            </div>

            <div className="bg-linear-to-t from-gray-300 to-gray-0 w-screen flex justify-center">
                <img  className=" " src="../../public/Hero_Section_1.png" alt="" />
            </div>
        </div>
    )
}

export default Hero