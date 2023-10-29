import React from "react";
import styles from "@/app/about/about.module.css";
// import global from '@/app/page.module.css'
import Image from "next/image";
import Link from "next/link";
import Card from "../components/Card";
import SkillsList from "../components/skillsList";

// Images
import profilePic from "@/app/images/Portfolio profile pic.png";
import watchFlixImg from "@/app/images/WatchFlix Home Page.png";
import portfolioImg from "@/app/images/portfolio website ss.png";
import clientPic1 from "@/app/images/client1.jpg";
import ToDoAppImag from "@/app/images/ToDo App thumbnail.png";

function About() {
  return (
    <section id={styles.aboutSection} className="justifyText">
      {/* Intro section */}
      <div id={styles.introBox} className={`sepDiv`}>
        <h1>From Vision to Reality</h1>
        <h3>Transforming Ideas into Stunning Websites.</h3>
        <div className={styles.mainIntro}>
          <p className={`${styles.introduction} pera`}>
            Hi, my name Abdullah Al Mamun. A visionary web developer who
            seamlessly blends artistry with technology. With a keen eye for
            design and an unrivaled passion for crafting exceptional user
            experiences, I takes digital ideas and transforms them into stunning
            realities. Armed with a deep understanding of cutting-edge
            technologies and a knack for problem-solving, I thrives on pushing
            boundaries to deliver innovative and impactful websites. Whether
            it's an e-commerce platform, a sleek portfolio site, or a dynamic
            web application, my expertise ensures that every project showcases a
            perfect blend of functionality, aesthetics, and usability. Join me
            on an exhilarating journey through the digital realm and witness the
            power of code brought to life.
          </p>
          <Image
            className="pictures profilePic"
            src={profilePic}
            width={380}
            height={250}
            alt="Intro Image"
          />
        </div>
      </div>
      <div id={styles.skillsIntro} className={`sepDiv`}>
        <p className="pera">
          {" "}
          <em>
            {" "}
            With over 6 months of hands-on experience in web development, I have
            honed my skills in HTML, CSS, JavaScript, React.js, and Next.js.
            Through various projects and real-world challenges, I have gained a
            deep understanding of front-end development and a passion for
            crafting engaging and user-friendly websites.{" "}
          </em>{" "}
          <br /> <br />
          I have successfully implemented responsive layouts, optimized website
          performance, and ensured seamless user experiences across different
          devices and browsers. <br /> <br />
          In addition, I have actively contributed to the React.js and Next.js
          communities by sharing my knowledge through blog posts and
          participating in online forums.{" "}
          <Link className={styles.blogLink} href={"#"}>
            {" "}
            Check out my blogs
          </Link>{" "}
          These experiences have not only expanded my understanding of web
          development but have also allowed me to stay up-to-date with the
          latest trends and best practices in the industry. <br /> <br />
          I am driven by the continuous learning and growth opportunities that
          web development offers. With a focus on delivering clean code,
          intuitive designs, and exceptional user experiences, I am committed to
          creating digital solutions that leave a lasting impact. <br /> <br />
          If you have an exciting project or opportunity where I can apply my
          skills and contribute to your team's success, I would love to connect
          and discuss further. <br />
        </p>
      </div>
      {/* Skills section */}
      <div id={`${styles.skillsBox}`} className={`sepDiv`}>
        <h2 className="textCenter">My skill's</h2>
        <h3 className="textCenter">My expertise in technologies</h3>
        <ul>
          <SkillsList skill={"HTML & CSS"} value={98} />
          <SkillsList skill={"JavaScript"} value={97} />
          <SkillsList skill={"React.js"} value={95} />
          <SkillsList skill={"Next.js"} value={95} />
        </ul>
      </div>

      {/* Showcase section */}
      <div id={styles.showcase} className={`sepDiv`}>
        <h2 className="textCenter">Webfolio</h2>
        <h3 className="textCenter">A Gallery of Websites Crafted by Me</h3>
        <div id={styles.webCardsBox}>
          <Card
            link={"https://portfolio-chi-opal-60.vercel.app/"}
            Title={"PortFolio"}
            text={"My Portfolio website"}
            ImageSrc={portfolioImg}
            cssClass={"webCards"}
          />
          <Card
            link={"https://watch-flix-new.vercel.app/"}
            Title={"WatchFlix"}
            text={"Movies, shows and series website"}
            ImageSrc={watchFlixImg}
            cssClass={"webCards"}
            // backgroundColor={"#80abd5"}
          />
          <Card
            link={"https://to-do-app-five-eta.vercel.app/"}
            Title={"ToDo App"}
            text={
              "Write down your tasks, complete one by one. Everyday go forward to success!"
            }
            ImageSrc={ToDoAppImag}
            cssClass={"webCards"}
          />
        </div>
      </div>
      {/* My strategy section */}
      <div className="textCenter sepDiv">
        <h2>How I Approach a project</h2>
        <h3>My methodology</h3>
        <p className="justifyText pera">
          <b className="points">User-Centric Focus : </b>In every web
          development project, I place a strong emphasis on a user-centric
          focus, meticulously designing and optimizing the user experience to
          ensure seamless navigation and maximum engagement.
          <br /> <br />
          <b className="points"> Strategic Solutions : </b>With a strategic
          solutions-oriented approach, I analyze requirements, leverage
          cutting-edge technologies, and implement robust frameworks to deliver
          scalable, tailored web solutions that align with clients' goals.{" "}
          <br />
          <br />
          <b className="points">Design-Driven Development : </b>I adhere to the
          design principles to develop visually stunning websites with intuitive
          interfaces and engaging interactions, ensuring an enjoyable user
          experience.
          <br />
          <br />
          <b className="points">Agile Innovations : </b>Embracing agility, I
          foster a culture of innovation by continuously adapting, iterating,
          and implementing cutting-edge techniques and technologies to deliver
          dynamic and forward-thinking web solutions.
          <br />
          <br />
          <b className="points">Code and Creativity : </b>Harmonizing technical
          prowess with artistic vision, I fuse elegant code and captivating
          designs to create exceptional digital experiences.
          <br />
          <br />
          <b className="points">Client-Centered Craftsmanship : </b>I prioritize
          the client's vision and goals, employing meticulous attention to
          detail and expert craftsmanship to deliver tailored web solutions that
          exceed expectations.
          <br />
          <br />
          <b className="points">Efficiency and Elegance : </b>Merging
          streamlined workflows and refined aesthetics for web solutions that
          optimize user experience.
          <br />
          <br />
          <b className="points">From Concept to Reality : </b>I bring ideas to
          life, seamlessly translating visionary concepts into fully functional
          web solutions through careful planning and skilled execution.
          <br /> <br />
        </p>
      </div>

      {/* testimonialSection */}
      <div className="sepDiv textCenter" id="testimonialSection">
        <h2>My clients review</h2>
        <h3>What they say</h3>
        <div className="flexBox">
          <Card
            link={""}
            name={"Jack Poul"}
            text={
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nam voluptatibus iusto consectetur quis quae non enim reprehenderit a minus excepturi cumque vero, cum explicabo?"
            }
            ImageSrc={clientPic1}
            cssClass={"testimonialCard"}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
