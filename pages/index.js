import About from "components/About";
import Contact from "components/Contact";
import Foundations from "components/Foundations";
import Hero from "components/Hero";
import Sponsors from "components/Sponsors";
import Stats from "components/Stats";

const Home = () => {
  return (
    <>
      <section className="bg-pink-200 dark:bg-pink-400">
        <Hero />
        <Sponsors />
      </section>
      <Foundations />
      <Stats />
      <About />
      <Contact />
    </>
  );
};

export default Home;
