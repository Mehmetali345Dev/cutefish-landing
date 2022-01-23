import Link from "next/link";

import { useTranslation } from "next-i18next";

const links = [
  {
    name: "Home",
    href: "/",
    key: "home",
  },
  {
    name: "About",
    href: "/about",
    key: "about",
  },
  {
    name: "Downloads",
    href: "/downloads",
    key: "download",
  },
];

const socials = [
  {
    name: "Forum",
    href: "https://forum.cutefishos.com",
  },
  {
    name: "Github",
    href: "https://github.com/cutefishos",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/cutefishos",
  },
  {
    name: "Discord",
    href: "https://discord.gg/mhUVu4dPH8",
  },
];

const langs = [
  {
    name: "English",
    key: "en",
  },
  {
    name: "Türkçe",
    key: "tr",
  },
];

export default function Footer() {
  const { t, i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex flex-col gap-3 py-8 w-11/12 md:w-10/12 md:justify-items-center">
      <div className="md:grid-cols-3 grid-cols-2 grid gap-3">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-indigo-500 text-2xl">CutefishOS</h1>
          {links.map((link, index) => (
            <div key={index} className=" font-bold text-lg text-indigo-400">
              <Link href={link.href}>{t(`navbar.${link.key}`)}</Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-indigo-500 text-2xl">Community</h1>
          {socials.map((social, index) => (
            <div key={index} className=" font-bold text-lg text-indigo-400">
              <Link href={social.href}>{social.name}</Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-indigo-500 text-2xl">Friends</h1>
          <a
            className=" font-bold text-lg text-indigo-400"
            href="https://jingos.com"
            target="_blank"
            rel="noreferrer"
          >
            JingOS
          </a>
        </div>
      </div>
      <div className="flex gap-3">
        {langs.map((lang, index) => (
          <button
            className="hover:text-indigo-500 transition-all ease-in-out duration-300"
            key={index}
            onClick={() => changeLang(lang.key)}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
}
