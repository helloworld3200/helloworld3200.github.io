import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

// Base routes
const routes = [
    index("routes/home.tsx"),
]

// Development-only routes
// TODO: Add a layout file here which displays debug info for the dev only pages
if (import.meta.env.DEV) {
    routes.push(
        ...prefix("dev/", [
            route("visuals-testing", "routes/dev/visuals-testing.tsx")
        ])
    )
}

export default routes satisfies RouteConfig;
