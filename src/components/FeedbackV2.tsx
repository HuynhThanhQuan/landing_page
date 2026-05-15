"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FEEDBACKS = [
  { name: "Đỗ Hoàng Nam", role: "Data Analyst, CBBank", id: "fb1" },
  { name: "Minh Tiến", role: "Data Scientist", id: "fb2" },
  { name: "Hà Văn Huy", role: "Student", id: "fb3" },
  { name: "Huỳnh Quang", role: "Student", id: "fb4" },
  { name: "Nguyễn Hà Trang", role: "Student", id: "fb5" },
];

export const FeedbackV2 = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (paused || prefersReducedMotion) return;
    timer.current = setInterval(() => setActive((i) => (i + 1) % FEEDBACKS.length), 6000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, prefersReducedMotion]);

  const goto = (delta: number) => {
    setActive((i) => (i + delta + FEEDBACKS.length) % FEEDBACKS.length);
  };

  return (
    <section className="cm-section">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="cm-eyebrow">{t("feedback.eyebrow")}</span>
        <h2 className="cm-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.1] mt-5">
          {t("feedback.title.1")} <span className="cm-text-grad">{t("feedback.title.2")}</span>
        </h2>
      </div>

      <div
        className="cm-card cm-card-pad relative overflow-hidden min-h-[260px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        role="region"
        aria-roledescription="carousel"
        aria-label={t("feedback.eyebrow")}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{
            background:
              "radial-gradient(600px 200px at 50% 0%, rgba(111,77,239,0.10), transparent 60%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <Quote
            size={36}
            className="text-[var(--accent)]/40 mx-auto"
            aria-hidden
            strokeWidth={1.5}
          />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={FEEDBACKS[active].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-base md:text-xl text-[var(--ink-1)] leading-relaxed mt-4"
              aria-live="polite"
            >
              {t(`feedback.${FEEDBACKS[active].id}`)}
              <footer className="mt-6 not-italic">
                <div className="cm-display text-base">{FEEDBACKS[active].name}</div>
                <div className="cm-mono text-[10px] uppercase tracking-widest text-[var(--ink-3)] mt-1">
                  {FEEDBACKS[active].role}
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Controls. */}
        <div className="relative flex items-center justify-between gap-4 mt-8">
          <button
            onClick={() => goto(-1)}
            aria-label="Previous testimonial"
            className="w-11 h-11 grid place-items-center rounded-full border border-[var(--line)] hover:border-[var(--line-strong)] text-[var(--ink-2)] hover:text-[var(--ink-1)] transition"
          >
            <ChevronLeft size={18} aria-hidden />
          </button>

          <div role="tablist" aria-label="Choose testimonial" className="flex justify-center gap-1">
            {FEEDBACKS.map((f, i) => (
              <button
                key={f.id}
                role="tab"
                aria-selected={i === active}
                aria-label={`Testimonial ${i + 1} of ${FEEDBACKS.length} — ${f.name}`}
                onClick={() => setActive(i)}
                className="relative h-11 px-1.5 inline-flex items-center group"
              >
                <span
                  aria-hidden
                  className={`block h-1 rounded-full transition-all ${
                    i === active
                      ? "w-8 bg-[var(--accent)]"
                      : "w-3 bg-white/20 group-hover:bg-white/40"
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            onClick={() => goto(1)}
            aria-label="Next testimonial"
            className="w-11 h-11 grid place-items-center rounded-full border border-[var(--line)] hover:border-[var(--line-strong)] text-[var(--ink-2)] hover:text-[var(--ink-1)] transition"
          >
            <ChevronRight size={18} aria-hidden />
          </button>
        </div>
      </div>
    </section>
  );
};
