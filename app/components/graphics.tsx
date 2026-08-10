// Various high-end graphical effects to use sparingly! throughout the app.

import { useRef, useState, useEffect, type PropsWithChildren } from "react";
import * as THREE from 'three';

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

// General purpose vanta effect wrapper that plugs it into React
export function VantaFX({
    effect,
    className,
    children
}: PropsWithChildren<{
    effect: VantaEffectConfig,
    className: string,
}>) {
    const [effectBg, setEffectBg] = useState<typeof effect.setup | null>(null);
    const bgElementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const vantaReadyArgs = {
            el: bgElementRef.current,
            THREE: THREE,
            ...effect.args
        }

        if (!effectBg) {
            setEffectBg(
                effect.setup(vantaReadyArgs)
            )
        }

        return () => {
            if (effectBg) { effectBg.destroy(); }
        }

    }, [effectBg, effect]);

    // remember: all VantaEffect.setup() does is insert a 3d canvas into the referenced element.
    // it takes care of all the overlap/layering for you through its own internal styling!
    // so you can add css/tw directly into the div as though the canvas didn't exist.
    // no layout issues will happen whatsoever; no need to nest more divs into it.

    // however: do NOT remove the "redundant" PropsWithChildren in case layout issues DO arise later
    return (
        <div className={className} ref={bgElementRef}>
            {children}
        </div>
    )
}
