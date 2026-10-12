import { Suspense } from "react";
import SlowComponent from "../components/SlowComponent";

export default function StreamingPage() {
  return (
    <section className="card">
      <h1>Streaming Demo</h1>
      <p>The fallback is sent while the slow Server Component resolves.</p>
      <Suspense fallback={<p className="loading">Loading...</p>}>
        <SlowComponent />
      </Suspense>
    </section>
  );
}
