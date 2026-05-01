"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";


export const WhoMission = () => {
  const { t } = useLanguage();

  return (
    <section id="who" className="cm-section">
      <div className="grid grid-cols-12 gap-6 lg:gap-12">
        {/* Eyebrow + heading */}
        <div className="col-span-12 lg:col-span-5">
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="cm-eyebrow"
          >
            {t("who.eyebrow")}
          </motion.span>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="cm-display text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.05] mt-6"
          >
            {t("who.title.1")}{" "}
            <span className="cm-text-grad">{t("who.title.2")}</span>
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[var(--ink-2)] text-base md:text-lg mt-6 leading-relaxed"
          >
            {t("who.body")}
          </motion.p>
        </div>

        {/* Mission card */}
        <div className="col-span-12 lg:col-span-7">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="cm-card cm-card-pad relative overflow-hidden h-full"
          >
            <div
              className="absolute inset-0 opacity-40 pointer-events-none"
              style={{
                background:
                  "radial-gradient(600px 300px at 80% 0%, rgba(122,231,255,0.18), transparent 60%)",
              }}
            />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <span className="cm-chip"><span className="cm-dot" />MISSION_2026</span>
              </div>
              <h3 className="cm-display text-2xl md:text-3xl leading-snug">
                {t("who.mission.headline")}
              </h3>
              <p className="text-[var(--ink-2)] mt-4 leading-relaxed">
                {t("who.mission.body")}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
                {["why.1", "why.2", "why.3"].map((k, i) => (
                  <motion.div
                    key={k}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                    className="border-t border-[var(--line)] pt-4"
                  >
                    <div className="cm-mono text-[10px] tracking-widest text-[var(--accent)]">
                      0{i + 1}
                    </div>
                    <div className="cm-display mt-1 text-base">{t(`who.${k}.title`)}</div>
                    <div className="text-xs text-[var(--ink-3)] mt-2 leading-relaxed">
                      {t(`who.${k}.body`)}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
