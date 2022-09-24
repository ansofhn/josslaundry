import React from "react";
import Image from "next/image";
import Banner from "../public/assets/logo-banner.png";

export default function Hero() {
  return (
    <>
      <div className="w-full bg-white">
        <div className="container">
          <div className="grid items-center justify-center grid-cols-2 mx-5 my-24 bg-white">
            <div className="px-20 py-20">
              <h1 className=" text-5xl font-bold font-monserrat text-darkgreen 2xl:mr-20">
                Bebaskan Indonesia Dari Jemuran
              </h1>
              <p className="mt-4 mb-6 text-xl leading-relaxed font-monserrat text-darkgreen 2xl:mr-28">
                Percayakan pada kami, cucian and bersih dan wangi.
              </p>
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
