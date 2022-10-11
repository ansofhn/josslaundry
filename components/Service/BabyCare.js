import React from "react";
import PhotoHouseCare from './PhotoHouseCare'
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import stroller from "../../public/assets/stroller.png"

export default function BabyCare() {
  return (
    <div className="w-full bg-nileblue">
        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
          <div className="order-2 lg:order-1 flex flex-col justify-center items-center px-8">
            <h1 className="text-3xl font-bold text-white py-5">Baby Care</h1>
            <p className="text-2xl text-white text-center">Sayangi bayi anda dengan selalu menjaga kebersihan barang-barang yang berkontak langsung dengan buah hati tercinta</p>
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
          <div className="order-1 p-0">
            <Image width={515} height={690} src={stroller} />
          </div>
        </div>
    </div>
  );
}