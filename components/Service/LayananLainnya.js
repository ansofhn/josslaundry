import React from "react";
import ServiceCard from "../serviceComponent/sliderCarrdServices";

export default function LayananLainnya() {
  return (
    <div className="pb-8 my-20 lg:pb-0">
      {/* <div className="container"> */}
          <div className="flex flex-col items-center justify-center order-2 px-8 lg:order-1">
            <h1 className="mb-4 font-bold text-center text-3xl text-maroon">Layanan Lainnya</h1>
          </div>
          <div className="flex items-center justify-center">
            <ServiceCard />
          </div>
        {/* </div> */}
    </div>
  );
}