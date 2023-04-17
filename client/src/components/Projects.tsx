import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

type Props = {};

export default function Projects({}: Props) {
  return (
    <div className="h-screen flex flex-col max-w-7xl mx-auto items-center overflow-hidden">
      <h1 className="text-xl sm:text-3xl uppercase tracking-[8px] text-gray-600 pt-[90px]">
        Projects
      </h1>
      <motion.div
        className="flex w-[80%] pt-10 space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-600"
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
        {/* TODO: Make this so props are passed for the information */}
        <ProjectCard
          title={"Stock Information Tool"}
          tech={["ReactJS", "Express.js", "JavaScript", "CSS/HTML"]}
          description={[
            "Express.js backend requests data from an external API provided by Twelvedata",
            "Application was containerized and runs through a Docker container",
            "User can enter up to 8 ticker symbols and the application easily displays open price, close price, and volume for all user entered ticker symbols",
            "The data can be exported as a .csv file to be used for financial models",
          ]}
          gitLink={"https://github.com/Jdubrick/Stock-Portfolio"}
        />
        <ProjectCard
          title={"Sorting Visualizer"}
          tech={["ReactJS", "JavaScript", "HTML/CSS"]}
          description={[
            "Sorts an integer array using any of Bubble Sort, Insertion Sort, Radix Sort, or Merge Sort",
            "The user has the ability to choose the type of sort, and can regenerate a new integer array at any time",
            "Deployed to Github Pages",
          ]}
          gitLink={"https://github.com/Jdubrick/sorting-visualizer"}
          external="https://jdubrick.github.io/sorting-visualizer/"
        />
        <ProjectCard
          title={"Portfolio Optimizer"}
          tech={["Python", "Pandas", "NumPy", "PyPortfolioOpt"]}
          description={[
            "Optimizes a portfolio to obtain the highest Sharpe ratio within a given volatility range",
            "Displays optimized portfolio against an equal-weighted portfolio of the same securities",
            "User has the ability to enter any ticker symbols they wish to add",
            "PyPortfolioOpt was implemented to generate the efficient frontier in order to optimize risk to return",
          ]}
          gitLink={"https://github.com/Jdubrick/portfolio-optimization"}
        />
        <ProjectCard
          title={"DCF Model Automation"}
          tech={["Python", "Pandas", "NumPy"]}
          description={[
            "Aims to automate the creation for a discounted cash flow financial model that is extensively used in the world of banking",
            "Used to aid in the decision to purchase a security or in the decision to stay away from a security. This model can also be used to help decide if you need to perform more due diligence",
            "All financial data is provided by the Yahoo Finance API",
          ]}
          gitLink={"https://github.com/Jdubrick/dcf-model-automation"}
        />
      </motion.div>
    </div>
  );
}
