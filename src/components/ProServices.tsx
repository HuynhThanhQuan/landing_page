"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";


const SERVICES = [
  {
    id: "consulting",
    icon: "◇",
    accent: "from-cyan-400/20 to-blue-500/5",
  },
  {
    id: "implementation",
    icon: "◈",
    accent: "from-violet-400/20 to-purple-500/5",
  },
  {
    id: "training",
    icon: "◆",
    accent: "from-amber-400/20 to-orange-500/5",
  },
  {
    id: "advisory",
    icon: "◇",
    accent: "from-emerald-400/20 to-teal-500/5",
  },
];

const CLIENTS = [
  "TECHCOMBANK", "CBBANK", "VPBANK", "MOMO", "VIETTEL DIGITAL", "VINSCHOOL",
];

export const ProServices = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="cm-section">
      <div className="grid grid-cols-12 gap-6 lg:gap-12 mb-16">
        <div className="col-span-12 lg:col-span-7">
          <span className="cm-eyebrow">{t("services.eyebrow")}</span>
          <h2 className="cm-display text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.05] mt-5">
            {t("services.title.1")} <span className="cm-text-grad">{t("services.title.2")}</span>
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-5 lg:pt-4">
          <p className="text-[var(--ink-2)] text-base md:text-lg leading-relaxed">
            {t("services.subtitle")}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="cm-card relative overflow-hidden group cm-lift"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />
            <div className="relative cm-card-pad">
              <div className="flex items-start justify-between">
                <div
                  className="w-12 h-12 grid place-items-center rounded-xl border border-[var(--line)] cm-display text-2xl text-[var(--accent)]"
                  style={{ background: "rgba(122,231,255,0.05)" }}
                >
                  {s.icon}
                </div>
                <span className="cm-mono text-[10px] uppercase tracking-widest text-[var(--ink-4)]">
                  0{i + 1} / 04
                </span>
              </div>

              <h3 className="cm-display text-xl md:text-2xl mt-6">{t(`services.${s.id}.title`)}</h3>
              <p className="text-sm text-[var(--ink-3)] mt-3 leading-relaxed">
                {t(`services.${s.id}.body`)}
              </p>

              <ul className="mt-5 space-y-2">
                {[1, 2, 3].map((n) => {
                  const item = t(`services.${s.id}.point${n}`);
                  if (item.startsWith("services.")) return null;
                  return (
                    <li key={n} className="flex items-start gap-2 text-sm text-[var(--ink-2)]">
                      <span className="text-[var(--accent)] mt-1">→</span>
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-7 cm-mono text-xs uppercase tracking-widest text-[var(--accent)] group-hover:gap-3 transition-all"
              >
                {t("services.learnMore")} <span>→</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Client marquee */}
      <div className="mt-16">
        <div className="cm-mono text-[10px] uppercase tracking-widest text-[var(--ink-4)] text-center mb-6">
          {t("services.trusted")}
        </div>
        <div className="overflow-hidden border-y border-[var(--line)] py-6">
          <div className="cm-marquee">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <span
                key={i}
                className="px-10 cm-display text-lg md:text-xl text-[var(--ink-3)] hover:text-[var(--ink-1)] transition flex items-center gap-10 whitespace-nowrap"
              >
                {c}
                <span className="text-[var(--line-strong)]">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
