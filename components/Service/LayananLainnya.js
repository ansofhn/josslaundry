import React from "react";
import ServiceCard from "../serviceComponent/sliderCarrdServices";
import { motion } from "framer-motion";
import { Animation } from "../Animation";

export default function LayananLainnya() {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.7 }}
      exit={{ opacity: 0 }}
      className="pb-8 my-20 lg:pb-0"
    >
      <motion.div variants={Animation.stagger}>
        <motion.div
          variants={Animation.fadeInUp}
          className="flex flex-col items-center justify-center order-2 px-8 lg:order-1"
        >
          <h1 className="mb-4 text-3xl font-bold text-center text-maroon">
            Layanan Lainnya
          </h1>
        </motion.div>
        <motion.div
          variants={Animation.fadeInUp}
          className="flex items-center justify-center"
        >
          <ServiceCard />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
