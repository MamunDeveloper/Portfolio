import Image from "next/image";
import Link from "next/link";
import styles from '@/app/styles/webCard.module.css'

function Card({ ImageSrc, link, Title, text, cssClass, name}) {

  return (
    <div className={cssClass}>
      <Image src={ImageSrc} alt="Website image" width={200} height={150} />
      <Link href={link} target="__blank" className={"heading"}>{Title}</Link>
      <p> {name} </p>
      <p>{text}</p>
    </div>
  );
}
Card.defaultProps = {
  href: "#", 
}

export default Card;
