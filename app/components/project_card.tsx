"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface Project {
  title: string;
  date: string;
  description: string;
  link: string;
  imgage: any;
  projectType: string;
}

type ProjectCardProps = {
  project: Project;
};

function Project_card({ project }: ProjectCardProps) {
  const [imageTabActive, setImageTabActive] = useState(true);
  const tabsButtonClasses = "text-white py-2 px-4 transition rounded-md"; //common classes for tab buttons
  return (
    <>
      <div className=" max-w-[400px] w-full">
        {/* Tabs Button container */}
        <div className=" flex justify-around p-2 bg-slate-800 rounded-md">
          <button
            className={`${tabsButtonClasses} ${imageTabActive && `bg-black`}`}
            onClick={() => setImageTabActive(true)}
          >
            Image
          </button>
          <button
            className={`${tabsButtonClasses} ${!imageTabActive && `bg-black`}`}
            onClick={() => setImageTabActive(false)}
          >
            Details
          </button>
        </div>

        {/* Tabs */}
        {imageTabActive ? (
          <div className=" min-h-[250px] px-2 py-4 bg-slate-800 mt-2 rounded-md flex items-center">
            <Image
              src={project.imgage}
              alt="Project Image"
              className=" w-[100%] h-auto rounded-md"
            />
          </div>
        ) : (
          <div className=" min-h-[250px] px-2 py-4 bg-slate-800 text-slate-400 mt-2 rounded-md flex flex-col justify-around gap-3">
            <p>{project.date}</p>
            <h4 className="text-white">{project.title}</h4>
            <p>{project.description}</p>
            <Link
              href={project.link}
              target="_blank"
              className="text-center text-white font-semibold p-2 rounded-md hover:bg-slate-900 hover:text-red-600 transition"
            >
              Take A Tour
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Project_card;
