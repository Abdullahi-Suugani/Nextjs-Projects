"use server";
import { revalidatePath } from "next/cache";
import { ObjectId } from "mongodb";
import { getDb } from "@/lib/mongodb";
import { validIds } from "@/lib/todos";
import type { ActionState, Priority } from "@/types/todo";

export async function createTodo(_previous: ActionState, formData: FormData): Promise<ActionState> {
  const title = String(formData.get("title") || "").trim();
  const description = String(formData.get("description") || "").trim();
  const priority = String(formData.get("priority") || "medium");
  const errors: Record<string, string> = {};
  if (!title) errors.title = "A title is required.";
  else if (title.length > 120) errors.title = "Keep the title under 120 characters.";
  if (!(["low", "medium", "high"] as string[]).includes(priority)) errors.priority = "Choose a valid priority.";
  if (Object.keys(errors).length) return { ok: false, errors };
  const now = new Date();
  await (await getDb()).collection("todos").insertOne({ title, description, priority: priority as Priority, completed: false, createdAt: now, updatedAt: now });
  revalidatePath("/todos");
  return { ok: true, message: "Todo created successfully." };
}

export async function bulkUpdate(ids: string[], completed: boolean): Promise<ActionState> {
  const safeIds = await validIds(ids); if (!safeIds.length) return { ok: false, message: "Select at least one valid todo." };
  await (await getDb()).collection("todos").updateMany({ _id: { $in: safeIds } }, { $set: { completed, updatedAt: new Date() } });
  revalidatePath("/todos"); return { ok: true, message: `${safeIds.length} todo${safeIds.length === 1 ? "" : "s"} updated.` };
}
export async function bulkDelete(ids: string[]): Promise<ActionState> {
  const safeIds = await validIds(ids); if (!safeIds.length) return { ok: false, message: "Select at least one valid todo." };
  await (await getDb()).collection("todos").deleteMany({ _id: { $in: safeIds } });
  revalidatePath("/todos"); return { ok: true, message: `${safeIds.length} todo${safeIds.length === 1 ? "" : "s"} deleted.` };
}
