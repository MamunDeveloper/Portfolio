"use client";
import React, { useEffect } from "react";

import styles from "@/app/contact/contact.module.css";
import ContactForm from "../components/contactForm";
import FAQSection from "../components/faqSection";
import {
  FaArrowAltCircleDown,
  FaArrowDown,
  FaBeer,
  FaPhone,
} from "react-icons/fa";

function page() {

  return (
    <section id={styles.contactSection}>
      <h1 className="heading">Contact Us</h1>
      <div className="sepDiv flexBox">
        <div className="cards" id={styles.mapCard}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7237.582020479406!2d91.86712863953116!3d24.905109342760113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750552700bfdb4f%3A0x369ba0b482046794!2sAmbarkhana%2C%20Sylhet!5e0!3m2!1sen!2sbd!4v1689789418761!5m2!1sen!2sbd"
            width={250}
            height={200}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="cards" id={styles.meetCard}>
          <h3>Meet us</h3>
          <br />
          <br />
          <ul>
            <li>
              {" "}
              <FaPhone /> +880 1888 465981
            </li>
            <li>mamunahmed70707@gmail.com</li>
            <li>Sylhet sodor, amborkhana road , electric supply</li>
          </ul>
        </div>
        <div className="cards" id={styles.pitchCard}>
          <h3>Pitch us</h3>
          <br />
          <p>
            hello, <br /> <br /> My name is{" "}
            <input
              className={styles.PitchInps}
              type="text"
              name="userName"
              id=""
              placeholder="Your name "
            />
            and my e-mail address is{" "}
            <input
              className={styles.PitchInps}
              type="text"
              name="userEmail"
              id=""
              placeholder="Your e-mail address "
            />
            and I would like to discuss about{" "}
            <input
              className={styles.PitchInps}
              type="text"
              name="userProject"
              id=""
              placeholder="This project "
            />
          </p>
          <button>Send</button>
        </div>
      </div>
      <h3 className="justifyText textCenter subHeading">
        We'd love to hear <span> from you</span>
      </h3>
      <br />
      <ContactForm />
      <div id="FaqBox">
        <FAQSection/>
      </div>
    </section>
  );
}

export default page;
