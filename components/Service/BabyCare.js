import React from "react";
import PhotoHouseCare from "./PhotoHouseCare";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import stroller from "../../public/assets/stroller.png";

export default function BabyCare() {
  return (
    <div className="bg-nileblue">
      {/* <div className="container"> */}
        <div className="grid items-center gap-5 ml-32 lg:grid-cols-2">
          <div className="flex flex-col items-center justify-center order-2 px-8 lg:order-1">
            <h1 className="py-3 text-3xl font-bold text-white">Baby Care</h1>
            <p className="px-20 text-lg tracking-normal text-center text-white">
              Sayangi bayi anda dengan selalu menjaga kebersihan barang-barang
              yang berkontak langsung dengan buah hati tercinta
            </p>
            <Link href={"#"}>
              <Button
                className={
                  "flex items-center gap-2 transition duration-300 font-bold px-6 py-2.5 mt-6 rounded-lg bg-yellowButton text-maroon text-base"
                }
              >
                Lihat Selengkapnya
              </Button>
            </Link>
          </div>
          <div className="flex items-end justify-end order-1">
            <Image width={500} height={650} src={stroller} />
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}
