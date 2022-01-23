import Icon from "../components/icon";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}

export default function Downloads(props) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-3 items-center">
      <h1 className="font-bold text-3xl">{t("downloads.title")}</h1>

      <div className="grid gap-3 md:w-11/12 ">
        <div className="rounded-md from-pink-300 to-indigo-500 bg-gradient-to-r  text-white px-8 md:flex grid items-center justify-between md:px-32 py-8">
          <div className="grid justify-items-start gap-3 flex-grow">
            <h2 className="text-3xl text-white font-bold">
              {t("downloads.cutefish.title")}
            </h2>
            <p className="md:w-4/6 text-lg text-white">
              {t("downloads.cutefish.desc")}
            </p>
            <div className="flex gap-3">
              <a
                href="https://mega.nz/file/26JClJ6B#8JMUN6xcRT53Q_TV6r5Co2wiIV3n2bMlMiKiqegqf9c"
                target="_blank"
                rel="noreferrer"
                className="flex items-center font-bold gap-3 bg-red-700 rounded-md px-8 py-2 "
              >
                <img src="/mega-logo.png" width="32" height="32" />
                MEGA
              </a>
              <a
                href="https://drive.google.com/file/d/1JKyxKCclMSZBqtzETRdg1ul7y5zCQbJK/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="flex items-center font-bold gap-3 bg-green-700 rounded-md px-8 py-2 "
              >
                <img src="/drive-logo.png" width="32" height={30} />
                Google Drive
              </a>
            </div>
          </div>
          <img src="/icon.png" className="md:w-64 mt-2 md:mt-0" />
        </div>
        <div className="rounded-md from-orange-500 to-indigo-500 bg-gradient-to-r  text-white px-8 md:flex grid items-center justify-between md:px-32 py-8">
          <div className="grid justify-items-start gap-3 flex-grow">
            <h2 className="text-3xl text-white font-bold">
              {t("downloads.ubuntu.title")}
            </h2>
            <p className="md:w-4/6 text-lg text-white">
              {t("downloads.ubuntu.desc")}
            </p>
            <a
              href="https://cutefish-ubuntu.github.io/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center w-full md:w-max font-bold gap-3 bg-orange-700 rounded-md px-8 py-2 "
            >
              <Icon name="download" />
              {t("downloads.button")}
            </a>
          </div>
          <img src="/ubuntu-logo.png" className="md:w-64 mt-2 md:mt-0" />
        </div>
        <div className="rounded-md from-green-500 to-indigo-500 bg-gradient-to-r  text-white px-8 md:flex grid items-center justify-between md:px-32 py-8">
          <div className="grid justify-items-start gap-3 flex-grow">
            <h2 className="text-3xl text-white font-bold">
              {t("downloads.manjaro.title")}
            </h2>
            <p className="md:w-4/6 text-lg text-white">
              {t("downloads.manjaro.desc")}
            </p>
            <a
              href="https://github.com/manjaro-cutefish/download"
              target="_blank"
              rel="noreferrer"
              className="flex items-center w-full md:w-max font-bold gap-3 bg-green-700 rounded-md px-8 py-2 "
            >
              <Icon name="download" />
              {t("downloads.button")}
            </a>
          </div>
          <img src="/manjaro-logo.png" className="md:w-64 mt-2 md:mt-0" />
        </div>
      </div>
    </div>
  );
}
