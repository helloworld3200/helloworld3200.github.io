import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    // this is what we call a "nobodys gonna know :D"
    route("usethisrouteifyoudontlikeyourself1", "routes/visuals-testing.tsx")
] satisfies RouteConfig;
