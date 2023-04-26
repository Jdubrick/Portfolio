import React from "react";
import { SocialIcon } from "react-social-icons";
import { useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

type Props = {};

export default function Hero({}: Props) {
  const [title, titleCount] = useTypewriter({
    words: ["Hi, I'm Jordan Dubrick."],
    loop: 1,
    delaySpeed: 3000,
  });
  const [position, positionCount] = useTypewriter({
    words: ["Software Engineer"],
    loop: 1,
    delaySpeed: 3000,
  });

  return (
    <div className="h-screen flex max-w-7xl mx-auto items-center">
      <div className="flex flex-col justify-center items-center grow">
        <h1 className="text-3xl sm:text-5xl">{title}</h1>
        <h2 className="pt-3 text-md sm:text-xl">{position}</h2>
        <motion.div
          className="flex pt-20"
          initial={{
            x: -2500,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.8,
          }}
        >
          <ul className="flex gap-5">
            <li className="hover:-translate-y-2 transition ease-in-out">
              <SocialIcon
                url="https://github.com/Jdubrick"
                target="_blank"
                bgColor="white"
              />
            </li>
            <li className="hover:-translate-y-2 transition ease-in-out">
              <SocialIcon
                url="https://www.linkedin.com/in/jordandubrick/"
                target="_blank"
                bgColor="white"
              />
            </li>
            <li className="hover:-translate-y-2 transition ease-in-out">
              <SocialIcon
                url="https://www.instagram.com/jordandubrick/"
                target="_blank"
                bgColor="white"
              />
            </li>
            <li className="hover:-translate-y-2 transition ease-in-out">
              <SocialIcon
                url="mailto:dubrickjordan@gmail.com"
                target="_blank"
                bgColor="white"
              />
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
