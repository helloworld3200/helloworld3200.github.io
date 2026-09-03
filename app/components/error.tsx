// Components to be used in error boundaries

import { choice } from "~/common/helper";
import { SwooshLink } from "./link";
import type { Route } from "../+types/root";
import { isRouteErrorResponse } from "react-router";

// Fun adlibs to display on errors
const adlibs = [
    "Whoopsie daisy!",
    "Wh..wh..what's going on?!",
    "Aw cripes...",
    "That's what SHE said!",
    "Hey, pal, I'm routing here!",
    "What did you do?!",
    "..We should exchange insurance info.",
    "You have the right to remain silent."
]

export const ERR_MSG_404 = "This page doesn't exist! Please check the URL and try again.";

// Dev mode error boundary
export function DevErrorBoundary({ message, stack }: { message: string; stack: string; }) {
  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1> Oops - error encountered in dev mode! </h1>
      <p>{message}</p>
      <pre className="w-full p-4 overflow-x-auto">
        <code>{stack}</code>
      </pre>
    </main>
  );
}

// Boundary for HTTP errors (4XX/5XX) e.g. 404s
export function HTTPErrorBoundary({ status, details }: { status: string; details: string; }) {
  return (
    <main className="flex flex-col gap-5 py-16 px-16 h-screen bg-(image:--dim-gradient)">
      <span className="text-8xl font-bold">{status}</span>
      <p className="text-2xl tracking-tight">{details}</p>
      <span className="text-lg tracking-tight text-slate-400"> { choice(adlibs) } </span>
      <SwooshLink content="Return Home" go="/" />
    </main>
  );
}

// Always 404 errors - can be used to simulate a 404 error
export function RSC404ErrorBoundary() {
  return <HTTPErrorBoundary status="404" details={ERR_MSG_404} />;
}

// Handle any thrown errors. Routes to specific pages for HTTP errors in prod, shows stack trace in dev
// and has a fallback if the error is unknown.
export function AutoErrorBoundary({ error }: Route.ErrorBoundaryProps) {
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
