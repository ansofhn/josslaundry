import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import { MdNavigateNext } from "react-icons/md";
import layanankami from '../../public/assets/layanan-kami-2.png';

export default function ServiceHero() {
  return (
    <section className="px-3 pb-5 pt-[110px] bg-gradient-to-tr from-orange-500 to-yellow-500">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center justify-items-center lg:gap-5">
          <div className="flex flex-col justify-center items-center">
            <p className="flex text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center tracking-normal">Layanan Kami</p>
          </div>
          <div className="grid place-items-center scale-75 lg:scale-100">
            <Image src={layanankami}/>
          </div>
        </div>
      </div>
    </section>
  );
}