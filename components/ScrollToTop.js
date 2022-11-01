import React from "react";
import { BiUpArrowAlt } from "react-icons/bi";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollToTop() {
  const [backToTop, setBackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const item = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 0.25,
      },
    },
  };

  return (
    <>
      {backToTop && (
        <motion.button
          variants={item}
          initial="hidden"
          animate="show"
          className="fixed flex items-center justify-center w-10 h-10 transition-all duration-300 ease-in bg-yellow-700 rounded-full shadow-2xl bottom-12 right-10 sm:w-12 sm:h-12 bg-gradient-to-tr from-orange-500 to-yellow-500"
          onClick={scrollUp}
        >
          <BiUpArrowAlt className="text-2xl font-medium text-white" />
        </motion.button>
      )}
    </>
  );
}
