import React from "react";
import Image from "next/image";
import illustration from "../public/assets/illustration.png";
import step1 from "../public/assets/step1.png";
import step2 from "../public/assets/step2.png";
import step3 from "../public/assets/step3.png";
import step4 from "../public/assets/step4.png";
import step5 from "../public/assets/step5.png";
import Link from "next/link";
import Button from "./Button";

export default function Promote() {
  return (
    <div className="container">
      <div className="my-10 md:mx-4 lg:mx-10 xl:p-10 bg-softblue rounded-2xl">
        <div className="grid grid-cols-2">
          <div className="pl-10 my-auto lg:leading-9 text-darkgreen">
            <h3 className="font-semibold lg:text-xl xl:text-2xl 2xl:text-3xl ">
              Tidak ada waktu untuk ke JOSS LAUNDRY?
            </h3>
            <h3 className="font-semibold lg:text-xl xl:text-2xl 2xl:text-3xl">
              <span className="font-bold text-maroon">
                Pick Up and Delivery
              </span>{" "}
              aja!
            </h3>
            <p className="lg:text-base lg:mb-4 xl:text-lg xl:mb-6">
              Cucian kelar tanpa harus keluar
            </p>
            <Link href={"https://wa.link/a0gqrg"}>
              <Button
                className={
                  "flex items-center gap-2 transition duration-300 text-sm font-bold px-8 py-2.5 mt-2 rounded-lg bg-amber text-maroon"
                }
              >
                Hubungi Kami
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-end px-10 py-10 xl:w-full xl:ml-0 lg:w-[80%] lg:ml-20">
            <Image src={illustration} width={"350px"} height={"235px"}/>
          </div>
          <div className="flex items-center justify-between col-span-2 text-center md:m-8 lg:m-10 md:gap-3 lg:gap-6 xl:gap-14 2xl:gap-24">
            <div className="mx-auto my-auto md:mt-0">
              <div className="lg:mx-10 md:mx-7 2xl:mx-8">
                <Image src={step1} />
              </div>
              <div className="text-sm font-medium">Siapkan pakaian kotor</div>
            </div>
            <div className="mx-auto my-auto md:mt-0">
              <div className="lg:mx-10 md:mx-7 2xl:mx-8">
                <Image src={step2} />
              </div>
              <div className="text-sm font-medium">Hubungi kami</div>
            </div>
            <div className="mx-auto my-auto md:mt-0">
              <div className="lg:mx-10 md:mx-7 2xl:mx-8">
                <Image src={step3} />
              </div>
              <div className="text-sm font-medium">Pakaian siap jemput</div>
            </div>
            <div className="mx-auto my-auto md:mt-0">
              <div className="lg:mx-10 md:mx-7 2xl:mx-8">
                <Image src={step4} />
              </div>
              <div className="text-sm font-medium">Pakaian diproses</div>
            </div>
            <div className="mx-auto my-auto md:mt-0">
              <div className="lg:mx-10 md:mx-7 2xl:mx-8">
                <Image src={step5} />
              </div>
              <div className="text-sm font-medium">Pakaian siap antar</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
