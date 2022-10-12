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
      <div className="px-10 py-6 mx-10 my-10 bg-softblue rounded-2xl">
        <div className="grid grid-cols-2">
          <div className="my-auto text-darkgreen ml-10 leading-9">
            <h3 className="text-3xl font-semibold ">
              Tidak ada waktu untuk ke JOSS LAUNDRY?<br />
            </h3>
            <h3 className="text-3xl font-semibold ">
              <span className="font-bold text-maroon">Pick Up and Delivery</span> aja!
            </h3>
            <pre>Cucian kelar tanpa harus keluar</pre>
            <Link href={"https://wa.link/a0gqrg"}>
              <Button
                className={
                  "flex items-center gap-2 transition duration-300 text-sm font-bold px-8 py-2.5 mt-6 rounded-lg bg-amber text-maroon"
                }
              >
                Hubungi Kami
              </Button>
            </Link>
          </div>
          <div className="ml-28 pl-2">
            <Image src={illustration} width={500} height={371} />
          </div>
          <div className="flex items-center text-center justify-between col-span-2 gap-24 mx-10 mb-10">
            <div className="mx-auto my-auto">
              <Image src={step1}/>
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
