import React from "react";
import PhotoHouseCare from "./PhotoHouseCare";
import Link from "next/link";
import Button from "../Button";
import { motion } from "framer-motion";
import { Animation } from "../../components/Animation";

export default function HouseCare() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.8 }}
      exit={{ opacity: 0 }}
      className="px-8 py-5 mt-8"
    >
      <motion.div variants={Animation.stagger} className="grid items-center gap-5 lg:grid-cols-2 justify-items-center">
        <motion.div
          variants={Animation.fadeInUp}
          className="order-1 px-5 sm:px-36 lg:px-20"
        >
          <PhotoHouseCare />
        </motion.div>

        <motion.div
          variants={Animation.fadeInUp}
          className="order-2 flex flex-col justify-center items-center lg:h-[500px]"
        >
          <h1 className="py-3 text-3xl font-bold text-maroon">House Care</h1>
          <p className="text-lg tracking-normal text-center text-maroon px-18 lg:px-20">
            Barang-barang yang bersih dapat membuat tempat tinggal anda terasa
            lebih nyaman
          </p>
          <motion.div variants={Animation.fadeInUp}>
            <Link href={"/pricelist#house-care"}>
              <Button
                className={
                  "flex items-center gap-2 transition duration-300 font-bold px-6 py-2.5 mt-6 rounded-lg bg-yellowButton text-maroon text-base"
                }
              >
                Lihat Selengkapnya
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
