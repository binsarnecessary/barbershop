import { site, footer } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-footer-bg pt-14 text-footer-text">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-11 md:grid-cols-3">
        <div>
          <h4 className="mb-4 font-heading text-lg font-bold text-footer-heading">
            {site.logo} {site.name}
          </h4>
          <p className="max-w-xs text-sm">{footer.about}</p>
        </div>
        {footer.columns.map((c) => (
          <div key={c.title}>
            <h4 className="mb-4 font-heading text-lg font-bold text-footer-heading">{c.title}</h4>
            <ul className="space-y-2.5 text-sm">
              {c.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition-colors hover:text-accent">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs">
        © {new Date().getFullYear()} {site.name}. Website by{" "}
        <a href="#" className="text-accent">Studio Website</a>.
      </div>
    </footer>
  );
}
