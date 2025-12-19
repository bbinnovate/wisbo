
import Navbar from "./components/Navbar";
import HeroSection from "./components/LandingPage/HeroSection";
import CardsSection from "./components/LandingPage/CardsSection";
import ThirdSection from "./components/LandingPage/ThirdSection";
import FourthSection from "./components/LandingPage/FourthSection";
import Footer from "./components/Footer";
import DiscountBar from "./components/LandingPage/DiscountBar";





export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <DiscountBar />
      <HeroSection/>
      {/* <BelowHeroText/> */}
      <CardsSection/>
      <ThirdSection/>
      <FourthSection/>
      {/* <Footer/> */}
    </div>
  );
}
 