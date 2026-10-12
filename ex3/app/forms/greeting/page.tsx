import { redirect } from "next/navigation";

async function submitName(formData: FormData) {
  "use server";
  const firstName = String(formData.get("firstName") ?? "").trim();
  const lastName = String(formData.get("lastName") ?? "").trim();
  if (!firstName || !lastName) redirect("/forms/greeting?error=missing");
  redirect(`/forms/greeting?first=${encodeURIComponent(firstName)}&last=${encodeURIComponent(lastName)}`);
}

export default async function GreetingFormPage({ searchParams }: { searchParams: Promise<{ first?: string; last?: string; error?: string }> }) {
  const params = await searchParams;
  return <section className="card"><h1>Full Name Greeting</h1><form action={submitName} className="form"><div className="field"><label htmlFor="firstName">First name</label><input id="firstName" name="firstName" required autoComplete="given-name" /></div><div className="field"><label htmlFor="lastName">Last name</label><input id="lastName" name="lastName" required autoComplete="family-name" /></div><button className="button" type="submit">Submit Name</button></form>{params.error && <p className="message error" role="alert">Please provide both a first name and a last name.</p>}{params.first && params.last && <p className="message success" role="status">Hello, {params.first} {params.last}!</p>}</section>;
}
