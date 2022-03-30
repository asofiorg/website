const Footer = () => {
  return (
    <footer className="flex items-center justify-center">
      <p className="font-mono font-bold text-lg">{`©️ ${new Date().getFullYear()} Copyright ASOFI.`}</p>
    </footer>
  );
};

export default Footer;
