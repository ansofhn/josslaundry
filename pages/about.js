import React from "react";
import Head from "next/head";
import HomeLayout from "../layouts/HomeLayout";
import Navbar_v2 from "../components/Navbar_v2";
import Footer_v2 from "../components/Footer_v2";
import ScrollToTop from "../components/ScrollToTop";
import Image from "next/image";
import aboutus from "../public/assets/about.svg";
import About_v3 from "../components/About_v3";
import { motion } from "framer-motion";
import { Animation } from "../components/Animation";

export default function about() {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
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
            <motion.div variants={Animation.fadeInUp} className="flex flex-col items-center justify-center">
              <p className="flex text-3xl font-bold tracking-normal text-center text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Tentang Kami
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <About_v3 />
      <ScrollToTop />
      <Footer_v2 />
    </motion.div>
  );
}

about.getLayout = (page) => <HomeLayout children={page} />;
