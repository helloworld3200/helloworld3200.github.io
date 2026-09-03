import {
  isRouteErrorResponse,
  Links,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import { Footer } from "./components/footer";
import { FONT_SRC, NAME } from "./common/consts";
import { type Empty } from "./common/helper";
import { SquircleShapePolyfill } from "./components/squircle";
import { DevInfo } from "./components/dev-inf";
import type { PropsWithChildren } from "react";

// Add styling
import "./app.css";

// Export automatic error boundary as imported from error.tsx
export { AutoErrorBoundary as ErrorBoundary } from "./components/error";

// Technically it's recommended to migrate from the React Router links() function
// to directly using <link> tags in React 19+, but this works well anyway 
// and will continue to work and is (imo) slightly easier to work with when 
// you're doing programmatic link-building like I am here.

export const links: Route.LinksFunction = () => {
  // Preconnect to Google Font servers as an optimization
  const fontPreconnects = [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
  ];

  // Build font link tags from FONT_SRC array
  const fontLinks = FONT_SRC.map((href) => ({ rel: "stylesheet", href }));

  // Combine all needed links together
  return [
    ...fontPreconnects,
    ...fontLinks
  ]
};

function MetaInfo() {
  return (<>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>{`${NAME}'s portfolio`}</title>
    <meta name="description" content="Welcome to my portfolio! WIP." />
  </>)
}

// Various polyfills, put them all here
function Polyfills() {
  return (<>
    <SquircleShapePolyfill />
  </>)
}

// Root layout which is applied to every page. Has foundational containers e.g. <html>, <body>, etc
// and global components like the footer.
export function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <MetaInfo />
        {/* Favicon handled statically via a favicon.ico file in /public dir */}
        <Links />
      </head>
      <body className="dark">
        <Polyfills />
        {children}
        <Footer />
        { import.meta.env.DEV && <DevInfo /> }
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}



export default function App() { return <Outlet />; }
