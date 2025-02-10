import React from 'react'

const ProductCard = ({ image, rating, title, price }) => {
    return (
        <div className='w-[268px] h-[112px] bg-white hover:bg-stone-400 hover:text-white transition  ease-in-out delay-75 duration-200 p-3 rounded-2xl cursor-pointer'>
            <div className='flex space-x-2'>
                <div className='w-[86px] h-[86px] bg-stone-200 rounded-2xl flex justify-center items-center'>
                    <img src={image} alt="" />
                </div>
                <div className='flex flex-col '>
                    <div className='flex space-x-2 items-center'>

                        <img className="w-4 h-4"src='/star.png' alt="" />
                        <p >
                            {rating}
                        </p>
                    </div>

                    <h1 className='font-semibold font-lg'>

                        {title}
                    </h1>
                    <p className='text-md'>
                        {price}Tk.

                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard