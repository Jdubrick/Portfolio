import React from "react";
import { useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
type Props = {};

export default function Navbar({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 flex items-center max-w-7xl mx-auto justify-between px-4 py-4 z-40">
      <motion.div
        className="flex items-center"
        initial={{
          x: -500,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
      >
        <button>
          <Link href="#hero">
            <svg
              className="h-10 w-10"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
              ></path>
            </svg>
          </Link>
        </button>
      </motion.div>
      <motion.div
        className="hidden md:inline-flex"
        initial={{
          x: -2500,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.6,
        }}
      >
        <ul className="hidden md:inline-flex flex-row items-center text-xl gap-6">
          <li>
            <Link href="#about">
              <p>About</p>
            </Link>
          </li>
          <li>
            <Link href="#projects">
              <p>Projects</p>
            </Link>
          </li>
          <li>
            <Link href="#tools">
              <p>Tools</p>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <p>Contact</p>
            </Link>
          </li>
          <li>
            <button className="hover:text-gray-400 border-2 rounded-full py-2 px-4 border-b-2 border-transparent bg-gray-800">
              <a href="/resume.pdf" target="_blank">
                Resume
              </a>
            </button>
          </li>
        </ul>
      </motion.div>
      {!isOpen ? (
        <motion.div
          className="flex items-center md:hidden md:overflow-hidden"
          initial={{
            x: -2500,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 2,
          }}
        >
          <button onClick={() => setIsOpen(true)}>
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              ></path>
            </svg>
          </button>
        </motion.div>
      ) : (
        <motion.div
          className="flex absolute top-0 right-0 w-[100vw] h-[100vh] md:hidden "
          initial={{
            x: 500,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <div className="flex flex-row grow">
            <div
              className="flex w-[60%] backdrop-blur-[2px] cursor-pointer"
              onClick={() => setIsOpen(false)}
            ></div>
            <div className="flex flex-col w-[40%] bg-gray-700 bg-opacity-100 px-4 py-4">
              <div className="flex flex-row justify-end">
                <button onClick={() => setIsOpen(false)}>
                  <svg
                    className="h-10 w-10"
                    fill="none"
                    stroke="white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="flex justify-center text-center grow pt-10">
                <ul className="pt-10">
                  <li
                    className="pb-5 hover:text-gray-400"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="#hero">
                      <p>Home</p>
                    </Link>
                  </li>
                  <li
                    className="pb-5 hover:text-gray-400"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="#about">
                      <p>About</p>
                    </Link>
                  </li>
                  <li
                    className="pb-5 hover:text-gray-400"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="#projects">
                      <p>Projects</p>
                    </Link>
                  </li>
                  <li
                    className="pb-5 hover:text-gray-400"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="#tools">
                      <p>Tools</p>
                    </Link>
                  </li>
                  <li
                    className="pb-5 hover:text-gray-400"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="#contact">
                      <p>Contact</p>
                    </Link>
                  </li>
                  <li>
                    <button className="hover:text-gray-400 border-2 rounded-full py-2 px-4 border-b-2 border-transparent bg-gray-800">
                      <a href="/resume.pdf" target="_blank">
                        Resume
                      </a>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
