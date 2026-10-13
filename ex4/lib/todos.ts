import { ObjectId } from "mongodb";
import { getDb } from "./mongodb";
import type { Priority, Todo, TodoView } from "@/types/todo";

const collection = async () => (await getDb()).collection<Todo>("todos");
const priorityRank: Record<Priority, number> = { high: 0, medium: 1, low: 2 };
export function escapeRegex(value: string) { return value.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&"); }

export async function listTodos(search = "", status = "all", priority = "all"): Promise<TodoView[]> {
  const query: Record<string, unknown> = {};
  if (search.trim()) query.title = { $regex: escapeRegex(search.trim()), $options: "i" };
  if (status === "completed") query.completed = true;
  if (status === "incomplete") query.completed = false;
  if (["low", "medium", "high"].includes(priority)) query.priority = priority;
  const docs = await (await collection()).find(query).sort({ createdAt: -1 }).toArray();
  return docs.map((todo) => ({ ...todo, id: todo._id.toString(), priority: todo.priority || "medium" })).sort((a, b) => priorityRank[b.priority] - priorityRank[a.priority] || b.createdAt.getTime() - a.createdAt.getTime()).map(({ _id, ...todo }) => todo as TodoView);
}

export async function validIds(ids: string[]) { return ids.filter((id) => ObjectId.isValid(id)).map((id) => new ObjectId(id)); }
