import { MongoClient } from "mongodb";

const globalForMongo = globalThis as unknown as { mongoPromise?: Promise<MongoClient> };
function createClient() {
  const uri = process.env.MONGODB_URI;
  if (!uri) return Promise.reject(new Error("Missing MONGODB_URI environment variable"));
  return new MongoClient(uri).connect();
}
async function getClient() {
  if (!globalForMongo.mongoPromise) globalForMongo.mongoPromise = createClient();
  return globalForMongo.mongoPromise;
}

export async function getDb() {
  const connected = await getClient();
  return connected.db(process.env.MONGODB_DB || "advanced_todo");
}
