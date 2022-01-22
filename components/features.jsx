import Apps from "./cards/apps";
import Desktop from "./cards/desktop";

export default function Features() {
  return (
    <div className="flex flex-col gap-3 md:gap-0 items-center ">
      <Apps className="flex-grow" />
      <Desktop className="flex-grow" />
    </div>
  );
}
