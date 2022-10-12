import React from "react";
import Head from "next/head";
import HomeLayout from "../layouts/HomeLayout";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Navbar_v2 from "../components/Navbar_v2";
<<<<<<< Updated upstream
import About_v2 from "../components/About_v2";
import Footer_v2 from "../components/Footer_v2";
import ScrollToTop from "../components/ScrollToTop";

=======
import ScrollToTop from "../components/ScrollToTop"
>>>>>>> Stashed changes

export default function about() {
  return (
    <>
      <Head>
        <title>About Us | Joss Laundry</title>
      </Head>
      <Navbar_v2 />
      <About />
<<<<<<< Updated upstream
      <About_v2 />
      <ScrollToTop />
      <Footer_v2 />
=======
      <ScrollToTop />
      <Footer />
>>>>>>> Stashed changes
    </>
  );
}

about.getLayout = (page) => <HomeLayout children={page} />;
