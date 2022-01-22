import Apps from "./cards/apps";
import Desktop from "./cards/desktop";

export default function Features() {
  return (
    <div className="flex flex-col w-full items-center ">
      <Apps />
      <Desktop />
    </div>
  );
}
