import en from "./en";
import es from "./es";

import { useRouter } from "next/router";

const useTranslation = () => {
  const router = useRouter();

  const { locale } = router;

  return locale === "en" ? en : es;
};

export default useTranslation;
