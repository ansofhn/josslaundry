import React from "react";
import Footer from "../components/Footer";
import Navbar_v2 from "../components/Navbar_v2";
import HouseCare from "../components/Service/HouseCare";
import ServiceHero from "../components/Service/ServiceHero";
import HomeLayout from "../layouts/HomeLayout.js";
import BabyCare from "../components/Service/BabyCare";
import Footer_v2 from "../components/Footer_v2";
import ScrollToTop from "../components/ScrollToTop";
import Pricing from "../components/Pricing";
import ShoesCare from "../components/Service/ShoesCare";
import LayananLainnya from "../components/Service/LayananLainnya";
import Head from "next/head";

export default function service() {
  return (
    <>
      <Head>
        <title>Joss Laundry - Layanan</title>
      </Head>
      <Navbar_v2 />
      <ServiceHero />
      <HouseCare />
      <BabyCare />
      <ShoesCare />
      <LayananLainnya />
      {/* <Pricing />  */}
      <ScrollToTop />

      <Footer_v2 />
    </>
  );
}
service.getLayout = (page) => <HomeLayout children={page} />;
