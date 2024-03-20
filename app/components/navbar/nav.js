import React from "react";
import Link from "next/link";
import styles from "./nav.module.css";

function Nav() {
  return (
    <div
      id={styles.navBox}
      className=" bg-slate-100 shadow-lg opacity-95 dark:shadow-2xl dark:bg-slate-800 dark:text-white"
    >
      <ul className={styles.nav_ul}>
        <li className={styles.nav_li}>
          <Link
            href="/"
            className=" font-semibold transition-colors duration-300"
          >
            Home
          </Link>
        </li>
        <li className={styles.nav_li} id={styles.serviceMenu}>
          <Link
            href="services"
            className=" font-semibold transition-colors duration-300"
          >
            Services
          </Link>
        </li>
        <li className={styles.nav_li}>
          <Link
            href="contact"
            className=" font-semibold transition-colors duration-300"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
