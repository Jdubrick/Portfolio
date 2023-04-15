import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
type Props = {};

export default function Navbar({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="sticky top-0 flex flex-row justify-between items-center max-w-7xl mx-auto">
        <button>
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
        </button>
        {!isOpen ? (
          <div>
            <ul className="hidden md:inline-flex flex-row items-center">
              <li>Projects</li>
              <li>About Me</li>
              <li>Contact</li>
            </ul>
            <div className="flex items-center md:hidden">
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
            </div>
          </div>
        ) : (
          <motion.div
            className="absolute top-0 right-0 w-64 h-[500px] bg-gray-800 bg-opacity-80 z-20"
            initial={{
              x: 500,
              opacity: 0,
              scale: 1,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <div className="flex flex-col">
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
              <div className="flex justify-center">
                <ul>
                  <li>Projects</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
