import React from 'react'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Portfolio from '../../components/Portfolio'
import AboutUs from '../../components/AboutUs'
import Client from '../../components/Client'
import Events from '../../components/Events'
import ContactUs from '../../components/ContactUs'
import Footer from '../../components/Footer'
import Testimonials from '../../components/Testimonials'


type Props = {}

function index({}: Props) {
  return (
    <>
        <Navbar />
        <Header />
        <Portfolio />
        <Client/>
        <AboutUs/>
        <Events/>
        <Testimonials/>
        <ContactUs/>
        <Footer/>
    </>
  )
}

export default index