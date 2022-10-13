import React from "react";
import Image from "next/image";
import Banner from "../public/assets/logo-banner.png";
import Button from "./Button";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";

export default function Hero() {
  return (
    <>
    <div className="h-108">
      <div className="w-full bg-gradient-to-tr from-orange-500 to-yellow-500">
        <div className="container">
          <div className="py-0 m-0 grid items-center justify-center grid-cols-2 mx-5 md:my-8 ">
            <div className="px-20 text-white py-15 sm:px-6 sm:pt-12 xl:px-14">
              <h1 className="text-6xl font-bold 2xl:mr-20">
                Bebaskan Indonesia Dari Jemuran
              </h1>
              <p className="hidden lg:inline my-2.5 mr-20 lg:mr-10 lg:text-sm xl:text-base">
                Cucian anda bersih dan wangi dengan layanan terbaik.
              </p>
              <br />
              <Link href={"https://wa.link/a0gqrg"}>
                <Button
                  className={
                    "hidden lg:inline flex items-center gap-2 transition duration-300 text-sm font-bold px-6 py-2.5 mt-6 rounded-lg bg-maroon text-white"
                  }
                >
                  Hubungi Kami
                  <BiRightArrowAlt className=" inline text-lg font-bold"/>
                </Button>
              </Link>
            </div>
            <div className="w-4/5 mx-auto mt-20 mb-10 sm:ml-16 lg:my-16 ">
              <Image src={Banner} />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
