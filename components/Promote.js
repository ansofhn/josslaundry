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
      <div className="text-3xl font-bold text-center text-maroon">
        Pick Up and Delivery
      </div>
      <div className="px-10 py-6 mx-10 my-10 bg-softblue rounded-2xl md:px-0">
        <div className="grid grid-cols-2">
          <div className="my-auto text-darkgreen ml-10 leading-9">
            <h3 className="text-2xl 2xl:text-3xl font-bold ">
              Tidak ada waktu untuk ke JOSS LAUNDRY?
            </h3>
            <h3 className="text-2xl 2xl:text-3xl font-bold ">
              <span className="font-bold text-maroon">
                Pick Up and Delivery
              </span>{" "}
              aja!
            </h3>
            <p className="xl:text-xl xl:mb-6">Cucian kelar tanpa harus keluar</p>
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
          <div className="xl:ml-40 xl:mr-10 2xl:ml-48 mt-4 pl-2 md:mr-12 ">
            <Image src={illustration} width={430} height={300} />
          </div>
          <div className="flex items-center text-center justify-between col-span-2 xl:gap-14 2xl:gap-24 m-10">
            <div className="mx-auto my-auto md:mt-0">
              <div className="mx-10 2xl:mx-8">
                <Image src={step1} />
              </div>
              <div className="text-sm font-medium">Siapkan pakaian kotor</div>
            </div>
            <div className="mx-auto my-auto md:mt-0">
              <div className="mx-10 2xl:mx-8">
                <Image src={step2} />
              </div>
              <div className="text-sm font-medium">Hubungi kami</div>
            </div>
            <div className="mx-auto my-auto md:mt-0">
              <div className="mx-10 2xl:mx-8">
                <Image src={step3} />
              </div>
              <div className="text-sm font-medium">Pakaian siap jemput</div>
            </div>
            <div className="mx-auto my-auto md:mt-0">
              <div className="mx-10 2xl:mx-8">
                <Image src={step4} />
              </div>
              <div className="text-sm font-medium">Pakaian diproses</div>
            </div>
            <div className="mx-auto my-auto md:mt-0">
              <div className="mx-10 2xl:mx-8">
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
