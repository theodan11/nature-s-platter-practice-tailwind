import React from 'react'
import ProductCard from './ProductCard'

const PopularProducts = () => {
  return (
    <div className=' max-md:h-auto  md:h-[1380px]   py-5 md:py-8 bg-linear-to-br from-gray-300 to-stone-200 flex justify-center items-center '>
        <div className=''> 
            <h1 className='md:text-start text-[#179800] text-5xl font-semibold mb-15 text-center'>Popular Products</h1>
            <div className='flex   flex-col lg:flex-row sm:space-x-7 justify-between items-center  max-sm:m-5 max-sm:space-y-5'>
                <div className='relative rounded-md w-full h-120 ms:h-40  md:w-[424px] md:h-[360px] bg-linear-to-br from-[#4cdf32] pt-15 pl-8 mb-10'>
                    <h1 className='text-white font-extrabold text-4xl mb-5'>30% off</h1>
                    <p className='text-sm pr-30 text-stone-800 mb-3 z-10'>Discover a world of treats, toys, and essentials handpicked for</p>
                    <button className='py-2 bg-amber-50 rounded-md px-6 font-semibold text'>Buy Now</button>
                    <img className="absolute bottom-0 right-5" src="banana.png" alt="" />
                    <img className="absolute bottom-0 right-5" src="latuse.png" alt="" />
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-3 md:gap-3'>
                    <ProductCard image={"product_1.png"} title={"Onion 1 kg"} rating={4.5} price={190}/>
                    <ProductCard image={"product_2.png"} title={"Tomato 1 kg"} rating={1.5} price={350}/>
                    <ProductCard image={"product_3.png"} title={"Potato 1 kg"} rating={3.2} price={50}/>
                    <ProductCard image={"product_2.png"} title={"Tomato 1 kg"} rating={4.5} price={190}/>
                    <ProductCard image={"product_1.png"} title={"Onion 1 kg"} rating={4.5} price={190}/>
                    <ProductCard image={"product_3.png"} title={"Potato 1 kg"} rating={4.5} price={190}/>
                    <ProductCard image={"product_1.png"} title={"Onion 1 kg"} rating={4.5} price={190}/>
                    <ProductCard image={"product_2.png"} title={"Tomato 1 kg"} rating={4.5} price={190}/>
                    <ProductCard image={"product_1.png"} title={"Onion 1 kg"} rating={4.5} price={190}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PopularProducts