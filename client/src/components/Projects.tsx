import React, { useState } from "react";
import ProjectGridItem from "./ProjectGridItem";
import projects from "../constants/projects.json";

type Props = {};

function Projects({}: Props) {
  const [showMoreProjects, setShowMoreProjects] = useState<boolean>(false);

  return (
    <div className="flex flex-col max-w-7xl mx-auto items-center overflow-hidden">
      <h1 className="text-xl sm:text-3xl uppercase tracking-[8px] text-gray-600 pt-[90px]">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-32 gap-5">
        {projects.map((project) => {
          return (
            <ProjectGridItem
              key={project.id}
              {...project}
              styles={project.id > 4 && !showMoreProjects ? "hidden" : "flex"}
            />
          );
        })}
      </div>
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
