import React from "react";
import SliderCardService from "./serviceComponent/sliderCarrdServices";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import express from "../public/assets/express_v4.png";
import reguler from "../public/assets/reguler_v3.png";
import istimewa from "../public/assets/istimewa_v3.png";
import Link from "next/link";
import Button from "./Button";

export default function Service() {
  return (
    <div className="container">
      <div className="text-3xl font-bold text-center mb-14 text-maroon">Layanan Kami</div>
      <div className="grid grid-cols-3 mx-40 h-72">
        <div className="flex items-center justify-start">
          <Image src={express} />
        </div>
        <div className="mt-20 col-span-2">
          <div className="text-3xl font-semibold text-darkgreen">Express</div>
          <div className="font-light">
            Cucian bersih hanya dalam 2 jam
          </div>
          <span className="flex items-center justify-start gap-2 font-medium">
            <FaCheckCircle className="text-maroon ml-4" /> Cuci{" "}
          </span>
          <span className="flex items-center justify-start gap-2 font-medium">
            <FaCheckCircle className="text-maroon ml-4" /> Kering{" "}
          </span>
          <span className="flex items-center justify-start gap-2 font-medium">
            <FaCheckCircle className="text-maroon ml-4" /> Setrika{" "}
          </span>
          <span className="flex items-center justify-start gap-2 font-medium">
            <FaCheckCircle className="text-maroon ml-4" /> Lipat{" "}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 mx-40 h-72">
        <div className="mt-20 text-right col-span-2">
          <div className="text-3xl font-semibold text-darkgreen">Istimewa</div>
          <div className="font-light">
            Cucian selesai dalam 12 jam
          </div>
          <span className="flex items-center justify-end gap-2 font-medium">
            Cuci <FaCheckCircle className="text-maroon mr-4" />
          </span>
          <span className="flex items-center justify-end gap-2 font-medium">
            Kering <FaCheckCircle className="text-maroon mr-4" />
          </span>
          <span className="flex items-center justify-end gap-2 font-medium">
            Setrika <FaCheckCircle className="text-maroon mr-4" />
          </span>
          <span className="flex items-center justify-end gap-2 font-medium">
            Lipat <FaCheckCircle className="text-maroon mr-4" />
          </span>
        </div>
        <div className="flex items-center justify-end">
          <Image src={istimewa} />
        </div>
      </div>
      <div className="grid grid-cols-3 mx-40 h-72">
        <div className="flex items-center justify-start">
          <Image src={reguler} />
        </div>
        <div className="mt-20 col-span-2">
          <div className="text-3xl font-semibold text-darkgreen">Reguler</div>
          <div className="font-light">
            Cucian banyak tetap hemat
          </div>
          <span className="flex items-center justify-start gap-2 font-medium">
            <FaCheckCircle className="text-maroon ml-4" /> Cuci{" "}
          </span>
          <span className="flex items-center justify-start gap-2 font-medium">
            <FaCheckCircle className="text-maroon ml-4" /> Kering{" "}
          </span>
          <span className="flex items-center justify-start gap-2 font-medium">
            <FaCheckCircle className="text-maroon ml-4" /> Setrika{" "}
          </span>
          <span className="flex items-center justify-start gap-2 font-medium">
            <FaCheckCircle className="text-maroon ml-4" /> Lipat{" "}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between py-6 mx-10 mt-28 mb-20 px-20 text-2xl font-semibold text-darkgreen bg-softblue rounded-2xl">
        Dan berbagai layanan terbaik yang kami miliki
        <Link href={"/service"}>
          <Button
            className={
              "flex items-center gap-2 transition duration-300 text-sm font-bold px-8 py-2.5 rounded-lg bg-amber text-maroon"
            }
          >
            Layanan Lainnya
          </Button>
        </Link>
      </div>
    </div>
  );
}

