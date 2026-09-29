// src/components/home/AboutSection.tsx
"use client";
import Link from "next/link";
import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { pick, stats } from "@/lib/content";

export function AboutSection() {
  const { language } = useLanguage();
  const vi = language === "vi";
  return (
    <section id="about" className="lab-section">
      <div className="lab-container lab-about">
        <Reveal>
          <p className="lab-kicker">03 / BEHIND THE WORK</p>
          <h2 className="lab-h2">{vi ? "Một người làm nghề. Một tinh thần tò mò." : "A practitioner. An open notebook."}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="lab-about-text">
            {vi
              ? "Mình là Huỳnh Thanh Quan, người sáng lập Curious Machine. Mình quan tâm đến recommendation, bandits, đo lường nhân quả và cách biến mô hình thành quyết định tốt hơn."
              : "I’m Huỳnh Thanh Quan, founder of Curious Machine. My work explores recommendation, bandits, causal measurement and turning models into better decisions."}
          </p>
          <p>
            <a className="lab-link" href="https://portfolio.hthquan28.workers.dev/">
              {vi ? "Xem portfolio cá nhân" : "Meet the person behind CM"} ↗
            </a>
          </p>
          <p>
            <Link className="lab-link" href="/notes/">
              {vi ? "Đọc ghi chép kỹ thuật" : "Read the field notes"} ↗
            </Link>
          </p>
          <dl className="lab-stats">
            {stats.map((s, i) => (
              <div key={i}>
                <dt>{pick(s.label, vi)}</dt>
                <dd>
                  <CountUp to={s.value} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
