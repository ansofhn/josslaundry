import Head from "next/head";
import React from "react";

export default function Card() {
  return (
    <>
      <div className="lg:px-24">
        <div className="sm:container">

          {/* First row */}
          <div className="grid md:grid-cols-2 justify-center items-center">
            {/* Paket Laundry Kiloan */}
            <div className="">
              <h1 className="text-2xl text-maroon text-center font-bold">Paket Laundry Kiloan</h1>
              <div className="sm:container">
                <div className="p-6 border-t-2 rounded-br-md rounded-bl-md bg-yellow-50 border-amber">
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
              </div>
            </div>

            {/* Pakaian Satuan */}
            <div className="sm:container">
              <h1 className="text-2xl text-maroon text-center font-bold">Pakaian Satuan</h1>
              <div className="p-6 border-t-2 rounded-br-md rounded-bl-md bg-yellow-50 border-amber">
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
            </div>
          </div>
        </div>

        <div className="sm:container">
          {/* Second row*/}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 justify-center items-center">
            {/* House Care */}
            <div className="">
              <h1 className="text-2xl text-maroon text-center font-bold">House Care</h1>
              <div className="sm:container">
                <div className="p-6 border-t-2 rounded-br-md rounded-bl-md bg-gray-50 border-amber">
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
              </div>
            </div>

            {/* Lainnya */}
            <div className="">
              <h1 className="text-2xl text-maroon text-center font-bold">Lainnya</h1>
              <div className="sm:container">
                <div className="px-3 py-6 sm:p-6 border-t-2 rounded-br-md rounded-bl-md bg-gray-50 border-amber">
                  <h2 className="mt-2 mb-2 font-medium" id="helm">Helm</h2>
                  <div className="flex items-center justify-between text-sm font-light text-darkgreen">
                    <div>Helm Biasa</div>
                    <div>25,000</div>
                  </div>
                  <div className="flex items-center justify-between mb-2 text-sm font-light text-darkgreen">
                    <div>Helm Fullface</div>
                    <div>30,000</div>
                  </div>
                  <h2 className="mt-4 mb-2 font-medium" id="boneka">Boneka</h2>
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
                  <h2 className="mt-4 mb-2 font-medium" id="baby-care">Baby Care</h2>
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
          </div>

        </div>
      </div>
    </>
  );
};