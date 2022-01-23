import Layout from "../components/layout";
import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default appWithTranslation(MyApp);
