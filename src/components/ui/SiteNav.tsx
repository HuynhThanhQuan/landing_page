"use client";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cssVars } from "@/components/motion/css";
import { useLanguage } from "@/contexts/LanguageContext";
import { pick, sections } from "@/lib/content";
import { ThemeToggle } from "./ThemeToggle";

export function SiteNav({ onOpenPalette }: { onOpenPalette: () => void }) {
  const { language, setLanguage } = useLanguage();
  const vi = language === "vi";
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 140 && !open);
  });

  useEffect(() => {
    if (!onHome) {
      setActive(null);
      return;
    }
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          setActive((prev) => (e.isIntersecting ? e.target.id : prev === e.target.id ? null : prev));
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [onHome]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const items = [
    ...sections.map((s) => ({
      key: s.id,
      href: `/#${s.id}`,
      label: pick(s.label, vi),
      current: (active === s.id ? "location" : undefined) as "location" | "page" | undefined,
    })),
    {
      key: "notes",
      href: "/notes/",
      label: vi ? "Bài viết" : "Notes",
      current: (pathname.startsWith("/notes") ? "page" : undefined) as "location" | "page" | undefined,
    },
  ];

  return (
    <>
      <header className={`lab-nav${hidden ? " is-hidden" : ""}`}>
        <div className="lab-nav-bar lab-glass">
          <Link href="/" className="lab-brand" onClick={() => setOpen(false)}>
            <b>CM</b>
            <span>Curious Machine</span>
          </Link>
          <nav className="lab-nav-links" aria-label="Main">
            {items.map((it) => (
              <Link key={it.key} href={it.href} aria-current={it.current}>
                {it.label}
              </Link>
            ))}
          </nav>
          <div className="lab-nav-tools">
            <button
              type="button"
              className="lab-tool lab-tool-kbd"
              onClick={onOpenPalette}
              aria-haspopup="dialog"
              aria-label={vi ? "Mở bảng lệnh (Ctrl hoặc ⌘ + K)" : "Open command palette (Ctrl or ⌘ + K)"}
            >
              <span>{vi ? "Tìm nhanh" : "Search"}</span>
              <kbd className="lab-kbd">⌘K</kbd>
            </button>
            <button
              type="button"
              className="lab-tool"
              onClick={() => setLanguage(vi ? "en" : "vi")}
              aria-label={vi ? "Switch to English" : "Chuyển sang tiếng Việt"}
            >
              {vi ? "EN" : "VI"}
            </button>
            <ThemeToggle />
            <button
              type="button"
              className="lab-tool lab-burger"
              aria-expanded={open}
              aria-controls={open ? "lab-menu" : undefined}
              aria-label={open ? (vi ? "Đóng menu" : "Close menu") : vi ? "Mở menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
              </svg>
            </button>
          </div>
        </div>
      </header>
      {open && (
        <nav id="lab-menu" className="lab-menu" aria-label="Mobile">
          {items.map((it, i) => (
            <span key={it.key} className="lab-menu-item" style={cssVars({ "--i": i })}>
              <Link href={it.href} aria-current={it.current} onClick={() => setOpen(false)}>
                {it.label}
              </Link>
            </span>
          ))}
        </nav>
      )}
    </>
  );
}
