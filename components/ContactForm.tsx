"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Request failed (${res.status})`);
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      const message = err instanceof Error ? err.message : "Something went wrong";
      setError(message);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          className="w-full rounded border px-3 py-2 text-black"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className="w-full rounded border px-3 py-2 text-black"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
        <textarea
          id="message"
          className="w-full rounded border px-3 py-2 text-black"
          rows={5}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          required
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
      >
        {status === "submitting" ? "Submitting..." : "Send"}
      </button>
      {status === "success" && (
        <p className="text-green-600">Thanks! We received your message.</p>
      )}
      {status === "error" && (
        <p className="text-red-600">{error}</p>
      )}
    </form>
  );
}
