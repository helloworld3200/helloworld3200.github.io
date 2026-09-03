// Utilities related to setting up and getting routing info
// with shared helpers between both the routing config itself and other parts that need data on routing

import { useLocation } from "react-router";

export const DEV_ROUTE_PREFIX = "/dev";

export interface RouteInfo {
    path: string;
    isDevRoute: boolean;
}

export function useRouteInfo() {
    const location = useLocation();

    const routeInfo: RouteInfo = {
        path: location.pathname,
        isDevRoute: location.pathname.startsWith(DEV_ROUTE_PREFIX),
    };

    return routeInfo;
}
