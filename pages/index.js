import About from "components/About";
import Contact from "components/Contact";
import Foundations from "components/Foundations";
import Hero from "components/Hero";
import Stats from "components/Stats";

const Home = () => {
  return (
    <>
      <section className="bg-pink-200 dark:bg-pink-400">
        <Hero />
      </section>
      <Foundations />
      <Stats />
      <About />
      <Contact />
    </>
  );
};

export default Home;
