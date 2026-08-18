// Time-related helper constants, functions, types, etc.

import { useState, useEffect } from "react";
import { Temporal } from "temporal-polyfill";

// Use with Temporal.ZonedDateTime.toLocaleString(...FULL_TIME_FORMAT) to get YYYY-MM-DD,HH:mm:ss format.
export const FULL_TIME_FORMAT: Parameters<Temporal.ZonedDateTime["toLocaleString"]> = [
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

export function useFullDateTime() {
    const [dt, setDt] = useState<string>();

    useEffect(() => {
        const interval = setInterval(() => {
            const now = Temporal.Now.zonedDateTimeISO();

            let formatted = now.toLocaleString(...FULL_TIME_FORMAT);
            formatted = formatted.replace(",", " "); // repalce comma with space

            setDt(formatted);
        }, SECOND_MS);

        return () => clearInterval(interval);
    }, []);

    return dt;
}

