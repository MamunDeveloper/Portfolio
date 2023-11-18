import React from "react";
import styles from "./myWork.module.css";
import Cards from "../components/cards/cards";

function Page() {
  return (
    <div className={styles.myWorksSection}>
      <h2>Welcome to my work gallary</h2>
      {/* Showcase section */}
      <Cards
        cardType={"webAppCards"}
        heading={"Carft Gallary"}
        subHeading={"A gallery showcasing projects from my WebApp."}
      ></Cards>

      {/* testimonialSection */}
      <Cards
        cardType={"testimonialCard"}
        heading={"Reviwes"}
        subHeading={"What my clients say"}
      ></Cards>
    </div>
  );
}

export default Page;
