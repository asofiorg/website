const Footer = () => {
  return (
    <footer className="flex items-center justify-around flex-wrap p-2">
      <p className="font-mono font-bold text-lg">{`©️ ${new Date().getFullYear()} Copyright ASOFI.`}</p>
      <article className="flex">
        <a
          href="https://vercel.com/?utm_source=asofi&utm_campaign=oss"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-2"
        >
          <img src="/vercel.svg" alt="Powered by Vercel" />
        </a>
        <a
          href="https://splitbee.io/?ref=asofi"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2"
        >
          <img src="/splitbee.svg" alt="Insights by Splitbee" />
        </a>
      </article>
    </footer>
  );
};

export default Footer;
