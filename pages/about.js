import React from "react";
import Head from "next/head";
import HomeLayout from "../layouts/HomeLayout";
import Navbar_v2 from "../components/Navbar_v2";
import Footer_v2 from "../components/Footer_v2";
import ScrollToTop from "../components/ScrollToTop";
import Image from "next/image";
import aboutus from "../public/assets/HeroAbout.png";
import About_v2 from "../components/About_v2";

export default function about() {
  return (
    <>
      <Head>
        <title>Joss Laundry - Tentang</title>
      </Head>
      <Navbar_v2 />
      <div className="w-full bg-gradient-to-tr from-orange-500 to-yellow-500">
        <div className="container">
          <div className="grid items-center justify-center grid-cols-2 py-0 m-0 mx-5 md:my-14">
            <div className="px-20 text-white">
              <h1 className="font-bold md:text-3xl lg:text-4xl xl:text-5xl">
                Tentang Kami
              </h1>
            </div>
            <div className="w-3/5 mx-auto mt-20 mb-10">
              <Image src={aboutus} />
            </div>
          </div>
        </div>
      </div>
      <About_v2 />
      <ScrollToTop />
      <Footer_v2 />
    </>
  );
}

about.getLayout = (page) => <HomeLayout children={page} />;
