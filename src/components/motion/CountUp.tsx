"use client";
import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useMotionPrefs } from "./useMotionPrefs";

// Server HTML and reduced-motion show the final value; otherwise it counts up once in view.
export function CountUp({ to, duration = 1.4 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const { reduced } = useMotionPrefs();
  const [n, setN] = useState(to);
  useEffect(() => {
    if (!reduced) setN(0);
  }, [reduced, to]);
  useEffect(() => {
    if (!inView || reduced) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduced, to, duration]);
  return <span ref={ref}>{n}</span>;
}
