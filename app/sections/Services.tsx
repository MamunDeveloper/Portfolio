"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { services } from "../constants/data";
import { fromLeft } from "../constants/motion";

interface Card {
  title: string;
  description: string;
  img: any;
}

function Services() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<Card | null>(null);

  return (
    <section id="services" className="flex flex-col mt-20 overflow-hidden">
      <motion.h2
        className=" text-white text-3xl font-bold text-center mb-8"
        {...fromLeft}
      >
        <span className=" text-red-600">Services</span> I Offer
      </motion.h2>
      <div className="max-container flex flex-col md:grid justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-8 m-auto px-4 lg:p-8">
        {services.map((card) => {
          return (
            <motion.div
              className="w-full max-w-lg flex flex-col cursor-pointer"
              key={card.title}
              layoutId={card.title}
              onClick={() => {
                setSelectedId(card.title);
                setSelectedService(card);
              }}
            >
              <Image
                src={card.img}
                alt={`${card.title} IMAGE`}
                className=" w-full"
              />
              <h4 className="info-text text-center mt-2">{card.title} </h4>
            </motion.div>
          );
        })}
      </div>

      {selectedId && (
        <div className="fixed top-0 left-0 bottom-0 right-0 z-10 flex justify-center p-8 ">
          <motion.div
            layoutId={`${selectedId}`}
            className="w-[90%] max-w-[750px] mx-auto overflow-hidden flex flex-col items-center justify-center gap-4 px-4 py-2 relative lg:w-1/2 bg-black bg-opacity-20 backdrop-blur-md backdrop-filter border border-opacity-25 border-solid border-white rounded-lg shadow-md"
          >
            <FontAwesomeIcon
              icon={faTimes}
              className=" absolute right-[20px] top-[15px] text-2xl cursor-pointer text-white"
              onClick={() => {
                setSelectedId(null);
                setSelectedService(null);
              }}
            />
            <Image
              src={selectedService!.img}
              alt={`${selectedService!.title} IMAGE`}
              className=" w-full max-w-md"
            />
            <div>
              <p className="text-white text-lg tracking-wider ">
                {selectedService!.description}{" "}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

export default Services;
