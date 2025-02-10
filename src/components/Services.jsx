import React from 'react'
import Service_card from './service_card'

const Services = () => {
    return (
        <div className='w-screen mt-30 flex justify-center'>
            <div className='max-w-[1080px]'>
                <h1 className='text-[#179800] text-4xl font-bold mb-15'>Services</h1>
                <div className='flex flex-col space-y-6 my-auto md:flex-row sm:space-x-6 mb-30'>

                    <Service_card image={"service_1.png"} title={"24/7 Services"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"} />
                    <Service_card image={"service_2.png"} title={"Fast Delivery"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"} />
                    <Service_card image={"service_3.png"} title={"Healthy Products"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"} />
                </div>
            </div>
        </div>
    )
}

export default Services