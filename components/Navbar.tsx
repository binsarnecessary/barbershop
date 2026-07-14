"use client";

import { useState } from "react";
import { site, nav } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-nav-bg/90 backdrop-blur-md">
      <nav className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5">
        <a href="#" className="flex items-center gap-2 font-heading text-xl font-bold text-nav-text">
          <span className="text-2xl">{site.logo}</span>
          {site.name}
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {nav.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-nav-text/85 transition-colors hover:text-accent">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={nav.cta.href}
              className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-contrast transition-opacity hover:opacity-85"
            >
              {nav.cta.label}
            </a>
          </li>
        </ul>
        <button aria-label="Menu" className="text-2xl text-nav-text md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </nav>
      {open && (
        <div className="border-t border-line/60 bg-nav-bg px-5 pb-5 md:hidden">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-nav-text">
              {l.label}
            </a>
          ))}
          <a
            href={nav.cta.href}
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-accent px-5 py-2.5 text-center text-sm font-semibold text-accent-contrast"
          >
            {nav.cta.label}
          </a>
        </div>
      )}
    </header>
  );
}
