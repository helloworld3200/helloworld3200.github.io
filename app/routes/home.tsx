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
      
      <a className="text-3xl font-medium tracking-normal" href="https://github.com" target="_blank">
        GitHub
      </a>
    </div>
  )
}

function ContactBar() {
  return (<div className="flex flex-row gap-5 items-center mt-25">
    <ContactLink />
  </div>)
}

// Shooting stars background effect i found on some random streaming website that im copying
// general idea:
// trail element + star element duplicated many times
// raw src code:
/*
shadow not needed?
here it is just in case we do:  shadow-[0_0_0_1px_#ffffff10]
inner star tailwind class:
animate-meteor pointer-events-none absolute rounded-full bg-slate-500
outer trail tailwind class:
pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 via-blue-600/30 to-transparent
animate-meteor keyframes animation:
0% {
    transform: rotate(215deg) translate(0);
    opacity: 1
}

70% {
    opacity: 1
}

100% {
    transform: rotate(215deg) translate(-500px);
    opacity: 0
}
*/
// TODO: implement this later but i want to finish the contacts bar first
function Starry({ count = 2 }: { count?: number }) {
  function Trail() {
    return (<div>
      
    </div>)
  }

  function Star() {
    return (<div>
      <Trail />
    </div>)
  }

  return (<div>
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} />
    ))}
  </div>)
}

function Hero() {
  return (<div className="flex flex-col justify-center items-center h-screen gap-5 px-10">
    <Starry />
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
