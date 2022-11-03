import React from "react";
import Image from "next/image";
import Banner from "../public/assets/logo-banner.png";
import Button from "./Button";
import { BiChevronRight } from "react-icons/bi";
import Link from "next/link";
import { motion } from "framer-motion";
import { Animation } from "../components/Animation";

export default function Hero() {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <div className="bg-gradient-to-tr from-orange-500 to-yellow-500">
        <div className="container">
          <div className="grid items-center justify-center grid-cols-2 p-0 m-0 my-8 lg:my-9 sm:mx-5">
            <motion.div variants={Animation.stagger} className="px-6 text-white py-15 sm:px-2 sm:py-12 md:py-0 md:ml-6 lg:mb-12 xl:px-14">
              <motion.div variants={Animation.fadeInUp}>
                <h1 className="text-2xl font-bold mt-14 md:text-5xl lg:text-6xl 2xl:mr-20">
                  Bebaskan Indonesia Dari Jemuran
                </h1>
              </motion.div>
              <motion.p
                variants={Animation.fadeInUp}
                className="hidden lg:inline my-2.5 mr-20 lg:mr-10 lg:text-sm xl:text-base"
              >
                Cucian anda bersih dan wangi dengan layanan terbaik.
              </motion.p>
              <br />
              <motion.div variants={Animation.fadeInUp}>
                <Link target={"_blank"} href={"https://wa.link/a0gqrg"}>
                  <Button
                    className={
                      "hidden hover:scale-105 lg:inline items-center gap-2 transition duration-300 text-sm font-bold px-6 py-2.5 mt-6 rounded-lg bg-maroon text-white"
                    }
                  >
                    Hubungi Kami
                    <BiChevronRight className="inline ml-4 text-lg font-bold hover:scale-105 " />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            <div className="w-4/5 mx-auto mt-20 mb-10 sm:ml-16 lg:my-16 ">
              <Image src={Banner} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
