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
      <div className="container my-28">
        <div className="mb-4 font-semibold text-center md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-maroon">
          Layanan Kami
        </div>
        <div className="mb-20 text-sm font-light text-center text-textColor">
          Pelayanan terbaik dengan didukung kinerja yang handal dan
          berpengalaman
        </div>
        <div className="grid grid-cols-3 mt-16 mb-24 md:mx-10 lg:mx-20 xl:mx-32">
          <div className="flex items-center justify-start h-52">
            <Image src={express} width="300px" height={"300px"} />
          </div>
          <div className="col-span-2 my-auto">
            <div className="font-semibold md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-darkgreen">
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
            <div className="font-semibold md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-darkgreen">
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
            <div className="font-semibold md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-darkgreen">
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
      </div>
      <div className="bg-softblue">
        <div className="container">
          <div className="flex items-center justify-between px-4 py-4 mb-20 text-lg font-medium mt-28 text-darkgreen bg-softblue">
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
          </div>
        </div>
      </div>
    </>
  );
}
