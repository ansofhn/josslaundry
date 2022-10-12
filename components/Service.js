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
<<<<<<< Updated upstream
      <div className="text-3xl font-bold text-center text-maroon">Layanan Kami</div>
      <div className="grid grid-cols-3 mx-40 h-72">
        <div className="flex items-center justify-start">
=======
      <div className="grid grid-cols-2 mx-40 mt-40 ">
        <div className="flex items-start justify-start">
>>>>>>> Stashed changes
          <Image src={express} />
        </div>
        <div className="mt-20 col-span-2">
          <div className="text-3xl font-semibold text-darkgreen">Express</div>
          <div className="font-light">
            Cucian bersih hanya dalam 2 jam
          </div>
<<<<<<< Updated upstream
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
=======
          <span className="flex items-center justify-start gap-4 font-medium">
            <FaCheckCircle className="text-maroon" /> Cuci{" "}
          </span>
          <span className="flex items-center justify-start gap-4 font-medium">
            <FaCheckCircle className="text-maroon" /> Kering{" "}
          </span>
          <span className="flex items-center justify-start gap-4 font-medium">
            <FaCheckCircle className="text-maroon" /> Setrika{" "}
          </span>
          <span className="flex items-center justify-start gap-4 font-medium">
            <FaCheckCircle className="text-maroon" /> Lipat{" "}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 mx-40 my-5">
        <div className="my-auto text-right">
          <div className="text-3xl font-semibold text-darkgreen">Reguler</div>
          <div className="my-3 font-light text-darkgreen">Cucian banyak tetap hemat</div>
          <span className="flex items-center justify-end gap-4 font-medium">
            Cuci <FaCheckCircle className="text-maroon" />
          </span>
          <span className="flex items-center justify-end gap-4 font-medium">
            Kering <FaCheckCircle className="text-maroon" />
          </span>
          <span className="flex items-center justify-end gap-4 font-medium">
            Setrika <FaCheckCircle className="text-maroon" />
          </span>
          <span className="flex items-center justify-end gap-4 font-medium">
            Lipat <FaCheckCircle className="text-maroon" />
          </span>
        </div>
        <div className="flex items-end justify-end">
          <Image src={reguler} />
        </div>
      </div>
      <div className="grid grid-cols-2 mx-40 mb-40">
        <div className="flex items-start justify-start">
          <Image src={istimewa} />
>>>>>>> Stashed changes
        </div>
        <div className="mt-20 col-span-2">
          <div className="text-3xl font-semibold text-darkgreen">Reguler</div>
          <div className="font-light">
            Cucian banyak tetap hemat
          </div>
<<<<<<< Updated upstream
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
=======
          <span className="flex items-center justify-start gap-4 font-medium">
            <FaCheckCircle className="text-maroon" /> Cuci{" "}
          </span>
          <span className="flex items-center justify-start gap-4 font-medium">
            <FaCheckCircle className="text-maroon" /> Kering{" "}
          </span>
          <span className="flex items-center justify-start gap-4 font-medium">
            <FaCheckCircle className="text-maroon" /> Setrika{" "}
          </span>
          <span className="flex items-center justify-start gap-4 font-medium">
            <FaCheckCircle className="text-maroon" /> Lipat{" "}
>>>>>>> Stashed changes
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between px-10 py-6 mx-10 mt-28 mb-20 px-20 text-2xl font-semibold text-darkgreen bg-softblue rounded-2xl">
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

