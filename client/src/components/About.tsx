import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex flex-col max-w-7xl mx-auto text-center sm:text-left items-center">
      <h1 className="text-3xl uppercase tracking-[8px] text-gray-600 pt-[90px] pb-16">
        About
      </h1>
      <motion.img
        initial={{
          x: -50,
          opacity: 0,
        }}
        transition={{
          duration: 1.8,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="/headshot.jpg"
        className="flex-shrink-0 rounded-full object-cover w-40 h-40 sm:w-56 sm:h-56 md:rounded-lg md:h-64 md:w-64"
        alt="Picture of me"
      />
      <motion.div
        className="flex flex-col pt-10 text-[15px] sm:text-[18px] px-2"
        initial={{
          x: 0,
          opacity: 0,
        }}
        transition={{
          duration: 1.8,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <p>
          Hello! My name is Jordan Dubrick and I enjoy building and bringing
          things to life. I have been surrounded by computers since I was
          extremely young and surprisingly was only introduced to development
          back in 2020. Ever since then I have been hooked and love the process.
        </p>
        <br />
        <p>
          In the 3 years since I started my journey, I have had the pleasure of
          working for two summers at a major{" "}
          <span className="text-[#40B8FF] hover:border-b-2 hover:border-gray-500 hover:border-opacity-30">
            <a href="https://www.broadridge.com/ca/" target="_blank">
              fintech company
            </a>
          </span>
          . While I was not interning, I was working towards completing my
          computer science degree at{" "}
          <span className="text-[#f2a900] hover:border-b-2 hover:border-gray-500 hover:border-opacity-30">
            <a href="https://www.wlu.ca/" target="_blank">
              Wilfrid Laurier University
            </a>
          </span>
          , where I will be graduating in June 2023. Check out my work{" "}
          <span className="border-b-[1px]">
            <a href="#projects">below!</a>
          </span>
        </p>

        <br />
      </motion.div>
    </div>
  );
}
