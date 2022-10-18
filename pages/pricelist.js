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
      <div className="w-full mt-16 bg-gradient-to-tr from-orange-500 to-yellow-500">
        <div className="container">
          <div className="flex items-center justify-center py-0 m-0 mx-5 md:my-14">
            <div className="py-20 text-white">
              <h1 className="text-3xl font-bold uppercase lg:text-4xl xl:text-5xl">
                Daftar Harga
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Pricing />
      <div className="container">
        <div className="mb-4 text-2xl font-bold text-center mt-14 xl:text-3xl 2xl:text-4xl text-maroon">
          Harga Lebih Lengkap
        </div>
        <div className="mb-20 text-base font-light text-center lg:text-lg text-textColor">
          Kami secara konsisten berupaya memberikan yang terbaik untuk kepuasan
          pelanggan.
        </div>
        <div className="grid gap-6 mx-4 md:grid-cols-2 md:mx-8 lg:mx-24 lg:my-20">
          <div className="order-1 text-lg font-bold text-maroon">
            Paket Laundry Kiloan
          </div>
          <div
            className="order-3 text-lg font-bold text-maroon md:order-2"
            id="pakaian"
          >
            Pakaian Satuan
          </div>
          <div className="order-2 p-6 border-t-2 rounded-br-md rounded-bl-md bg-gray-50 border-amber md:order-3">
            <h2 className="mt-2 mb-2 font-medium">Reguler (2 Hari)</h2>
            <div className="flex items-center justify-between text-sm font-light text-darkgreen">
              <div>Cuci Kering Lipat 3 Kg</div>
              <div>18,000</div>
            </div>
            <div className="flex items-center justify-between mb-2 text-sm font-light text-darkgreen">
              <div>Cuci Kering Lipat 5 Kg</div>
              <div>30,000</div>
            </div>
            <h2 className="mt-4 mb-2 font-medium">Istimewa (12 Jam)</h2>
            <div className="flex items-center justify-between text-sm font-light text-darkgreen">
              <div>Cuci Kering Lipat 3 Kg</div>
              <div>21,000</div>
            </div>
            <div className="flex items-center justify-between mb-2 text-sm font-light text-darkgreen">
              <div>Cuci Kering Lipat 5 Kg</div>
              <div>35,000</div>
            </div>
            <h2 className="mt-4 mb-2 font-medium">Express (2 Jam)</h2>
            <div className="flex items-center justify-between text-sm font-light text-darkgreen">
              <div>Cuci Kering Lipat 3 Kg</div>
              <div>30,000</div>
            </div>
            <div className="flex items-center justify-between mb-2 text-sm font-light text-darkgreen">
              <div>Cuci Kering Lipat 5 Kg</div>
              <div>50,000</div>
            </div>
          </div>
          <div className="order-4 p-6 border-t-2 rounded-br-md rounded-bl-md bg-gray-50 border-amber">
            <h2 className="mt-2 mb-2 font-medium">Baju</h2>
            <div className="flex items-center justify-between text-sm font-light text-darkgreen">
              <div>Baju Kaos</div>
              <div>15,000</div>
            </div>
            <div className="flex items-center justify-between mb-2 text-sm font-light text-darkgreen">
              <div>Baju Kemeja</div>
              <div>20,000</div>
            </div>
            <h2 className="mt-4 mb-2 font-medium">Rok</h2>
            <div className="flex items-center justify-between text-sm font-light text-darkgreen">
              <div>Rok Pendek</div>
              <div>20,000</div>
            </div>
            <div className="flex items-center justify-between mb-2 text-sm font-light text-darkgreen">
              <div>Rok Panjang</div>
              <div>25,000</div>
            </div>
            <h2 className="mt-4 mb-2 font-medium">Celana</h2>
            <div className="flex items-center justify-between text-sm font-light text-darkgreen">
              <div>Celana Pendek</div>
              <div>15,000</div>
            </div>
            <div className="flex items-center justify-between mb-2 text-sm font-light text-darkgreen">
              <div>Celana Panjang</div>
              <div>21,000</div>
            </div>
          </div>
          <div
            className="order-5 text-lg font-bold text-maroon"
            id="house-care"
          >
            House Care
          </div>
          <div className="order-7 text-lg font-bold text-maroon md:order-6">
            Lainnya
          </div>
          <div className="order-6 p-6 border-t-2 rounded-br-md rounded-bl-md bg-gray-50 border-amber md:order-7">
            <h2 className="mt-2 mb-2 font-medium">Keset</h2>
            <div className="flex items-center justify-between text-sm font-light text-darkgreen">
              <div>Keset Kecil</div>
              <div>15,000</div>
            </div>
            <div className="flex items-center justify-between mb-2 text-sm font-light text-darkgreen">
              <div>Keset Normal - Besar</div>
              <div>35,000</div>
            </div>
            <h2 className="mt-4 mb-2 font-medium">Selimut</h2>
            <div className="flex items-center justify-between text-sm font-light text-darkgreen">
              <div>Selimut Kecil</div>
              <div>15,000</div>
            </div>
            <div className="flex items-center justify-between text-sm font-light text-darkgreen">
              <div>Selimut Sedang</div>
              <div>20,000</div>
            </div>
            <div className="flex items-center justify-between mb-2 text-sm font-light text-darkgreen">
              <div>Selimut Besar</div>
              <div>25,000</div>
            </div>
            <h2 className="mt-4 mb-2 font-medium">Bantal</h2>
            <div className="flex items-center justify-between text-sm font-light text-darkgreen">
              <div>Bantal Mini</div>
              <div>17,000</div>
            </div>
            <div className="flex items-center justify-between text-sm font-light text-darkgreen">
              <div>Bantal Medium</div>
              <div>28,000</div>
            </div>
            <div className="flex items-center justify-between text-sm font-light text-darkgreen">
              <div>Bantal Jumbo</div>
              <div>40,000</div>
            </div>
            <div className="flex items-center justify-between mb-2 text-sm font-light text-darkgreen">
              <div>Bantal Guling</div>
              <div>50,000</div>
            </div>
          </div>
          <div className="order-8 p-6 border-t-2 rounded-br-md rounded-bl-md bg-gray-50 border-amber">
            <h2 className="mt-2 mb-2 font-medium" id="helm">
              Helm
            </h2>
            <div className="flex items-center justify-between text-sm font-light text-darkgreen">
              <div>Helm Biasa</div>
              <div>25,000</div>
            </div>
            <div className="flex items-center justify-between mb-2 text-sm font-light text-darkgreen">
              <div>Helm Fullface</div>
              <div>30,000</div>
            </div>
            <h2 className="mt-4 mb-2 font-medium" id="boneka">
              Boneka
            </h2>
            <div className="flex items-center justify-between text-sm font-light text-darkgreen">
              <div>Boneka Kecil</div>
              <div>15,000</div>
            </div>
            <div className="flex items-center justify-between text-sm font-light text-darkgreen">
              <div>Boneka Sedang</div>
              <div>25,000</div>
            </div>
            <div className="flex items-center justify-between mb-2 text-sm font-light text-darkgreen">
              <div>Boneka Besar</div>
              <div>70,000</div>
            </div>
            <h2 className="mt-4 mb-2 font-medium" id="baby-care">
              Baby Care
            </h2>
            <div className="flex items-center justify-between text-sm font-light text-darkgreen">
              <div>Gendongan Bayi Kecil</div>
              <div>20,000</div>
            </div>
            <div className="flex items-center justify-between text-sm font-light text-darkgreen">
              <div>Gendongan Bayi Besar</div>
              <div>50,000</div>
            </div>
            <div className="flex items-center justify-between text-sm font-light text-darkgreen">
              <div>Bayi Book Pol</div>
              <div>55,000</div>
            </div>
            <div className="flex items-center justify-between text-sm font-light text-darkgreen">
              <div>Stroller</div>
              <div>100,000</div>
            </div>
          </div>
        </div>
      </div>
      <Footer_v2 />
    </>
  );
}
