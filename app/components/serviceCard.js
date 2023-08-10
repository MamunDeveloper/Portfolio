"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "@/app/services/services.module.css";
import Image from "next/image";

function ServiceCard({ heading, text, src, flexDirection }) {
  const mainDivClass = flexDirection ? styles[`${flexDirection}`] : "";

  return (
    <motion.div
      className={`flex ${styles.serviceBox} ${mainDivClass} `}
      id={styles.mainDiv}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 10 }}
    >
      <div className={styles.text}>
        <h3>{heading}</h3> <br />
        <p>{text} </p>
      </div>
      <Image
        className={styles.serviceBoxImg}
        src={src}
        width={400}
        height={250}
        alt="Service image"
      />
    </motion.div>
  );
}

export default ServiceCard;
