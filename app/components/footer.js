"use client";
import React from "react";
import footerStyles from "@/app/styles/footer.module.css";
import { FaFacebook, FaGithub, FaFacebookMessenger } from "react-icons/fa";
import Link from "next/link";

export const metadata = {
  url: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css",
};

const Footer = () => {
  function HandleSubscribe(e) {
    alert("Thanks you for login");
  }

  return (
    <>
      <footer className={footerStyles.footer}>
        <div className={footerStyles.content}>
          <div className={footerStyles.top}>
            <div className={footerStyles["logo-details"]}>
              {/*<i className={footerStyles.fab fa-slack]></i>*/}
              <span className={footerStyles.logo_name}>CoderHall</span>
            </div>
            <div className={footerStyles[`media-icons`]}>
              <Link href="https://www.facebook.com/grh.mamun" target="__blank">
                <i>
                  {" "}
                  <FaFacebook />{" "}
                </i>
              </Link>
              <Link href="https://github.com/MamunDeveloper" target="__blank">
                <i>
                  {" "}
                  <FaGithub />{" "}
                </i>{" "}
              </Link>
              <Link href="https://m.me/grh.mamun" target="_blank">
                <i>
                  {" "}
                  <FaFacebookMessenger />{" "}
                </i>
              </Link>
            </div>
          </div>
          <div className={footerStyles["link-boxes"]}>
            <ul className={footerStyles.box}>
              <li className={footerStyles.link_name}>Pages</li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="about">About me</a>
              </li>
              <li>
                <a href="contact">Contact us</a>
              </li>
            </ul>
            <ul className={footerStyles.box}>
              <li className={footerStyles.link_name}>Services</li>
              <li>
                <a href="about">Custome development</a>
              </li>
              <li>
                <a href="about">Website design</a>
              </li>
              <li>
                <a href="about">E-commers app</a>
              </li>
              <li>
                <a href="about">Social media app</a>
              </li>
            </ul>
            <ul className={footerStyles.box}>
              <li className={footerStyles.link_name}>Account</li>
              <li>
                <a href="https://www.facebook.com/grh.mamun" target="__blank">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#">CoderHall</a>
              </li>
              <li>
                <a href="https://github.com/MamunDeveloper" target="__blank">
                  Github
                </a>
              </li>
            </ul>
            <ul className={footerStyles.box}>
              <li className={footerStyles.link_name}>Courses</li>
              <li>
                <a href="#">HTML & CSS</a>
              </li>
              <li>
                <a href="#">JavaScript</a>
              </li>
              <li>
                <a href="#">React.js</a>
              </li>
              <li>
                <a href="#">Next.js</a>
              </li>
            </ul>
            <ul className={`${footerStyles.box} ${footerStyles["input-box"]}`}>
              <li className={footerStyles.link_name}>Login</li>
              <li>
                <input
                  type="text"
                  placeholder="Enter your email"
                  required={true}
                />
              </li>
              <li>
                <input type="button" value="Login" onClick={HandleSubscribe} />
              </li>
            </ul>
          </div>
        </div>
        <div className={footerStyles["bottom-details"]}>
          <div className={footerStyles.bottom_text}>
            <span className={footerStyles.copyright_text}>
              {" "}
              Copyright © 2023
              <Link href="/>"> CoderHall.</Link> All rights reserved{" "}
            </span>
            <span className={footerStyles.policy_terms}>
              <Link href="/">Privacy policy</Link>
              <Link href="/">Terms & condition</Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
