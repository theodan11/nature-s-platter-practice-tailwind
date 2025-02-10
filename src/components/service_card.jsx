import React from 'react'

const Service_card = ({image, title, desc}) => {
  return (
    <div className='bg-[#EFEBE3] rounded-2xl md:h-130 max-w-[424px] h-[367px] px-10 flex flex-col justify-center items-center'>
        <img className="w-[150px] h-[150px] mb-3" src={image} alt="" />
        <h1 className='font-bold text-2xl mb-3'>{title}</h1>
        <p className='text-lg text-center text-gray-700'>{desc}</p>
    </div>
  )
}

export default Service_card