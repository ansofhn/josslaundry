import React from "react";
import SliderCardService from "./serviceComponent/sliderCarrdServices";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { MdNavigateNext } from "react-icons/md";
import { BsCheckCircle } from "react-icons/bs";
import express from "../public/assets/express.png";
import reguler from "../public/assets/reguler.png";

export default function Service() {
  return (
    <div className="container">
      <div className="grid grid-cols-2 mx-40 my-20">
        <div className="flex items-center justify-start">
          <Image src={express} />
        </div>
        <div className="my-auto">
          <h3 className="text-2xl font-semibold text-darkgreen">Express</h3>
          <p className="my-3 mr-48">
            Kami menyediakan laundry express cuci cepat hanya dalam 2 jam
          </p>
          <span className="flex items-center justify-start gap-2">
            <BsCheckCircle /> Cuci{" "}
          </span>
          <span className="flex items-center justify-start gap-2">
            <BsCheckCircle /> Kering{" "}
          </span>
          <span className="flex items-center justify-start gap-2">
            <BsCheckCircle /> Setrika{" "}
          </span>
          <span className="flex items-center justify-start gap-2">
            <BsCheckCircle /> Lipat{" "}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 mx-40 my-20">
        <div className="my-auto text-right">
          <h3 className="text-2xl font-semibold text-darkgreen">Reguler</h3>
          <p className="my-3">Cucian banyak tetap hemat</p>
          <span className="flex items-center justify-end gap-2">
            Cuci <BsCheckCircle />
          </span>
          <span className="flex items-center justify-end gap-2">
            Kering <BsCheckCircle />
          </span>
          <span className="flex items-center justify-end gap-2">
            Setrika <BsCheckCircle />
          </span>
          <span className="flex items-center justify-end gap-2">
            Lipat <BsCheckCircle />
          </span>
        </div>
        <div className="flex items-center justify-end">
          <Image src={reguler} />
        </div>
      </div>
      <div className="mt-32 text-center">
        <span className="text-sm font-medium text-darkgreen">Our Service</span>
        <div className="text-3xl font-bold text-maroon">Layanan Kami</div>
      </div>

      <SliderCardService />
    </div>
  );
}
