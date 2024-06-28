import React, { useState } from "react";
import { myContent } from "../constants";
import profilePic from "../assets/HarshithaProfile.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from "../assets/Resume.pdf"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const MyContent = () => {
  const [menu, setMenu] = useState("menu")
  return (
    <div id="home" className="border-b border-neutral-900 pb-4 h-dvh lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-10 xl:mt-16 xl:text-8xl  lg:xl:pb-8"
            >
              <span className=" font-semibold">H</span>arshitha{" "}
              <span className=" font-semibold">K</span>arnati{" "}
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-blue-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(0.7)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tight" 
            >
              {myContent}
            </motion.p>
            <div className="flex justify-center lg:justify-start">
              <div className="flex items-center justify-center gap-4 text-2xl">
                <a
                  href="https://www.linkedin.com/in/harshitha-karnati-9574731b2/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/Karnati-harshu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.instagram.com/harshu_.reddy._/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start">
              <div className="flex items-center justify-center gap-5 text-xl my-5">
                <a href={resume} download="HarshithaResume"><button className="bg-orange-500 hover:bg-red-900 text-white font-semibold py-1 px-2 rounded hover:scale-110">
                  Resume
                </button></a>
                <button className="bg-cyan-300 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded hover:scale-110">
                  <AnchorLink
                    className="no-underline text-white "
                    offset={50}
                    href="#contact"
                  >
                    <p onClick={() => setMenu("contact")}>Connect with Me</p>
                  </AnchorLink>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Harshitha Karnati picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyContent;
