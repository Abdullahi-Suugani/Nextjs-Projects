function waitThreeSeconds() {
  return new Promise((resolve) => setTimeout(resolve, 3000));
}

export default async function SlowComponent() {
  await waitThreeSeconds();
  return (
    <div>
      <h2>Slow content loaded</h2>
      <p>The Server Component finished resolving after three seconds.</p>
    </div>
  );
}
