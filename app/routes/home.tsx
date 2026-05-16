import type { Route } from "./+types/home";

function Name() {
  return (<h1 className="text-8xl font-semibold text-center tracking-wide">
    helloworld3200
  </h1>)
}

function PlaceholderHero() {
  return (<div className="flex flex-col items-center h-screen gap-4 p-50">
    <Name />
  </div>);
}

export default function Home() {
  return (<>
    <PlaceholderHero />
  </>);
}
