"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Globe } from "lucide-react";
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
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

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

  // Lock body scroll, trap focus, and handle Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);

    const firstLink = menuRef.current?.querySelector<HTMLElement>("a, button");
    firstLink?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

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
              ? "bg-[rgba(255,255,255,0.78)] backdrop-blur-2xl border border-[var(--line)] rounded-2xl shadow-[0_8px_30px_-12px_rgba(15,18,40,0.10)]"
              : "bg-transparent border border-transparent rounded-2xl"
          }`}
        >
          <div className="flex items-center justify-between px-4 md:px-6 h-14">
            <Link
              href="#hero"
              onClick={(e) => click(e, "#hero")}
              aria-label="Curious Machine — home"
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

            <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
              {NAV.map((n) => {
                const id = n.href.replace("#", "");
                const on = active === id;
                return (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={(e) => click(e, n.href)}
                    aria-current={on ? "true" : undefined}
                    className={`relative px-4 py-2 text-sm rounded-full transition ${
                      on ? "text-[var(--ink-1)]" : "text-[var(--ink-3)] hover:text-[var(--ink-1)]"
                    }`}
                  >
                    {on && (
                      <motion.span
                        layoutId="navpill"
                        className="absolute inset-0 rounded-full bg-[var(--tint-2)] border border-[var(--line)]"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        aria-hidden
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
                aria-label={`Switch language to ${language === "vi" ? "English" : "Vietnamese"}`}
                className="inline-flex items-center gap-1.5 cm-mono text-[11px] tracking-widest uppercase text-[var(--ink-3)] hover:text-[var(--ink-1)] transition px-3 h-9 rounded-full border border-[var(--line)] hover:border-[var(--line-strong)]"
              >
                <Globe size={12} aria-hidden />
                {language === "vi" ? "EN" : "VI"}
              </button>
              <a
                href="#contact"
                onClick={(e) => click(e, "#contact")}
                className="hidden md:inline-flex cm-btn cm-btn-primary text-xs h-9"
              >
                {t("nav.cta")}
                <ArrowUpRight size={14} aria-hidden />
              </a>
              <button
                ref={toggleRef}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="mobile-menu"
                className="lg:hidden w-11 h-11 grid place-items-center rounded-xl border border-[var(--line)] hover:border-[var(--line-strong)] transition"
                onClick={() => setOpen((s) => !s)}
              >
                {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-[rgba(247,248,252,0.97)] backdrop-blur-xl pt-24"
          >
            <nav aria-label="Mobile primary" className="flex flex-col px-8 gap-2">
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
                {t("nav.cta")}
                <ArrowUpRight size={16} aria-hidden />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
