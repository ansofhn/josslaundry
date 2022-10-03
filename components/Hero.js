import React from "react";
import Image from "next/image";
import Banner from "../public/assets/logo-banner.png";

export default function Hero() {
  return (
    <>
      <div className="w-full bg-gradient-to-tr from-orange-500 to-yellow-500">
        <div className="container">
          <div className="grid items-center justify-center grid-cols-2 mx-5 my-16">
            <div className="px-20 py-15">
              <h1 className="text-5xl font-bold font-poppins text-darkgreen 2xl:mr-20 ">
                Bebaskan Indonesia Dari Jemuran
              </h1>
            </div>
            <div className="mx-auto">
              <Image src={Banner} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
