import Image from "next/image";

import hero from "images/hero.svg";
import useTranslation from "translations";

const Hero = () => {
  const {
    hero: { title, subtitle }
  } = useTranslation();

  return (
    <section className="py-4 px-16 w-full max-w-4xl m-auto flex flex-col items-center justify-center">
      <h1 className="m-8 text-center text-6xl m:text-7xl lg:text-8xl">
        {title}
      </h1>
      <h2 className="m-0 sm:px-12 md:px-24 text-center text-xl lg:text-2-xl">
        {subtitle}
      </h2>
      <Image src={hero} width={600} height={500} alt="hero image" />
    </section>
  );
};

export default Hero;
