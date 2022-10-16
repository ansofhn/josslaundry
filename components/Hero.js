import React from "react";
import Image from "next/image";
import Banner from "../public/assets/logo-banner.png";
import Button from "./Button";
import { BiChevronRight } from "react-icons/bi";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="w-full bg-gradient-to-tr from-orange-500 to-yellow-500">
        <div className="container">
          <div className="grid items-center justify-center grid-cols-2 py-0 m-0 mx-5 md:my-12">
            <div className="px-20 text-white py-15 sm:px-6 sm:pt-12 xl:px-14">
              <h1 className="mb-2 font-bold md:text-4xl lg:text-5xl xl:text-6xl 2xl:mr-20">
                Bebaskan Indonesia Dari Jemuran
              </h1>
              <p className="hidden my-2.5 mr-20 lg:inline lg:mr-10 lg:text-sm xl:text-base">
                Cucian anda bersih dan wangi dengan layanan terbaik.
              </p>
              <br />
              <Link target={"_blank"} href={"https://wa.link/a0gqrg"}>
                <Button
                  className={
                    "hidden lg:inline items-center gap-2 transition duration-300 text-sm font-bold px-6 py-2.5 mt-6 rounded-lg bg-maroon text-white hover:scale-110"
                  }
                >
                  Hubungi Kami
                  <BiChevronRight className="inline ml-4 text-lg font-bold " />
                </Button>
              </Link>
            </div>
            <div className="w-4/5 mx-auto mt-20 mb-10 sm:ml-16 lg:my-16 ">
              <Image src={Banner} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
