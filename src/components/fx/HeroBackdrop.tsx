// src/components/fx/HeroBackdrop.tsx
"use client";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";
import { useMotionPrefs } from "@/components/motion/useMotionPrefs";
import { useTheme } from "@/contexts/ThemeContext";
import { StaticField } from "./StaticField";

const HeroField = dynamic(() => import("./HeroField"), { ssr: false });

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
  const [live, setLive] = useState(false);
  const fail = useCallback(() => setLive(false), []);

  useEffect(() => {
    if (reduced || saveData() || !canUseWebGL()) return;
    const start = () => setLive(true);
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(start, { timeout: 1500 });
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(start, 400);
    return () => window.clearTimeout(id);
  }, [reduced]);

  return (
    <div className="lab-hero-bg">
      <StaticField />
      {live && !reduced && <HeroField theme={theme} onFail={fail} />}
    </div>
  );
}
