import Hero from "../components/hero";
import Features from "../components/features";
export default function Home() {
  return (
    <div className="flex flex-col w-full items-center gap-3 ">
      <Hero />
      <div className="w-full grid justify-items-center mt-36">
        <Features />
      </div>
    </div>
  );
}
