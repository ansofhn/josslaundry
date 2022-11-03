import React from "react";
import { GiWashingMachine, GiClothes } from "react-icons/gi";
import { MdOutlinePriceChange, MdDeliveryDining } from "react-icons/md";
import { motion } from "framer-motion";
import { Animation } from "../components/Animation";

export default function Feature() {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 1 }}
      exit={{ opacity: 0 }}
      className="container"
    >
      <motion.div
        variants={Animation.stagger}
        className="mx-auto my-10 lg:my-20 2xl:my-28 md:my-14"
      >
        <motion.div
          variants={Animation.fadeInUp}
          className="mb-4 font-semibold text-center md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-maroon"
        >
          Mengapa Harus Joss Laundry ?
        </motion.div>
        <motion.div
          variants={Animation.fadeInUp}
          className="mb-10 text-sm font-light text-center text-textColor"
        >
          Kami secara konsisten berupaya memberikan yang terbaik untuk kepuasan
          pelanggan.
        </motion.div>
        <motion.div
          variants={Animation.fadeInUp}
          className="grid grid-cols-2 m-6 text-center gap-x-10 gap-y-4 sm:gap-0 sm:grid-cols-4 md:mx-10 xl:mx-40 xl:mb-20"
        >
          <div>
            <div className="w-16 p-4 mx-auto transition shadow-md rounded-2xl bg-amber hover:bg-maroon duration-400 sm:w-20">
              <GiWashingMachine className="text-3xl text-white sm:text-5xl" />
            </div>
            <div className="py-2.5 mx-auto text-sm font-medium text-darkgreen">
              Cuci Cepat
            </div>
          </div>
          <div>
            <div className="w-16 p-4 mx-auto transition shadow-md rounded-2xl bg-amber hover:bg-maroon duration-400 sm:w-20">
              <MdOutlinePriceChange className="text-3xl text-white sm:text-5xl" />
            </div>
            <div className="py-2.5 mx-auto text-sm font-medium text-darkgreen">
              Harga Terjangkau
            </div>
          </div>
          <div>
            <div className="w-16 p-4 mx-auto transition shadow-md rounded-2xl bg-amber hover:bg-maroon duration-400 sm:w-20">
              <GiClothes className="text-3xl text-white sm:text-5xl" />
            </div>
            <div className="py-2.5 mx-auto text-sm font-medium text-darkgreen">
              Pakaian Terjaga
            </div>
          </div>
          <div>
            <div className="w-16 p-4 mx-auto transition shadow-md rounded-2xl bg-amber hover:bg-maroon duration-400 sm:w-20">
              <MdDeliveryDining className="text-3xl text-white sm:text-5xl" />
            </div>
            <div className="py-2.5 mx-auto text-sm font-medium text-darkgreen">
              Antar Jemput
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
