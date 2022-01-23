import { useTranslation } from "next-i18next";
export default function Apps() {
  const { t } = useTranslation();

  return (
    <div className="md:flex md:rounded-none rounded-md grid justify-between w-full items-center px-8 md:px-32 py-8 bg-gradient-to-r from-indigo-300 to-pink-300">
      <div className="grid justify-items-start gap-3 flex-grow">
        <h1 className="text-3xl text-white font-bold">{t("features.apps.title")}</h1>
        <p className="md:w-4/6 text-lg text-white">
          {t("features.apps.desc")}
        </p>
      </div>
      <img src="/apps.png" className="md:w-3/6 w-full " />
    </div>
  );
}
