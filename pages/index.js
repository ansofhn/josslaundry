import Head from "next/head";
import React from "react";
import Feature from "../components/Feature";
import Footer_v2 from "../components/Footer_v2";
import Hero from "../components/Hero";
import Navbar_v2 from "../components/Navbar_v2";
import Promote from "../components/Promote";
import Service from "../components/Service";
import HomeLayout from "../layouts/HomeLayout";
import ScrollToTop from "../components/ScrollToTop";
import OurPrice from "../components/OurPrice";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <Head>
        <title>Joss Laundry - Beranda</title>
      </Head>
      <Navbar_v2 />
      <Hero />
      <Feature />
      <Service />
      <OurPrice />
      <Promote />
      <ScrollToTop />
      <Footer_v2 />
    </motion.div>
  );
}

Home.getLayout = (page) => <HomeLayout children={page} />;
