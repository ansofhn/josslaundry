import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeLayout from "../layouts/HomeLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Joss Laundry</title>
      </Head>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}

Home.getLayout = (page) => <HomeLayout children={page} />;
