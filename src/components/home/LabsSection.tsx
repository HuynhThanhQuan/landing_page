// src/components/home/LabsSection.tsx
"use client";
import { motion, useInView, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cssVars } from "@/components/motion/css";
import { Reveal } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { useMediaQuery, useMotionPrefs } from "@/components/motion/useMotionPrefs";
import { useLanguage } from "@/contexts/LanguageContext";
import { labs, pick, type Lab } from "@/lib/content";

function LabBody({ lab, n }: { lab: Lab; n: number }) {
  const { language } = useLanguage();
  const vi = language === "vi";
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [armed, setArmed] = useState(false);
  useEffect(() => {
    setArmed(true);
  }, []);
  return (
    <TiltCard className="lab-tilt">
      <article ref={ref} className={`lab-card lab-glass${armed ? " is-armed" : ""}${inView ? " is-in" : ""}`}>
        <span className="lab-spot" aria-hidden="true" />
        <div className="lab-card-top">
          <span>{lab.topic}</span>
          <span>0{n + 1}</span>
        </div>
        <div className="lab-bars" aria-hidden="true">
          {lab.bars.map((h, i) => (
            <span key={i} className="lab-bar" style={cssVars({ "--h": `${h}%`, "--i": i })} />
          ))}
        </div>
        <p className="lab-small">{vi ? "Minh họa · dữ liệu mô phỏng" : "Illustration · synthetic data"}</p>
        <h3 className="lab-h3">
          <a href={`/showcase/${lab.id}/index.html`}>{pick(lab.title, vi)} ↗</a>
        </h3>
        <p className="lab-card-body">{pick(lab.body, vi)}</p>
      </article>
    </TiltCard>
  );
}

function LabCard({ lab, index, progress, pinned }: { lab: Lab; index: number; progress: MotionValue<number>; pinned: boolean }) {
  const start = 0.04 + index * 0.15;
  const end = start + 0.3;
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [140, 0]);
  const rotateX = useTransform(progress, [start, end], [28, 0]);
  const scale = useTransform(progress, [start, end], [0.9, 1]);
  if (!pinned) {
    return (
      <Reveal delay={index * 0.08}>
        <LabBody lab={lab} n={index} />
      </Reveal>
    );
  }
  return (
    <motion.div style={{ opacity, y, rotateX, scale, transformPerspective: 1000 }}>
      <LabBody lab={lab} n={index} />
    </motion.div>
  );
}

export function LabsSection() {
  const { language } = useLanguage();
  const vi = language === "vi";
  const wide = useMediaQuery("(min-width: 900px)");
  const { reduced } = useMotionPrefs();
  const pinned = wide && !reduced;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  return (
    <section id="labs" ref={ref} className={`lab-labs${pinned ? " is-pinned" : ""}`}>
      <div className="lab-container lab-labs-stick">
        <div className="lab-section-head lab-head-row">
          <div>
            <p className="lab-kicker">01 / FIELD NOTES</p>
            <h2 className="lab-h2">{vi ? "Đừng chỉ đọc. Thử đi." : "Less hand-waving. More hands-on."}</h2>
          </div>
          <a className="lab-link" href="/experiments.html">
            {vi ? "Xem tất cả 11 lab" : "All 11 experiments"} ↗
          </a>
        </div>
        <div className="lab-grid">
          {labs.map((lab, i) => (
            <LabCard key={lab.id} lab={lab} index={i} progress={scrollYProgress} pinned={pinned} />
          ))}
        </div>
        <p className="lab-small">
          {vi
            ? "Demo và phương pháp bằng tiếng Anh. Đây là thí nghiệm giáo dục, không phải kết quả khách hàng."
            : "Demos and methods are in English. These are educational experiments, not client results."}
        </p>
      </div>
    </section>
  );
}
