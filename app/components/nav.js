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
        <li className={styles.nav_li} id={styles.serviceMenu}>
          {" "}
          <Link href="services">Services</Link>{" "}
        </li>
        <li className={styles.nav_li}>
          {" "}
          <Link href="contact">Contact</Link>{" "}
        </li>
      </ul>
    </div>
  );
}

export default Nav;
