// Various link (& link-adjacent) components to make navigation that much more elegant.

import { ICON_SIZE, LARGE_ICON_SIZE } from "~/common/ui-values";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import type { ElementType } from "react";

export type LinkIcon = {
  element: ElementType<{ className?: string; size?: number }>,
  size: number
};

// Sweeps out an underline on hover. WARNING: MUST BE USED WITH "group" tw class as a parent!
export function HoverSweepUnderline() {
  return <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-current transition-all duration-(--hover-anim-duration-slow) group-hover:w-full" />
}

// Swooshed, attention-grabbing animated link
// first prop is content and second is a function which can be set to open a new tab, open a popup, etc
export function SwooshLink(
  { content, 
    go, 
    StandbyIcon = {element: ArrowUpRight, size: ICON_SIZE},
    ReadyIcon = {element: ArrowUpRight, size: ICON_SIZE},
  } : { 
    content: string; 
    go: string | (() => unknown);
    StandbyIcon?: LinkIcon;
    ReadyIcon?: LinkIcon;
  }) {
  // if its a string then return an anchor element with that string set to its href
  // if not then return a button element with the onClick set to that function

  //<StandbyIcon width={iconSize} height={iconSize} className="m-3" />
  //<ReadyIcon size={iconSize} />

  // StandbyIcon displayed normally; ReadyIcon display on hover.

  // formerly clipped to [clip-path:url(#squircle)] - copy n paste to reimplement again

  // Internal component includes icons + text + hover underline. Should be used within tailwind group.
  function InternalLink() {
    return (<>
      <div className="
      relative h-10 w-10 overflow-hidden
      *:absolute *:inset-0 *:m-auto
      ">
        <StandbyIcon.element
          size={StandbyIcon.size}
          className="
          opacity-100 group-hover:opacity-0
          group-hover:translate-x-(--icon-dist) group-hover:-translate-y-(--icon-dist)
          scale-100 group-hover:scale-75
          swoosh-away"
        />
        <ReadyIcon.element
          size={ReadyIcon.size}
          className="
          -translate-x-(--icon-dist) translate-y-(--icon-dist)
          group-hover:translate-x-0 group-hover:translate-y-0
          opacity-0 group-hover:opacity-100
          scale-75 group-hover:scale-100
          swoosh-away"
        />
      </div>

      <span>{content}</span>
      
      <HoverSweepUnderline />
    </>)
  }

  const useAnchor = typeof go === "string";
  
  const contactClass = "flex flex-row gap-1 items-center text-3xl font-medium tracking-normal relative px-2 cursor-pointer";

  return (
    <div className="group flex">
      {/* This div layer JUST translates everything up slightly on hover, all other styling happens in the subcomponents*/}
      <div className="transition-transform duration-300 group-hover:-translate-y-3">
        {useAnchor ? (
          <a href={go} target="_blank" className={contactClass}>
            <InternalLink />
          </a>
        ) : (
          <button className={contactClass} onClick={go}>
            <InternalLink />
          </button>
        )}
      </div>
    </div>
  )
}

// Like SwooshLink except it doesn't go to another page, but reveals text instead.
// example: "Email me" - > "me@example.com" (replaces the text with email address on click)
export function SwooshUncoverLink(
  {
    content,
    reveal,
    StandbyIcon = {element: ArrowUpRight, size: ICON_SIZE},
    ReadyIcon = {element: ArrowUpRight, size: ICON_SIZE},
  } : {
    content: string;
    reveal: string;
    StandbyIcon?: LinkIcon;
    ReadyIcon?: LinkIcon;
  }
) {
  

  return (<div>

  </div>)
}
