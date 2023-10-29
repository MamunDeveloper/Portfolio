import Image from "next/image";
import Link from "next/link";
import styles from "@/app/styles/webCard.module.css";

function Card({
  ImageSrc,
  link,
  Title,
  text,
  cssClass,
  name,
  backgroundColor,
}) {
  return (
    <div className={cssClass} style={{ backgroundColor: backgroundColor }}>
      <Image
        className="webCardsImage"
        src={ImageSrc}
        alt="Website image"
        width={200}
        height={150}
      />
      <Link href={link} target="__blank" className={styles.heading}>
        {Title}
      </Link>
      <p> {name} </p>
      <p>{text.substring(0, 30)}...</p>
      <Link href={link} target="__blank" className={styles.heading}>
        <button className="whiteBtn">Visit</button>
      </Link>
    </div>
  );
}
Card.defaultProps = {
  href: "#",
};

export default Card;
