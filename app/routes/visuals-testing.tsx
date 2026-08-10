import { useEffect, useRef, useState } from 'react';
import VantaGlobeEffect from 'vanta/src/vanta.globe'
import * as THREE from 'three';

// Visuals testing page; not meant to be accessible via prod but oh well hahaha

// vanta globe bg effect
// if we actually use this we should wrap it in a reusable component
// so itll look like <GlobeFX>(elements in front of the background)</GlobeFX>
// most of this setup is from the vanta npm page as well
// also we should can hijack the threejs scene used internally to add our own 3d objects and stuff if we keep this
function GlobeTest1() {
    const [globeBg, setGlobeBg] = useState<typeof VantaGlobeEffect | null>(null);
    const bgElementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const effectArgs = {
            el: bgElementRef.current,
            size: 0.7,
            backgroundAlpha: 0.0,
            color: 0x6893ae, 
            color2: 0x78e878,
            THREE: THREE
        };

        if (!globeBg) {
            setGlobeBg(
                VantaGlobeEffect(effectArgs)
            );
        }

        return () => {
            if (globeBg) { globeBg.destroy(); }
        }
    }, [globeBg]);

    return (
        <div ref={bgElementRef} className="bg-(image:--dim-gradient) w-full h-screen flex items-center justify-center" >
            <h1 className="text-2xl">hello world!</h1>
        </div>
    )
}

export default function VisualsTesting() {
    return (
        <>
            <div className="">
                <GlobeTest1 />
            </div>
        </>
    )
}