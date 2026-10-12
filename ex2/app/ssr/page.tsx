export const dynamic = "force-dynamic";

export default function SsrPage() {
  const renderedTime = new Date().toLocaleTimeString();
  return (
    <section className="card">
      <h1>Server-Side Rendering</h1>
      <p>This time was generated on the server when the page was rendered:</p>
      <p className="count">{renderedTime}</p>
    </section>
  );
}
