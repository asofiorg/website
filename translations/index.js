import { useRouter } from "next/router";

import en from "./en";
import es from "./es";

const useTranslation = () => {
  const router = useRouter();

  const { locale } = router;

  return locale === "en" ? en : es;
};

export default useTranslation;
