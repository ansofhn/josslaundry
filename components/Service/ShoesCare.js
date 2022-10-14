import React from "react";
import PhotoHouseCare from "./PhotoHouseCare";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import stroller from "../../public/assets/stroller.png";
import shoescare from "../../public/assets/shoes-care-2.png"

export default function ShoesCare() {
  return (
    <div className="pb-8 lg:pb-0">
      {/* <div className="container"> */}
        <div className="grid items-center gap-5 lg:grid-cols-2"> 
          <div className="flex items-center justify-center lg:justify-start lg:items-start">
            <Image width={500} height={650} src={shoescare} />
          </div>

          <div className="flex flex-col items-center justify-center px-8 lg:mr-28">
            <h1 className="py-3 text-3xl font-bold text-black">Shoes Care</h1>
            <p className="px-17 text-lg tracking-normal text-center text-black">
            Sepatu yang bersih dan wangi membuat anda memberikan kesan pertama yang baik untuk orang-orang di sekitar anda
            </p>
            <Link href={"#"}>
              <Button
                className={
                  "flex items-center gap-2 transition duration-300 font-bold px-6 py-2.5 mt-6 rounded-lg bg-yellowButton text-maroon text-base"
                }
              >
                Lihat Selengkapnya
              </Button>
            </Link>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}
 