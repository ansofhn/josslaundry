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
    <>
      <div className="container">
        <div className="mb-4 font-semibold text-center md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-maroon">
          Layanan Kami
        </div>
        <div className="sm:mb-10 text-sm font-light text-center text-textColor">
          Pelayanan terbaik dengan didukung kinerja yang handal dan
          berpengalaman
        </div>
        <div className="grid sm:grid-cols-3 grid-rows-3 mt-6 sm:mt-16 sm:mb-24 mx-6 md:mx-10 lg:mx-12 xl:mx-32 xl:mx-40 ">
          <div className="flex items-center justify-end sm:h-52">
            <Image src={express} width="300px" height={"300px"} />
          </div>
          <div className=" my-auto">
            <div className="font-semibold md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-darkgreen">
              Express
            </div>
            <div className=" text-xs sm:text-base font-light">Cucian bersih hanya dalam 2 jam</div>
            <span className="flex text-xs sm:text-base items-center justify-start gap-2 font-medium">
              <FaCheckCircle className="text-maroon" /> Cuci{" "}
            </span>
            <span className="flex text-xs sm:text-base items-center justify-start gap-2 font-medium">
              <FaCheckCircle className="text-maroon" /> Kering{" "}
            </span>
            <span className="flex text-xs sm:text-base items-center justify-start gap-2 font-medium">
              <FaCheckCircle className="text-maroon" /> Setrika{" "}
            </span>
            <span className="flex text-xs sm:text-base items-center justify-start gap-2 font-medium">
              <FaCheckCircle className="text-maroon" /> Lipat{" "}
            </span>
          </div>
          <div className="row-start-2 sm:col-start-2 my-auto text-right">
            <div className="font-semibold md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-darkgreen">
              Istimewa
            </div>
            <div className="text-xs sm:text-base font-light">Cucian selesai dalam 12 jam</div>
            <span className="flex text-xs sm:text-base items-center justify-end gap-2 font-medium">
              Cuci <FaCheckCircle className="text-maroon" />
            </span>
            <span className="flex text-xs sm:text-base items-center justify-end gap-2 font-medium">
              Kering <FaCheckCircle className="text-maroon" />
            </span>
            <span className="flex text-xs sm:text-base items-center justify-end gap-2 font-medium">
              Setrika <FaCheckCircle className="text-maroon" />
            </span>
            <span className="flex text-xs sm:text-base items-center justify-end gap-2 font-medium">
              Lipat <FaCheckCircle className="text-maroon" />
            </span>
          </div>
          <div className="flex items-center sm:items-left col-start-2 sm:col-start-3 row-start-2 sm:h-52">
            <Image src={istimewa} width="300px" height={"300px"} />
          </div>
          <div className="flex items-center justify-end row-start-3 sm:h-52">
            <Image src={reguler} width="300px" height={"300px"} />
          </div>
          <div className="row-start-3 my-auto">
            <div className="font-semibold md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-darkgreen">
              Reguler
            </div>
            <div className="font-light text-xs sm:text-base">Cucian banyak tetap hemat</div>
            <span className="flex text-xs sm:text-base items-center justify-start gap-2 font-medium">
              <FaCheckCircle className="text-maroon" /> Cuci{" "}
            </span>
            <span className="flex text-xs sm:text-base items-center justify-start gap-2 font-medium">
              <FaCheckCircle className="text-maroon" /> Kering{" "}
            </span>
            <span className="flex text-xs sm:text-base items-center justify-start gap-2 font-medium">
              <FaCheckCircle className="text-maroon" /> Setrika{" "}
            </span>
            <span className="flex text-xs sm:text-base items-center justify-start gap-2 font-medium">
              <FaCheckCircle className="text-maroon" /> Lipat{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="bg-softblue">
        <div className="container">
          <div className="flex items-center justify-between p-2 sm:p-4 text-xs sm:text-lg font-medium mt-14 sm:mt-28 text-darkgreen bg-softblue w-full">
            Dan berbagai layanan terbaik yang kami miliki
            <Link href={"/service"}>
              <Button
                className={
                  "text-xs flex items-center gap-2 transition duration-300 sm:text-sm font-bold sm:px-8 sm:py-2.5 rounded-lg bg-amber text-maroon md:text-sm md:px-6 hover:scale-110"
                }
              >
                Layanan Lainnya
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
