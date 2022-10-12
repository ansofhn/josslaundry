import React from "react";
import Head from "next/head";
import HomeLayout from "../layouts/HomeLayout";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Navbar_v2 from "../components/Navbar_v2";

export default function about() {
  return (
    <>
      <Head>
        <title>About Us | Joss Laundry</title>
      </Head>
      <Navbar_v2 />

      <About />
      <Footer />
    </>
  );
}

about.getLayout = (page) => <HomeLayout children={page} />;