"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

function Slider({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === data.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 5000);

  //   return () => clearInterval(intervalId);
  // }, [data.length]);

  const showNextImage = () => {
    setCurrentIndex((index) => {
      if (index === data.length - 1) return 0;
      return index + 1;
    });
  };
  const showPreviousImage = () => {
    setCurrentIndex((index) => {
      if (index === 0) return data.length - 1;
      return index - 1;
    });
  };

  return (
    <div className="w-full flex relative overflow-hidden box-border">
      {data.map((project) => (
        <div
          key={project.title}
          className=" w-full bg-slate-400 rounded-xl border-1 border-slate-400 flex-grow-0 flex-shrink-0 transition-all duration-700 ease-in-out box-border"
          style={{ translate: `${-100 * currentIndex}%` }}
        >
          <motion.div className="flex justify-between box-border">
            <div className="max-w-lg ">
              <Image
                src={project.imgage}
                alt={project.title}
                className=" h-full rounded-xl block"
              />
            </div>
            <div className="px-8 w-full py-4 text-lg font-bold flex justify-between ">
              <p>{project.title}</p>
              <p>{project.date}</p>
            </div>
          </motion.div>
        </div>
      ))}
      <button
        className=" text-white bg-black p-4 border absolute lef-0 top-[35%]"
        onClick={showPreviousImage}
      >
        Prev
      </button>
      <button
        className=" text-white bg-black p-4 border absolute right-0 top-[35%]"
        onClick={showNextImage}
      >
        Next
      </button>
    </div>
  );
}

export default Slider;
