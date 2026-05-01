"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const NAV = [
  { href: "#who", key: "nav.who" },
  { href: "#courses", key: "nav.courses" },
  { href: "#community", key: "nav.community" },
  { href: "#services", key: "nav.services" },
  { href: "#faq", key: "nav.faq" },
  { href: "#contact", key: "nav.contact" },
];

export const NavBar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      // Find current section in viewport.
      const ids = ["hero", "who", "courses", "community", "services", "faq", "contact"];
      let current = "hero";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = id;
          break;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const click = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        className="fixed top-0 inset-x-0 z-50 px-4 md:px-6 pt-4"
      >
        <div
          className={`max-w-[1400px] mx-auto transition-all duration-500 ${
            scrolled
              ? "bg-[rgba(10,12,22,0.78)] backdrop-blur-2xl border border-[var(--line)] rounded-2xl"
              : "bg-transparent border border-transparent rounded-2xl"
          }`}
        >
          <div className="flex items-center justify-between px-4 md:px-6 h-14">
            <Link
              href="#hero"
              onClick={(e) => click(e, "#hero")}
              className="flex items-center gap-2 group"
            >
              <span className="relative w-8 h-8 grid place-items-center rounded-lg overflow-hidden">
                <span className="absolute inset-0 bg-[var(--grad-button)] opacity-90 group-hover:opacity-100 transition" />
                <span className="absolute inset-[2px] bg-[var(--bg-0)] rounded-md" />
                <span className="relative cm-display text-[14px] cm-text-grad">CM</span>
              </span>
              <span className="cm-display text-[15px] tracking-tight hidden sm:block">
                Curious Machine
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {NAV.map((n) => {
                const id = n.href.replace("#", "");
                const on = active === id;
                return (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={(e) => click(e, n.href)}
                    className={`relative px-4 py-2 text-sm rounded-full transition ${
                      on ? "text-[var(--ink-1)]" : "text-[var(--ink-3)] hover:text-[var(--ink-1)]"
                    }`}
                  >
                    {on && (
                      <motion.span
                        layoutId="navpill"
                        className="absolute inset-0 rounded-full bg-white/[0.06] border border-[var(--line)]"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative">{t(n.key)}</span>
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage(language === "vi" ? "en" : "vi")}
                className="cm-mono text-[11px] tracking-widest uppercase text-[var(--ink-3)] hover:text-[var(--ink-1)] transition px-3 py-1.5 rounded-full border border-[var(--line)] hover:border-[var(--line-strong)]"
              >
                {language === "vi" ? "EN" : "VI"}
              </button>
              <a
                href="#contact"
                onClick={(e) => click(e, "#contact")}
                className="hidden md:inline-flex cm-btn cm-btn-primary text-xs h-9"
              >
                {t("nav.cta")}
              </a>
              <button
                aria-label="menu"
                className="lg:hidden w-9 h-9 grid place-items-center rounded-lg border border-[var(--line)]"
                onClick={() => setOpen((s) => !s)}
              >
                <span className="block w-4 h-[1.5px] bg-[var(--ink-1)] relative">
                  <span
                    className="absolute -top-[5px] left-0 w-4 h-[1.5px] bg-[var(--ink-1)] transition"
                    style={{ transform: open ? "translateY(5px) rotate(45deg)" : "" }}
                  />
                  <span
                    className="absolute -bottom-[5px] left-0 w-4 h-[1.5px] bg-[var(--ink-1)] transition"
                    style={{
                      transform: open ? "translateY(-5px) rotate(-45deg)" : "",
                      opacity: open ? 1 : 1,
                    }}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-[rgba(5,6,11,0.96)] backdrop-blur-xl pt-24"
          >
            <div className="flex flex-col px-8 gap-2">
              {NAV.map((n, i) => (
                <motion.a
                  key={n.href}
                  href={n.href}
                  onClick={(e) => click(e, n.href)}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1, transition: { delay: i * 0.05 } }}
                  className="cm-display text-3xl py-3 border-b border-[var(--line)]"
                >
                  {t(n.key)}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={(e) => click(e, "#contact")}
                className="cm-btn cm-btn-primary mt-6 self-start"
              >
                {t("nav.cta")} →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
