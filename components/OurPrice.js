import React from "react";
import Link from "next/link";
import { MdNavigateNext } from "react-icons/md";
import Button from "./Button";
import Pricing from "./Pricing";

export default function OurPrice() {
  return (
    <div className="my-12">
      <div className="p-10 bg-white">
        <h3 className="p-5 mb-10 font-semibold text-center md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-maroon">
          Harga Spesial Untuk Kamu !
        </h3>
        <Pricing />
        <div className="flex items-center justify-center p-5">
          <Link href={"/pricelist"}>
            <Button
              className={
                "transition duration-300 flex items-center gap-2 text-semibold text-sm px-4 py-2 bg-amber text-maroon hover:scale-110"
              }
            >
              Lihat Selengkapnya
              <MdNavigateNext />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
