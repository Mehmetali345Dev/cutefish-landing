import Link from "next/link";
import Icon from "./icon";
const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Downloads",
    href: "/downloads",
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
];

export default function Navbar() {
  return (
    <nav className="w-full grid justify-items-center">
      <div className="text-indigo-500 flex items-center mt-3 px-2 justify-end md:w-10/12 gap-4 w-full">
        {social.map((social, index) => (
          <a href={social.href} key={index} target="_blank" rel="noreferrer">
            <Icon name={social.icon} />
          </a>
        ))}
      </div>
      <div className="text-indigo-500 flex items-center justify-between md:w-10/12 gap-4 w-full p-2 ">
        <img src="/icon.png" className="w-10" />
        <div className="flex items-center space-x-3 font-bold justify-center">
          {links.map((link, index) => (
            <Link href={link.href} key={index}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
