import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("Missing MONGODB_URI. Set it in .env.local");
}

let client: MongoClient | undefined;
let clientPromise: Promise<MongoClient> | undefined;

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV !== "production") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export async function getClient(): Promise<MongoClient> {
  return clientPromise!;
}

export async function getDb(dbName?: string): Promise<Db> {
  const client = await getClient();
  const name = dbName || process.env.MONGODB_DB || (uri ? extractDbNameFromUri(uri) : null) || "test";
  return client.db(name);
}

function extractDbNameFromUri(connectionString: string): string | undefined {
  try {
    const url = new URL(connectionString);
    const pathname = url.pathname?.replace(/^\//, "");
    return pathname || undefined;
  } catch {
    return undefined;
  }
}
