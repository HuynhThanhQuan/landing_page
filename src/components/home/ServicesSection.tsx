// src/components/home/ServicesSection.tsx
"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { useMotionPrefs } from "@/components/motion/useMotionPrefs";
import { useLanguage } from "@/contexts/LanguageContext";
import { pick, services } from "@/lib/content";

export function ServicesSection() {
  const { language } = useLanguage();
  const vi = language === "vi";
  const { reduced } = useMotionPrefs();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return (
    <section id="services" className="lab-section">
      <div className="lab-container">
        <div className="lab-section-head">
          <p className="lab-kicker">02 / WORK TOGETHER</p>
          <h2 className="lab-h2">{vi ? "Từ câu hỏi đến thứ dùng được." : "From a question to something useful."}</h2>
        </div>
        <div ref={ref}>
          <div className="lab-rail" aria-hidden="true">
            <span className="lab-rail-track" />
            <motion.i className="lab-rail-fill" style={{ scaleX: reduced ? 1 : smooth }} />
            {services.map((_, i) => (
              <b key={i} className="lab-rail-node">
                0{i + 1}
              </b>
            ))}
          </div>
          <div className="lab-grid">
            {services.map((s, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <article className="lab-service lab-glass">
                  <span className="lab-kicker lab-service-num">0{i + 1}</span>
                  <h3 className="lab-h3">{pick(s.title, vi)}</h3>
                  <p className="lab-card-body">{pick(s.text, vi)}</p>
                  <p className="lab-deliv">↳ {pick(s.output, vi)}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="lab-engagement">
          <strong>{vi ? "Cách bắt đầu" : "How it starts"}</strong>
          <p>
            {vi
              ? "Gửi bối cảnh → trao đổi khám phá → thống nhất phạm vi, thời gian và báo giá. Không có gói tự động hay cam kết hiệu quả trước khi hiểu bài toán. Có thể làm việc từ xa bằng tiếng Việt hoặc tiếng Anh."
              : "Share the context → discovery conversation → agreed scope, timeline and quote. No automatic subscription or outcome promise before we understand the problem. Remote collaboration in English or Vietnamese."}
          </p>
        </div>
      </div>
    </section>
  );
}
