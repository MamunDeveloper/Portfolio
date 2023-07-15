import styles from "@/app/styles/skillsList.module.css";

function SkillsList({ skill, name, cssId, cssClass, value }) {
  return (
    <li>
      <label htmlFor="vol">{skill}</label>
      <input
        type="range"
        className={`${styles}.${cssClass}`}
        id={`${styles}.${cssId}`}
        value={value}
        name={name}
        min="0"
        max="100"
        readOnly={true}
      />
      <label htmlFor="vol">{value}%</label>
    </li>
  );
}

export default SkillsList;
