import { redirect } from "next/navigation";

async function submitEmail(formData: FormData) {
  "use server";
  const email = String(formData.get("email") ?? "").trim();
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!valid) redirect("/forms/basic?error=invalid");
  console.log(`Submitted email: ${email}`);
  redirect("/forms/basic?success=1");
}

export default async function BasicFormPage({
  searchParams,
}: {
  searchParams: Promise<{ success?: string; error?: string }>;
}) {
  const params = await searchParams;
  return (
    <section className="card">
      <h1>Basic Form</h1>
      <form action={submitEmail} className="form">
        <div className="field">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
          />
        </div>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
      {params.success && (
        <p className="message success" role="status">
          Thanks for submitting!
        </p>
      )}
      {params.error && (
        <p className="message error" role="alert">
          Please enter a valid email address.
        </p>
      )}
    </section>
  );
}
