import React, { useState } from "react";
import ProjectGridItem from "./ProjectGridItem";
import projects from "../constants/projects.json";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const [showMoreProjects, setShowMoreProjects] = useState<boolean>(false);

  return (
    <div className="flex flex-col max-w-7xl mx-auto items-center overflow-hidden">
      <h1 className="text-3xl uppercase tracking-[8px] text-gray-600 pt-[90px]">
        Projects
      </h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 pt-16 gap-5"
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
        {projects.map((project) => {
          return (
            <ProjectGridItem
              key={project.id}
              {...project}
              styles={project.id > 4 && !showMoreProjects ? "hidden" : "flex"}
            />
          );
        })}
      </motion.div>
      <div className="pt-10">
        <button
          className="border-2 px-2 py-2 rounded-lg hover:border-gray-500  hover:text-gray-500"
          onClick={() => setShowMoreProjects((oldState) => !oldState)}
        >
          {showMoreProjects ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}

export default Projects;
