import type { ObjectId } from "mongodb";

export const priorities = ["low", "medium", "high"] as const;
export type Priority = (typeof priorities)[number];
export type Todo = { _id: ObjectId; title: string; description?: string; priority: Priority; completed: boolean; createdAt: Date; updatedAt: Date };
export type TodoView = Omit<Todo, "_id"> & { id: string };
export type ActionState = { ok: boolean; message?: string; errors?: Record<string, string> };
