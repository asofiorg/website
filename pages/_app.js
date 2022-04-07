import { useRouter } from "next/router";

import splitbee from "@splitbee/web";
import { defaultSeo_en, defaultSeo_es } from "SEO.config";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

import Layout from "components/Layout";

import "styles/global.css";

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    splitbee.init();
  }, []);

  return (
    <ThemeProvider attribute="class">
      {router.locale === "en" ? (
        <DefaultSeo {...defaultSeo_en} />
      ) : (
        <DefaultSeo {...defaultSeo_es} />
      )}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
