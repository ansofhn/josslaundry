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
      <div className="w-full bg-gradient-to-tr from-orange-500 to-yellow-500">
        <div className="container">
          <div className="flex items-center justify-center py-0 m-0 mx-5 md:my-14">
            <div className="px-20 py-20 text-white">
              <h1 className="font-bold uppercase md:text-3xl lg:text-4xl xl:text-5xl">
                Daftar Harga
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Pricing />
      <Footer_v2 />
    </>
  );
}
