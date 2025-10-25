import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json({ error: "Content-Type must be application/json" }, { status: 415 });
    }

    const body = await req.json();
    const { name, email, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json({ error: "name, email, and message are required" }, { status: 400 });
    }

    const doc = {
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      message: String(message).trim(),
      createdAt: new Date(),
    };

    const db = await getDb();
    const result = await db.collection("contacts").insertOne(doc);

    return NextResponse.json({ ok: true, id: result.insertedId }, { status: 201 });
  } catch (err) {
    console.error("/api/contact error", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ ok: true });
}
