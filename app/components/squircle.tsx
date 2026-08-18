// This polyfills corner-shape CSS property as it isn't Baseline supported yet
// to use this you can just do clip-path: url(#squircle) in CSS to make an element into a squircle shape.

export function SquircleShapePolyfill() {
    return (
        <svg className="absolute w-0 h-0" aria-hidden="true" focusable="false">
            <defs>
                <clipPath id="squircle" clipPathUnits="objectBoundingBox">
                <path d="M 0,0.5 C 0,0.16 0.16,0 0.5,0 C 0.84,0 1,0.16 1,0.5 C 1,0.84 0.84,1 0.5,1 C 0.16,1 0,0.84 0,0.5"/>
                </clipPath>
            </defs>
        </svg>
    )
}
