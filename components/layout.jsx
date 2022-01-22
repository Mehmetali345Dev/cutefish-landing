import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";
import "animate.css";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>

        <title>CutefishOS</title>
        <meta
          name="description"
          content="Make a better Desktop OS. Focus on simplicity, beauty and practicality"
        />

        {/* Twitter */}

        <meta property="twitter:domain" content="cutefish-landing.vercel.app" />
        <meta
          property="twitter:url"
          content="https://cutefish-landing.vercel.app/"
        />
        <meta name="twitter:title" content="CutefishOS" />
        <meta
          name="twitter:description"
          content="Make a better Desktop OS. Focus on simplicity, beauty and practicality"
        />
        <meta
          name="twitter:image"
          content="https://cutefish-landing.vercel.app/icon.png"
        />

        {/* OpenGraph */}
        <meta
          property="og:url"
          content="https://cutefish-landing.vercel.app/"
          key="ogurl"
        />
        <meta property="og:type" content="website" key="ogtype" />

        <meta
          property="og:image"
          content="https://cutefish-landing.vercel.app/icon.png"
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content="https://cutefish-landing.vercel.app"
          key="ogsitename"
        />
        <meta property="og:title" content="CutefishOS" key="ogtitle" />
        <meta
          property="og:description"
          content="Make a better Desktop OS. Focus on simplicity, beauty and practicality"
          key="ogdesc"
        />
      </Head>
      <div className="flex flex-col items-center w-full">
        <Navbar className="w-full" />
        <div className="flex justify-center py-8 w-full min-h-screen">
          <main className="h-full w-11/12 md:w-full">{children}</main>
        </div>
        <Footer className="w-full" />
      </div>
    </>
  );
}
