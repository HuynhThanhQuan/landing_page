"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type Track = {
  code: string;
  title: string;
  blurb: string;
  topics: string[];
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  status: "Published" | "In progress" | "Planned";
  href?: string;
};

const tracks: Track[] = [
  {
    code: "01",
    title: "Causal Inference for Decision Makers",
    blurb:
      "From correlation to causation. PSM, diff-in-diff, synthetic control and uplift modeling — applied to real marketing campaigns.",
    topics: ["PSM", "DiD", "Synthetic Control", "Uplift / T-learner"],
    level: "Intermediate",
    duration: "8 modules · ~12h",
    status: "Published",
  },
  {
    code: "02",
    title: "Recommendation Systems in Production",
    blurb:
      "Sequential transformers, multi-armed bandits and Next-Best-Action systems — designed, trained and shipped end-to-end.",
    topics: ["Transformer", "Thompson Sampling", "LinUCB", "NBA"],
    level: "Advanced",
    duration: "10 modules · ~18h",
    status: "In progress",
  },
  {
    code: "03",
    title: "Bayesian MMM with Google Meridian",
    blurb:
      "Marketing Mix Modeling for omni-channel budget allocation: priors, adstock, saturation, validation and rollout playbook.",
    topics: ["Bayesian", "Adstock", "Saturation", "Meridian"],
    level: "Intermediate",
    duration: "6 modules · ~9h",
    status: "Planned",
  },
  {
    code: "04",
    title: "LLM Engineering Foundations",
    blurb:
      "From prompts to production: prompt design, RAG, evaluation, caching and cost-aware deployment of LLM-powered features.",
    topics: ["Prompting", "RAG", "Evaluation", "Caching"],
    level: "Beginner",
    duration: "5 modules · ~7h",
    status: "Planned",
  },
  {
    code: "05",
    title: "Experimentation at Scale",
    blurb:
      "A/B/n testing in production: power analysis, peeking, sequential tests, CUPED, and how to handle SUTVA violations.",
    topics: ["A/B/n", "Power", "CUPED", "Sequential"],
    level: "Intermediate",
    duration: "7 modules · ~10h",
    status: "Planned",
  },
  {
    code: "06",
    title: "Full-Stack Data Science",
    blurb:
      "An end-to-end track that mirrors the FSDS course: data → modeling → experimentation → MLOps → product impact.",
    topics: ["Pipeline", "MLOps", "Spark", "Airflow"],
    level: "Advanced",
    duration: "12 modules · ~24h",
    status: "Planned",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const statusStyle: Record<Track["status"], string> = {
  Published: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  "In progress": "bg-amber-50 text-amber-700 ring-amber-200",
  Planned: "bg-slate-50 text-slate-600 ring-slate-200",
};

const levelStyle: Record<Track["level"], string> = {
  Beginner: "text-emerald-600",
  Intermediate: "text-sky-600",
  Advanced: "text-fuchsia-600",
};

export default function TutorialPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              "radial-gradient(40% 60% at 20% 20%, rgba(58,190,249,.18) 0%, transparent 60%), radial-gradient(35% 45% at 80% 30%, rgba(15,42,169,.12) 0%, transparent 60%), radial-gradient(45% 55% at 60% 90%, rgba(167,230,255,.18) 0%, transparent 60%)",
          }}
        />
        <div className="mx-auto max-w-6xl px-6">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-4 py-1.5 text-xs font-medium text-sky-700 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
            Tutorials · Curious Machine
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Learn the craft of{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #3ABEF9 0%, #050C9C 100%)",
              }}
            >
              data-driven decisions
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600"
          >
            Practical, opinionated tutorials on causal inference, recommendation
            systems, experimentation and production ML — distilled from real
            campaigns serving millions of customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="#tracks"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Explore tracks
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
            >
              Back to home
            </Link>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-slate-200 pt-8 md:grid-cols-4">
            {[
              { k: "6", v: "Tracks" },
              { k: "48+", v: "Modules" },
              { k: "80+", v: "Hours" },
              { k: "8000+", v: "Learners" },
            ].map((s) => (
              <div key={s.v}>
                <div
                  className="text-3xl font-semibold tracking-tight text-slate-900"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {s.k}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section id="tracks" className="py-20" style={{ background: "var(--gradient-background)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <div className="text-xs font-medium uppercase tracking-widest text-sky-700">
                Curriculum
              </div>
              <h2
                className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Choose your track.
              </h2>
            </div>
            <p className="hidden max-w-md text-sm text-slate-600 md:block">
              Each track is a self-contained learning path. Mix and match to
              build the skills you need for your next role or campaign.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tracks.map((t, i) => (
              <motion.article
                key={t.code}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white/80 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/10"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="font-mono text-xs text-slate-400"
                    style={{ fontFamily: "ui-monospace, monospace" }}
                  >
                    {t.code}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider ring-1 ${statusStyle[t.status]}`}
                  >
                    {t.status}
                  </span>
                </div>

                <h3
                  className="mt-4 text-xl font-semibold leading-snug tracking-tight text-slate-900"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {t.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {t.blurb}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {t.topics.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[11px] font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs">
                  <span className={`font-semibold ${levelStyle[t.level]}`}>
                    {t.level}
                  </span>
                  <span className="text-slate-500">{t.duration}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2
            className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Want a track tailored to your team?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-600">
            Curious Machine partners with companies on custom curricula —
            in-house workshops, mentorship cohorts and applied projects.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:hthquan28@gmail.com?subject=Curious%20Machine%20-%20Custom%20Tutorial"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Get in touch
              <span aria-hidden>→</span>
            </a>
            <Link
              href="/education"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
            >
              See education programs
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
