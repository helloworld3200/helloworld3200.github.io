import { LINKS, NAME } from "~/common/consts";
import { LARGE_ICON_SIZE } from "~/common/ui-values";
import { ICON_SIZE } from "~/common/ui-values";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { SiGithub as GHLogo } from "@icons-pack/react-simple-icons";
import type { ElementType } from "react";
import { VANTA_PRESETS, VantaFX } from "~/components/graphics/vanta";
import { SwooshLink } from "~/components/link";
import { nothing } from "~/common/helper";
import { Name, Tagline, Me, ContactBar } from "~/components/hero";

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
