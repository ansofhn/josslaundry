import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import express from "../public/assets/express_v4.png";
import reguler from "../public/assets/reguler_v3.png";
import istimewa from "../public/assets/istimewa_v3.png";
import Link from "next/link";
import Button from "./Button";
import { motion } from "framer-motion";
import { Animation } from "../components/Animation";

export default function Service() {
  return (
    <>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        exit={{ opacity: 0 }}
        className="container"
      >
        <motion.div
          variants={Animation.fadeInUp}
          className="mb-4 font-semibold text-center md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-maroon"
        >
          Layanan Kami
        </motion.div>
        <motion.div
          variants={Animation.fadeInUp}
          className="text-sm font-light text-center sm:mb-10 text-textColor"
        >
          Pelayanan terbaik didukung oleh kinerja yang handal dan berpengalaman.
        </motion.div>
        <motion.div
          variants={Animation.stagger}
          className="grid grid-rows-3 mx-6 mt-6 gap-y-5 sm:gap-y-0 sm:grid-cols-3 sm:mt-16 sm:mb-24 md:mx-10 lg:mx-12 xl:mx-32 2xl:mx-40 "
        >
          <motion.div
            variants={Animation.fadeInUp}
            className="flex items-center justify-end sm:h-52"
          >
            <Image src={express} width="300px" height={"300px"} />
          </motion.div>
          <motion.div variants={Animation.fadeInUp} className="my-auto ">
            <div className="font-semibold md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-darkgreen">
              Express
            </div>
            <div className="text-xs font-light sm:text-base">
              Cucian bersih hanya dalam 2 jam
            </div>
            <span className="flex items-center justify-start gap-2 text-xs font-medium sm:text-base">
              <FaCheckCircle className="text-maroon" /> Cuci{" "}
            </span>
            <span className="flex items-center justify-start gap-2 text-xs font-medium sm:text-base">
              <FaCheckCircle className="text-maroon" /> Kering{" "}
            </span>
            <span className="flex items-center justify-start gap-2 text-xs font-medium sm:text-base">
              <FaCheckCircle className="text-maroon" /> Setrika{" "}
            </span>
            <span className="flex items-center justify-start gap-2 text-xs font-medium sm:text-base">
              <FaCheckCircle className="text-maroon" /> Lipat{" "}
            </span>
          </motion.div>
          <motion.div
            variants={Animation.fadeInUp}
            className="row-start-2 my-auto text-right sm:col-start-2"
          >
            <div className="font-semibold md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-darkgreen">
              Istimewa
            </div>
            <div className="text-xs font-light sm:text-base">
              Cucian selesai dalam 12 jam
            </div>
            <span className="flex items-center justify-end gap-2 text-xs font-medium sm:text-base">
              Cuci <FaCheckCircle className="text-maroon" />
            </span>
            <span className="flex items-center justify-end gap-2 text-xs font-medium sm:text-base">
              Kering <FaCheckCircle className="text-maroon" />
            </span>
            <span className="flex items-center justify-end gap-2 text-xs font-medium sm:text-base">
              Setrika <FaCheckCircle className="text-maroon" />
            </span>
            <span className="flex items-center justify-end gap-2 text-xs font-medium sm:text-base">
              Lipat <FaCheckCircle className="text-maroon" />
            </span>
          </motion.div>
          <motion.div
            variants={Animation.fadeInUp}
            className="flex items-center col-start-2 row-start-2 sm:items-left sm:col-start-3 sm:h-52"
          >
            <Image src={istimewa} width="300px" height={"300px"} />
          </motion.div>
          <motion.div
            variants={Animation.fadeInUp}
            className="flex items-center justify-end row-start-3 sm:h-52"
          >
            <Image src={reguler} width="300px" height={"300px"} />
          </motion.div>
          <motion.div
            variants={Animation.fadeInUp}
            className="row-start-3 my-auto"
          >
            <div className="font-semibold md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-darkgreen">
              Reguler
            </div>
            <div className="text-xs font-light sm:text-base">
              Cucian banyak tetap hemat
            </div>
            <span className="flex items-center justify-start gap-2 text-xs font-medium sm:text-base">
              <FaCheckCircle className="text-maroon" /> Cuci{" "}
            </span>
            <span className="flex items-center justify-start gap-2 text-xs font-medium sm:text-base">
              <FaCheckCircle className="text-maroon" /> Kering{" "}
            </span>
            <span className="flex items-center justify-start gap-2 text-xs font-medium sm:text-base">
              <FaCheckCircle className="text-maroon" /> Setrika{" "}
            </span>
            <span className="flex items-center justify-start gap-2 text-xs font-medium sm:text-base">
              <FaCheckCircle className="text-maroon" /> Lipat{" "}
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 1 }}
        exit={{ opacity: 0 }}
        className="z-0 bg-softblue"
      >
        <div className="container">
          <motion.div
            variants={Animation.stagger}
            className="flex items-center justify-between w-full gap-3 p-2 text-xs font-medium sm:p-4 sm:text-lg mt-14 sm:mt-28 text-darkgreen bg-softblue"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.2,
                },
              }}
            >
              Dan berbagai layanan terbaik yang kami miliki
            </motion.span>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.2,
                },
              }}
            >
              <Link href={"/service"}>
                <Button
                  className={
                    "text-xs flex items-center py-1.5 my-1 transition duration-300 sm:text-sm font-bold sm:px-8 sm:py-2.5 rounded-lg bg-amber text-maroon md:text-sm md:px-6 hover:scale-110"
                  }
                >
                  Layanan Lainnya
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
