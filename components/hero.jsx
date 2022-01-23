import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { Trans } from "next-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-3 text-center items-center w-full">
      <motion.h1
        animate={{ y: 100, opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.5 }}
        className="text-5xl font-bold flex flex-col md:flex-row items-center gap-2"
      >
        <Trans i18nKey="name">
            Meet the
            <span className="text-indigo-600">Cutefish</span>
        </Trans>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ y: 100, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-lg"
      >
        {t("motto")}
      </motion.p>

      <motion.div
        animate={{ y: 100, opacity: 1 }}
        initial={{ y: 200, opacity: 0 }}
        transition={{ delay: 1 }}
      >
        <img src="desktop2.png" alt="cutefish" className="rounded-md" />
        <Link href="/downloads">
          <div className="text-lg bg-indigo-600 px-8 text-center w-full text-white rounded-md py-4 mb-4 font-bold">
            {t("try")}
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
