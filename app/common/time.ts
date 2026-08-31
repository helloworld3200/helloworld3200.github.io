// Time-related helper constants, functions, types, etc.

import { useState, useEffect } from "react";
import { Temporal } from "temporal-polyfill";
import { STD_LOADING_MSG } from "./ui-values";

export type DateTimeFmt = Parameters<Temporal.ZonedDateTime["toLocaleString"]>

// Use with Temporal.ZonedDateTime.toLocaleString(...FULL_TIME_FORMAT) to get YYYY-MM-DD,HH:mm:ss format.
export const FULL_TIME_FORMAT: DateTimeFmt = [
    "en-CA",
    {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }
];

export const SECOND_MS = 1000;

export function useFullDateTime(
    opt: DateTimeFmt = FULL_TIME_FORMAT, 
    intervalMs: number = SECOND_MS,
    loadingMsg: string = STD_LOADING_MSG
) {
    const [dt, setDt] = useState<string>();

    function updateDt() {
        const now = Temporal.Now.zonedDateTimeISO();

        let formatted = now.toLocaleString(...opt);
        formatted = formatted.replace(",", " "); // replace comma with space

        setDt(formatted);
    }

    useEffect(() => {
        updateDt();

        const interval = setInterval(updateDt, intervalMs);

        return () => clearInterval(interval);
    }, []);

    return dt ?? loadingMsg;
}

