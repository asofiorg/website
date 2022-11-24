import { useRouter } from "next/router";

import splitbee from "@splitbee/web";
import { defaultSeo_en, defaultSeo_es } from "SEO.config";
import { DefaultSeo } from "next-seo";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect } from "react";
import "react-notion/src/styles.css";

import Layout from "components/Layout";

import "styles/global.css";

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    splitbee.init();
  }, []);

  return (
    <>
      {router.locale === "en" ? (
        <DefaultSeo {...defaultSeo_en} />
      ) : (
        <DefaultSeo {...defaultSeo_es} />
      )}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
