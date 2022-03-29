import useTranslation from "translations";

const Stats = () => {
  const {
    stats: { title, subtitle, cards },
  } = useTranslation();

  return (
    <section
      id="stats"
      className="flex flex-col items-center justify-center bg-yellow-100 p-12"
    >
      <h2 className="text-5xl text-center">{title}</h2>
      <p className="text-2xl -mt-4 text-center">{subtitle}</p>
      <section className="flex flex-wrap items-center justify-around">
        {cards.map((i, k) => (
          <article
            key={k}
            className="rounded-md p-4 w-72 h-64 bg-yellow-200 m-2"
          >
            <h3 className="text-6xl">{i.header}</h3>
            <p className="text-xl -mt-12">{i.description}</p>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Stats;
