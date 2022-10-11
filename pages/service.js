import React from 'react'
import Footer from '../components/Footer'
import Navbar_v2 from '../components/Navbar_v2'
import HouseCare from '../components/Service/HouseCare'
import ServiceHero from '../components/Service/ServiceHero'
import HomeLayout from '../layouts/HomeLayout.js'
import BabyCare from '../components/Service/BabyCare'

export default function service() {
  return (
    <>
      <Navbar_v2 />
      <ServiceHero />
      <HouseCare />
      <BabyCare />
      <Footer />
    </>
  )
}
service.getLayout = (page) => <HomeLayout children={page} />;