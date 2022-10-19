import React from "react";
import Head from "next/head";
import HomeLayout from "../layouts/HomeLayout";
import Navbar_v2 from "../components/Navbar_v2";
import Footer_v2 from "../components/Footer_v2";
import ScrollToTop from "../components/ScrollToTop";
import Image from "next/image";
import aboutus from "../public/assets/about.svg";
import About_v3 from "../components/About_v3";

export default function about() {
  return (
    <>
      <Head>
        <title>Joss Laundry - Tentang</title>
      </Head>
      <Navbar_v2 />
      <section className="px-3 bg-gradient-to-tr from-orange-500 to-yellow-500 lg:h-[555px]">
        <div className="grid lg:grid-cols-2 items-center justify-items-center lg:gap-5">
          <div className="grid place-items-center h-[22rem] sm:h-[25.5rem] pt-[8rem] sm:pt-0 sm:mt-[10rem] lg:mt-[14.5rem] xl:mt-[13.8rem]">
            <Image src={aboutus} height={"540rem"} width={"540rem"}/>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="mb-6 sm:mb-10 lg:mb-0 flex text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center tracking-normal">Tentang Kami</p>
          </div>
        </div>
      </section>
      <About_v3 />
      <ScrollToTop />
      <Footer_v2 />
    </>
  );
}

about.getLayout = (page) => <HomeLayout children={page} />;
