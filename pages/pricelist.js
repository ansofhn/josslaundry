import Head from "next/head";
import React from "react";
import Footer_v2 from "../components/Footer_v2";
import Navbar_v2 from "../components/Navbar_v2";
import Pricing from "../components/Pricing";

export default function pricelist() {
  return (
    <>
      <Head>
        <title>Joss Laundry - Daftar Harga</title>
      </Head>
      <Navbar_v2 />
      <Pricing />
      <Footer_v2 />
    </>
  );
}
