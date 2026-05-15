"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowRight, ArrowUpRight, Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";


const COURSES = [
  {
    id: "credit-risk",
    track: "FINTECH",
    levelKey: "courses.level.intermediate",
    duration: "8 weeks",
    price: "₫4.9M",
    accent: "from-cyan-400/30 to-blue-500/10",
  },
  {
    id: "personalization",
    track: "AI / ML",
    levelKey: "courses.level.intermediate",
    duration: "6 weeks",
    price: "₫3.9M",
    accent: "from-violet-400/30 to-fuchsia-500/10",
  },
  {
    id: "causal",
    track: "ANALYTICS",
    levelKey: "courses.level.advanced",
    duration: "10 weeks",
    price: "₫5.9M",
    accent: "from-amber-400/30 to-orange-500/10",
  },
  {
    id: "mlops",
    track: "ENGINEERING",
    levelKey: "courses.level.advanced",
    duration: "8 weeks",
    price: "₫4.9M",
    accent: "from-emerald-400/30 to-teal-500/10",
  },
  {
    id: "foundation",
    track: "FOUNDATIONS",
    levelKey: "courses.level.beginner",
    duration: "12 weeks",
    price: "₫3.5M",
    accent: "from-pink-400/30 to-rose-500/10",
  },
  {
    id: "agentic",
    track: "AI ENGINEERING",
    levelKey: "courses.level.advanced",
    duration: "6 weeks",
    price: "₫5.5M",
    accent: "from-indigo-400/30 to-violet-500/10",
  },
];

const FILTERS = ["all", "fintech", "ai", "analytics", "engineering"];

export const Courses = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("all");

  const filtered = COURSES.filter((c) => {
    if (filter === "all") return true;
    if (filter === "fintech") return c.track === "FINTECH";
    if (filter === "ai") return c.track.startsWith("AI");
    if (filter === "analytics") return c.track === "ANALYTICS";
    if (filter === "engineering") return c.track === "ENGINEERING";
    return true;
  });

  return (
    <section id="courses" className="cm-section">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <span className="cm-eyebrow">{t("courses.eyebrow")}</span>
          <h2 className="cm-display text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.05] mt-5">
            {t("courses.title.1")} <span className="cm-text-grad">{t("courses.title.2")}</span>
          </h2>
          <p className="text-[var(--ink-2)] mt-4 max-w-2xl">{t("courses.subtitle")}</p>
        </div>

        <div
          role="tablist"
          aria-label={t("courses.eyebrow")}
          className="flex flex-wrap gap-2"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`cm-mono text-[11px] uppercase tracking-widest px-4 h-9 inline-flex items-center rounded-full border transition ${
                filter === f
                  ? "bg-[var(--accent)]/10 border-[var(--accent)] text-[var(--ink-1)]"
                  : "border-[var(--line)] text-[var(--ink-3)] hover:text-[var(--ink-1)] hover:border-[var(--line-strong)]"
              }`}
            >
              {t(`courses.filter.${f}`)}
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((c, i) => (
              <motion.article
                key={c.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="cm-card cm-lift relative overflow-hidden group"
              >
                <div
                  aria-hidden
                  className={`absolute inset-0 bg-gradient-to-br ${c.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative cm-card-pad flex flex-col h-full">
                  <div className="flex items-center justify-between">
                    <span className="cm-chip">{c.track}</span>
                    <span className="cm-mono text-[10px] tracking-widest text-[var(--ink-3)] inline-flex items-center gap-1.5">
                      <Clock size={12} aria-hidden />
                      {c.duration}
                    </span>
                  </div>

                  <h3 className="cm-display text-xl md:text-2xl mt-6 leading-tight">
                    {t(`courses.${c.id}.title`)}
                  </h3>
                  <p className="text-sm text-[var(--ink-3)] mt-3 leading-relaxed">
                    {t(`courses.${c.id}.body`)}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {[1, 2, 3].map((n) => {
                      const tag = t(`courses.${c.id}.tag${n}`);
                      if (tag.startsWith("courses.")) return null;
                      return (
                        <span
                          key={n}
                          className="text-[10px] cm-mono uppercase px-2 py-1 rounded-md bg-[var(--tint-1)] border border-[var(--line)] text-[var(--ink-2)]"
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>

                  <div className="border-t border-[var(--line)] mt-auto pt-4 flex items-center justify-between">
                    <div>
                      <div className="cm-mono text-[10px] uppercase tracking-widest text-[var(--ink-4)]">
                        {t(c.levelKey)}
                      </div>
                      <div className="cm-display text-lg cm-text-grad mt-1 tabular-nums">
                        {c.price}
                      </div>
                    </div>
                    <a
                      href="#contact"
                      aria-label={`${t("courses.enroll")} — ${t(`courses.${c.id}.title`)}`}
                      className="cm-mono text-xs uppercase tracking-widest text-[var(--accent)] inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      {t("courses.enroll")}
                      <ArrowRight size={14} aria-hidden />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="cm-card cm-card-pad flex flex-col items-center text-center py-16">
          <Search size={28} className="text-[var(--ink-3)]" aria-hidden />
          <div className="cm-display text-lg mt-4">{t("courses.empty.title")}</div>
          <p className="text-sm text-[var(--ink-3)] mt-2 max-w-sm">
            {t("courses.empty.body")}
          </p>
          <button
            onClick={() => setFilter("all")}
            className="cm-btn cm-btn-ghost text-xs h-9 mt-6"
          >
            {t("courses.filter.all")}
          </button>
        </div>
      )}

      <div className="mt-16 cm-card cm-card-pad flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h4 className="cm-display text-xl md:text-2xl">{t("courses.cohort.title")}</h4>
          <p className="text-sm text-[var(--ink-3)] mt-2">{t("courses.cohort.body")}</p>
        </div>
        <a href="#contact" className="cm-btn cm-btn-primary">
          {t("courses.cohort.cta")}
          <ArrowUpRight size={16} aria-hidden />
        </a>
      </div>
    </section>
  );
};
