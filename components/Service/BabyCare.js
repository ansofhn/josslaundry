import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import stroller from "../../public/assets/stroller.png";
import { motion } from "framer-motion";
import { Animation } from "../Animation";

export default function BabyCare() {
  return (
    <div className="pb-8 mt-8 bg-softblue lg:pb-0">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
        exit={{ opacity: 0 }}
        className="grid items-center gap-5 lg:ml-32 lg:grid-cols-2"
      >
        <motion.div
          variants={Animation.stagger}
          className="flex flex-col items-center justify-center order-2 px-8 lg:order-1"
        >
          <motion.h1
            variants={Animation.fadeInUp}
            className="py-3 text-3xl font-bold text-darkgreen"
          >
            Baby Care
          </motion.h1>
          <motion.p
            variants={Animation.fadeInUp}
            className="text-lg tracking-normal text-center text-darkgreen px-18"
          >
            Sayangi bayi anda dengan selalu menjaga kebersihan barang-barang
            yang berkontak langsung dengan buah hati tercinta
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
        <div className="flex items-center justify-center order-1 lg:justify-end lg:items-end">
          <Image width={500} height={650} src={stroller} />
        </div>
      </motion.div>
    </div>
  );
}
