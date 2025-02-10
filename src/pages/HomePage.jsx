import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import PopularProducts from '../components/PopularProducts'
import Offer from '../components/Offer'
import Footer from '../components/Footer'

const HomePage = () => {
  return (

    <div className='overflow-x-hidden'>
      <Navbar />
      <Hero/>
      <Services />
      <PopularProducts/>
      <Offer/>
      
      <Footer/>
    </div>
  )
}

export default HomePage