// Components to be used in error boundaries

import { choice } from "~/common/helper";
import { SwooshLink } from "./link";

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
  return (<HTTPErrorBoundary status="404" details="This page doesn't exist! Please check the URL and try again." />);
}
