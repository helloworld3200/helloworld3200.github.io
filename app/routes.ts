import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

// Base routes
const routes = [
    index("routes/home.tsx"),
]

// Development-only routes
if (import.meta.env.DEV) {
    routes.push(
        ...prefix("dev/", [
            route("visuals-testing", "routes/visuals-testing.tsx")
        ])
    )
}

export default routes satisfies RouteConfig;
