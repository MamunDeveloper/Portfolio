import FloatIcons from "./components/FloatIcons";
import AboutMeSection from "./sections/AboutMeSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import Services from "./sections/Services";

export default function Home() {
  return (
    <>
      <FloatIcons />
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <Services />
      <ContactSection />
      <Footer />
    </>
  );
}
