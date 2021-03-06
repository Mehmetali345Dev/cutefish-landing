import Link from "next/link";
import Icon from "./icon";

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

const social = [
  {
    name: "Github",
    href: "https://github.com/cutefishos",
    icon: "github",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/cutefishos",
    icon: "twitter",
  },
  {
    name: "Discord",
    href: "https://discord.gg/mhUVu4dPH8",
    icon: "discord",
  },
];

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="w-full grid justify-items-center">
      <div className="text-indigo-500 flex items-center mt-3 px-2 w-11/12 justify-end md:w-10/12 gap-4 w-full">
        {social.map((social, index) => (
          <a href={social.href} key={index} target="_blank" rel="noreferrer">
            <Icon name={social.icon} />
          </a>
        ))}
      </div>
      <div className="text-indigo-500 flex items-center w-11/12 justify-between md:w-10/12 gap-4 w-full p-2 ">
        <Link href="/">
          <img
            src="/icon.png"
            className="w-10 cursor-pointer"
          />
        </Link>
        <div className="flex items-center space-x-3 font-bold justify-center">
          {links.map((link, index) => (
            <Link href={link.href} key={index}>
              {t(`navbar.${link.key}`)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
