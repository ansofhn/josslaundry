import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import { MdNavigateNext } from "react-icons/md";
import layanankami from '../../public/assets/layanan-kami.png';

export default function ServiceHero() {
  return (
    <section className="px-3 pb-5 pt-[110px] bg-gradient-to-tr from-orange-500 to-yellow-500 lg:h-[555px]">
      <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
        <div className="flex flex-col justify-center items-center">
          <p className="flex text-6xl font-bold text-white text-center tracking-normal">Layanan Kami</p>
        </div>
        <div className="">
          <Image className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]" src={layanankami}/>
        </div>
      </div>
    </section>
  );
}