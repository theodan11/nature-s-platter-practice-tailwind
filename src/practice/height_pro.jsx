import React from 'react'

const HeightPractice = () => {
    return (
        <div className='w-full flex flex-col items-center bg-white-100 text-center py-5 '>
            <h1 className='text-green-400 text-5xl font-bold '>GeeksForGeeks</h1>
            <p className='my-3 font-bold text-md text-gray-700'>Tailwind CSS Height Class h-0 to h-n</p>
            <div className=' flex justify-center flex-wrap-reverse space-x-2   h-64 bg-green-200 w-1/3 py-3'>
                <div className='w-12 bg-green-400 font-bold text-white h-8 rounded-lg text-center'>h-8</div>
                <div className='w-12 bg-green-400 font-bold text-white h-12 rounded-lg text-center'>h-12</div>
                <div className='w-12 bg-green-400 font-bold text-white h-16 rounded-lg text-center'>h-16</div>
                <div className='w-12 bg-green-400 font-bold text-white h-20 rounded-lg text-center'>h-20</div>
                <div className='w-12 bg-green-400 font-bold text-white h-24 rounded-lg text-center'>h-24</div>
                <div className='w-12 bg-green-400 font-bold text-white h-32 rounded-lg text-center'>h-32</div>
                <div className='w-12 bg-green-400 font-bold text-white h-40 rounded-lg text-center'>h-40</div>
            </div>

            <div className='my-4'>
                <h1 className='text-green-400 text-5xl font-bold'>GeeksforGeeks</h1>
                <p className='my-3 text-gray-700 font-bold text-md'>Tailwind CSS Height Class h-auto</p>
                <div className='py-5 px-5 bg-green-200 h-16 '>
                    <div className='bg-green-400 rounded-lg text-white h-auto font-bold '>


                        h-auto


                    </div>
                </div>
            </div>
            <div className='my-5'>
                <h1 className='font-bold text-gray-700'>Tailwind CSS Height Class h-screen</h1>
                <div className='h-screen bg-green-400 font-bold text-white py-3 my-3'>
                    h-screen
                </div>
            </div>

            <div className='my-5 '>
                <h1 className='font-bold text-gray-700 text-md'>Tailwind CSS for Height Class h-full</h1>
                <div className='my-3 h-64 bg-green-200 py-5'>

                    <div className='bg-green-400 h-full'>h-full</div>
                </div>
            </div>

            <div className='my-5'>
                <p className='font-bold text-gray-700 text-md'>Tailwind CSS for Min Height Class min-h-0</p>
                <div className='bg-green-200 h-64 py-2 px-2 '>
                    <div className='bg-green-400 rounded-md  min-h-24'>min-h-100</div>
                </div>
            </div>


            <div>
                <p className='font-bold text-gray-700 text-md'>
                    Tailwind CSS for font-weight
                </p>
                <div className='bg-green-200 py-3 px-3'>
                    <div className='flex justify-between'>
                        <p>font-thin   <span className='font-thin'>A computer science portal for geeks</span></p>

                    </div>

                    <div className='flex justify-between'>
                        <p>font-extralight   <span className='font-extralight '>A computer science portal for geeks</span></p>

                    </div>
                    <div className='flex justify-between'>
                        <p>font-light   <span className='font-light'>A computer science portal for geeks</span></p>

                    </div>
                    <div className='flex justify-between'>
                        <p>font-normal   <span className='font-normal'>A computer science portal for geeks</span></p>

                    </div>
                    <div className='flex justify-between'>
                        <p>font-medium   <span className='font-medium '>A computer science portal for geeks</span></p>

                    </div>
                    <div className='flex justify-between'>

                        <p>font-semibold   <span className='font-semibold'>A computer science portal for geeks</span></p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeightPractice