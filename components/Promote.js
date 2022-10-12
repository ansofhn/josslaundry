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
      <div className="mt-20 text-3xl font-bold text-center text-maroon">
        Pick up and Delivery
      </div>
      <div className="px-10 py-6 mx-10 my-10 bg-softblue rounded-2xl">
        <div className="grid grid-cols-2">
          <div className="mx-10 my-auto text-darkgreen">
            <h3 className="mr-10 text-3xl font-semibold">
              Anda malas mencuci ? Silakan ke Joss Laundry
            </h3>
            Cepat, rapi, wangi, dan banyak promosi
            <Link href={"#"}>
              <Button
                className={
                  "flex items-center gap-2 transition duration-300 text-sm font-bold px-8 py-2.5 mt-6 rounded-lg bg-amber text-maroon"
                }
              >
                Hubungi Kami
              </Button>
            </Link>
          </div>
          <div className="mx-auto">
            <Image src={illustration} width={350} height={320} />
          </div>
          <div className="flex items-center justify-between col-span-2 mx-10 my-10">
            <div className="mx-auto my-auto">
              <Image src={step1} />
              <div>Siapkan pakaian kotor</div>
            </div>
            <div className="mx-auto my-auto">
              <Image src={step2} />
              <div>Hubungi kami</div>
            </div>
            <div className="mx-auto my-auto">
              <Image src={step3} />
              <div>Pakaian siap jemput</div>
            </div>
            <div className="mx-auto my-auto">
              <Image src={step4} />
              <div>Pakaian diproses</div>
            </div>
            <div className="mx-auto my-auto">
              <Image src={step5} />
              <div>Pakaian siap antar</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
