"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const CATEGORIES = ["all", "courses", "community", "services", "payment"];

const QUESTIONS = [
  { id: "q1", cat: "courses" },
  { id: "q2", cat: "courses" },
  { id: "q3", cat: "courses" },
  { id: "q4", cat: "courses" },
  { id: "q5", cat: "community" },
  { id: "q6", cat: "community" },
  { id: "q7", cat: "community" },
  { id: "q8", cat: "services" },
  { id: "q9", cat: "services" },
  { id: "q10", cat: "payment" },
  { id: "q11", cat: "payment" },
  { id: "q12", cat: "payment" },
];

export const FAQ = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState<string | null>("q1");
  const [filter, setFilter] = useState("all");

  const filtered = QUESTIONS.filter((q) => filter === "all" || q.cat === filter);

  return (
    <section id="faq" className="cm-section">
      <div className="grid grid-cols-12 gap-6 lg:gap-12">
        <div className="col-span-12 lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
          <span className="cm-eyebrow">{t("faq.eyebrow")}</span>
          <h2 className="cm-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] mt-5">
            {t("faq.title.1")}{" "}
            <span className="cm-text-grad">{t("faq.title.2")}</span>
          </h2>
          <p className="text-[var(--ink-2)] mt-5">{t("faq.subtitle")}</p>

          <div className="flex flex-wrap gap-2 mt-8">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`cm-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full border transition ${
                  filter === c
                    ? "bg-[var(--accent)]/10 border-[var(--accent)] text-[var(--ink-1)]"
                    : "border-[var(--line)] text-[var(--ink-3)] hover:text-[var(--ink-1)] hover:border-[var(--line-strong)]"
                }`}
              >
                {t(`faq.cat.${c}`)}
              </button>
            ))}
          </div>

          <div className="mt-10 cm-card cm-card-pad">
            <div className="cm-mono text-[10px] uppercase tracking-widest text-[var(--accent)]">
              {t("faq.help.label")}
            </div>
            <p className="text-sm text-[var(--ink-2)] mt-2">{t("faq.help.body")}</p>
            <a href="#contact" className="cm-btn cm-btn-ghost text-xs mt-5 h-9">
              {t("faq.help.cta")} →
            </a>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-8">
          <div className="space-y-3">
            {filtered.map((q, i) => {
              const isOpen = open === q.id;
              return (
                <motion.div
                  key={q.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className={`cm-card overflow-hidden ${isOpen ? "border-[rgba(122,231,255,0.4)]" : ""}`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : q.id)}
                    className="w-full text-left flex items-center gap-4 p-5 md:p-6"
                  >
                    <span className="cm-mono text-[11px] tracking-widest text-[var(--accent)] shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="cm-display text-base md:text-lg flex-1 leading-snug">
                      {t(`faq.${q.id}.q`)}
                    </span>
                    <span
                      className={`shrink-0 w-9 h-9 grid place-items-center rounded-full border transition-all ${
                        isOpen
                          ? "border-[var(--accent)] bg-[var(--accent)]/10 rotate-45"
                          : "border-[var(--line)]"
                      }`}
                    >
                      <span className="text-lg leading-none">+</span>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                      >
                        <div className="px-5 md:px-6 pb-6 pt-0 ml-9">
                          <div className="text-[var(--ink-2)] leading-relaxed text-sm md:text-base whitespace-pre-line">
                            {t(`faq.${q.id}.a`)}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
