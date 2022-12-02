import splitbee from "@splitbee/web";
import { defaultSeo_en } from "SEO.config";
import { DefaultSeo } from "next-seo";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect } from "react";
import "react-notion/src/styles.css";

import Layout from "components/Layout";

import "styles/global.css";

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    splitbee.init();
  }, []);

  return (
    <>
      <DefaultSeo {...defaultSeo_en} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
