import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import { MdNavigateNext } from "react-icons/md";

export default function ServiceHero() {
  return (
    <div className="my-20 justify-center">
      <div className="container h-[450px] bg-gray-800">
        <div className="w-full h-full bg-gradient-to-l from-nileblue to-middle flex justify-left items-center">
          <h3 className="pl-[161px] mb-10 text-3xl font-bold text-left text-white font-poppins justify-center items-center">
            Layanan Kami
          </h3>
        </div>
      </div>
    </div>
  );
}