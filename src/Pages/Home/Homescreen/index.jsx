import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Mission from "../Mission";
import Navbar from "../Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
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
