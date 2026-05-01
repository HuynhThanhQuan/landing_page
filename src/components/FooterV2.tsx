"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const COLS = [
  {
    titleKey: "footer.col.learn",
    links: [
      { href: "#courses", labelKey: "footer.link.courses" },
      { href: "#community", labelKey: "footer.link.tutorials" },
      { href: "#community", labelKey: "footer.link.blogs" },
      { href: "#community", labelKey: "footer.link.cases" },
    ],
  },
  {
    titleKey: "footer.col.connect",
    links: [
      { href: "#community", labelKey: "footer.link.discord" },
      { href: "#community", labelKey: "footer.link.events" },
      { href: "#community", labelKey: "footer.link.newsletter" },
    ],
  },
  {
    titleKey: "footer.col.work",
    links: [
      { href: "#services", labelKey: "footer.link.consulting" },
      { href: "#services", labelKey: "footer.link.training" },
      { href: "#contact", labelKey: "footer.link.contact" },
    ],
  },
];

export const FooterV2 = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-[var(--line)] mt-20">
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(800px 300px at 50% 100%, rgba(122,231,255,0.08), transparent 60%)",
        }}
      />

      <div className="relative cm-section py-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="relative w-10 h-10 grid place-items-center rounded-lg overflow-hidden">
                <span className="absolute inset-0 bg-[var(--grad-button)]" />
                <span className="absolute inset-[2px] bg-[var(--bg-0)] rounded-md" />
                <span className="relative cm-display text-base cm-text-grad">CM</span>
              </span>
              <span className="cm-display text-xl">Curious Machine</span>
            </div>
            <p className="text-[var(--ink-3)] mt-5 max-w-md text-sm leading-relaxed">
              {t("footer.tagline")}
            </p>

            <div className="mt-8 cm-card cm-card-pad max-w-md">
              <div className="cm-mono text-[10px] uppercase tracking-widest text-[var(--accent)]">
                {t("footer.newsletter.label")}
              </div>
              <div className="cm-display text-base mt-1">
                {t("footer.newsletter.title")}
              </div>
              <form className="mt-4 flex gap-2">
                <input
                  type="email"
                  placeholder={t("footer.newsletter.placeholder")}
                  className="flex-1 bg-white/[0.03] border border-[var(--line)] rounded-full px-4 py-2 text-sm focus:border-[var(--accent)] outline-none"
                />
                <button type="submit" className="cm-btn cm-btn-primary text-xs h-9">
                  →
                </button>
              </form>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
            {COLS.map((col) => (
              <div key={col.titleKey}>
                <div className="cm-mono text-[10px] uppercase tracking-widest text-[var(--ink-4)]">
                  {t(col.titleKey)}
                </div>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.labelKey}>
                      <a
                        href={l.href}
                        className="text-sm text-[var(--ink-2)] hover:text-[var(--ink-1)] transition"
                      >
                        {t(l.labelKey)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--line)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="cm-mono text-[10px] uppercase tracking-widest text-[var(--ink-4)]">
            © {new Date().getFullYear()} Curious Machine · {t("footer.rights")}
          </div>
          <div className="flex items-center gap-3 cm-mono text-[10px] uppercase tracking-widest text-[var(--ink-4)]">
            <span className="cm-dot" />
            {t("footer.status")}
          </div>
        </div>
      </div>
    </footer>
  );
};
