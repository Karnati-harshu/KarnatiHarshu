import React from "react";
import { aboutMe } from "../constants";
import aboutImg from "../assets/about.jpg";
import {motion} from 'framer-motion'

const AboutMe = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
      <h1 className="my-20 text-center text-4xl">
        About{" "}
        <span className="bg-gradient-to-r from-cyan-300 via-green-700 to-green-200 bg-clip-text text-4xl tracking-tight text-transparent">
          Me
        </span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <motion.img animate={{ x:[0,100,0]}} className="rounded-2xl" src={aboutImg} alt="MyImage" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{aboutMe}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
