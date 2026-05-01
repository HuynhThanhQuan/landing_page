"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const STATS = [
  { value: "1.5K+", labelKey: "hero.stats.members" },
  { value: "400+", labelKey: "hero.stats.hours" },
  { value: "98%", labelKey: "hero.stats.satisfaction" },
  { value: "12+", labelKey: "hero.stats.courses" },
];

const TICKER = [
  "DATA SCIENCE", "MACHINE LEARNING", "FINTECH", "AI ENGINEERING",
  "CAUSAL INFERENCE", "MLOPS", "DEEP LEARNING", "ANALYTICS",
];

export const HeroV2 = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse-aware glow.
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });
  const glowX = useTransform(sx, (v) => `${v * 100}%`);
  const glowY = useTransform(sy, (v) => `${v * 100}%`);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mx.set((e.clientX - rect.left) / rect.width);
      my.set((e.clientY - rect.top) / rect.height);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[88vh] flex flex-col justify-center pt-28 pb-12 overflow-hidden"
    >
      {/* Ambient gradient. */}
      <div className="absolute inset-0" style={{ background: "var(--grad-hero)" }} />

      {/* Mouse-following glow. */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          left: glowX,
          top: glowY,
          translateX: "-50%",
          translateY: "-50%",
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle, rgba(122,231,255,0.18) 0%, rgba(176,145,255,0.08) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Grid overlay. */}
      <div className="cm-grid-overlay" />

      {/* Floating orbs. */}
      <div
        className="cm-orb cm-float"
        style={{ left: "10%", top: "20%", width: 240, height: 240, background: "var(--accent)" }}
      />
      <div
        className="cm-orb cm-float"
        style={{
          right: "12%",
          bottom: "20%",
          width: 320,
          height: 320,
          background: "var(--accent-2)",
          animationDelay: "2s",
        }}
      />

      <div className="cm-section relative w-full">
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Left: copy. */}
          <div className="col-span-12 lg:col-span-7">
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="cm-eyebrow"
            >
              {t("hero.tagline")}
            </motion.span>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="cm-display text-[clamp(2rem,4.2vw,3.6rem)] leading-[1.05] mt-6 max-w-[18ch]"
            >
              {t("hero.line1")}{" "}
              <span className="cm-text-grad">{t("hero.line2")}</span>{" "}
              {t("hero.line3")}{" "}
              <span className="relative inline-block">
                <span className="cm-text-grad italic">{t("hero.line4")}</span>
                <svg
                  className="absolute -bottom-3 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M2 8 Q 50 2, 100 5 T 198 4"
                    stroke="url(#hg)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                  />
                  <defs>
                    <linearGradient id="hg" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0%" stopColor="#7AE7FF" />
                      <stop offset="100%" stopColor="#B091FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-[var(--ink-2)] text-base md:text-lg max-w-2xl mt-8 leading-relaxed"
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="flex flex-wrap gap-3 mt-10"
            >
              <a href="#courses" className="cm-btn cm-btn-primary">
                {t("hero.cta.primary")}
                <span aria-hidden>→</span>
              </a>
              <a href="#community" className="cm-btn cm-btn-ghost">
                {t("hero.cta.secondary")}
              </a>
            </motion.div>

            {/* Trust line. */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex items-center gap-3 mt-8"
            >
              <div className="flex -space-x-2">
                {[
                  "bg-gradient-to-br from-cyan-400 to-blue-500",
                  "bg-gradient-to-br from-violet-400 to-pink-500",
                  "bg-gradient-to-br from-amber-400 to-orange-500",
                  "bg-gradient-to-br from-emerald-400 to-teal-500",
                ].map((c, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full border-2 border-[var(--bg-0)] ${c}`}
                  />
                ))}
              </div>
              <span className="text-xs cm-mono text-[var(--ink-3)]">
                {t("hero.trust")}
              </span>
            </motion.div>
          </div>

          {/* Right: visual stack. */}
          <div className="col-span-12 lg:col-span-5">
            <HeroVisual />
          </div>
        </div>

        {/* Stats strip. */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="cm-card cm-card-pad mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {STATS.map((s) => (
            <div key={s.value} className="text-center md:text-left">
              <div className="cm-display text-3xl md:text-4xl cm-text-grad">{s.value}</div>
              <div className="cm-mono text-[10px] tracking-widest uppercase text-[var(--ink-3)] mt-2">
                {t(s.labelKey)}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee. */}
      <div className="relative mt-16 border-y border-[var(--line)] py-6 overflow-hidden">
        <div className="cm-marquee cm-display text-2xl md:text-4xl text-[var(--ink-3)]">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="px-8 flex items-center gap-8">
              <span>{t}</span>
              <span className="text-[var(--accent)]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const HeroVisual = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="relative aspect-square max-w-[480px] ml-auto"
    >
      {/* Concentric rings. */}
      <div className="absolute inset-0 grid place-items-center">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            animate={{ rotate: i % 2 ? 360 : -360 }}
            transition={{ duration: 30 + i * 5, repeat: Infinity, ease: "linear" }}
            className="absolute rounded-full border border-[var(--line)]"
            style={{
              width: `${i * 24}%`,
              height: `${i * 24}%`,
              borderStyle: i === 2 ? "dashed" : "solid",
              borderColor: i === 1 ? "rgba(122,231,255,0.4)" : undefined,
            }}
          />
        ))}
      </div>

      {/* Floating tag chips. */}
      {[
        { x: "10%", y: "18%", label: "neural-net.ipynb", delay: 0 },
        { x: "75%", y: "30%", label: "credit_risk.py", delay: 0.5 },
        { x: "15%", y: "70%", label: "chunk.parquet", delay: 1 },
        { x: "70%", y: "78%", label: "dashboard.tsx", delay: 1.5 },
      ].map((c) => (
        <motion.div
          key={c.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { delay: c.delay + 0.6, duration: 0.5 },
            scale: { delay: c.delay + 0.6, duration: 0.5 },
            y: { duration: 3 + c.delay, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{ left: c.x, top: c.y }}
          className="absolute"
        >
          <div className="cm-chip backdrop-blur-md">
            <span className="cm-dot" />
            {c.label}
          </div>
        </motion.div>
      ))}

      {/* Center disc. */}
      <div className="absolute inset-0 grid place-items-center">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-[36%] aspect-square rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(122,231,255,1) 0%, rgba(176,145,255,0.5) 40%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />
      </div>
      <div className="absolute inset-0 grid place-items-center">
        <div
          className="w-[18%] aspect-square rounded-full"
          style={{
            background: "var(--grad-button)",
            boxShadow: "0 0 80px var(--accent-glow), 0 0 30px var(--accent-glow)",
          }}
        />
      </div>
    </motion.div>
  );
};
