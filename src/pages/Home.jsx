import Header from "../components/Header";
import "./Home.css";
import Hero from "../components/Hero.jsx";
import Mission from "../components/Mission.jsx";
import Impact from "../components/Impact.jsx";
import CTA from "../components/CTA.jsx";
import EventsSection from "../components/EventsSection.jsx";
import Footer from "../components/Footer.jsx";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Mission />
      <EventsSection />
      <Impact />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePage;
