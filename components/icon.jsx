import { GithubLogo, TwitterLogo } from "phosphor-react";
export default function Icon(props) {
  return (
    <div>
      {props.name === "github" && <GithubLogo size={20} weight="fill" />}
      {props.name === "twitter" && <TwitterLogo size={20} weight="fill" />}
    </div>
  );
}
