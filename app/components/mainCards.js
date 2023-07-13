import React from "react";
import styles from '@/app/styles/mainSectionsCard.module.css'

function MainCards() {
  return (
    <div className={styles.grid}>
      <a
        href="about"
        className={styles.card}
        rel="noopener noreferrer"
      >
        <h2>
          About Me<span>-&gt;</span>
        </h2>
        <p>Small introduction about me.</p>
      </a>

      <a
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          My Works <span>-&gt;</span>
        </h2>
        <p>See all of my projects to understand better about my skill's.</p>
      </a>

      <a
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Services <span>-&gt;</span>
        </h2>
        <p>According to my skill's , what I offer to serve.</p>
      </a>

      <a
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Blogs <span>-&gt;</span>
        </h2>
        <p>
          Take a look at my blog page and start learning with me.
        </p>
      </a>
    </div>
  );
}

export default MainCards;
