import { GH_LINK, NAME, LARGE_ICON_SIZE, ICON_SIZE } from "~/common/consts";
import type { Route } from "./+types/home";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { SiGithub as GHLogo } from "@icons-pack/react-simple-icons";
import type { ElementType } from "react";
import { VANTA_PRESETS, VantaFX } from "~/components/graphics";

// Maybe make it so that each element fades in?

function Name() {
  // the idea here is
  // a very nice looking name with features:
  // 1. slowly shifting gradient
  // 2. shimmer effect on hover that changes how that bg gradient moves around
  // 3. overall "frosted glass" look achieved through edge outline which is just a slightly translucent + blurred background

  return (<h1 className="
  text-8xl font-semibold text-center tracking-tighter
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

// first prop is content and second is a function which can be set to open a new tab, open a popup, etc
function ContactLink(
  { content, 
    go, 
    StandbyIcon,
    ReadyIcon = ArrowUpRight,
  }: { 
    content: string; 
    go: string | (() => void);
    StandbyIcon: ElementType<{ className?: string; width?: number; height?: number }>;
    ReadyIcon?: ElementType<{ className?: string; size?: number }>;
  }) {
  // upon actually looking at web docs
  // it looks like window.open has some weird quirks on certain browsers
  // but we still need multifunctions here for both opening to new tab + just showing some different UI on the current page
  // so the plan is
  // make it so that go accepts either type of string or a function
  // if its a string then return an anchor element with that string set to its href
  // if not then return a button element with the onClick set to that function

  //<StandbyIcon width={iconSize} height={iconSize} className="m-3" />
  //<ReadyIcon size={iconSize} />

  // StandbyIcon displayed normally; ReadyIcon display on hover.

  // formerly clipped to [clip-path:url(#squircle)]
  // it looked kinda weird but if we want to reimplement js pop that into the root div in InternalContact

  function InternalContact() {
    return (<>
      <div className="
      relative h-10 w-10 overflow-hidden
      *:absolute *:inset-0 *:m-auto
      ">
        <StandbyIcon
          width={LARGE_ICON_SIZE}
          height={LARGE_ICON_SIZE}
          className="
          opacity-100 group-hover:opacity-0
          group-hover:translate-x-(--icon-dist) group-hover:-translate-y-(--icon-dist)

          swoosh-away"
        />
        <ReadyIcon
          size={ICON_SIZE}
          className="
          -translate-x-(--icon-dist) translate-y-(--icon-dist)
          group-hover:translate-x-0 group-hover:translate-y-0
          opacity-0 group-hover:opacity-100

          swoosh-away"
        />
      </div>

      <span>{content}</span>
      
      <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-current transition-all duration-(--hover-anim-duration-slow) group-hover:w-full"></span>
    </>)
  }

  const useAnchor = typeof go === "string";
  
  const contactClass = "flex flex-row gap-1 items-center text-3xl font-medium tracking-normal relative px-2 cursor-pointer";

  return (
    <div className="group">
      <div className="transition-transform duration-300 group-hover:-translate-y-3">
        {useAnchor ? (
          <a href={go} target="_blank" className={contactClass}>
            <InternalContact />
          </a>
        ) : (
          <button className={contactClass} onClick={go}>
            <InternalContact />
          </button>
        )}
      </div>
    </div>
  )
}

function ContactBar() {
  return (<div className="flex flex-row gap-5 items-center mt-20">
    <ContactLink content="GitHub" go={GH_LINK} StandbyIcon={GHLogo} />
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
  return (<div className="flex flex-col justify-center items-center h-screen gap-5 px-10">
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
        flex flex-col px-20 py-20 gap-5 justify-start items-start
      ">
        <Name />
        <Tagline />
        <ContactBar />
      </div>
    </VantaFX>
  </div>)
}

export default function Home() {
  return (<div>
    <HeroStyleModern />
  </div>);
}
