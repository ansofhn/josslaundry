import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HouseCare from '../components/Service/HouseCare'
import ServiceHero from '../components/Service/ServiceHero'

export default function service() {
  return (
    <>
      <Navbar />
      <ServiceHero />
      <HouseCare />
      <Footer />
    </>
  )
}

