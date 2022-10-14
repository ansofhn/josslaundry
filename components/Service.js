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
    <div className="container mb-20">
      <div className="font-semibold text-center md:text-2xl lg:text-3xl xl:text-4xl text-maroon">
        Layanan Kami
      </div>
      <div className="grid grid-cols-3 mt-16 mb-24 md:mx-10 lg:mx-20 xl:mx-32">
        <div className="flex items-center justify-start h-52">
          <Image src={express} width="300px" height={"300px"} />
        </div>
        <div className="col-span-2 my-auto">
          <div className="font-semibold md:text-2xl lg:text-3xl xl:text-4xl text-darkgreen">
            Express
          </div>
          <div className="font-light">Cucian bersih hanya dalam 2 jam</div>
          <span className="flex items-center justify-start gap-2 font-medium">
            <FaCheckCircle className="text-maroon" /> Cuci{" "}
          </span>
          <span className="flex items-center justify-start gap-2 font-medium">
            <FaCheckCircle className="text-maroon" /> Kering{" "}
          </span>
          <span className="flex items-center justify-start gap-2 font-medium">
            <FaCheckCircle className="text-maroon" /> Setrika{" "}
          </span>
          <span className="flex items-center justify-start gap-2 font-medium">
            <FaCheckCircle className="text-maroon" /> Lipat{" "}
          </span>
        </div>
        <div className="col-start-2 row-start-2 my-auto text-right">
          <div className="font-semibold md:text-2xl lg:text-3xl xl:text-4xl text-darkgreen">
            Istimewa
          </div>
          <div className="font-light">Cucian selesai dalam 12 jam</div>
          <span className="flex items-center justify-end gap-2 font-medium">
            Cuci <FaCheckCircle className="text-maroon" />
          </span>
          <span className="flex items-center justify-end gap-2 font-medium">
            Kering <FaCheckCircle className="text-maroon" />
          </span>
          <span className="flex items-center justify-end gap-2 font-medium">
            Setrika <FaCheckCircle className="text-maroon" />
          </span>
          <span className="flex items-center justify-end gap-2 font-medium">
            Lipat <FaCheckCircle className="text-maroon" />
          </span>
        </div>
        <div className="flex items-center justify-end col-start-3 row-start-2 h-52">
          <Image src={istimewa} width="300px" height={"300px"} />
        </div>
        <div className="flex items-center justify-start row-start-3 h-52">
          <Image src={reguler} width="300px" height={"300px"} />
        </div>
        <div className="row-start-3 my-auto">
          <div className="font-semibold md:text-2xl lg:text-3xl xl:text-4xl text-darkgreen">
            Reguler
          </div>
          <div className="font-light">Cucian banyak tetap hemat</div>
          <span className="flex items-center justify-start gap-2 font-medium">
            <FaCheckCircle className="text-maroon" /> Cuci{" "}
          </span>
          <span className="flex items-center justify-start gap-2 font-medium">
            <FaCheckCircle className="text-maroon" /> Kering{" "}
          </span>
          <span className="flex items-center justify-start gap-2 font-medium">
            <FaCheckCircle className="text-maroon" /> Setrika{" "}
          </span>
          <span className="flex items-center justify-start gap-2 font-medium">
            <FaCheckCircle className="text-maroon" /> Lipat{" "}
          </span>
        </div>
      </div>
      {/* <div className="grid grid-cols-3 mx-40 h-72 md:mt-2 md:mb-14 md:mx-10 md:h-40 xl:mx-40">
        <div className="flex items-center justify-start">
          <Image src={express} />
        </div>
        <div className="col-span-2 mt-20 md:mt-14 xl:mt-20">
          <div className="text-3xl font-semibold text-darkgreen">Express</div>
          <div className="font-light">Cucian bersih hanya dalam 2 jam</div>
          <span className="flex items-center justify-start gap-2 font-medium">
            <FaCheckCircle className="text-maroon" /> Cuci{" "}
          </span>
          <span className="flex items-center justify-start gap-2 font-medium">
            <FaCheckCircle className="text-maroon" /> Kering{" "}
          </span>
          <span className="flex items-center justify-start gap-2 font-medium">
            <FaCheckCircle className="text-maroon" /> Setrika{" "}
          </span>
          <span className="flex items-center justify-start gap-2 font-medium">
            <FaCheckCircle className="text-maroon" /> Lipat{" "}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 mx-40 h-72 md:mt-16 md:mb-0 md:mx-10 md:h-52 xl:mx-40 xl:mt-20">
        <div className="col-span-2 mt-20 text-right md:mt-14 xl:mt-20">
          <div className="text-3xl font-semibold text-darkgreen">Istimewa</div>
          <div className="font-light">Cucian selesai dalam 12 jam</div>
          <span className="flex items-center justify-end gap-2 font-medium">
            Cuci <FaCheckCircle className="text-maroon" />
          </span>
          <span className="flex items-center justify-end gap-2 font-medium">
            Kering <FaCheckCircle className="text-maroon" />
          </span>
          <span className="flex items-center justify-end gap-2 font-medium">
            Setrika <FaCheckCircle className="text-maroon" />
          </span>
          <span className="flex items-center justify-end gap-2 font-medium">
            Lipat <FaCheckCircle className="text-maroon" />
          </span>
        </div>
        <div className="flex items-center justify-end md:mt-0">
          <Image src={istimewa} />
        </div>
      </div>
      <div className="grid grid-cols-3 mx-40 h-72 md:mt-2 md:mb-30 md:mx-10 md:h-40 lg:mb-40 xl:mb-64 xl:mx-40 2xl:mt-20 xl:mb-18 ">
        <div className="flex items-center justify-start">
          <Image src={reguler} />
        </div>
        <div className="col-span-2 mt-20 md:mt-18 xl:mt-20">
          <div className="text-3xl font-semibold text-darkgreen">Reguler</div>
          <div className="font-light">Cucian banyak tetap hemat</div>
          <span className="flex items-center justify-start gap-2 font-medium">
            <FaCheckCircle className="text-maroon" /> Cuci{" "}
          </span>
          <span className="flex items-center justify-start gap-2 font-medium">
            <FaCheckCircle className="text-maroon" /> Kering{" "}
          </span>
          <span className="flex items-center justify-start gap-2 font-medium">
            <FaCheckCircle className="text-maroon" /> Setrika{" "}
          </span>
          <span className="flex items-center justify-start gap-2 font-medium">
            <FaCheckCircle className="text-maroon" /> Lipat{" "}
          </span>
        </div>
      </div> */}
      {/* <div className="flex items-center justify-between px-20 py-6 mx-10 mb-20 text-2xl font-semibold mt-28 text-darkgreen bg-softblue rounded-2xl md:text-base md:py-2 md:px-10 md:mb-10 xl:text-xl">
        Dan berbagai layanan terbaik yang kami miliki
        <Link href={"/service"}>
          <Button
            className={
              "flex items-center gap-2 transition duration-300 text-sm font-bold px-8 py-2.5 rounded-lg bg-amber text-maroon md:text-sm md:px-6"
            }
          >
            Layanan Lainnya
          </Button>
        </Link>
      </div> */}
    </div>
  );
}
