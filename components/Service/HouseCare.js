import React from "react";
import PhotoHouseCare from './PhotoHouseCare'
import Link from "next/link";
import Button from "../Button";

export default function HouseCare() {
  return (
    <section className="px-8 py-5 mt-8">
      <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
        <div className="order-1 px-5 sm:px-36 lg:px-20">
          <PhotoHouseCare />
        </div>

        <div className="order-2 flex flex-col justify-center items-center lg:h-[500px]">
          <h1 className="text-3xl font-bold text-maroon py-3">House Care</h1>
          <p className="text-maroon text-center px-18 lg:px-20 text-lg tracking-normal">Barang-barang yang bersih dapat membuat tempat tinggal anda terasa lebih nyaman</p>
          <Link href={"/pricelist#house-care"}>
                <Button
                  className={
                    "flex items-center gap-2 transition duration-300 font-bold px-6 py-2.5 mt-6 rounded-lg bg-yellowButton text-maroon text-base"
                  }
                >
                  Lihat Selengkapnya
                </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}