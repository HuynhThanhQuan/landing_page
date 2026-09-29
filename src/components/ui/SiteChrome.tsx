// src/components/ui/SiteChrome.tsx
"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CommandPalette } from "./CommandPalette";
import { Cursor } from "./Cursor";
import { ScrollProgress } from "./ScrollProgress";
import { SiteNav } from "./SiteNav";

export function SiteChrome() {
  const { language } = useLanguage();
  const [palOpen, setPalOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPalOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const id = window.setTimeout(() => setToast(null), 1800);
    return () => window.clearTimeout(id);
  }, [toast]);

  return (
    <>
      <a className="lab-skip" href="#content">
        {language === "vi" ? "Đến nội dung" : "Skip to content"}
      </a>
      <ScrollProgress />
      <Cursor />
      <SiteNav onOpenPalette={() => setPalOpen(true)} />
      <CommandPalette open={palOpen} onClose={() => setPalOpen(false)} onToast={setToast} />
      <div className={`lab-toast lab-glass${toast ? "" : " is-empty"}`} role="status" aria-live="polite">
        {toast}
      </div>
    </>
  );
}
