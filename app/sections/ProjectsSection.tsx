"use client";
import Image from "next/image";
import { projects } from "../constants/data";
import { motion } from "framer-motion";
import { fromRight } from "../constants/motion";
import Link from "next/link";
import { useState } from "react";
import Project_card from "../components/project_card/project_card";

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
      <div className="grid justify-items-center items-center gap-4 md:grid md:grid-cols-2 2xl:grid-cols-3 mb-8">
        {projects.slice(0, limit).map((project) => (
          // <motion.div
          //   key={project.title}
          //   className=" relative bg-slate-400 rounded-xl border-1 border-slate-400"
          //   whileHover={{ rotateY: 180 }}
          //   transition={{ duration: 0.9, type: "spring" }}
          // >
          //   <motion.div
          //     className=" bg-slate-500 text-gray-400 w-full h-full absolute top-0  z-10 rounded-xl flex flex-col justify-between overflow-hidden"
          //     initial={{ opacity: 0, rotateY: 180 }}
          //     whileHover={{ opacity: 1 }}
          //   >
          //     <p className=" text-white font-bold text-center text-xl pt-4">
          //       {project.date}
          //     </p>
          //     <p className=" pt-2 px-4 text-gray-200 text-lg max-lg:overflow-y-scroll">
          //       {project.description}
          //     </p>
          //     <button className=" bg-slate-400 py-2 text-black text-lg font-bold">
          //       <Link href={project.link} target="_blank">
          //         Visit
          //       </Link>
          //     </button>
          //   </motion.div>
          //   <motion.div className="">
          //     <div className="w-full max-w-lg ">
          //       <Image
          //         src={project.imgage}
          //         alt={project.title}
          //         className=" w-full rounded-xl block"
          //       />
          //     </div>
          //     <div className="px-8 py-4 text-lg font-bold flex justify-between">
          //       <p>{project.title}</p>
          //       <p>{project.projectType}</p>
          //     </div>
          //   </motion.div>
          // </motion.div>

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
