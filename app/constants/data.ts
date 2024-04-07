import customeService from "@/app/assets/images/custom service.png";
import allDevice from "@/app/assets/images/responsive design.png";
import Ecommerse from "@/app/assets/images/E-commerse solution.png";
import nikeClone from "@/app/assets/images/nike-clone.jpg";
import campfire from "@/app/assets/images/campfire.jpg";
import cresturent from "@/app/assets/images/cresturent.jpg";
import StepAhead from "@/app/assets/images/StepAhead.jpg";
import WeatherWiz from "@/app/assets/images/WeatherWiz.jpg";
import notes from "@/app/assets/images/noets.jpg";
import SonicScript from "@/app/assets/images/SonicScript.jpg";

import profileIcon from "@/app/assets/icons/profile.png";
import experience from "@/app/assets/icons/experience.png";
import skills from "@/app/assets/icons/skill.png";
import mission from "@/app/assets/icons/mission.png";
import goal from "@/app/assets/icons/goal.png";
import skillsSet from "@/app/assets/images/skill's set.png";

const socials = [
  {
    media: "Facebook",
    link: "https://www.facebook.com/grh.mamun",
  },
  {
    media: "Instagram",
    link: "https://instagram.com/techtemple_x?igshid=OGQ5ZDc2ODk2ZA==",
  },
  {
    media: "XTwitter",
    link: "https://x.com/MamunTweets?t=vqvFGrq7QhBJCIF3cPcDDw&s=09",
  },
];

const pages = [
  {
    page: "About Me",
    pageLink: "#about-me",
    description: "Get to know me and my work better.",
  },
  {
    page: "My Works",
    pageLink: "#projects",
    description:
      "See all of my projects to understand better about my skill's.",
  },
  {
    page: "Services",
    pageLink: "#services",
    description: "According to my skill's , what I offer to serve.",
  },
  {
    page: "Contact",
    pageLink: "#contact",
    description: "Let's talk about your desired project.",
  },
];

const services = [
  {
    title: "Custom Website Development",
    description:
      "From concept to reality, we craft custom websites tailored to your specific needs and business goals. Our development process is collaborative, ensuring that your vision is brought to life while incorporating the latest design trends and technical advancements.",
    img: customeService,
  },
  {
    title: "Responsive Design",
    description:
      "With mobile internet usage on the rise, we prioritize responsive web design, guaranteeing a seamless and engaging user experience across all devices, from desktops to smartphones and tablets.",
    img: allDevice,
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Looking to expand your online business? Our e-commerce solutions are designed to maximize conversions and enhance your customers' shopping journey, with secure payment gateways and intuitive product catalogs.",
    img: Ecommerse,
  },
];

const projects = [
  {
    date: "25/03/2024",
    title: "Nike Clone",
    description:
      "I cloned this project from YouTube and updated it with animations like hover, click, and PopUp using the 'framer motion' library. Also, added a cool feature in the customer review section. Check it out!",
    projectType: "Ecommerce",
    imgage: nikeClone,
    link: "https://nike-clone-aoubq4eh0-md0465981gmailcoms-projects.vercel.app/",
  },
  {
    date: "10/03/2024",
    title: "CampFire",
    description:
      "It's a traveling app's website. Although it's a clone project, I've implemented numerous updates such as animations. Take a good look at it; check out the link below.",
    projectType: "Travel",
    imgage: campfire,
    link: "https://camp-fire-opal.vercel.app/",
  },
  {
    date: "21/01/2024",
    title: "Cresturent",
    description:
      "This is a restaurant website with multiple pages and cool features. It was a huge project that took a long time to build, but I learned a lot along the way.",
    projectType: "Restaurant",
    imgage: cresturent,
    link: "https://cresturent.vercel.app/",
  },
  {
    date: "14/01/2024",
    title: "Notes",
    description:
      "A note-taking web app to help you manage your notes. I am very excited to hear any update requests from you!",
    projectType: "Note",
    imgage: notes,
    link: "https://note-app-theta-green.vercel.app/",
  },
  {
    date: "02/12/2023",
    title: "StepAhead",
    description:
      "It's a to-do list app for daily tasks. It helps track your work and manage them. Please let me know if you want any updates; I would be pleased if it helps you!",
    projectType: "To-Do",
    imgage: StepAhead,
    link: "https://to-do-app-five-eta.vercel.app/",
  },
  {
    date: "03/11/2023",
    title: "SonicScript",
    description:
      "Text-to-speech converter app. Easily convert your text and use it anywhere with simplicity.",
    projectType: "Text-To-Speech",
    imgage: SonicScript,
    link: "https://speech-to-text-reactapp.vercel.app/",
  },
  {
    date: "16/10/2023",
    title: "WeatherWiz",
    description:
      "A simple weather app that uses an API to provide real-time weather updates.",
    projectType: "Weather",
    imgage: WeatherWiz,
    link: "https://weather-app-theta-topaz-71.vercel.app/",
  },
];

const about = [
  {
    title: "Introduction",
    description:
      "Hi there! I'm Mamun, a passionate web developer specializing in HTML5, CSS3, and JavaScript. With expertise in React.js, Next.js, Tailwind CSS, and Framer Motion, I thrive on creating dynamic and interactive web experiences.",
    icon: profileIcon,
  },
  {
    title: "Experience",
    description:
      "I've had the pleasure of working on a variety of projects, from crafting sleek restaurant websites to designing engaging travel app interfaces. Additionally, I've developed functional tools like to-do lists and calculators, along with intuitive weather applications. Each project has honed my skills and deepened my understanding of web development.",
    icon: experience,
  },
  {
    title: "Skill Set",
    description: "",
    image: skillsSet,
    icon: skills,
  },
  {
    title: "Mission",
    description:
      "My mission is to create impactful digital experiences that resonate with users and drive results. By combining creativity with technical expertise, I aim to empower businesses and individuals to achieve their goals online. I believe in continuous learning and innovation to stay at the forefront of web development and deliver solutions that inspire and delight.",
    icon: mission,
  },
  {
    title: "Future Goals",
    description:
      "Looking ahead, I'm excited to continue pushing the boundaries of web development and exploring emerging technologies. I aspire to collaborate on innovative projects that challenge and inspire me, ultimately making a positive impact on the digital landscape. Whether it's creating immersive web applications or contributing to open-source projects, I'm committed to growth and excellence in my field.",
    icon: goal,
  },
];

const footerCards = [
  {
    title: "Sections",
    list: ["About Me", "My Works", "Services", "Contact"],
  },
  {
    title: "Services",
    list: ["Custome development", "Responsive website", "E-commers app"],
  },
  {
    title: "Skills",
    list: [
      "HTML# & CSS5",
      "Tailwind CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "Framer Motion",
    ],
  },
  {
    title: "Account",
    list: ["Facebook", "Instagram", "XTwitter"],
  },
];

export { socials, pages, services, projects, about, footerCards };
