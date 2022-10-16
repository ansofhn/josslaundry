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
import Image from "next/image";
import layanankami from '../public/assets/layanan-kami.png';

export default function service() {
  return (
    <>
      <Head>
        <title>Joss Laundry - Layanan</title>
      </Head>
      <Navbar_v2 />
      <div className="w-full bg-gradient-to-tr from-nileblue to-middle">
        <div className="container">
          <div className="grid items-center justify-center grid-cols-2 py-0 m-0 mx-5 md:my-12">
            <div className="px-20 text-white">
              <h1 className="font-bold md:text-4xl lg:text-5xl xl:text-6xl">
                Layanan Kami
              </h1>
            </div>
            <div className="mx-auto mt-20 mb-10">
              <Image src={layanankami} />
            </div>
          </div>
        </div>
      </div>
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
