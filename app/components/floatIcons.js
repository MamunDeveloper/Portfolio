import Link from "next/link";
import styles from "@/app/styles/floatIcons.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FaFacebook, FaInstagram } from "react-icons/fa";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function FloatIcons() {
  return (
    <ul className={styles.icons_ul}>
      <li className={styles.icons_li}>
        <Link href={"https://www.facebook.com/grh.mamun"} target="__blank">
          <FontAwesomeIcon
            icon={faFacebook}
            className={`${styles.icons} fb_icon`}
          ></FontAwesomeIcon>
        </Link>
      </li>

      <li className={styles.icons_li}>
        <Link
          href={"https://instagram.com/techtemple_x?igshid=OGQ5ZDc2ODk2ZA=="}
          target="__blank"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className={`${styles.icons} insta_icon`}
          ></FontAwesomeIcon>
        </Link>
      </li>

      <li className={styles.icons_li}>
        <Link
          href={"https://x.com/MamunTweets?t=vqvFGrq7QhBJCIF3cPcDDw&s=09"}
          target="__blank"
        >
          <FontAwesomeIcon
            icon={faXTwitter}
            className={`${styles.icons} XTwitter_icon`}
          ></FontAwesomeIcon>
        </Link>
      </li>
    </ul>
  );
}

export default FloatIcons;
