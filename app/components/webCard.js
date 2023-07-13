import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from '@/app/styles/webCard.module.css'

function WebCard({ src, webLink, webTitle, text }) {
  return (
    <div className={styles.cards}>
      <Image src={src} alt="Website image" width={200} height={150} />
      <Link href={webLink} target="__blank" className={styles.heading}>{webTitle}</Link>
      <p>{text}</p>
    </div>
  );
}

export default WebCard;
