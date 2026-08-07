// Various high-end graphical effects to use sparingly! throughout the app.

import { useRef, useState, useEffect } from "react";
import * as THREE from 'three';

// Minimising the places where we need to use unsafe types (because VANTA is JS and without typedefs)
// so we just try to make any problems arising from that as small as possible.
export interface VantaEffect {
    setup: any,
    args: Record<string, any>
} 

export const VANTA_PRESETS = {
    GLOBE: {
        
    }
};

// General purpose vanta effect wrapper that plugs it into React
export function VantaFX({
    effect,
    className,
    children
}: {
    effect: VantaEffect,
    className: string,
    children: React.ReactNode    
}) {
    const [effectBg, setEffectBg] = useState<typeof effect.setup | null>(null);
    const bgElementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const processedArgs = {
            el: bgElementRef.current,
            THREE: THREE,
            ...effect.args
        }

        if (!effectBg) {
            setEffectBg(
                effect.setup(processedArgs)
            )
        }
    }, [effectBg, effect]);

    return (
        <div className={className} ref={bgElementRef}>
            <div>{children}</div>
        </div>
    )
}

export function GlobeFX() {


    return (
        <div />
    )
}
