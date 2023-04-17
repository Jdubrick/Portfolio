import React from "react";
import {
  FaPython,
  FaJava,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaJenkins,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiSpringboot,
  SiChef,
  SiTailwindcss,
} from "react-icons/si";
import { motion } from "framer-motion";
type Props = {};

export default function Tools({}: Props) {
  return (
    <div className="h-screen flex flex-col max-w-7xl mx-auto items-center">
      <div className="flex pt-[90px]">
        <h1 className="text-xl sm:text-3xl uppercase tracking-[8px] text-gray-600">
          Skills
        </h1>
      </div>
      <motion.div
        className="grid grid-cols-4 pt-20 gap-y-[40px] gap-x-[40px] lg:gap-y-[60px] lg:gap-x-[60px] justify-items-center content-center"
        initial={{
          y: 200,
          opacity: 0,
        }}
        transition={{
          duration: 1.8,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="relative group hover:cursor-pointer hover:-translate-y-2">
          <FaPython className="w-10 h-10 md:w-16 md:h-16" />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-200 ease-in-out w-10 h-10 md:w-16 md:h-16">
            <div className="flex items-center justify-center h-full">
              <p>Python</p>
            </div>
          </div>
        </div>
        <div className="relative group hover:cursor-pointer hover:-translate-y-2">
          <DiJavascript1 className="w-10 h-10 md:w-16 md:h-16" />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-200 ease-in-out w-10 h-10 md:w-16 md:h-16">
            <div className="flex items-center justify-center h-full">
              <p>Javascript</p>
            </div>
          </div>
        </div>
        <div className="relative group hover:cursor-pointer hover:-translate-y-2">
          <SiTypescript className="w-10 h-10 md:w-16 md:h-16" />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-200 ease-in-out w-10 h-10 md:w-16 md:h-16">
            <div className="flex items-center justify-center h-full">
              <p>Typescript</p>
            </div>
          </div>
        </div>
        <div className="relative group hover:cursor-pointer hover:-translate-y-2">
          <FaJava className="w-10 h-10 md:w-16 md:h-16" />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-200 ease-in-out w-10 h-10 md:w-16 md:h-16">
            <div className="flex items-center justify-center h-full">
              <p>Java</p>
            </div>
          </div>
        </div>
        <div className="relative group hover:cursor-pointer hover:-translate-y-2">
          <FaReact className="w-10 h-10 md:w-16 md:h-16" />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-200 ease-in-out w-10 h-10 md:w-16 md:h-16">
            <div className="flex items-center justify-center h-full">
              <p>React</p>
            </div>
          </div>
        </div>
        <div className="relative group hover:cursor-pointer hover:-translate-y-2">
          <SiNextdotjs className="w-10 h-10 md:w-16 md:h-16" />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-200 ease-in-out w-10 h-10 md:w-16 md:h-16">
            <div className="flex items-center justify-center h-full">
              <p>Next.js</p>
            </div>
          </div>
        </div>
        <div className="relative group hover:cursor-pointer hover:-translate-y-2">
          <FaNodeJs className="w-10 h-10 md:w-16 md:h-16" />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-200 ease-in-out w-10 h-10 md:w-16 md:h-16">
            <div className="flex items-center justify-center h-full">
              <p>Node.js</p>
            </div>
          </div>
        </div>
        <div className="relative group hover:cursor-pointer hover:-translate-y-2">
          <SiExpress className="w-10 h-10 md:w-16 md:h-16" />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-200 ease-in-out w-10 h-10 md:w-16 md:h-16">
            <div className="flex items-center justify-center h-full">
              <p>Express.js</p>
            </div>
          </div>
        </div>
        <div className="relative group hover:cursor-pointer hover:-translate-y-2">
          <SiSpringboot className="w-10 h-10 md:w-16 md:h-16" />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-200 ease-in-out w-10 h-10 md:w-16 md:h-16">
            <div className="flex items-center justify-center h-full">
              <p>Springboot</p>
            </div>
          </div>
        </div>
        <div className="relative group hover:cursor-pointer hover:-translate-y-2">
          <SiTailwindcss className="w-10 h-10 md:w-16 md:h-16" />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-200 ease-in-out w-10 h-10 md:w-16 md:h-16">
            <div className="flex items-center justify-center h-full">
              <p>TailwindCSS</p>
            </div>
          </div>
        </div>
        <div className="relative group hover:cursor-pointer hover:-translate-y-2">
          <FaDocker className="w-10 h-10 md:w-16 md:h-16" />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-200 ease-in-out w-10 h-10 md:w-16 md:h-16">
            <div className="flex items-center justify-center h-full">
              <p>Docker</p>
            </div>
          </div>
        </div>
        <div className="relative group hover:cursor-pointer hover:-translate-y-2">
          <FaJenkins className="w-10 h-10 md:w-16 md:h-16" />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-200 ease-in-out w-10 h-10 md:w-16 md:h-16">
            <div className="flex items-center justify-center h-full">
              <p>Jenkins</p>
            </div>
          </div>
        </div>
        <div className="relative group hover:cursor-pointer hover:-translate-y-2">
          <FaGitAlt className="w-10 h-10 md:w-16 md:h-16" />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-200 ease-in-out w-10 h-10 md:w-16 md:h-16">
            <div className="flex items-center justify-center h-full">
              <p>Git</p>
            </div>
          </div>
        </div>
        <div className="relative group hover:cursor-pointer hover:-translate-y-2">
          <SiChef className="w-10 h-10 md:w-16 md:h-16" />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-200 ease-in-out w-10 h-10 md:w-16 md:h-16">
            <div className="flex items-center justify-center h-full">
              <p>Chef</p>
            </div>
          </div>
        </div>
        <div className="relative group hover:cursor-pointer hover:-translate-y-2">
          <FaAws className="w-10 h-10 md:w-16 md:h-16" />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-200 ease-in-out w-10 h-10 md:w-16 md:h-16">
            <div className="flex items-center justify-center h-full">
              <p>AWS</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
