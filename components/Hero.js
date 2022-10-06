import React from "react";
import Image from "next/image";
import Banner from "../public/assets/logo-banner.png";
import Button from "./Button";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="w-full bg-gradient-to-tr from-orange-500 to-yellow-500">
        <div className="container">
          <div className="grid items-center justify-center grid-cols-2 mx-5 my-16">
<<<<<<< Updated upstream
            <div className="px-20 text-white py-15">
              <h1 className="text-5xl font-bold 2xl:mr-20 ">
                Bebaskan Indonesia Dari Jemuran
=======
            <div className="px-20 py-15">
              <h1 className="text-5xl font-black text-white leading-normal font-poppins 2xl:mr-20 ">
                Bebaskan Indonesia dari Jemuran
>>>>>>> Stashed changes
              </h1>
              <p className="my-2.5 mr-20">
                Percayakan pada kami cucian anda bersih dan wangi dengan layanan
                yang lengkap.
              </p>

              <Link href={"#"}>
                <Button
                  className={
                    "flex items-center gap-2 transition duration-300 text-sm font-bold px-6 py-2.5 mt-6 rounded-lg bg-maroon text-white"
                  }
                >
                  Contact Us
                  <BiRightArrowAlt className="text-lg font-bold"/>
                </Button>
              </Link>
            </div>
            <div className="mx-auto my-20">
              <Image src={Banner} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
