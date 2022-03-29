import useTranslation from "translations";

const Foundations = () => {
  const { foundations } = useTranslation();

  return (
    <section
      id="foundations"
      className="flex flex-wrap items-center justify-evenly m-8"
    >
      {foundations.map((i, k) => (
        <article
          className="flex items-center justify-around flex-col max-w-xs max-h-80 m-2"
          key={k}
        >
          <p
            className={`text-3xl font-bold py-6 px-8 rounded-md font-mono w-min ${
              k == 0 ? "bg-pink-300" : k == 1 ? "bg-yellow-400" : "bg-navy-400"
            }`}
          >
            {k + 1}
          </p>
          <h2 className="-mt-3 text-center text-2xl font-bold">{i.title}</h2>
          <p className="-mt-3 text-center text-lg">{i.subtitle}</p>
        </article>
      ))}
    </section>
  );
};

export default Foundations;
