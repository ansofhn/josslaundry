import React from "react";
import PhotoShoesCare from './PhotoShoesCare'
import Link from "next/link";
import Button from "../Button";

export default function ShoesCare() {
  return (
    <section className="grid place-items-center px-8 py-5 mt-8 lg:h-[500px]">
      <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
        <div className="order-1 px-0 sm:px-16 lg:px-8">
          <PhotoShoesCare />
        </div>

        <div className="order-2 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-maroon py-3">Shoes Care</h1>
          <p className="text-maroon text-center px-18 lg:px-16 text-lg tracking-normal">Sepatu yang bersih dan wangi membuat anda memberikan kesan pertama yang baik untuk orang-orang di sekitar anda</p>
          <Link href={"/pricelist#lainnya"}>
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