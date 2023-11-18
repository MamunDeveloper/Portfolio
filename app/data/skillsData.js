import profilePic from "@/app/images/Portfolio profile pic.png";
import watchFlixImg from "@/app/images/WatchFlix Home Page.png";
import portfolioImg from "@/app/images/portfolio website ss.png";
import clientPic1 from "@/app/images/client1.jpg";
import ToDoAppImag from "@/app/images/ToDo App thumbnail.png";
import noteAppImg from "@/app/images/note app.png";
import SonicScript from "@/app/images/SonicScript.png";

let skillsData = [
  { name: "HTML", master: 98 },
  { name: "CSS 3", master: 95 },
  { name: "Javascript", master: 85 },
  { name: "React", master: 96 },
];

let cardsData = [
  {
    id: 1,
    isTestimonial: false,
    cssClass: "webAppCards",
    clientName: "",
    link: "https://speech-to-text-reactapp.vercel.app/",
    ImageSrc: SonicScript,
    text: "Revolutionize the way you communicate and record ideas with our speech-to-text converter. Your words, instantly transcribed.",
    Title: "Speech To Text",
  },
  {
    id: 2,
    isTestimonial: false,
    cssClass: "webAppCards",
    clientName: "",
    link: "https://note-app-theta-green.vercel.app/",
    ImageSrc: noteAppImg,
    text: "Capture thoughts effortlessly with our note app, keeping your ideas organized and easily accessible.",
    Title: "Notes",
  },
  {
    id: 3,
    isTestimonial: false,
    cssClass: "webAppCards",
    clientName: "",
    link: "https://watch-flix-new.vercel.app/",
    ImageSrc: watchFlixImg,
    Title: "WatchFlix",
    text: "Movies, shows and series website",
  },
  {
    id: 4,
    isTestimonial: false,
    cssClass: "webAppCards",
    clientName: "",
    link: "https://to-do-app-five-eta.vercel.app/",
    ImageSrc: ToDoAppImag,
    Title: "ToDo App",
    text: "Write down your tasks, complete one by one. Everyday go forward to success!",
  },
  {
    id: 5,
    isTestimonial: true,
    cssClass: "testimonialCard",
    clientName: "Jack paul",
    email: "JackPaul@gmail.com",
    number: "(XXX) XXX-XXXX",
    ImageSrc: clientPic1,
    project: "E-commerse website",
    text: "Absolutely thrilled with my experience! This e-commerce website exceeded my expectations. The user-friendly interface made shopping a breeze, and the swift delivery was the icing on the cake. The product quality was outstanding. Can't wait for my next purchase!",
  },
  {
    id: 6,
    isTestimonial: false,
    cssClass: "webCards",
    clientName: "",
    link: "https://speech-to-text-reactapp.vercel.app/",
    ImageSrc: SonicScript,
    text: "Revolutionize the way you communicate and record ideas with our speech-to-text converter. Your words, instantly transcribed.",
    Title: "Web app",
  },
];

export { skillsData, cardsData };
