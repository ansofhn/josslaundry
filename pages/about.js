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
      <div className="w-full bg-white">
        <div className="container">
          <div className="grid grid-cols-2 gap-4 p-2 mx-20 my-32 bg-white">
            <div className="p-2">
              <h3 className="text-3xl font-bold text-darkgreen">
                Joss Laundry
              </h3>
              <p className="mb-14">
                pelayanan terbaik dengan didukung kinerja yang handal dan
                berpengalaman
              </p>
            </div>
            <div className="col-start-1 p-8 rounded-lg bg-softblue/50 pb-96">
              <h3 className="mb-2 text-xl font-bold text-darkgreen">
                What we do
              </h3>
              <p className="mb-4">
                Joss Laundry menawarkan jasa cuci dan setrika dengan harga yang
                lebih murah, namun kualitas tetap menjadi pioritas utama.
              </p>
              <p>
                Kami secara konsisten berupaya memberikan yang terbaik untuk
                kepuasan pelanggan.
              </p>
            </div>
            <div className="p-8 rounded-lg bg-amber/50">
              <h3 className="mb-2 text-xl font-bold text-darkgreen">
                What we serve
              </h3>
              <p className="mb-1 font-medium ">Harga Terjangkau</p>
              <p className="mb-4">
                Kami memasang harga yang terjangkau, mulai dari Rp6.000/kg
              </p>
              <p className="mb-1 font-medium">Pelayanan Cepat</p>
              <p className="mb-4">
                Kami menyediakan jasa express, pakaian anda akan selesai hanya
                dalam waktu 2 jam
              </p>
              <p className="mb-1 font-medium">Layanan Pickup and Delivery</p>
              <p className="mb-4">
                Dengan layanan ini, anda tidak perlu datang ke tempat kami. Joss
                Laundry akan memjemput cucian anda, dan mengantarkannya kembali.
              </p>
            </div>
            <div className="p-8 bg-red-200 rounded-lg">
              <h3 className="mb-2 text-xl font-bold text-darkgreen">
                Our history
              </h3>
              <p className="mb-4">
                Joss Laundry didirikan pada tanggal 27 Juni 2020 oleh PT Berkah
                Bersih Semesta. Berbekal pengelolaan yang profesional dan
                handal, Joss Laundry kian diterima di masyarakat.
              </p>
              <p>Bebaskan Indonesi Dari Jemuran</p>
            </div>
            <div className="p-8 bg-gray-100 rounded-lg">
              <h3 className="mb-2 text-xl font-bold text-darkgreen">
                Our location
              </h3>
              <p className="mb-4">
                Jl. Sukabirus No.88B, Citeureup, Kec. Dayeuhkolot, Kabupaten
                Bandung, Jawa Barat 40267.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 p-2 mx-20 my-32">
            <div className="mx-20 my-auto">
              <div className="mb-4 text-3xl font-semibold">
                Lebih Dari 1000 Cabang Joss Laundry tersebar di seluruh
                Indonesia
              </div>
              <p className="text-sm font-light 2xl:mr-28">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                molestie purus ipsum, in blandit tortor commodo at. Praesent
                suscipit turpis et commodo facilisis.
              </p>
            </div>
            <div className="p-10 mx-4 bg-gray-100 rounded-lg h-96"> Maps</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

about.getLayout = (page) => <HomeLayout children={page} />;