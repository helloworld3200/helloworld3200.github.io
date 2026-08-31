import { LINKS, NAME } from "~/common/consts";
import { LARGE_ICON_SIZE } from "~/common/ui-values";
import { ICON_SIZE } from "~/common/ui-values";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { SiGithub as GHLogo } from "@icons-pack/react-simple-icons";
import type { ElementType } from "react";
import { VANTA_PRESETS, VantaFX } from "~/components/graphics/vanta";
import { SwooshLink } from "~/components/link";
import { nothing } from "~/common/helper";

// Components for the hero can be put here because some of them actually have some good reusability

// Maybe make it so that each element fades in?

export function Name() {
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

export function Tagline() {
  return (<span className="
  text-3xl font-normal text-center tracking-normal
  ">
    Developer, student, creative
  </span>)
}

export function Me() {
  return (<div className="flex flex-col gap-3 items-start justify-start">
    <Name />
    <Tagline />
  </div>)
}

export function ContactBar() {
  return (<div className="flex flex-row gap-3 items-center">
    <SwooshLink content="GitHub" go={nothing} StandbyIcon={{element: GHLogo, size: LARGE_ICON_SIZE}} />
    <SwooshLink content="GitHub" go={LINKS.githubProfile} StandbyIcon={{element: GHLogo, size: LARGE_ICON_SIZE}} />
    <SwooshLink content="GitHub" go={LINKS.githubRepo} StandbyIcon={{element: GHLogo, size: LARGE_ICON_SIZE}} />
  </div>)
}
