import React from "react";
import styles from "@/app/services/services.module.css";
import Image from "next/image";
import ServiceCard from "../components/serviceCard";
import ServicePageImage from "@/app/images/service page image.png";
import branding from "@/app/images/branding.jpg";
import allDevice from "@/app/images/all devices.png";
import Ecommerse from "@/app/images/E-commerse.png";
import Link from "next/link";

function Page() {
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
          <button className="whiteBtn" id={styles.introBtn}>
            <Link href={'contact'} >Let's talk</Link>
          </button>
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

      <div id={styles.servicesContainer}>
        <h1 id={styles.ContainerHeading}>Services I offer</h1>
        <ServiceCard
          heading={"Custom Website Development"}
          text={
            "From concept to reality, we craft custom websites tailored to your specific needs and business goals. Our development process is collaborative, ensuring that your vision is brought to life while incorporating the latest design trends and technical advancements."
          }
          src={ServicePageImage}
        />
        <ServiceCard
          heading={"Responsive Design"}
          text={
            " With mobile internet usage on the rise, we prioritize responsive web design, guaranteeing a seamless and engaging user experience across all devices, from desktops to smartphones and tablets."
          }
          src={allDevice}
          flexDirection={'rowReverse'}
        />
        <ServiceCard
          heading={"E-Commerce Solutions"}
          text={
            "Looking to expand your online business? Our e-commerce solutions are designed to maximize conversions and enhance your customers' shopping journey, with secure payment gateways and intuitive product catalogs."
          }
          src={Ecommerse}
        />
      </div>
    </section>
  );
}

export default Page;
