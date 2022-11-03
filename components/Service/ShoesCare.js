import React from "react";
import PhotoShoesCare from "./PhotoShoesCare";
import Link from "next/link";
import Button from "../Button";
import { motion } from "framer-motion";
import { Animation } from "../Animation";

export default function ShoesCare() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.6 }}
      exit={{ opacity: 0 }}
      className="grid place-items-center px-8 py-5 mt-8 lg:h-[500px]"
    >
      <div className="grid items-center gap-5 lg:grid-cols-2 justify-items-center">
        <div className="order-1 px-5 sm:px-36 lg:px-20">
          <PhotoShoesCare />
        </div>

        <motion.div
          variants={Animation.stagger}
          className="flex flex-col items-center justify-center order-2"
        >
          <motion.h1
            variants={Animation.fadeInUp}
            className="py-3 text-3xl font-bold text-maroon"
          >
            Shoes Care
          </motion.h1>
          <motion.p
            variants={Animation.fadeInUp}
            className="text-lg tracking-normal text-center text-maroon px-18 lg:px-16"
          >
            Sepatu yang bersih dan wangi membuat anda memberikan kesan pertama
            yang baik untuk orang-orang di sekitar anda
          </motion.p>
          <motion.div variants={Animation.fadeInUp}>
            <Link href={"/pricelist#lainnya"}>
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
      </div>
    </motion.section>
  );
}
