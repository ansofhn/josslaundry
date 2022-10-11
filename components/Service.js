import React from "react";
import SliderCardService from "./serviceComponent/sliderCarrdServices";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import express from "../public/assets/express_v2.png";
import reguler from "../public/assets/reguler_v2.png";
import istimewa from '../public/assets/istimewa_v2.png'

export default function Service() {
  return (
    <div className="container"> 
      <div className="grid grid-cols-2 mx-40 my-40">
        <div className="flex items-center justify-start">
          <Image src={express} />
        </div>
        <div className="my-auto">
          <div className="text-3xl font-semibold text-darkgreen">Express</div>
          <div className="my-3 mr-48 font-light">
            Kami menyediakan laundry express cuci cepat hanya dalam 2 jam
          </div>
          <span className="flex items-center justify-start gap-4 font-medium">
            <FaCheckCircle className="text-maroon"/> Cuci{" "}
          </span>
          <span className="flex items-center justify-start gap-4 font-medium">
            <FaCheckCircle className="text-maroon"/> Kering{" "}
          </span>
          <span className="flex items-center justify-start gap-4 font-medium">
            <FaCheckCircle className="text-maroon"/> Setrika{" "}
          </span>
          <span className="flex items-center justify-start gap-4 font-medium">
            <FaCheckCircle className="text-maroon"/> Lipat{" "}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 mx-40 my-40">
        <div className="my-auto text-right">
          <div className="text-3xl font-semibold text-darkgreen">Reguler</div>
          <div className="my-3 font-light text-darkgreen">Cucian banyak tetap hemat</div>
          <span className="flex items-center justify-end gap-4 font-medium">
            Cuci <FaCheckCircle className="text-maroon"/>
          </span>
          <span className="flex items-center justify-end gap-4 font-medium">
            Kering <FaCheckCircle className="text-maroon"/>
          </span>
          <span className="flex items-center justify-end gap-4 font-medium">
            Setrika <FaCheckCircle className="text-maroon"/>
          </span>
          <span className="flex items-center justify-end gap-4 font-medium">
            Lipat <FaCheckCircle className="text-maroon"/>
          </span>
        </div>
        <div className="flex items-center justify-end">
          <Image src={reguler}/>
        </div>
      </div>
      <div className="grid grid-cols-2 mx-40 my-40">
        <div className="flex items-center justify-start">
          <Image src={istimewa} />
        </div>
        <div className="my-auto">
          <div className="text-3xl font-semibold text-darkgreen">Istimewa</div>
          <div className="my-3 mr-48 font-light">
            Layanan laundry istimewa 12 jam lebih cepat
          </div>
          <span className="flex items-center justify-start gap-4 font-medium">
            <FaCheckCircle className="text-maroon"/> Cuci{" "}
          </span>
          <span className="flex items-center justify-start gap-4 font-medium">
            <FaCheckCircle className="text-maroon"/> Kering{" "}
          </span>
          <span className="flex items-center justify-start gap-4 font-medium">
            <FaCheckCircle className="text-maroon"/> Setrika{" "}
          </span>
          <span className="flex items-center justify-start gap-4 font-medium">
            <FaCheckCircle className="text-maroon"/> Lipat{" "}
          </span>
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
