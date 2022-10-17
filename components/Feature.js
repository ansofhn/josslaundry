import React from "react";
import { GiWashingMachine, GiClothes } from "react-icons/gi";
import { MdOutlinePriceChange, MdDeliveryDining } from "react-icons/md";

export default function Feature() {
  return (
    <div className="container">
      <div className="mx-auto my-10 md:my-20 lg:my-20 md:my-14">
        <div className="mb-4 font-semibold text-center md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-maroon">
          Mengapa Harus Joss Laundry ?
        </div>
        <div className="mb-10 text-sm font-light text-center text-textColor">
          Kami secara konsisten berupaya memberikan yang terbaik untuk kepuasan
          pelanggan.
        </div>
        <div className="grid gap-x-10 gap-y-4 sm:gap-0 grid-cols-2 sm:grid-cols-4 m-6 md:mx-10 xl:mx-40 xl:mb-20 text-center">
          <div>
            <div className="mx-auto p-4 transition shadow-md rounded-2xl bg-amber hover:bg-maroon duration-400 w-16 sm:w-20">
              <GiWashingMachine className="text-3xl sm:text-5xl text-white" />
            </div>
            <div className="py-2.5 mx-auto text-sm font-medium text-darkgreen">
              Cuci Cepat
            </div>
          </div>
          <div>
            <div className="mx-auto p-4 transition shadow-md rounded-2xl bg-amber hover:bg-maroon duration-400 w-16 sm:w-20">
              <MdOutlinePriceChange className="text-3xl sm:text-5xl text-white" />
            </div>
            <div className="py-2.5 mx-auto text-sm font-medium text-darkgreen">
              Harga Terjangkau
            </div>
          </div>
          <div>
            <div className="mx-auto p-4 transition shadow-md rounded-2xl bg-amber hover:bg-maroon duration-400 w-16 sm:w-20">
              <GiClothes className="text-3xl sm:text-5xl text-white" />
            </div>
            <div className="py-2.5 mx-auto text-sm font-medium text-darkgreen">
              Pakaian Terjaga
            </div>
          </div>
          <div>
            <div className="mx-auto p-4 transition shadow-md rounded-2xl bg-amber hover:bg-maroon duration-400 w-16 sm:w-20">
              <MdDeliveryDining className="text-3xl sm:text-5xl text-white" />
            </div>
            <div className="py-2.5 mx-auto text-sm font-medium text-darkgreen">
              Antar Jemput
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
