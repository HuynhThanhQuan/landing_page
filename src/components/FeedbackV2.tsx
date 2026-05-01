"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => setActive((i) => (i + 1) % FEEDBACKS.length), 6000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  return (
    <section className="cm-section">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="cm-eyebrow">{t("feedback.eyebrow")}</span>
        <h2 className="cm-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.1] mt-5">
          {t("feedback.title.1")} <span className="cm-text-grad">{t("feedback.title.2")}</span>
        </h2>
      </div>

      <div className="cm-card cm-card-pad relative overflow-hidden min-h-[260px]">
        <div
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{
            background:
              "radial-gradient(600px 200px at 50% 0%, rgba(176,145,255,0.15), transparent 60%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="cm-display text-5xl text-[var(--accent)]/40 leading-none">"</div>
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={FEEDBACKS[active].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-base md:text-xl text-[var(--ink-1)] leading-relaxed mt-2"
            >
              {t(`feedback.${FEEDBACKS[active].id}`)}
            </motion.blockquote>
          </AnimatePresence>
          <div className="mt-6">
            <div className="cm-display text-base">{FEEDBACKS[active].name}</div>
            <div className="cm-mono text-[10px] uppercase tracking-widest text-[var(--ink-3)] mt-1">
              {FEEDBACKS[active].role}
            </div>
          </div>
        </div>

        <div className="relative flex justify-center gap-2 mt-8">
          {FEEDBACKS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1 rounded-full transition-all ${
                i === active ? "w-8 bg-[var(--accent)]" : "w-3 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
