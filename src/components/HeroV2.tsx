"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  useInView,
  animate,
} from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const STATS = [
  { to: 1500, suffix: "+", labelKey: "hero.stats.members" },
  { to: 400, suffix: "+", labelKey: "hero.stats.hours" },
  { to: 98, suffix: "%", labelKey: "hero.stats.satisfaction" },
  { to: 12, suffix: "+", labelKey: "hero.stats.courses" },
];

const TICKER = [
  "DATA SCIENCE", "MACHINE LEARNING", "FINTECH", "AI ENGINEERING",
  "CAUSAL INFERENCE", "MLOPS", "DEEP LEARNING", "ANALYTICS",
];

export const HeroV2 = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Mouse-aware glow — only enabled on fine pointers (skip touch / coarse pointer).
  const [pointerFine, setPointerFine] = useState(false);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });
  const glowX = useTransform(sx, (v) => `${v * 100}%`);
  const glowY = useTransform(sy, (v) => `${v * 100}%`);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setPointerFine(mq.matches);
    const onChange = () => setPointerFine(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!pointerFine || prefersReducedMotion) return;
    const onMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mx.set((e.clientX - rect.left) / rect.width);
      my.set((e.clientY - rect.top) / rect.height);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my, pointerFine, prefersReducedMotion]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[88dvh] flex flex-col justify-center pt-28 pb-12 overflow-hidden"
    >
      {/* Ambient gradient. */}
      <div className="absolute inset-0" style={{ background: "var(--grad-hero)" }} aria-hidden />

      {/* Mouse-following glow — desktop / fine-pointer only. */}
      {pointerFine && !prefersReducedMotion && (
        <motion.div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            left: glowX,
            top: glowY,
            translateX: "-50%",
            translateY: "-50%",
            width: 700,
            height: 700,
            background:
              "radial-gradient(circle, rgba(0,153,194,0.14) 0%, rgba(111,77,239,0.07) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      )}

      {/* Grid overlay. */}
      <div className="cm-grid-overlay" aria-hidden />

      {/* Floating orbs. */}
      <div
        aria-hidden
        className="cm-orb cm-float"
        style={{ left: "10%", top: "20%", width: 240, height: 240, background: "var(--accent)" }}
      />
      <div
        aria-hidden
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
                  aria-hidden
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
                      <stop offset="0%" stopColor="#0099C2" />
                      <stop offset="100%" stopColor="#6F4DEF" />
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
                <ArrowRight size={16} aria-hidden />
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
              <div className="flex -space-x-2" aria-hidden>
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
            <Stat key={s.labelKey} to={s.to} suffix={s.suffix} label={t(s.labelKey)} />
          ))}
        </motion.div>
      </div>

      {/* Marquee. */}
      <div className="relative mt-16 border-y border-[var(--line)] py-6 overflow-hidden" aria-hidden>
        <div className="cm-marquee cm-display text-2xl md:text-4xl text-[var(--ink-3)]">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="px-8 flex items-center gap-8">
              <span>{t}</span>
              <Sparkles size={18} className="text-[var(--accent)]" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stat = ({ to, suffix, label }: { to: number; suffix: string; label: string }) => {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, prefersReducedMotion]);

  const display = value >= 1000 ? `${(value / 1000).toFixed(1)}K` : `${value}`;

  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="cm-display text-3xl md:text-4xl cm-text-grad tabular-nums">
        {display}
        {suffix}
      </div>
      <div className="cm-mono text-[10px] tracking-widest uppercase text-[var(--ink-3)] mt-2">
        {label}
      </div>
    </div>
  );
};

const HeroVisual = () => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="relative aspect-square max-w-[480px] ml-auto"
      aria-hidden
    >
      {/* Concentric rings. */}
      <div className="absolute inset-0 grid place-items-center">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            animate={prefersReducedMotion ? undefined : { rotate: i % 2 ? 360 : -360 }}
            transition={{ duration: 30 + i * 5, repeat: Infinity, ease: "linear" }}
            className="absolute rounded-full border border-[var(--line)]"
            style={{
              width: `${i * 24}%`,
              height: `${i * 24}%`,
              borderStyle: i === 2 ? "dashed" : "solid",
              borderColor: i === 1 ? "rgba(0,153,194,0.45)" : undefined,
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
          animate={
            prefersReducedMotion
              ? { opacity: 1, scale: 1 }
              : { opacity: 1, scale: 1, y: [0, -8, 0] }
          }
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
          animate={prefersReducedMotion ? undefined : { scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-[36%] aspect-square rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,153,194,0.85) 0%, rgba(111,77,239,0.45) 40%, transparent 70%)",
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
