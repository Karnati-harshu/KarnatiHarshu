import React, { useRef } from "react";
import { contact } from "../constants";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contect = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_m6y46yf", "template_bem6j5a", form.current, {
        publicKey: "eOpuLLIoFnm8dxXKP",
      })
      .then(
        () => {
          console.log("Message Sent!");
        },
        (error) => {
          console.log("Error in sending Email", error.text);
        }
      );
  };
  return (
    <div id="contact" className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get In Touch
      </motion.h1>

      <div className="flex flex-wrap justify-center">
        {/* Column for contact information */}
        <div className="w-full lg:w-1/2 px-4 py-10 mb-8">
          <div className="text-center tracking-tighter my-8">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="my-4"
            >
              {contact.address}
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="my-4"
            >
              {contact.phoneNo}
            </motion.p>
            <a href="#" className="my-4">
              {contact.email}
            </a>
          </div>
        </div>

        {/* Column for contact form */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 px-4 mb-8"
        >
          <form ref={form} onSubmit={sendEmail}>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-bold text-neutral-400"
            >
              Name
            </label>
            <input
              type="text"
              name="user_name"
              className="bg-neutral-300 w-full mb-2 px-3 py-2 rounded text-neutral-900"
              id="name"
            />

            <label
              htmlFor="email"
              className="block mb-2 text-sm font-bold text-neutral-400"
            >
              Email
            </label>
            <input
              type="email"
              name="user_email"
              className="bg-neutral-300 w-full mb-2 px-3 py-2 rounded text-neutral-900"
              id="email"
            />

            <label
              htmlFor="message"
              className="block mb-2 text-sm font-bold text-neutral-400"
            >
              Message
            </label>
            <textarea
              rows="5"
              name="message"
              className="bg-neutral-300 w-full mb-2 px-3 py-2 rounded text-neutral-900"
              id="message"
            ></textarea>

            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Send
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contect;
