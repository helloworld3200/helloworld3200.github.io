import type { Route } from "./+types/home";

function Name() {
  return (<h1 className="text-9xl font-semibold text-center tracking-normal 
  bg-linear-20 from-blue-500 via-purple-500 to-blue-500 
  bg-size-[200%] text-transparent bg-clip-text animate-gradient">
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
