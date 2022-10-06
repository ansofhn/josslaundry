import React from "react";
import { GiWashingMachine, GiClothes } from "react-icons/gi";
import { MdOutlinePriceChange, MdDeliveryDining } from "react-icons/md";

export default function Feature() {
  return (
    <div className="container">
      <div className="mx-auto my-20">
        <div className="mb-20 text-center ">
          <span className="text-sm font-medium text-darkgreen">
            Our Feature
          </span>
          <div className="text-3xl font-bold text-maroon">Fitur Kami</div>
        </div>
        <div className="grid grid-cols-4 mx-20">
          <div className="mx-auto">
            <div className="p-4 rounded-xl bg-amber">
              <GiWashingMachine className="text-5xl text-white" />
            </div>
          </div>
          <div className="mx-auto">
            <div className="p-4 rounded-xl bg-amber">
              <MdOutlinePriceChange className="text-5xl text-white" />
            </div>
          </div>
          <div className="mx-auto">
            <div className="p-4 rounded-xl bg-amber">
              <GiClothes className="text-5xl text-white" />
            </div>
          </div>
          <div className="mx-auto">
            <div className="p-4 rounded-xl bg-amber">
              <MdDeliveryDining className="text-5xl text-white" />
            </div>
          </div>
          <div className="py-2.5 mx-auto text-sm font-medium text-darkgreen">Cuci Cepat</div>
          <div className="py-2.5 mx-auto text-sm font-medium text-darkgreen">Harga Terjangkau</div>
          <div className="py-2.5 mx-auto text-sm font-medium text-darkgreen">Pakaian Terjaga</div>
          <div className="py-2.5 mx-auto text-sm font-medium text-darkgreen">Antar Jemput</div>
        </div>
      </div>
    </div>
  );
}
