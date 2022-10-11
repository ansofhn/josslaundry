<<<<<<< Updated upstream
import React from "react";
import HomeLayout from "../layouts/HomeLayout";

export default function service() {
  return (
    <div>

    </div>
  )}
=======
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HouseCare from '../components/Service/HouseCare'
import ServiceHero from '../components/Service/ServiceHero'
import HomeLayout from '../layouts/HomeLayout.js'
import BabyCare from '../components/Service/BabyCare'

export default function service() {
  return (
    <>
      <Navbar />
      <ServiceHero />
      <HouseCare />
      <BabyCare />
      <Footer />
    </>
  )
}
>>>>>>> Stashed changes
service.getLayout = (page) => <HomeLayout children={page} />;