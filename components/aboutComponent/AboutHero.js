import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import { MdNavigateNext } from "react-icons/md";
import aboutsus from '../../public/assets/HeroAbout.png';

export default function ServiceHero() {
    return (
        <section className="h-[555px] px-3 pb-5 pt-[110px] bg-gradient-to-tr from-orange-500 to-yellow-500">
            <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
                <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
                    <p className="text-4xl font-bold md:text-6xl text-white">Tentang Kami</p>
                </div>
                <div className="order-2">
                    <Image className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]" src={aboutsus} />
                </div>
            </div>
        </section>
    );
}