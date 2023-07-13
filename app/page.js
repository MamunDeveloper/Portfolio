import Image from "next/image";
import styles from "@/app/page.module.css";
import Nav from "./components/nav";
import MainCards from "./components/mainCards";
import HomeImage from "@/app/images/pgb-micro.svg";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <p>
          I am __ <br />
          <span className={styles.name} > Abdullah Al Mamun </span> <br /> Web developer and designer{" "}
        </p>
        <Image
          className={"pictures"}
          id={styles.profilePic}
          src={HomeImage}
          alt="Next.js Logo"
          width={500}
          height={250}
          priority
        />
      </div>

      <MainCards></MainCards>
    </main>
  );
}
