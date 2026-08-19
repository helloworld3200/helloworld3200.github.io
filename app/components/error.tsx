// Components to be used in error boundaries

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
// TODO: Finish implementing the upgraded error boundary
export function HTTPErrorBoundary({ status, details }: { status: string; details: string; }) {
  return (
    <main className="flex flex-col py-16 px-16 h-screen">
      <h3>{status}</h3>
      <p>{details}</p>
    </main>
  );
}
