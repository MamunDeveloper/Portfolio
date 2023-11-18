import React from "react";
import styles from "./skills.module.css";

function Skills({ data = [], heading, subHeading }) {
  let skillsData = data;
  return (
    <div className={`${styles.skillsBox} sepDiv`}>
      {heading !== "" && (
        <>
          <h2>{heading}</h2>
          <h3>{subHeading}</h3>
        </>
      )}
      {skillsData.map((item) => (
        <li>
          <label htmlFor="vol">{item.name}</label>
          <input
            type="range"
            value={item.master}
            name={item.name}
            min="0"
            max="100"
            readOnly={true}
          />
          <label htmlFor="vol">{item.master}%</label>
        </li>
      ))}
    </div>
  );
}

export default Skills;
