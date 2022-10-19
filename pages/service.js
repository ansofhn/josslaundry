import React from "react";
import Navbar_v2 from "../components/Navbar_v2";
import HouseCare from "../components/Service/HouseCare";
import HomeLayout from "../layouts/HomeLayout.js";
import BabyCare from "../components/Service/BabyCare";
import Footer_v2 from "../components/Footer_v2";
import ScrollToTop from "../components/ScrollToTop";
import ShoesCare from "../components/Service/ShoesCare";
import LayananLainnya from "../components/Service/LayananLainnya";
import Head from "next/head";
import ServiceHero from "../components/Service/ServiceHero";

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
      <ScrollToTop />
      <Footer_v2 />
    </>
  );
}
service.getLayout = (page) => <HomeLayout children={page} />;
