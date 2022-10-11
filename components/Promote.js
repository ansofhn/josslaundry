import React from "react";
import Image from "next/image";
import illustration from "../public/assets/illustration.png";
import Link from "next/link";
import Button from "./Button";

export default function Promote() {
  return (
    <div className="container">
      <div className="px-10 py-6 mx-10 my-20 bg-softblue rounded-2xl">
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
                  Contact Us
                </Button>
              </Link>
          </div>
          <div className="mx-auto">
            <Image src={illustration} width={350} height={320} />
          </div>
        </div>
      </div>
    </div>
  );
}
