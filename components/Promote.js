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
import { motion } from "framer-motion";
import { Animation } from "../components/Animation";

export default function Promote() {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}
      exit={{ opacity: 0 }}
      className="container"
    >
      <motion.div variants={Animation.fadeInUp} className="px-3 py-6 mx-4 my-10 sm:px-10 sm:mx-10 bg-softblue rounded-2xl md:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="my-auto md:ml-10 lg:leading-9 text-darkgreen">
            <div className="mx-2 sm:hidden">
              <Image src={illustration} width={"350px"} height={"235px"} />
            </div>
            <h3 className="text-sm font-semibold text-center sm:text-base sm:text-left lg:text-xl xl:text-2xl 2xl:text-3xl ">
              Tidak ada waktu untuk ke JOSS LAUNDRY?
            </h3>
            <h3 className="text-sm font-semibold text-center sm:text-base sm:text-left lg:text-xl xl:text-2xl 2xl:text-3xl">
              <span className="text-base font-bold lg:text-xl xl:text-2xl 2xl:text-3xl text-maroon">
                Pick Up and Delivery
              </span>{" "}
              aja!
            </h3>
            <p className="text-xs text-center sm:text-base sm:text-left lg:text-base lg:mb-4 xl:text-lg xl:mb-6">
              Cucian kelar tanpa harus keluar
            </p>
            <Link href={"https://wa.link/a0gqrg"}>
              <Button
                className={
                  "mx-auto sm:mx-0 flex items-center gap-2 transition duration-300 text-sm font-bold px-8 py-2.5 mt-2 rounded-lg bg-amber text-maroon hover:bg-maroon hover:text-white"
                }
              >
                Hubungi Kami
              </Button>
            </Link>
          </div>
          <div className="hidden pl-2 mt-4 sm:inline xl:ml-40 xl:mr-10 2xl:ml-64 md:mr-12 lg:ml-12">
            <Image src={illustration} width={"350px"} height={"235px"} />
          </div>
          <div className="items-center justify-between hidden col-span-2 my-4 text-center sm:flex xl:gap-14 2xl:gap-24 md:m-10 text-darkgreen">
            <div className="mx-auto my-auto mt-0">
              <div className="mx-6 md:mx-10 2xl:mx-8">
                <Image src={step1} />
              </div>
              <div className="text-sm font-medium">Siapkan pakaian kotor</div>
            </div>
            <div className="mx-auto my-auto mt-0">
              <div className="mx-6 md:mx-10 2xl:mx-8">
                <Image src={step2} />
              </div>
              <div className="text-sm font-medium">Hubungi kami</div>
            </div>
            <div className="mx-auto my-auto mt-0">
              <div className="mx-6 md:mx-10 2xl:mx-8">
                <Image src={step3} />
              </div>
              <div className="text-sm font-medium">Pakaian siap jemput</div>
            </div>
            <div className="mx-auto my-auto mt-0">
              <div className="mx-6 md:mx-10 2xl:mx-8">
                <Image src={step4} />
              </div>
              <div className="text-sm font-medium">Pakaian diproses</div>
            </div>
            <div className="mx-auto my-auto mt-0">
              <div className="mx-6 md:mx-10 2xl:mx-8">
                <Image src={step5} />
              </div>
              <div className="text-sm font-medium">Pakaian siap antar</div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
