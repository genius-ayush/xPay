import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import Products from './Products'
import Advantages from './Advantages'
import Pricing from './Pricing'
import Industries from './Industries'
import Testimonials from './Testimonials'
import FAQs from './FAQs'
import Desktop from './Desktop'

function LandingPage() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Desktop/>
        <Products/>
        <Advantages/>
        <Pricing/>
        <Industries/>
        <Testimonials/>
        <FAQs/>
        <Footer/>
    </>
  )
}

export default LandingPage