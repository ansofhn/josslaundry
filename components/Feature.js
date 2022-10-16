import React from "react";
import { GiWashingMachine, GiClothes } from "react-icons/gi";
import { MdOutlinePriceChange, MdDeliveryDining } from "react-icons/md";

export default function Feature() {
  return (
    <div className="container">
      <div className="mx-auto my-20">
        <div className="mb-4 font-semibold text-center md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-maroon">
          Mengapa Harus Joss Laundry ?
        </div>
        <div className="mb-20 text-sm font-light text-center text-textColor">
          Kami secara konsisten berupaya memberikan yang terbaik untuk kepuasan
          pelanggan.
        </div>
        <div className="grid grid-cols-4 mx-20 md:mx-10 xl:mx-40 xl:mb-20">
          <div className="mx-auto">
            <div className="p-4 transition shadow-md rounded-2xl bg-amber hover:bg-maroon duration-400">
              <GiWashingMachine className="text-5xl text-white" />
            </div>
          </div>
          <div className="mx-auto">
            <div className="p-4 transition shadow-md rounded-2xl bg-amber hover:bg-maroon duration-400">
              <MdOutlinePriceChange className="text-5xl text-white" />
            </div>
          </div>
          <div className="mx-auto">
            <div className="p-4 transition shadow-md rounded-2xl bg-amber hover:bg-maroon duration-400">
              <GiClothes className="text-5xl text-white" />
            </div>
          </div>
          <div className="mx-auto">
            <div className="p-4 transition shadow-md rounded-2xl bg-amber hover:bg-maroon duration-400">
              <MdDeliveryDining className="text-5xl text-white" />
            </div>
          </div>
          <div className="py-4 mx-auto text-base font-medium text-darkgreen">
            Cuci Cepat
          </div>
          <div className="py-4 mx-auto text-base font-medium text-darkgreen">
            Harga Terjangkau
          </div>
          <div className="py-4 mx-auto text-base font-medium text-darkgreen">
            Pakaian Terjaga
          </div>
          <div className="py-4 mx-auto text-base font-medium text-darkgreen">
            Antar Jemput
          </div>
        </div>
      </div>
    </div>
  );
}
