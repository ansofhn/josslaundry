import React from "react";
import PhotoHouseCare from './PhotoHouseCare'
import Link from "next/link";
import Button from "../Button";

export default function HouseCare() {
  return (
    <section className="px-3 py-5 container">
      <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
        <div className="order-1">
          <PhotoHouseCare />
        </div>

        <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-maroon py-5">House Care</h1>
          <p className="text-2xl text-maroon text-center">Barang-barang yang bersih dapat membuat tempat tinggal anda terasa lebih nyaman</p>
          <Link href={"#"}>
                <Button
                  className={
                    "flex items-center gap-2 transition duration-300 font-bold px-6 py-2.5 mt-6 rounded-lg bg-yellowButton text-maroon text-2xl"
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