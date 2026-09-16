import Hero from "../components/Hero";
import Services from "../components/Services";
import Goals from "../components/Goals";
import Testimonials from "../components/Testimonials";
import AboutSection from "../components/AboutSection";
import Stats from "../components/Stats";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <AboutSection/>
      <Goals />
      <Stats/>
      <Testimonials />
    </>
  );
};

export default Home;
