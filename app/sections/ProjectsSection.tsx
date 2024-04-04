"use client";
import Image from "next/image";
import { projects } from "../constants/data";
import { motion } from "framer-motion";
import { fromRight } from "../constants/motion";

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="max-container w-full flex flex-col justify-center pt-20 pb-8 px-8"
    >
      <motion.h2
        className=" text-3xl text-white text-center mb-8 font-bold"
        {...fromRight}
      >
        <span className=" text-red-600">Project's</span> I Have Build
      </motion.h2>
      <div className="grid justify-items-center items-center gap-4 md:grid md:grid-cols-2 2xl:grid-cols-3">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className=" relative bg-slate-400 rounded-xl border-1 border-slate-400 "
            whileHover={{ rotateY: 10, rotateX: 10 }}
            transition={{ duration: 0.7, type: "spring" }}
          >
            <motion.div className="">
              <div className="w-full max-w-lg ">
                <Image
                  src={project.imgage}
                  alt={project.title}
                  className=" w-full rounded-xl"
                />
              </div>
              <div className="px-8 py-4 text-lg font-bold flex justify-between">
                <p>{project.title}</p>
                <p>{project.projectType}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
