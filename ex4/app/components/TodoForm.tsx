"use client";
import { useActionState } from "react";
import { createTodo } from "@/app/todos/actions";
import type { ActionState } from "@/types/todo";
const initial: ActionState = { ok: false };
export default function TodoForm() {
  const [state, action, pending] = useActionState(createTodo, initial);
  return <form action={action} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
    <h2 className="text-lg font-semibold">Add a todo</h2><div className="mt-4 grid gap-3 sm:grid-cols-[1fr_1fr_150px]">
      <label className="sm:col-span-2">Title<input name="title" required maxLength={120} placeholder="What needs doing?" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />{state.errors?.title && <span className="text-sm text-red-600">{state.errors.title}</span>}</label>
      <label>Description<input name="description" placeholder="Optional details" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" /></label>
      <label>Priority<select name="priority" defaultValue="medium" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"><option value="high">High</option><option value="medium">Medium</option><option value="low">Low</option></select>{state.errors?.priority && <span className="text-sm text-red-600">{state.errors.priority}</span>}</label>
    </div><button disabled={pending} className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white disabled:opacity-50">{pending ? "Creating…" : "Create todo"}</button>{state.message && <p className={`mt-3 text-sm ${state.ok ? "text-emerald-700" : "text-red-600"}`}>{state.message}</p>}
  </form>;
}
