import Counter from "../components/Counter";

export default function CounterPage() {
  return (
    <section className="card">
      <h1>Interactive Counter</h1>
      <p>
        {" "}
        this client component updates in the browser while this page remains a
        Server Component.
      </p>
      <Counter />
    </section>
  );
}
