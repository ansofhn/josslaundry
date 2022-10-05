import React from "react";
import SliderCardService from "./serviceComponent/sliderCarrdServices";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { MdNavigateNext } from "react-icons/md";

export default function Service() {
  return (
    <div className="container">
      <div className="mt-20 text-center ">
        <span className="text-sm font-medium text-darkgreen">Our Service</span>
        <div className="text-3xl font-bold text-maroon">Layanan Kami</div>
      </div>

      <SliderCardService />
    </div>
  );
}
