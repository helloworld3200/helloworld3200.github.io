import { GH_LINK, NAME } from "~/common/consts";
import { LARGE_ICON_SIZE } from "~/common/ui-values";
import { ICON_SIZE } from "~/common/ui-values";
import type { Route } from "./+types/home";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { SiGithub as GHLogo } from "@icons-pack/react-simple-icons";
import type { ElementType } from "react";
import { VANTA_PRESETS, VantaFX } from "~/components/graphics/vanta";
import { SwooshLink } from "~/components/link";

// Maybe make it so that each element fades in?

function Name() {
  // the idea here is
  // a very nice looking name with features:
  // 1. slowly shifting gradient
  // 2. shimmer effect on hover that changes how that bg gradient moves around
  // 3. overall "frosted glass" look achieved through edge outline which is just a slightly translucent + blurred background

  return (<h1 className="
  text-9xl font-semibold text-center tracking-tighter
  bg-(image:--pretty-gradient)
  bg-size-[200%] text-transparent bg-clip-text bg-bottom animate-gradient
  saturate-110 brightness-120
  ">
    {NAME}
  </h1>)
}

function Tagline() {
  return (<span className="
  text-3xl font-normal text-center tracking-normal
  ">
    Developer, student, creative
  </span>)
}

function Me() {
  return (<div className="flex flex-col gap-3 items-start justify-start">
    <Name />
    <Tagline />
  </div>)
}

function ContactBar() {
  return (<div className="flex flex-row gap-5 items-center">
    <SwooshLink content="GitHub" go={GH_LINK} StandbyIcon={{element: GHLogo, size: LARGE_ICON_SIZE}} />
  </div>)
}

/* 
 Shooting stars background effect i found on some random streaming website that im copying
 general idea:
 trail element + star element duplicated many times
 raw src code:

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

// A few different iterations I had for the main hero design

// 1. basic flat list of the components with a starry bg effect; pretty boring
function HeroStyleFlat() {
  return (<div className="flex flex-col justify-center items-center h-screen gap-10 px-10">
    <Name />
    <Tagline />
    <ContactBar />
  </div>);
}

// 2. perfect. elegant, modern, intricate w/o being too busy.
// vanta 3d effects, blended colours in the background, animated text, etc.
function HeroStyleModern() {
  return (<div className="flex flex-col w-full">
    <VantaFX effect={VANTA_PRESETS.GLOBE_HERO} className="
      w-full h-screen bg-(image:--dim-gradient)
    ">
      <div className="
        w-full h-full
        flex flex-col px-20 py-50 gap-30 justify-center items-start
      ">
        <Me />
        <ContactBar />
      </div>
    </VantaFX>
  </div>)
}

function Home() {
  return (<div>
    <HeroStyleModern />
  </div>);
}

export default Home;
