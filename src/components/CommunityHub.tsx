"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";


const BLOGS = [
  { id: "blog1", date: "2026.04", read: "8 min", track: "ENGINEERING" },
  { id: "blog2", date: "2026.03", read: "12 min", track: "RESEARCH" },
  { id: "blog3", date: "2026.02", read: "6 min", track: "OPINION" },
];

const CASES = [
  { id: "case1", impact: "+38%", impactLabelKey: "community.case.impact1" },
  { id: "case2", impact: "−42%", impactLabelKey: "community.case.impact2" },
];

const TUTS = [
  { id: "tut1", duration: "45 min", level: "BEGINNER" },
  { id: "tut2", duration: "1h 20m", level: "INTERMEDIATE" },
  { id: "tut3", duration: "30 min", level: "BEGINNER" },
  { id: "tut4", duration: "2h", level: "ADVANCED" },
];

export const CommunityHub = () => {
  const { t } = useLanguage();

  return (
    <section id="community" className="cm-section">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="cm-eyebrow">{t("community.eyebrow")}</span>
        <h2 className="cm-display text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.05] mt-5">
          {t("community.title.1")} <span className="cm-text-grad">{t("community.title.2")}</span>
        </h2>
        <p className="text-[var(--ink-2)] mt-4">{t("community.subtitle")}</p>
      </div>

      {/* Bento layout. */}
      <div className="grid grid-cols-12 gap-4 lg:gap-6">
        {/* Community card — wide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="col-span-12 lg:col-span-7 cm-card cm-card-pad relative overflow-hidden min-h-[320px]"
        >
          <div
            className="absolute inset-0 opacity-50 pointer-events-none"
            style={{
              background:
                "radial-gradient(500px 300px at 0% 100%, rgba(176,145,255,0.18), transparent 60%)",
            }}
          />
          <div className="relative h-full flex flex-col">
            <span className="cm-chip"><span className="cm-dot" />COMMUNITY</span>
            <h3 className="cm-display text-2xl md:text-3xl mt-5">
              {t("community.discord.title")}
            </h3>
            <p className="text-[var(--ink-2)] mt-3 max-w-md">
              {t("community.discord.body")}
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { v: "1.5K+", l: "community.stat.members" },
                { v: "20+", l: "community.stat.events" },
                { v: "98%", l: "community.stat.active" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="cm-display text-2xl cm-text-grad">{s.v}</div>
                  <div className="cm-mono text-[10px] tracking-widest uppercase text-[var(--ink-3)] mt-1">
                    {t(s.l)}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-8 flex flex-wrap gap-3">
              <a href="#contact" className="cm-btn cm-btn-primary text-xs h-10">
                {t("community.discord.cta")} →
              </a>
              <a href="#contact" className="cm-btn cm-btn-ghost text-xs h-10">
                {t("community.events.cta")}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Tutorials card — column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="col-span-12 lg:col-span-5 cm-card cm-card-pad min-h-[320px] flex flex-col"
        >
          <div className="flex items-center justify-between">
            <span className="cm-chip">TUTORIALS</span>
            <a href="#" className="cm-mono text-[11px] uppercase tracking-widest text-[var(--accent)]">
              {t("community.viewAll")} →
            </a>
          </div>
          <h3 className="cm-display text-xl md:text-2xl mt-5">
            {t("community.tutorials.title")}
          </h3>
          <div className="mt-6 space-y-3 flex-1">
            {TUTS.map((tut) => (
              <a
                key={tut.id}
                href="#"
                className="flex items-center gap-3 group p-3 rounded-xl border border-transparent hover:border-[var(--line)] hover:bg-white/[0.03] transition"
              >
                <div className="w-9 h-9 grid place-items-center rounded-lg bg-white/[0.04] border border-[var(--line)] cm-mono text-[10px] text-[var(--accent)]">
                  ▶
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm cm-display truncate">{t(`community.${tut.id}.title`)}</div>
                  <div className="cm-mono text-[10px] uppercase tracking-widest text-[var(--ink-3)] mt-0.5">
                    {tut.duration} · {tut.level}
                  </div>
                </div>
                <span className="text-[var(--ink-3)] group-hover:text-[var(--accent)] transition">→</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Blogs */}
        <div className="col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {BLOGS.map((b, i) => (
            <motion.a
              key={b.id}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.05 }}
              className="cm-card cm-card-pad cm-lift flex flex-col group"
            >
              <div className="flex items-center justify-between">
                <span className="cm-chip text-[10px]">{b.track}</span>
                <span className="cm-mono text-[10px] uppercase tracking-widest text-[var(--ink-4)]">
                  {b.date}
                </span>
              </div>
              <h4 className="cm-display text-lg mt-5 leading-snug flex-1">
                {t(`community.${b.id}.title`)}
              </h4>
              <div className="border-t border-[var(--line)] mt-5 pt-3 flex items-center justify-between">
                <span className="cm-mono text-[10px] uppercase tracking-widest text-[var(--ink-3)]">
                  {b.read}
                </span>
                <span className="text-[var(--accent)] group-hover:translate-x-1 transition">→</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Case studies */}
        <div className="col-span-12 lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
          {CASES.map((c, i) => (
            <motion.a
              key={c.id}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 + i * 0.05 }}
              className="cm-card cm-card-pad cm-lift relative overflow-hidden group"
            >
              <span className="cm-chip text-[10px]">CASE&nbsp;STUDY</span>
              <div className="cm-display text-3xl md:text-4xl cm-text-grad mt-6">{c.impact}</div>
              <div className="cm-mono text-[10px] uppercase tracking-widest text-[var(--ink-3)] mt-1">
                {t(c.impactLabelKey)}
              </div>
              <div className="text-sm mt-4 cm-display leading-snug">
                {t(`community.${c.id}.title`)}
              </div>
              <div className="text-xs text-[var(--ink-3)] mt-3 leading-relaxed">
                {t(`community.${c.id}.body`)}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
