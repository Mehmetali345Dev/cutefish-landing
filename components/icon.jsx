import { GithubLogo, TwitterLogo, Download, DiscordLogo } from "phosphor-react";
export default function Icon(props) {
  return (
    <div>
      {props.name === "github" && (
        <GithubLogo
          size={20}
          weight="fill"
          className="transition-all ease-in-out duration-200 hover:text-blue-600"
        />
      )}
      {props.name === "twitter" && (
        <TwitterLogo
          size={20}
          weight="fill"
          className="transition-all ease-in-out duration-200 hover:text-blue-600"
        />
      )}
      {props.name === "download" && <Download size={32} weight="fill" />}
      {props.name === "discord" && (
        <DiscordLogo
          size={20}
          weight="fill"
          className="transition-all ease-in-out duration-200 hover:text-blue-600"
        />
      )}
    </div>
  );
}
