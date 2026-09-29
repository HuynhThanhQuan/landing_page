// src/components/ui/CommandPalette.tsx
"use client";
import { useRouter } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { EMAIL, pick } from "@/lib/content";
import { buildEntries, filterEntries, type PaletteEntry } from "@/lib/palette";

type Props = { open: boolean; onClose: () => void; onToast: (msg: string) => void };

export function CommandPalette({ open, onClose, onToast }: Props) {
  return open ? <PaletteDialog onClose={onClose} onToast={onToast} /> : null;
}

function PaletteDialog({ onClose, onToast }: Omit<Props, "open">) {
  const { language, setLanguage } = useLanguage();
  const vi = language === "vi";
  const { toggle } = useTheme();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listId = useId();
  const entries = useMemo(() => buildEntries(), []);
  const results = useMemo(() => filterEntries(entries, query), [entries, query]);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    inputRef.current?.focus();
    return () => previous?.focus();
  }, []);

  useEffect(() => {
    document.getElementById(`${listId}-${index}`)?.scrollIntoView({ block: "nearest" });
  }, [index, listId]);

  const run = (entry: PaletteEntry) => {
    onClose();
    if (entry.kind === "nav") {
      if (entry.href.endsWith(".html")) window.location.assign(entry.href);
      else router.push(entry.href);
      return;
    }
    if (entry.action === "lang") setLanguage(vi ? "en" : "vi");
    else if (entry.action === "theme") toggle();
    else {
      const done = () => onToast(vi ? "Đã sao chép email" : "Email copied");
      const fail = () => onToast(EMAIL);
      if (navigator.clipboard) navigator.clipboard.writeText(EMAIL).then(done, fail);
      else fail();
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    } else if (e.key === "Tab") {
      e.preventDefault(); // focus stays on the input: the only tabbable control
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (results.length) setIndex((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (results.length) setIndex((i) => (i - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const entry = results[index];
      if (entry) run(entry);
    }
  };

  return (
    <div
      className="lab-pal-backdrop"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="lab-pal"
        role="dialog"
        aria-modal="true"
        aria-label={vi ? "Bảng lệnh" : "Command palette"}
        onKeyDown={onKeyDown}
      >
        <input
          ref={inputRef}
          className="lab-pal-input"
          role="combobox"
          aria-expanded="true"
          aria-autocomplete="list"
          aria-controls={listId}
          aria-activedescendant={results.length ? `${listId}-${index}` : undefined}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIndex(0);
          }}
          placeholder={vi ? "Tìm mục, bài viết, thí nghiệm…" : "Search sections, notes, experiments…"}
          spellCheck={false}
          autoComplete="off"
        />
        <ul id={listId} role="listbox" className="lab-pal-list" aria-label={vi ? "Kết quả" : "Results"}>
          {results.map((r, i) => (
            <li
              key={r.id}
              id={`${listId}-${i}`}
              role="option"
              aria-selected={i === index}
              className={i === index ? "is-active" : undefined}
              onMouseMove={() => setIndex(i)}
              onClick={() => run(r)}
            >
              <span>{pick(r.label, vi)}</span>
              <small>{pick(r.group, vi)}</small>
            </li>
          ))}
        </ul>
        {results.length === 0 && <p className="lab-pal-empty">{vi ? "Không có kết quả." : "No matches."}</p>}
        <div className="lab-pal-foot" aria-hidden="true">
          <span><kbd className="lab-kbd">↑↓</kbd> {vi ? "chọn" : "move"}</span>
          <span><kbd className="lab-kbd">↵</kbd> {vi ? "mở" : "open"}</span>
          <span><kbd className="lab-kbd">esc</kbd> {vi ? "đóng" : "close"}</span>
        </div>
      </div>
    </div>
  );
}
