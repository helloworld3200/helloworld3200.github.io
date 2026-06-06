import { NAME } from "~/common/consts";
import type { Route } from "./+types/home";

// Maybe make it so that each element fades in?

function Name() {
  // the idea here is
  // a very nice looking name with features:
  // 1. slowly shifting gradient
  // 2. shimmer effect on hover that changes how that bg gradient moves around
  // 3. overall "frosted glass" look achieved through edge outline which is just a slightly translucent + blurred background

  return (<h1 className="
  text-9xl font-semibold text-center tracking-tight
  bg-(image:--pretty-gradient)
  bg-size-[200%] text-transparent bg-clip-text bg-bottom animate-gradient
  saturate-110 brightness-120
  ">
    {NAME}
  </h1>)
}

function Tagline() {
  return (<span className="
  text-4xl font-normal text-center tracking-wide
  ">
    Developer, student, creative
  </span>)
}

function ContactLink() {
  return (
    <div className="flex flex-row gap-3 items-center">
      
      <a className="text-3xl font-normal tracking-normal" href="https://github.com" target="_blank">
        GitHub
      </a>
    </div>
  )
}

function ContactBar() {
  return (<div className="flex flex-row gap-5 items-center mt-10">
    <ContactLink />
  </div>)
}

function Hero() {
  return (<div className="flex flex-col items-center h-screen gap-5 py-55 px-10">
    <Name />
    <Tagline />
    <ContactBar />
  </div>);
}

export default function Home() {
  return (<>
    <Hero />
  </>);
}
