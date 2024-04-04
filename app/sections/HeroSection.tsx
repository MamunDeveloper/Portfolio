"use client";
import Image from "next/image";
import profileImg from "@/app/assets/images/profile img.png";
import { motion } from "framer-motion";
import { fromLeft, fromRight } from "@/app/constants/motion";
import { pages } from "../constants/data";

function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="max-container flex flex-col items-center justify-between pb-12 gap-20">
      <div className="py-5 flex flex-col-reverse items-center justify-center  lg:justify-between h-screen lg:flex-row gap-10 ">
        <motion.div
          className=" flex flex-col gap-2 text-white font-Roboto px-5"
          {...fromLeft}
        >
          <p className="text-3xl font-bold">I am __</p>
          <h2 className=" text-4xl font-bold text-red-600 font-RobotoSlab">
            Abdullah Al Mamun
          </h2>
          <p className="text-3xl font-bold">developer and designer</p>
        </motion.div>
        <motion.div className="max-w-xl" {...fromRight}>
          <Image
            src={profileImg}
            alt="profile image"
            width={500}
            height={500}
            className="border-b-4 border-blue-600"
          />
        </motion.div>
      </div>

      <motion.div
        className="mb-32 grid text-center md:grid-cols-2 md:gap-4 lg:gap-0 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {pages.map((page) => (
          <motion.a
            key={page.page}
            variants={item}
            href={page.pageLink}
            className="group rounded-lg border border-transparent text-white px-5 py-4 transition-colors hover:bg-opacity-5 hover:bg-white font-Roboto"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              {page.page}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              {page.description}
            </p>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}

export default HeroSection;
