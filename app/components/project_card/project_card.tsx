"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
  return (
    <>
      <div className="bg-slate-800 rounded-md w-[400px]">
        <div className=" flex justify-around p-2 bg-slate-800 rounded-md">
          <button className=" text-white py-2 px-4 focus:bg-black transition rounded-md">
            Image
          </button>
          <button className="text-white py-2 px-4 focus:bg-black transition rounded-md">
            Details
          </button>
        </div>
      </div>
    </>
  );
}

export default Project_card;
