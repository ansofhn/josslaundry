import React from "react";
import Link from "next/link";
import { MdNavigateNext } from "react-icons/md";
import Button from "./Button";
import Pricing from "./Pricings";
import { motion } from "framer-motion";
import { Animation } from "../components/Animation";

export default function OurPrice() {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}
      exit={{ opacity: 0 }}
      className="my-8 sm:my-12"
    >
      <motion.div
        variants={Animation.stagger}
        className="w-full bg-white lg:p-10"
      >
        <motion.h3
          variants={Animation.fadeInUp}
          className="p-5 font-semibold text-center md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-maroon"
        >
          Harga Spesial Untuk Kamu !
        </motion.h3>
        <motion.div variants={Animation.fadeInUp} className="xl:mt-10">
          <Pricing />
        </motion.div>
        <motion.div variants={Animation.fadeInUp} className="flex items-center justify-center">
          <Link href={"/pricelist"}>
            <Button
              className={
                "transition duration-300 flex items-center text-semibold text-sm px-4 py-2 sm:py-2.5 sm:px-6 bg-amber text-maroon hover:scale-110"
              }
            >
              Lihat Selengkapnya
              <MdNavigateNext />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
