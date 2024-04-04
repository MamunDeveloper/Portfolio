"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { about } from "../constants/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { fromLeft } from "../constants/motion";

function AboutMeSection() {
  interface cardType {
    title: string;
    image?: any;
    description: string;
  }
  const [SelectedCard, setSelectedCard] = useState<cardType | null>(null);
  const handleClick = (index: number) => {
    setSelectedCard(about[index]);
  };
  return (
    <section
      id="about-me"
      className="max-container w-full flex flex-col justify-center pt-20 pb-8 px-8 text-white"
    >
      <div className="">
        <div className=" flex flex-col justify-center items-center gap-4 w-full">
          <motion.h2 className=" text-3xl font-bold" {...fromLeft}>
            <span className="text-red-600">About</span> Me
          </motion.h2>
          <p className=" text-xl text-slate-500">Pick a card</p>
        </div>
        <div className="flex  flex-col sm:grid grid-rows-1 sm:grid-cols-3 gap-4 mt-6">
          {about.map((card, index) => (
            <motion.div
              key={index}
              layoutId={card.title}
              onClick={() => handleClick(index)}
              className={`min-w-40 border border-slate-600 bg-slate-500 bg-opacity-10 p-4 w-full h-40 flex justify-center items-center rounded-lg ${
                index === 0 && ` col-span-2`
              } `}
              whileHover={{ scale: 1.1 }}
            >
              {/* <h2 className=" text-center font-bold text-lg ">{card.title}</h2> */}
              <Image
                src={card.icon}
                alt={card.title}
                width={100}
                height={100}
                className=""
              />
            </motion.div>
          ))}
        </div>
      </div>
      {SelectedCard && (
        <div className=" fixed z-10 top-0 left-0 right-0 bottom-0 flex justify-center items-center ">
          <motion.div
            layoutId={SelectedCard.title}
            className=" relative w-[90%] min-h-40 p-10 lg:w-1/2 md:max-w-5xl md:px-20  bg-slate-600 bg-opacity-80 backdrop-blur rounded-lg "
          >
            <div>
              <h2 className=" text-center text-xl 2xl:text-2xl font-RobotoSlab font-bold tracking-wider">
                {SelectedCard.title}
              </h2>
              <p className=" mt-6 2xl:text-xl tracking-wide">
                {SelectedCard.description}
              </p>
            </div>
            {SelectedCard.image && (
              <Image
                src={SelectedCard.image}
                alt={SelectedCard.title}
                className=" bg-cover w-full"
              />
            )}
            <FontAwesomeIcon
              icon={faTimes}
              className=" absolute right-[20px] top-[15px] text-2xl cursor-pointer text-white"
              onClick={() => setSelectedCard(null)}
            />
          </motion.div>
        </div>
      )}
    </section>
  );
}

export default AboutMeSection;
