import React from "react";
import { DiMongodb } from "react-icons/di";
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaPython,
  FaVuejs,
} from "react-icons/fa";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMysql } from "react-icons/si";
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";
import { init } from "@emailjs/browser";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div id="skills" className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Skills
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 flex flex-wrap justify-center gap-10"
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
              variants={iconVariants(4)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <FaJava className="text-4xl text-orange-800" />
            </motion.div>
            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <FaPython className="text-4xl text-sky-700" />
            </motion.div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <SiMysql className="text-4xl text-cyan-500" />
            </motion.div>
            <motion.div
              variants={iconVariants(5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <DiMongodb className="text-4xl text-green-500" />
            </motion.div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <FaHtml5 className="text-4xl text-red-400" />
            </motion.div>
            <motion.div
              variants={iconVariants(3)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <FaCss3Alt className="text-4xl text-blue-600" />
            </motion.div>
            <motion.div
              variants={iconVariants(5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <FaBootstrap className="text-4xl text-purple-500" />
            </motion.div>
            <motion.div
              variants={iconVariants(4)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <RiTailwindCssFill className="text-4xl text-cyan-500" />
            </motion.div>
            <motion.div
              variants={iconVariants(6)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <TbBrandJavascript className="text-4xl text-yellow-400" />
            </motion.div>
            <motion.div
              variants={iconVariants(4.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <RiReactjsLine className="text-4xl text-cyan-400" />
            </motion.div>
            <motion.div
              variants={iconVariants(2)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <TbBrandNextjs className="text-4xl" />
            </motion.div>
            <motion.div
              variants={iconVariants(7)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <FaVuejs className="text-4xl text-green-500" />
            </motion.div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
              variants={iconVariants(3)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <FaNodeJs className="text-4xl text-green-500" />
            </motion.div>
            <motion.div
              variants={iconVariants(4.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <SiExpress className="text-4xl text-gray-500" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;
