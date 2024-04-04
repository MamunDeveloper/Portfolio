"use client";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  fromBottom,
  fromRight,
  fromup,
  tapAnimation,
} from "../constants/motion";

function ContactSection() {
  const spanClasses =
    "absolute -top-10 md:top-0 md:-right-[60%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100";
  return (
    <section className="text-white max-container pt-40" id="contact">
      <motion.h2 className=" text-3xl font-bold text-center" {...fromRight}>
        Let's <span className=" text-red-600">Dicuss</span> Your Project
      </motion.h2>
      <div className="flex flex-col-reverse md:flex-row max-md:gap-4 w-full py-10 px-8 pt-2 justify-center items-center">
        <div className=" w-full  px-10 md:py-20 flex justify-center md:flex-col gap-4 md:w-40">
          <Link
            href={"https://www.facebook.com/grh.mamun"}
            className=" group relative"
          >
            <span className={spanClasses}>Facebook</span>
            <FontAwesomeIcon icon={faFacebook} className="text-3xl" />
          </Link>
          <Link
            href={"https://instagram.com/techtemple_x?igshid=OGQ5ZDc2ODk2ZA=="}
            className="group relative"
          >
            <span className={spanClasses}>Instagram</span>
            <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
          </Link>
          <Link
            href={"https://x.com/MamunTweets?t=vqvFGrq7QhBJCIF3cPcDDw&s=09"}
            className="group relative"
          >
            <span className={spanClasses}>XTwitter</span>
            <FontAwesomeIcon icon={faXTwitter} className="text-3xl" />
          </Link>
        </div>
        <div className=" flex flex-1 p-10 flex-col gap-4 w-full">
          <motion.input
            {...fromup}
            type="text"
            name=""
            id=""
            placeholder="Email Address"
            className=" border-none outline-none px-5 py-4 rounded-lg info-text bg-opacity-1 glass text-white "
          />
          <motion.textarea
            {...fromBottom}
            name=""
            id=""
            placeholder="Leave a Message"
            className=" border-none outline-none h-36 px-5 py-4 rounded-lg info-text glass overflow-hidden"
          />
          <motion.button className=" button-gray" {...tapAnimation}>
            Send
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
