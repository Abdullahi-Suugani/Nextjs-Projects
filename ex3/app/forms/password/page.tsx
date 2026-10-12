import { redirect } from "next/navigation";

async function submitPassword(formData: FormData) {
  "use server";
  const password = String(formData.get("password") ?? "");
  if (password.length < 6) redirect("/forms/password?error=short");
  redirect("/forms/password?success=1");
}

export default async function PasswordFormPage({ searchParams }: { searchParams: Promise<{ success?: string; error?: string }> }) {
  const params = await searchParams;
  return <section className="card"><h1>Password Form</h1><form action={submitPassword} className="form"><div className="field"><label htmlFor="password">Password</label><input id="password" name="password" type="password" required autoComplete="new-password" /></div><button className="button" type="submit">Submit Password</button></form>{params.success && <p className="message success" role="status">Password submitted successfully!</p>}{params.error && <p className="message error" role="alert">Password must be at least 6 characters long.</p>}</section>;
}
