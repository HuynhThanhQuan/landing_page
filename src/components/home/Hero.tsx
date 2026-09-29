// src/components/home/Hero.tsx
"use client";
import { HeroBackdrop } from "@/components/fx/HeroBackdrop";
import { Magnetic } from "@/components/motion/Magnetic";
import { cssVars } from "@/components/motion/css";
import { SplitWords } from "@/components/motion/SplitWords";
import { useLanguage } from "@/contexts/LanguageContext";

const steps = ["Question", "Experiment", "Evidence", "Decision"];

export function Hero() {
  const { language } = useLanguage();
  const vi = language === "vi";
  const line1 = vi ? "Tò mò là khởi đầu." : "Stay curious.";
  const line2 = vi ? "Bằng chứng là điểm đến." : "Build the evidence.";
  const line2Delay = 200 + line1.split(" ").length * 70 + 120;
  return (
    <section className="lab-hero" aria-labelledby="hero-title">
      <HeroBackdrop />
      <div className="lab-container lab-hero-inner">
        <div>
          <p className="lab-kicker lab-fade" style={cssVars({ "--d": "100ms" })}>
            INDEPENDENT DATA &amp; AI STUDIO · VIETNAM / EVERYWHERE
          </p>
          <h1 id="hero-title" className="lab-h1" key={language}>
            <SplitWords text={line1} delay={200} />
            <br />
            <SplitWords text={line2} delay={line2Delay} wordClassName="lab-grad-word" />
          </h1>
          <p className="lab-lede lab-fade" style={cssVars({ "--d": "800ms" })}>
            {vi
              ? "Curious Machine là không gian của Quan dành cho Data Science ứng dụng: những thí nghiệm có thể khám phá, cách nghĩ có thể kiểm chứng và những hệ thống có thể sử dụng."
              : "A space by Quan for applied data science: experiments you can explore, ideas you can question, and systems you can use."}
          </p>
          <div className="lab-actions lab-fade" style={cssVars({ "--d": "950ms" })}>
            <Magnetic>
              <a className="lab-btn" href="/experiments.html">
                {vi ? "Khám phá 11 thí nghiệm" : "Explore 11 experiments"} ↗
              </a>
            </Magnetic>
            <a className="lab-link" href="#contact">
              {vi ? "Cùng làm một dự án" : "Bring a question"} →
            </a>
          </div>
          <p className="lab-small lab-fade" style={cssVars({ "--d": "1050ms" })}>
            {vi
              ? "Mở trong trình duyệt · Không đăng nhập · Ghi rõ giới hạn"
              : "Open in your browser · No sign-in · Limitations included"}
          </p>
        </div>
        <div
          className="lab-loop lab-glass lab-fade"
          style={cssVars({ "--d": "700ms" })}
          aria-label="Question, Experiment, Evidence, Decision"
        >
          <span className="lab-kicker">THE CURIOUS LOOP / 001</span>
          <div className="lab-orbit" aria-hidden="true">
            <span>?</span>
            <strong>CM</strong>
            <span>↗</span>
          </div>
          <ol>
            {steps.map((step, i) => (
              <li key={step}>
                <span>0{i + 1}</span>
                {step}
                <span aria-hidden="true">↗</span>
              </li>
            ))}
          </ol>
          <p>{vi ? "Ý tưởng tốt chịu được những câu hỏi khó." : "Good ideas survive better questions."}</p>
        </div>
      </div>
      <a className="lab-scroll-cue" href="#labs" aria-label={vi ? "Cuộn xuống" : "Scroll down"}>
        <span />
      </a>
    </section>
  );
}
