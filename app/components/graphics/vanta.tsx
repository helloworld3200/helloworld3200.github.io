// Wrappers for high-end VANTA graphical effects to easily plug into pages
// throughout the app. Use sparingly!

import { useRef, useState, useEffect, type PropsWithChildren } from "react";
import * as LegacyTHREE from 'three-legacy';

// vanta imports go here!
import VantaGlobeEffect from 'vanta/src/vanta.globe'

// Minimising the places where we need to use unsafe types (because VANTA is JS and without typedefs)
// so we just try to make any problems arising from that as small as possible.

// All VANTA effects should be wrapped in this object
// setup: any one of the VANTA effect funcs; args: check docs for your specific chosen effect.
// SIZE OF COMPONENT MUST BE STYLED IN CSS/TW, NOT here! e.g. className="w-full h-screen"
export interface VantaEffectConfig {
    setup: any,
    args: Record<string, any>
}

// Common, ready-made VANTA effect presets to use wherever
export const VANTA_PRESETS: Record<string, VantaEffectConfig> = {
    // Globe with colours and sizing to be used on homepage hero section
    // shower thought: call this the "eleglobe" (portmanteau of elegant & globe)
    GLOBE_HERO: {
        setup: VantaGlobeEffect,
        args: {
            size: 0.7,
            backgroundAlpha: 0.0,
            // Light green/cyan. Crisp, elegant and confident - like you ;)
            color: 0x6893ae, 
            color2: 0x78e878,
        }
    }
};

/*
    General purpose vanta effect wrapper that plug-and-plays it into React

    USAGE ADVICE:
    - Insert child elements in a div element nested into this component.
    - Put your styling for the 3D EFFECT (e.g. sizing) into the className of this component.
    - Put your styling for your CHILD ELEMENTS into the className of the nested div.

    - I recommend that your div has w-full and h-full as a base style so it fits the entire parent.

    Example:

    <VantaFX className="w-full h-screen bg-black"> (sizing & styles for the 3d effect)
        <div className="w-full h-full flex-col" /> (child element layout & styling)
    </VantaFX>

    - See below for a longer explanation of why it's like this.
*/
export function VantaFX({
    effect,
    className = "",
    children
}: PropsWithChildren<{
    effect: VantaEffectConfig,
    className?: string,
}>) {
    const [effectBg, setEffectBg] = useState<typeof effect.setup | null>(null);
    const bgElementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const vantaReadyArgs = {
            el: bgElementRef.current,
            // MUST use older threejs version to ensure compatability with this older library 
            // (r134 specified in docs; breaking changes only happen >=r141; r140 installed here under three-legacy but check package.json to confirm!)
            THREE: LegacyTHREE,
            ...effect.args
        }

        if (!effectBg) {
            setEffectBg(
                effect.setup(vantaReadyArgs)
            )
        }

        //console.log("Applying VANTA effect:", effect.setup.name, "with args:", vantaReadyArgs);

        return () => {
            if (effectBg) { effectBg.destroy(); }
        }

    }, [effectBg, effect]);

    // remember: all VantaEffect.setup() does is insert a 3d canvas into the referenced element.

    // don't remove redundant {children} just in case we need to do some custom layout jank later
    return (
        <div className={className} ref={bgElementRef}>
            {children}
        </div>
    )
}
