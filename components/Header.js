import Link from "next/link";
import { useRouter } from "next/router";

import { useTheme } from "next-themes";
import useTranslation from "translations";

import Button from "components/Button";

const Header = () => {
  const router = useRouter();
  const { hashes, name, contact, locale, change } = useTranslation();

  const { asPath } = router;

  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-pink-200 dark:bg-pink-400 flex flex-wrap items-center justify-around px-2 z-10">
      <p
        onClick={() => router.push("/")}
        className="cursor-pointer font-bold text-3xl mx-2"
      >
        {name}
      </p>
      <nav className="hidden lg:flex items-center justify-evenly">
        {hashes.map(hash => (
          <Link href={hash.hash} key={hash.hash}>
            <a className="font-bold mx-3">{hash.title}</a>
          </Link>
        ))}
        <Link
          href={asPath}
          scroll={false}
          locale={locale == "es" ? "en" : "es"}
        >
          <a className="font-bold mx-3">{change}</a>
        </Link>
        <button
        className="border-none bg-transparent"
          onClick={() =>
            theme == "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          {theme == "dark" ? "☀️" : "🌙"}
        </button>
      </nav>
      <Button
        className="mx-2"
        onClick={() => {
          router.push("/#contact");
        }}
      >
        {contact}
      </Button>
    </header>
  );
};

export default Header;
