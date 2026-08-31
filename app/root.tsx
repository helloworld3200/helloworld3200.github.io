import {
  isRouteErrorResponse,
  Links,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import { Footer } from "./components/footer";
import { FONT_SRC, NAME, ERR_MSG_404 } from "./common/consts";
import { type Empty } from "./common/helper";
import { SquircleShapePolyfill } from "./components/squircle";
import { DevInfo } from "./components/dev-inf";
import type { PropsWithChildren } from "react";
import { DevErrorBoundary, HTTPErrorBoundary } from "./components/error";

// Add styling
import "./app.css";

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

// Handle any thrown errors. Routes to specific pages for HTTP errors in prod, shows stack trace in dev
// and has a fallback if the error is unknown.
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let status = "Unknown Error";
  let details = "Whoops - something went wrong! Please try again later.";

  const isDevError = import.meta.env.DEV && error && error instanceof Error;
  const GENERIC_ERR_STACK_MSG = "Error stack trace unknown!";

  // Runs on 4XX/5XX errors. In prod this should ALWAYS be true!
  // If for some reason it isn't - the default error message above will be shown.
  // Curious to see how this works since we're deploying to Github Pages statically
  // so will react router trim down ErrorBoundary to only ever render the 404 response? We'll see!
  if (isRouteErrorResponse(error)) {
    const is404 = error.status === 404;

    status = error.status.toString();
    
    details = is404
        ? ERR_MSG_404
        : error.statusText || details;
  } else if (isDevError) {
    // In dev mode, show the error message and stack trace
    return <DevErrorBoundary message={error.message} stack={error.stack || GENERIC_ERR_STACK_MSG} />;
  }

  return <HTTPErrorBoundary status={status} details={details} />;
}

export default function App() { return <Outlet />; }
