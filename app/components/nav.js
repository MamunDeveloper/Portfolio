import React from "react";
import Link from "next/link";
import styles from "@/app/styles/nav.module.css";

function Nav() {
  return (
    <div className={styles.navBox}>
      <ul className={styles.nav_ul}>
        <li className={styles.nav_li}>
          {" "}
          <Link href="/">Home</Link>{" "}
        </li>
        <li className={styles.nav_li}>
          {" "}
          <Link href="/">Services</Link>{" "}
        </li>
        <li className={styles.nav_li}>
          {" "}
          <Link href="/">Contact</Link>{" "}
        </li>
      </ul>
    </div>
  );
}

export default Nav;
