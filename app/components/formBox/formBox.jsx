"use client";
import React from "react";
import styles from "./formBox.module.css";
import { Mulish } from "next/font/google";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapLocation,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faFacebookMessenger,
  faInstagram,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

function FormBox() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = async (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className={styles.formBox}>
      <form className={styles.contact_form} onSubmit={handleSubmit}>
        <h2>Contact us</h2>
        <div className={styles.input_field}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your name"
            className={`${mulish.className} ${styles.formInputs}`}
            value={user.username}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
            className={` ${styles.formInputs}`}
            value={user.email}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Enter your phone"
            className={`${mulish.className} ${styles.formInputs}`}
            value={user.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            id="message"
            rows={5}
            placeholder="Enter your Message"
            className={`${mulish.className} ${styles.formInputs}`}
            value={user.message}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className={`${mulish.className} ${styles.submit_button}`}
          >
            Send
          </button>
        </div>
      </form>

      <div className={styles.detailBox}>
        <div className={styles.location_box}>
          <FontAwesomeIcon
            icon={faMapLocation}
            className={styles.detail_box_icons}
          ></FontAwesomeIcon>
          Sylhet shodor, Bangladesh
        </div>
        <div className={styles.mail_box}>
          <FontAwesomeIcon
            icon={faEnvelope}
            className={styles.detail_box_icons}
          ></FontAwesomeIcon>
          mamunahmed70707@gmail.com
        </div>
        <div className={styles.phone_box}>
          <FontAwesomeIcon
            icon={faPhoneVolume}
            className={styles.detail_box_icons}
          ></FontAwesomeIcon>
          01888465981
        </div>

        <div className={styles.social_box}>
          <Link href={"https://www.facebook.com/grh.mamun"} target="blank">
            <FontAwesomeIcon
              icon={faFacebook}
              className={styles.detail_box_icons}
            ></FontAwesomeIcon>
          </Link>

          <Link
            href={"https://call.whatsapp.com/voice/6Izk3kfXY5gjqaQuyET7Xv"}
            target="blank"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              className={styles.detail_box_icons}
            ></FontAwesomeIcon>
          </Link>
          <Link
            href={"https://instagram.com/techtemple_x?igshid=OGQ5ZDc2ODk2ZA=="}
            target="blank"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className={styles.detail_box_icons}
            ></FontAwesomeIcon>
          </Link>
          <Link
            href={"https://x.com/MamunTweets?t=vqvFGrq7QhBJCIF3cPcDDw&s=09"}
            target="blank"
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              className={styles.detail_box_icons}
            ></FontAwesomeIcon>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FormBox;
