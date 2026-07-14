"use client";

import { useState } from "react";
import { form as cfg, waLink } from "@/lib/site";

const input =
  "w-full rounded-xl border-[1.5px] border-line bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-accent";

export default function ContactForm() {
  const [v, setV] = useState<Record<string, string>>({});

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(waLink(cfg.buildMessage(v)), "_blank");
  };

  return (
    <form onSubmit={submit} className="rounded-2xl bg-card p-8 shadow-lg shadow-black/5">
      {cfg.fields.map((f, i) => (
        <div key={f.id}>
          <label htmlFor={f.id} className={`mb-1.5 block text-sm font-bold text-heading ${i > 0 ? "mt-4" : ""}`}>
            {f.label}
          </label>
          {f.textarea ? (
            <textarea
              id={f.id}
              rows={3}
              className={input}
              placeholder={f.placeholder}
              value={v[f.id] ?? ""}
              onChange={(e) => setV({ ...v, [f.id]: e.target.value })}
            />
          ) : (
            <input
              id={f.id}
              required
              className={input}
              placeholder={f.placeholder}
              value={v[f.id] ?? ""}
              onChange={(e) => setV({ ...v, [f.id]: e.target.value })}
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-accent px-8 py-3.5 font-bold text-accent-contrast transition-opacity hover:opacity-85"
      >
        {cfg.cta}
      </button>
    </form>
  );
}
