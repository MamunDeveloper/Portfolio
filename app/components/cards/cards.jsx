"use client";
import React, { useEffect } from "react";
import Card2 from "./card2";
import styles from "./cards.module.css";
import { cardsData } from "@/app/data/skillsData";

function Cards({ heading, subHeading, cardType = "webCards" }) {
  const filteredData = cardsData.filter((card) => {
    return card.cssClass === cardType;
  });

  useEffect(() => {
    console.log("Use effect hook running");
  }, []);

  return (
    <div className={styles.container}>
      {heading !== "" && (
        <>
          <h2 className="textCenter">{heading}</h2>
          <h3 className="textCenter">{subHeading}</h3>
        </>
      )}
      <div className={styles.webCardsBox}>
        {filteredData.map((card) => (
          <Card2 card={card} key={card.id}></Card2>
        ))}
      </div>
    </div>
  );
}

export default Cards;
