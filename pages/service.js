import React from 'react'
import Footer from '../components/Footer'
import Navbar_v2 from '../components/Navbar_v2'
import HouseCare from '../components/Service/HouseCare'
import ServiceHero from '../components/Service/ServiceHero'
import HomeLayout from '../layouts/HomeLayout.js'
import BabyCare from '../components/Service/BabyCare'
import Footer_v2 from '../components/Footer_v2'

export default function service() {
  return (
    <>
      <Navbar_v2 />
      <ServiceHero />
      <HouseCare />
      <BabyCare />
      <Footer_v2 />
    </>
  )
}
service.getLayout = (page) => <HomeLayout children={page} />;