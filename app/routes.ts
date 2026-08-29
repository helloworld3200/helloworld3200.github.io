import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

// Base routes
const routes = [
    index("routes/wip.tsx"),
]

// Development-only routes
if (import.meta.env.DEV) {
    routes.push(
        ...prefix("dev/", [
            // Graphics testing
            route("visuals-testing", "routes/dev/visuals-testing.tsx"),
            // Always routes to home
            route("home", "routes/home.tsx")
        ])
    )
}

export default routes satisfies RouteConfig;
