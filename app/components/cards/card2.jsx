import React from "react";
import styles from "./cards.module.css";
import Link from "next/link";
import Image from "next/image";

function Card2({ card = [] }) {
  let cssClass = card.cssClass;

  return (
    <>
      {card.isTestimonial ? (
        <div className={`${styles[cssClass]}`}>
          <div className={styles.image_box}>
            <Image
              className={styles.testimonial_img}
              src={card.ImageSrc}
              alt="Website image"
              width={200}
              height={150}
            />
          </div>

          <div className={styles.info_box}>
            <p>{card.project}</p>
            <p> {card.clientName} </p>
            <p>{card.text}</p>

            <p>
              {card.email}
              <br /> {card.number}
            </p>
          </div>
        </div>
      ) : (
        <div className={`${styles[cssClass]}`}>
          <Image
            className={styles.webCardsImage}
            src={card.ImageSrc}
            alt="Website image"
            width={200}
            height={150}
          />

          <Link href={card.link} target="__blank" className={styles.heading}>
            {card.Title}
          </Link>
          <p> {card.clientName} </p>
          <p>
            {card.text.substring(0, 50)} {card.text.length > 50 ? "..." : ""}
          </p>

          <Link href={card.link} target="__blank" className={styles.heading}>
            <button className="whiteBtn">Visit</button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Card2;
