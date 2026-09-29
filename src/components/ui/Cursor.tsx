"use client";
import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useMotionPrefs } from "@/components/motion/useMotionPrefs";

export function Cursor() {
  const { canHover } = useMotionPrefs();
  const x = useSpring(-100, { stiffness: 500, damping: 40, mass: 0.3 });
  const y = useSpring(-100, { stiffness: 500, damping: 40, mass: 0.3 });
  const [hot, setHot] = useState(false);
  useEffect(() => {
    if (!canHover) return;
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHot(!!(e.target as Element | null)?.closest?.("a,button,[data-cursor]"));
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [canHover, x, y]);
  if (!canHover) return null;
  return <motion.div aria-hidden="true" className={`lab-cursor${hot ? " is-hot" : ""}`} style={{ x, y }} />;
}
