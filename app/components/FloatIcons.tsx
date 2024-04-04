"use client";
import Link from "next/link";
import styles from "./FloatIcons.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function FloatIcons() {
  const container = {
    hidden: { x: 150 },
    visible: {
      x: 50,
      transition: {
        delay: 0.6,
        duration: 0.5,
        delayChildren: 0.3,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { x: 70 },
    visible: {
      x: 0,
    },
  };

  const hoverAnimation = {
    whileHover: {
      backgroundColor: "rgba(220, 230, 236, 0.432)",
      width: 150,
      x: -70,
    },
  };

  const socials = [
    {
      link: "https://www.facebook.com/grh.mamun",
      icon: faFacebook,
      iconId: styles.fb_icon,
    },
    {
      link: "https://instagram.com/techtemple_x?igshid=OGQ5ZDc2ODk2ZA==",
      icon: faInstagram,
      iconId: styles.insta_icon,
    },
    {
      link: "https://x.com/MamunTweets?t=vqvFGrq7QhBJCIF3cPcDDw&s=09",
      icon: faXTwitter,
      iconId: styles.XTwitter_icon,
    },
  ];

  return (
    <motion.ul
      className={styles.icons_ul}
      variants={container}
      initial={"hidden"}
      animate="visible"
    >
      {socials.map((social) => (
        <motion.li
          key={social.iconId}
          className={styles.icons_li}
          variants={item}
          {...hoverAnimation}
        >
          <Link href={social.link} target="__blank">
            <FontAwesomeIcon
              icon={social.icon}
              className={styles.icons}
              id={social.iconId}
            ></FontAwesomeIcon>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default FloatIcons;
