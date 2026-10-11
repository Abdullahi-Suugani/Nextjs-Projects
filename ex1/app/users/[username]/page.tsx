type UserPageProps = { params: Promise<{ username: string }> };

export default async function UserPage({ params }: UserPageProps) {
  const { username } = await params;

  return (
    <main>
      <section className="card">
        <h1>Welcome, {username}!</h1>
      </section>
    </main>
  );
}
