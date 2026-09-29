// src/components/fx/HeroBackdrop.tsx
"use client";
import { useCallback, useEffect, useState, type ComponentType } from "react";
import { useMotionPrefs } from "@/components/motion/useMotionPrefs";
import { useTheme } from "@/contexts/ThemeContext";
import type { Theme } from "@/lib/theme";
import { StaticField } from "./StaticField";

type FieldComponent = ComponentType<{ theme: Theme; onFail: () => void }>;

function canUseWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}
function saveData() {
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  return !!conn?.saveData;
}

export function HeroBackdrop() {
  const { reduced } = useMotionPrefs();
  const { theme } = useTheme();
  const [Field, setField] = useState<FieldComponent | null>(null);
  const fail = useCallback(() => setField(null), []);

  useEffect(() => {
    if (reduced || saveData() || !canUseWebGL()) return;
    let cancelled = false;
    let idleId = 0;
    const load = () => {
      import("./HeroField").then((m) => {
        if (!cancelled) setField(() => m.default);
      }, () => {});
    };
    // Fetch and start the heavy canvas only after the page has loaded and gone idle.
    const schedule = () => {
      if (typeof window.requestIdleCallback === "function") idleId = window.requestIdleCallback(load, { timeout: 2500 });
      else idleId = window.setTimeout(load, 800);
    };
    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });
    return () => {
      cancelled = true;
      window.removeEventListener("load", schedule);
      if (typeof window.cancelIdleCallback === "function") window.cancelIdleCallback(idleId);
      window.clearTimeout(idleId);
    };
  }, [reduced]);

  return (
    <div className="lab-hero-bg">
      <StaticField />
      {Field && !reduced && <Field theme={theme} onFail={fail} />}
    </div>
  );
}
