import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { footerCards } from "../constants/data";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

function Footer() {
  return (
    <section className=" bg-slate-400 ">
      <div className="max-container px-4 lg:p-8">
        <div className=" flex justify-between items-center">
          <h2 className=" text-3xl font-bold">Portfolio</h2>
          <div className=" flex gap-4 text-white">
            <Link
              href={"https://www.facebook.com/grh.mamun"}
              className=" group relative"
            >
              <FontAwesomeIcon icon={faFacebook} className="text-3xl" />
            </Link>
            <Link
              href={
                "https://instagram.com/techtemple_x?igshid=OGQ5ZDc2ODk2ZA=="
              }
              className="group relative"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
            </Link>
            <Link
              href={"https://x.com/MamunTweets?t=vqvFGrq7QhBJCIF3cPcDDw&s=09"}
              className="group relative"
            >
              <FontAwesomeIcon icon={faXTwitter} className="text-3xl" />
            </Link>
          </div>
        </div>

        <div className=" grid grid-cols-2 md:flex md:justify-evenly gap-4 mt-12 lg:mt-20">
          {footerCards.map((card, index) => (
            <div key={index} className=" md:w-full">
              <h2 className=" text-xl font-bold hover:underline cursor-pointer text-slate-700">
                {card.title}
              </h2>
              <ul className=" mt-2">
                {card.list.map((item) => (
                  <li
                    key={item}
                    className=" text-lg text-slate-600 font-semibold"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className=" py-20 flex justify-between">
          <h2 className="text-slate-700 font-semibold">
            Copright <FontAwesomeIcon icon={faCopyright} />{" "}
          </h2>
          <p className="text-slate-600">All Copyrights Resiverd by Adulla'h Al Mamun</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
