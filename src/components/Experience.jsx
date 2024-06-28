import React from "react";
import { experience } from "../constants";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <div id="experience" className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>

      <div className="p-5 text-white">
        {experience.map((experience, index) => (
          <div key={index}>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={experience.year}
                iconStyle={{ background: "rgb(150, 120, 303)", color: "#fff" }}
                contentStyle={{ background: "rgb(29, 29, 29)", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid rgb(29, 29, 29)" }}
                position={index % 2 === 0 ? "right" : "left"}
                icon={
                  <FontAwesomeIcon
                    icon={index % 2 === 0 ? faUserGraduate : faLaptopCode}
                  />
                }
              >
                <motion.div whileInView={{ opacity: 1, x: 0 }}
            initial={
              index % 2 === 0 ? { opacity: 0, x: 100 } : { opacity: 0, x: -100 }
            }
            transition={{ duration: 0.5 }}>
                  <h3 className="text-xl font-semibold">{experience.role}</h3>
                  <h4 className="text-lg text-gray-400">
                    {experience.organization}
                  </h4>
                  <p className="text-gray-300">{experience.description}</p>
                  <div className="mt-2 flex flex-wrap">
                    {experience.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="mr-2 mt-2 rounded bg-gray-800 px-2 py-1 text-sm font-medium text-yellow-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
