import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Mission from "../Mission";

export default function Home() {
  return (
    <>
      <HeroSection />      
      <AboutMe />
      <Mission />
      <MyPortfolio />
      <MySkills />  
      <ContactMe />
      <Footer />
    </>
  );
}
