"use client";
import { motion, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useMotionPrefs } from "./useMotionPrefs";

export function Magnetic({ children, strength = 0.3 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const { canHover } = useMotionPrefs();
  const x = useSpring(0, { stiffness: 220, damping: 16, mass: 0.4 });
  const y = useSpring(0, { stiffness: 220, damping: 16, mass: 0.4 });
  if (!canHover) return <span className="lab-magnetic">{children}</span>;
  return (
    <motion.span
      ref={ref}
      className="lab-magnetic"
      style={{ x, y }}
      onPointerMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.span>
  );
}
