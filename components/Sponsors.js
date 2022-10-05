import useTranslation from "translations";

const Sponsors = () => {
  const {
    sponsors: { title }
  } = useTranslation();

  return (
    <section>
      <h2 className="text-center text-4xl pb-2">{title}</h2>
      <section className="flex flex-wrap items-center justify-evenly py-4 mb-8">
        <a
          href="https://www.unwomen.org/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/unw.png"
            className="h-20 w-64"
            alt="UN Women logo"
          />
        </a>
        <a
          href="https://forum.generationequality.org/multi-stakeholder-leadership-group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/gefun.png"
            className="h-20 w-64"
            alt="UN GEF logo"
          />
        </a>
        <a href="https://girlup.org/" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/girlup.svg"
            className="h-64 w-32"
            alt="GirlUp logo"
          />
        </a>
        <a
          href="https://unfoundation.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/un.svg"
            className="h-20 w-64"
            alt="United Nations Logo"
          />
        </a>
      </section>
    </section>
  );
};

export default Sponsors;
