"use client";

import { useId, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Facebook,
  MessageSquare,
  ArrowRight,
  ArrowUpRight,
  Check,
  AlertCircle,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";


const CHANNELS: { id: string; Icon: LucideIcon; value: string; href: string }[] = [
  { id: "email", Icon: Mail, value: "hello@curiousmachine.dev", href: "mailto:hello@curiousmachine.dev" },
  { id: "linkedin", Icon: Linkedin, value: "/in/curious-machine", href: "https://linkedin.com/in/curious-machine" },
  { id: "discord", Icon: MessageSquare, value: "discord.gg/curious-machine", href: "https://discord.gg/curious-machine" },
  { id: "facebook", Icon: Facebook, value: "/curiousmachine.community", href: "https://facebook.com/curiousmachine.community" },
];

const TOPICS = ["courses", "community", "services", "other"];

export const Contact = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [topic, setTopic] = useState("courses");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formId = useId();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nextErrors: Record<string, string> = {};

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name) nextErrors.name = t("contact.error.required");
    if (!email) nextErrors.email = t("contact.error.required");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      nextErrors.email = t("contact.error.email");
    if (!subject) nextErrors.subject = t("contact.error.required");
    if (!message) nextErrors.message = t("contact.error.required");
    else if (message.length < 10) nextErrors.message = t("contact.error.minMessage");

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstField = Object.keys(nextErrors)[0];
      document.getElementById(`${formId}-${firstField}`)?.focus();
      return;
    }

    // Local-first: simulate submit and show confirmation. Wire to a real backend later.
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const clearError = (field: string) =>
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });

  return (
    <section id="contact" className="cm-section">
      <div className="grid grid-cols-12 gap-6 lg:gap-12">
        <div className="col-span-12 lg:col-span-5">
          <span className="cm-eyebrow">{t("contact.eyebrow")}</span>
          <h2 className="cm-display text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.05] mt-5">
            {t("contact.title.1")} <span className="cm-text-grad">{t("contact.title.2")}</span>
          </h2>
          <p className="text-[var(--ink-2)] mt-5 max-w-md">{t("contact.subtitle")}</p>

          <ul className="mt-10 space-y-3">
            {CHANNELS.map((c) => {
              const Icon = c.Icon;
              return (
                <li key={c.id}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl border border-[var(--line)] hover:border-[var(--line-strong)] hover:bg-[var(--tint-1)] transition group"
                  >
                    <span
                      aria-hidden
                      className="w-10 h-10 grid place-items-center rounded-lg border border-[var(--line)] text-[var(--accent)] shrink-0"
                      style={{ background: "rgba(0,153,194,0.08)" }}
                    >
                      <Icon size={18} />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="cm-mono text-[10px] uppercase tracking-widest text-[var(--ink-3)]">
                        {t(`contact.channel.${c.id}`)}
                      </div>
                      <div className="text-sm cm-display truncate">{c.value}</div>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-[var(--ink-3)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition shrink-0"
                      aria-hidden
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="col-span-12 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="cm-card cm-card-pad relative overflow-hidden"
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                background:
                  "radial-gradient(500px 300px at 100% 0%, rgba(0,153,194,0.10), transparent 60%)",
              }}
            />
            {submitted ? (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative text-center py-16"
                role="status"
              >
                <div
                  aria-hidden
                  className="w-16 h-16 mx-auto rounded-full bg-[var(--accent)]/10 border border-[var(--accent)] grid place-items-center text-[var(--accent)]"
                >
                  <Check size={28} strokeWidth={2.25} />
                </div>
                <h3 className="cm-display text-2xl mt-6">{t("contact.success.title")}</h3>
                <p className="text-[var(--ink-3)] mt-2">{t("contact.success.body")}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="relative space-y-6">
                <fieldset>
                  <legend className="cm-label mb-3 p-0">
                    {t("contact.form.topic")}
                  </legend>
                  <div role="radiogroup" className="flex flex-wrap gap-2">
                    {TOPICS.map((tp) => (
                      <button
                        key={tp}
                        type="button"
                        role="radio"
                        aria-checked={topic === tp}
                        onClick={() => setTopic(tp)}
                        className={`h-9 px-4 text-sm rounded-full border transition ${
                          topic === tp
                            ? "bg-[var(--accent)]/10 border-[var(--accent)] text-[var(--ink-1)]"
                            : "border-[var(--line)] text-[var(--ink-3)] hover:text-[var(--ink-1)]"
                        }`}
                      >
                        {t(`contact.topic.${tp}`)}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field
                    id={`${formId}-name`}
                    name="name"
                    label={t("contact.form.name")}
                    autoComplete="name"
                    required
                    error={errors.name}
                    onInput={() => clearError("name")}
                  />
                  <Field
                    id={`${formId}-email`}
                    name="email"
                    type="email"
                    inputMode="email"
                    label={t("contact.form.email")}
                    autoComplete="email"
                    required
                    error={errors.email}
                    onInput={() => clearError("email")}
                  />
                </div>

                <Field
                  id={`${formId}-subject`}
                  name="subject"
                  label={t("contact.form.subject")}
                  required
                  error={errors.subject}
                  onInput={() => clearError("subject")}
                />

                <div>
                  <label
                    htmlFor={`${formId}-message`}
                    className="cm-label"
                  >
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id={`${formId}-message`}
                    name="message"
                    rows={5}
                    required
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? `${formId}-message-error` : undefined}
                    onInput={() => clearError("message")}
                    className="cm-input resize-none"
                    placeholder={t("contact.form.message.placeholder")}
                  />
                  {errors.message && (
                    <p
                      id={`${formId}-message-error`}
                      className="cm-error"
                      role="alert"
                    >
                      <AlertCircle size={12} aria-hidden />
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                  <button type="submit" className="cm-btn cm-btn-primary">
                    {t("contact.form.submit")}
                    <ArrowRight size={16} aria-hidden />
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

type FieldProps = {
  id: string;
  name: string;
  label: string;
  type?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  autoComplete?: string;
  required?: boolean;
  error?: string;
  onInput?: () => void;
};

const Field = ({
  id,
  name,
  label,
  type = "text",
  inputMode,
  autoComplete,
  required = false,
  error,
  onInput,
}: FieldProps) => (
  <div>
    <label htmlFor={id} className="cm-label">
      {label}
      {required && (
        <span aria-hidden className="text-[var(--accent)] ml-1">
          *
        </span>
      )}
    </label>
    <input
      id={id}
      name={name}
      type={type}
      inputMode={inputMode}
      autoComplete={autoComplete}
      required={required}
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
      onInput={onInput}
      className="cm-input"
    />
    {error && (
      <p id={`${id}-error`} className="cm-error" role="alert">
        <AlertCircle size={12} aria-hidden />
        {error}
      </p>
    )}
  </div>
);
