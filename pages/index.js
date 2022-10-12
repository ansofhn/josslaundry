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

export default function Home() {
  return (
    <>
      <Head>
        <title>Joss Laundry</title>
      </Head>
      <Navbar_v2 />
      <Hero />
      <Feature />
      <Service />
      <Promote />
      <ScrollToTop />
      <Footer_v2 />
    </>
  );
}

Home.getLayout = (page) => <HomeLayout children={page} />;
