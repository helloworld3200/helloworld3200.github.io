// Dev info component meant to be visible on routes only during development mode.
// Displays some useful debug info and telemetry helpful for development/testing

import { Code } from "lucide-react";
import { type PropsWithChildren } from "react";
import { useFullDateTime } from "~/common/time";
import type { Empty } from "~/common/helper";

// Header for telemetry display - includes title & current local datetime
function DevHeader() {
    return (
        <div className="flex flex-row items-center justify-between striped-bg-blue-800 border-b px-8 py-5 border-blue-800">
            <div className="flex flex-row items-center justify-start gap-2">
                <Code />
                <span className="text-2xl font-semibold tracking-tight"> Development Telemetry </span>
            </div>
            <span className="text-lg font-mono font-light tracking-tight">{ useFullDateTime() }</span>
        </div>
    )
}

// Telemetry category to dispaly a list of data e.g. DevEntrys in a related section
function DevCategory({ title, children }: PropsWithChildren<{ title: string }>) {
    return (<div>

    </div>)
}

// Entry in each category - can be used alongside other custom UI to display data in each category
// but this should be the bulk of data
function DevEntry({}) {
    return (<div />)
}

// Overarching container for all the developer info. Includes a header and a category list.
function DevContainer({ children }: PropsWithChildren<Empty>) {
    return (<div className="bg-blue-950">
        <DevHeader />
        <div className="flex flex-col gap-2 h-screen px-8 py-5">
            {children}
        </div>
    </div>)
}

// Info category about current routing
function RoutingInfo() {

}

// Info category about UI paint/render info
function PaintInfo() {

}

// Info category about current UI state
function UIInfo() {

}

// Main component for displaying helpful debug and telemetry information for development mode.
export function DevInfo() {
    return (
        <DevContainer>

        </DevContainer>
    )
}
