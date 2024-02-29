"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "@/app/services/services.module.css";
import Image from "next/image";
import branding from "@/app/images/branding.jpg";
import customeService from "@/app/images/service page image.png";
import allDevice from "@/app/images/all devices.png";
import Ecommerse from "@/app/images/E-commerse.png";
import idea from "@/app/images/get an idea.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Page() {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Custom Website Development",
      Subtitle:
        "From concept to reality, we craft custom websites tailored to your specific needs and business goals. Our development process is collaborative, ensuring that your vision is brought to life while incorporating the latest design trends and technical advancements.",
      img: customeService,
    },
    {
      id: 2,
      title: "Responsive Design",
      Subtitle:
        "With mobile internet usage on the rise, we prioritize responsive web design, guaranteeing a seamless and engaging user experience across all devices, from desktops to smartphones and tablets.",
      img: allDevice,
    },
    {
      id: 3,
      title: "E-Commerce Solutions",
      Subtitle:
        "Looking to expand your online business? Our e-commerce solutions are designed to maximize conversions and enhance your customers' shopping journey, with secure payment gateways and intuitive product catalogs.",
      img: Ecommerse,
    },
  ];

  return (
    <section id={styles.serviceSection}>
      <div id={styles.introBox} className="flex">
        <div id={styles.introTextBox}>
          <h1 className="heading ">
            <span>Empower Your Brand</span> <br /> Expert Web Development at
            Your Fingertips!
          </h1>
          <p>
            Ready to take your online presence to the next level? Let's
            collaborate and build a remarkable website that captivates your
            audience and boosts your business. Contact us today for a free
            consultation and discover the endless possibilities for your digital
            success!
          </p>
          <Link href={"https://www.fiverr.com/s/3QV5zk"} target="blank">
            <button className="btn1">Let's talk</button>
          </Link>
        </div>
        <div id={styles.introImageBox}>
          <Image
            id={styles.introImage}
            src={branding}
            width={400}
            height={250}
            alt="Service image"
          />
        </div>
      </div>

      <h1>Services I Offer</h1>
      <section id={styles.servicesBox}>
        {cards.map((card) => {
          return (
            <motion.div
              key={card.title}
              layoutId={card.id}
              className={styles.serviceCard}
              onClick={() => {
                setSelectedId(card.id);
                setSelectedService(card);
              }}
            >
              <Image
                className={styles.serviceImg}
                src={card.img}
                alt={`${card.title} IMAGE`}
              />
              <h4>{card.title} </h4>
            </motion.div>
          );
        })}
      </section>

      <Link href={"https://www.fiverr.com/s/6pyaVw"} target="blank">
        <button className="button btn1">Place Order</button>
      </Link>

      {selectedId && (
        <div id={styles.modalBox}>
          <motion.div id={styles.modal} layoutId={selectedId}>
            <FontAwesomeIcon
              icon={faXmark}
              id={styles.closeIcon}
              onClick={() => {
                setSelectedId(null);
                setSelectedService(null);
              }}
            />
            <Image
              id={styles.img}
              src={selectedService.img}
              alt={`${selectedService.title} IMAGE`}
            />
            <div id={styles.textBox}>
              <h3>{selectedService.title} </h3>
              <p>{selectedService.Subtitle} </p>
            </div>
          </motion.div>
        </div>
      )}
      <section id={styles.work_demo}>
        <div id={styles.textBox} className="flexColumn">
          <h2>Some Of My Projects</h2>
          <h1>Get More Confidence</h1>
          <h1>Take A Look At My Works</h1>
          <Link href={""}>
            <button className="btn1">See Works</button>
          </Link>
        </div>
        <div id={styles.imageBox} className="flex">
          <Image
            src={idea}
            width={450}
            height={"auto"}
            id={styles.ideaImg}
            alt="Demo section Image"
          />
        </div>
      </section>
    </section>
  );
}

export default Page;
