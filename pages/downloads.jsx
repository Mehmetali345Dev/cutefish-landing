import Image from "next/image";
import Icon from "../components/icon";
export default function Downloads() {
  return (
    <div className="flex flex-col gap-3 items-center w-full">
      <h1 className="font-bold text-3xl">
        Download CutefishOS or flavours of it
      </h1>

      <div className="grid gap-3 ">
        <div className="rounded-md from-indigo-500 bg-gradient-to-r  text-white px-8 md:flex grid items-center justify-between md:px-32 py-8">
          <div className="grid justify-items-start gap-3 flex-grow">
            <h2 className="text-3xl text-white font-bold">CutefishOS</h2>
            <p className="md:w-4/6 text-lg text-white">
              CutefishOS is Debian based, and it is best OS for Cutefish DE.
            </p>
            <div className="flex gap-3">
              <a
                href="https://mega.nz/file/26JClJ6B#8JMUN6xcRT53Q_TV6r5Co2wiIV3n2bMlMiKiqegqf9c"
                target="_blank"
                rel="noreferrer"
                className="flex items-center font-bold gap-3 bg-red-700 rounded-md px-8 py-2 "
              >
                <Image src="/mega-logo.png" width="32" height="32" />
                MEGA
              </a>
              <a
                href="https://drive.google.com/file/d/1JKyxKCclMSZBqtzETRdg1ul7y5zCQbJK/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="flex items-center font-bold gap-3 bg-green-700 rounded-md px-8 py-2 "
              >
                <Image src="/drive-logo.png" width="32" height={30} />
                Google Drive
              </a>
            </div>
          </div>
          <Image src="/icon.png" width={200} height={200} />
        </div>
        <div className="rounded-md from-orange-500 to-indigo-500 bg-gradient-to-r  text-white px-8 md:flex grid items-center justify-between md:px-32 py-8">
          <div className="grid justify-items-start gap-3 flex-grow">
            <h2 className="text-3xl text-white font-bold">
              Cutefish DE with Ubuntu
            </h2>
            <p className="md:w-4/6 text-lg text-white">
              Ubuntu is Debian based, easy to use distro. Try out Cutefish DE
              with Ubuntu Linux.
            </p>
            <a
              href="https://cutefish-ubuntu.github.io/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center font-bold gap-3 bg-orange-700 rounded-md px-8 py-2 "
            >
              <Icon name="download" />
              Download
            </a>
          </div>
          <Image src="/ubuntu-logo.png" width={200} height={200} />
        </div>
        <div className="rounded-md from-green-500 to-indigo-500 bg-gradient-to-r  text-white px-8 md:flex grid items-center justify-between md:px-32 py-8">
          <div className="grid justify-items-start gap-3 flex-grow">
            <h2 className="text-3xl text-white font-bold">
              Cutefish DE with Manjaro Linux
            </h2>
            <p className="md:w-4/6 text-lg text-white">
              Manjaro Linux is Arch based, easy to use distro. Try out Cutefish
              DE with Manjaro Linux.
            </p>
            <a
              href="https://github.com/manjaro-cutefish/download"
              target="_blank"
              rel="noreferrer"
              className="flex items-center font-bold gap-3 bg-green-700 rounded-md px-8 py-2 "
            >
              <Icon name="download" />
              Download
            </a>
          </div>
          <Image src="/manjaro-logo.png" width={200} height={200} />
        </div>
      </div>
    </div>
  );
}
