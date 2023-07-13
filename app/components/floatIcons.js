import Link from "next/link";
import styles from "@/app/styles/floatIcons.module.css";
import { FaFacebook, FaFacebookMessenger, FaGithub } from "react-icons/fa";

function FloatIcons() {
  return (
    <ul className={styles.icons_ul}>
      <li className={styles.icons_li}>
        <Link href={"https://www.facebook.com/grh.mamun"} target="__blank">
          <FaFacebook />
        </Link>
      </li>
      <li className={styles.icons_li}>
        <Link href={"https://github.com/MamunDeveloper"} target="__blank">
          <FaGithub />
        </Link>
      </li>
      <li className={styles.icons_li}>
        <Link href={"https://m.me/grh.mamun"} target="__blank" >
          <FaFacebookMessenger />
        </Link>
      </li>
    </ul>
  );
}

export default FloatIcons;
