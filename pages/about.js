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
      <section className="px-3 pb-5 pt-[70px] md:pt-[110px] bg-gradient-to-tr from-orange-500 to-yellow-500">
        <div className="container">
          <div className="grid items-center pb-10 lg:grid-cols-2 justify-items-center lg:gap-5">
            <div className="grid scale-75 place-items-center lg:scale-100">
              <Image src={aboutus} />
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="flex text-4xl font-bold tracking-normal text-center text-white sm:text-5xl lg:text-6xl">
                Tentang Kami
              </p>
            </div>
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
