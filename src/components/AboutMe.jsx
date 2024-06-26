import React from "react";
import { aboutMe } from "../constants";
import aboutImg from "../assets/about.png";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div id="about" className="border-b border-neutral-900 pb-4 ">
      <h1 className="my-20 text-center text-4xl">
        About{" "}
        <span className="bg-gradient-to-r from-cyan-300 via-green-700 to-green-200 bg-clip-text text-4xl tracking-tight text-transparent">
          Me
        </span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-full w-72 h-80" src={aboutImg} alt="MyImage" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 mt-5">{aboutMe}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};


export default AboutMe;
