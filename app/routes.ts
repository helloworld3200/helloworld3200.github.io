import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";
import { DEV_ROUTE_PREFIX } from "./common/routing-util";

// Base routes
const routes = [
    index("routes/wip.tsx"),
    // We have to explicitly specify this route because GH pages expects a 404.html file to be present
    route("404", "routes/err404.tsx"),
]

// Development-only routes
if (import.meta.env.DEV) {
    routes.push(
        ...prefix(DEV_ROUTE_PREFIX, [
            // Graphics testing
            route("visuals-testing", "routes/dev/visuals-testing.tsx"),
            // Always routes to home
            route("home", "routes/home.tsx"),
        ])
    )
}

export default routes satisfies RouteConfig;
