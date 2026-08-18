// Dev info component meant to be visible on routes only during development mode.
// Displays some useful debug info and telemetry helpful for development/testing

import { Code } from "lucide-react";
import type { PropsWithChildren } from "react";
import type { Empty } from "~/common/helper";

function DevHeader() {
    return (
        <div className="flex flex-row items-center justify-between striped-bg-blue-800 border-b px-8 py-5 border-blue-800">
            <div className="flex flex-row items-center justify-start gap-2">
                <Code />
                <span className="text-2xl font-semibold tracking-tight"> Development Telemetry </span>
            </div>
            <span className="text-lg font-mono font-light">1234567890</span>
        </div>
    )
}

function DevContainer({ children }: PropsWithChildren<Empty>) {
    return (<div className="bg-blue-950">
        <DevHeader />
        <div className="flex flex-col gap-2 h-screen px-8 py-5">
            {children}
        </div>
    </div>)
}

export function DevInfo() {
    return (
        <DevContainer>

        </DevContainer>
    )
}
