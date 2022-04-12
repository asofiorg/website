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
          href="https://vercel.com/?utm_source=asofi&utm_campaign=oss"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/vercel.svg"
            className="h-20 w-64"
            alt="Vercel logo"
          />
        </a>
        <a
          href="https://hackclub.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/hackclub.svg"
            className="h-20 w-64"
            alt="Hackclub logo"
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
