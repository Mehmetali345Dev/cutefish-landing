import { useTranslation } from "next-i18next";
export default function Desktop() {
  const { t } = useTranslation();

  return (
    <div className="md:flex grid justify-between w-full items-center px-8 md:px-32 py-8 bg-gradient-to-r from-green-300 to-indigo-300">
      <img src="/desktop.png" className="rounded-md md:w-3/6 w-full " />
      <div className="grid justify-items-start md:justify-items-end md:text-right gap-3 flex-grow">
        <h1 className="text-3xl text-white font-bold">
          {t("features.desktop.title")}
        </h1>
        <p className="md:w-4/6 text-lg text-white">
          {t("features.desktop.desc")}
        </p>
      </div>
    </div>
  );
}
