// Dev info component meant to be visible on routes only during development mode.
// Displays some useful debug info and telemetry helpful for development/testing

import { Code } from "lucide-react";
import { type PropsWithChildren, version as REACT_VERSION } from "react";
import { useFullDateTime } from "~/common/time";
import type { Empty } from "~/common/helper";
import { useLocation } from "react-router";

// Standard monospace text component for displaying dev info
export function DevText({ text }: { text: string }) {
    return (
        <span className="text-lg font-mono font-light tracking-tight">
            {text}
        </span>
    )
}

// Header for telemetry display - includes title & current local datetime
export function DevHeader() {
    return (
        <div className="flex flex-row items-center justify-between striped-bg-blue-800 border-b px-8 py-5 border-blue-800">
            <div className="flex flex-row items-center justify-start gap-2">
                <Code />
                <span className="text-2xl font-semibold tracking-tight"> Development Telemetry </span>
            </div>
            <DevText text={ useFullDateTime() } />
        </div>
    )
}

// Telemetry category to dispaly a list of data e.g. DevEntrys in a related section
export function DevCategory({ title, children }: PropsWithChildren<{ title: string }>) {
    return (<div className="flex flex-col gap-1">
        <span className="text-xl font-semibold tracking-tight">{title}</span>
        {children}
    </div>)
}

// Entry in each category - can be used alongside other custom UI to display data in each category
// but this should be the bulk of data
export function DevEntry({ title, text, children }: PropsWithChildren<{ title: string; text?: string }>) {
    return (<div className="flex flex-row items-start justify-between gap-2 px-1 py-1">
        <span className="text-lg font-normal tracking-tight">{title}</span>
        <div className="flex flex-row items-center justify-end gap-2">
            {text && <DevText text={text} />}
            {children}
        </div>
    </div>)
}

// Overarching container for all the developer info. Includes a header and a category list.
export function DevContainer({ children }: PropsWithChildren) {
    return (<div className="bg-blue-950">
        <DevHeader />
        <div className="flex flex-col gap-2 h-screen px-8 py-5">
            {children}
        </div>
    </div>)
}

// INFO COMPONEENTS BELOW THIS POINT

// Info category about current routing
function RoutingInfo() {
    const location = useLocation();

    return (<DevCategory title="Routing">
        <DevEntry title="Location" text={ location.pathname } />
    </DevCategory>)
}

// Info category about UI paint/render info 
// (nothing useful to put here YET but i plan on adding more graphics features so keep this for later)
function PaintInfo() {
    return (<DevCategory title="Paint & Rendering">

    </DevCategory>)
}

// Info category about current UI state
function UIInfo() {
    return (<DevCategory title="UI State">
        <DevEntry title="React Version" text={ REACT_VERSION } />
    </DevCategory>)
}

function ClientInfo() {
    return (<DevCategory title="Client">
        <DevEntry title="User Agent" text={ navigator.userAgent } />
        <DevEntry title="Cores" text={ navigator.hardwareConcurrency.toString() } />
        <DevEntry title="Languages" text={ navigator.languages.join(", ") } />
    </DevCategory>)
}

// Main component for displaying helpful debug and telemetry information for development mode.
export function DevInfo() {
    return (
        <DevContainer>
            <RoutingInfo />
            <PaintInfo />
            <UIInfo />
            <ClientInfo />
        </DevContainer>
    )
}
