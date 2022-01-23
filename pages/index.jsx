import Hero from "../components/hero";
import Features from "../components/features";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}

export default function Home(props) {
  return (
    <div className="flex flex-col w-full items-center gap-3 ">
      <Hero />
      <div className="w-full grid justify-items-center mt-36">
        <Features />
      </div>
    </div>
  );
}
