import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";
import Resume from "./resume";
import 'animate.css'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>CutefishOS</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="flex flex-col items-center w-full">
        <Navbar className="w-full" />
        <div className="flex justify-center w-full min-h-screen">
          <main className="h-full w-full">{children}</main>
        </div>
      </div>
    </>
  );
}
