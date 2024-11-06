"use client";
import { projects } from "../constants/data";
import { motion } from "framer-motion";
import { fromRight } from "../constants/motion";
import { useState } from "react";
import Project_card from "../components/project_card";

function ProjectsSection() {
  const [limit, setLimit] = useState(4);
  const handleMore = () => {
    setLimit(limit + 2);
  };

  return (
    <section
      id="projects"
      className="max-container w-full flex flex-col justify-center pt-20 pb-8 px-8 overflow-hidden"
    >
      <motion.h2
        className=" text-3xl text-white text-center mb-8 font-bold"
        {...fromRight}
      >
        <span className=" text-red-600">Project's</span> I Have Build
      </motion.h2>
      <div className="grid justify-items-center items-start gap-8 md:grid sm:grid-cols-2 2xl:grid-cols-3 mb-8">
        {projects.slice(0, limit).map((project) => (
          <Project_card key={project.title} project={project} />
        ))}
      </div>
      <button onClick={handleMore} className="button-gray">
        See More
      </button>
    </section>
  );
}

export default ProjectsSection;
