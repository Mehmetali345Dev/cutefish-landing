import Link from "next/link";

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

export default function Footer() {
  return (
    <div className="md:grid-cols-3 grid py-8 w-11/12 md:w-10/12 justify-items-center">
      <div className="grid gap-3">
        <h1 className="font-bold text-indigo-500 text-2xl">CutefishOS</h1>
        {links.map((link, index) => (
          <div className=" font-bold text-lg text-indigo-400">
            <Link href={link.href} key={index}>
              {link.name}
            </Link>
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
      <div className="grid gap-3">
        <h1 className="font-bold text-indigo-500 text-2xl">CutefishOS</h1>
        {socials.map((social, index) => (
          <div className=" font-bold text-lg text-indigo-400">
            <Link href={social.href} key={index}>
              {social.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
