import Image from "next/image";
import { useRouter } from "next/router";

import about from "images/about.svg";
import useTranslation from "translations";

import Button from "components/Button";

const About = () => {
  const {
    about: { title, cards, more }
  } = useTranslation();

  const router = useRouter();

  return (
    <>
      <h2 id="about" className="text-center text-5xl p-12">
        {title}
      </h2>
      <section className="flex flex-wrap items-center justify-evenly py-4 mb-8">
        <Image
          src={about}
          alt="About image"
          width={450}
          height={400}
          className="mx-4"
        />
        <section>
          {cards.map((i, k) => (
            <article key={k} className="-mt-6">
              <h3 className="w-72 sm:w-96 mx-4 text-2xl sm:text-4xl">
                {i.title}
              </h3>
              <p className="w-72  sm:w-96 mx-4 text-lg sm:text-xl -mt-4">
                {i.subtitle}
              </p>
            </article>
          ))}
          <Button className="mx-4" onClick={() => router.push("/about")}>
            {more}
          </Button>
        </section>
      </section>
    </>
  );
};

export default About;
