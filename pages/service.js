import React from 'react'
import Head from "next/head";
import HomeLayout from "../layouts/HomeLayout";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Service from '../components/Service';

export default function service() {
  return (
    <>
      <Head>
        <title>Service | Joss Laundry</title>
      </Head>
      <Navbar />


      <Service />


      <Footer />
    </>
  )
}
service.getLayout = (page) => <HomeLayout children={page} />;