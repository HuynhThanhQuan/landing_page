"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";


const CHANNELS = [
  { id: "email", icon: "✉", value: "hello@curiousmachine.dev" },
  { id: "linkedin", icon: "in", value: "/in/curious-machine" },
  { id: "discord", icon: "◇", value: "discord.gg/curious-machine" },
  { id: "facebook", icon: "f", value: "/curiousmachine.community" },
];

export const Contact = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [topic, setTopic] = useState("courses");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Local-first: simulate submit and show confirmation. Wire to a real backend later.
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="cm-section">
      <div className="grid grid-cols-12 gap-6 lg:gap-12">
        <div className="col-span-12 lg:col-span-5">
          <span className="cm-eyebrow">{t("contact.eyebrow")}</span>
          <h2 className="cm-display text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.05] mt-5">
            {t("contact.title.1")} <span className="cm-text-grad">{t("contact.title.2")}</span>
          </h2>
          <p className="text-[var(--ink-2)] mt-5 max-w-md">{t("contact.subtitle")}</p>

          <div className="mt-10 space-y-3">
            {CHANNELS.map((c) => (
              <a
                key={c.id}
                href="#"
                className="flex items-center gap-4 p-4 rounded-xl border border-[var(--line)] hover:border-[var(--line-strong)] hover:bg-white/[0.03] transition group"
              >
                <span
                  className="w-10 h-10 grid place-items-center rounded-lg border border-[var(--line)] cm-display text-[var(--accent)]"
                  style={{ background: "rgba(122,231,255,0.05)" }}
                >
                  {c.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="cm-mono text-[10px] uppercase tracking-widest text-[var(--ink-3)]">
                    {t(`contact.channel.${c.id}`)}
                  </div>
                  <div className="text-sm cm-display truncate">{c.value}</div>
                </div>
                <span className="text-[var(--ink-3)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 transition">→</span>
              </a>
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="cm-card cm-card-pad relative overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                background:
                  "radial-gradient(500px 300px at 100% 0%, rgba(122,231,255,0.18), transparent 60%)",
              }}
            />
            {submitted ? (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative text-center py-16"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-[var(--accent)]/10 border border-[var(--accent)] grid place-items-center cm-display text-2xl text-[var(--accent)]">
                  ✓
                </div>
                <h3 className="cm-display text-2xl mt-6">{t("contact.success.title")}</h3>
                <p className="text-[var(--ink-3)] mt-2">{t("contact.success.body")}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="relative space-y-6">
                <div>
                  <div className="cm-mono text-[10px] uppercase tracking-widest text-[var(--ink-3)] mb-3">
                    {t("contact.form.topic")}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["courses", "community", "services", "other"].map((tp) => (
                      <button
                        key={tp}
                        type="button"
                        onClick={() => setTopic(tp)}
                        className={`px-4 py-2 text-sm rounded-full border transition ${
                          topic === tp
                            ? "bg-[var(--accent)]/10 border-[var(--accent)] text-[var(--ink-1)]"
                            : "border-[var(--line)] text-[var(--ink-3)] hover:text-[var(--ink-1)]"
                        }`}
                      >
                        {t(`contact.topic.${tp}`)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field name="name" label={t("contact.form.name")} required />
                  <Field name="email" label={t("contact.form.email")} type="email" required />
                </div>

                <Field name="subject" label={t("contact.form.subject")} required />

                <div>
                  <label className="cm-mono text-[10px] uppercase tracking-widest text-[var(--ink-3)] block mb-2">
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-white/[0.03] border border-[var(--line)] rounded-xl px-4 py-3 text-sm focus:border-[var(--accent)] focus:bg-white/[0.05] outline-none transition resize-none"
                    placeholder={t("contact.form.message.placeholder")}
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                  <button type="submit" className="cm-btn cm-btn-primary">
                    {t("contact.form.submit")} →
                  </button>
                  <span className="cm-mono text-[10px] uppercase tracking-widest text-[var(--ink-4)]">
                    {t("contact.form.replyTime")}
                  </span>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  name,
  label,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) => (
  <div>
    <label className="cm-mono text-[10px] uppercase tracking-widest text-[var(--ink-3)] block mb-2">
      {label}
    </label>
    <input
      name={name}
      type={type}
      required={required}
      className="w-full bg-white/[0.03] border border-[var(--line)] rounded-xl px-4 py-3 text-sm focus:border-[var(--accent)] focus:bg-white/[0.05] outline-none transition"
    />
  </div>
);
