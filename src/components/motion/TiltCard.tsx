"use client";
import { motion, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useMotionPrefs } from "./useMotionPrefs";

// Always renders the same element type: swapping div <-> motion.div after hydration would
// remount the children and strand observers (e.g. useInView) held by parent components.
export function TiltCard({ children, className, max = 8 }: { children: ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { canHover } = useMotionPrefs();
  const rx = useSpring(0, { stiffness: 180, damping: 18 });
  const ry = useSpring(0, { stiffness: 180, damping: 18 });
  return (
    <motion.div
      ref={ref}
      className={className}
      style={canHover ? { rotateX: rx, rotateY: ry, transformPerspective: 900 } : undefined}
      onPointerMove={
        canHover
          ? (e) => {
              const el = ref.current;
              if (!el) return;
              const r = el.getBoundingClientRect();
              const px = (e.clientX - r.left) / r.width;
              const py = (e.clientY - r.top) / r.height;
              ry.set((px - 0.5) * 2 * max);
              rx.set(-(py - 0.5) * 2 * max);
              el.style.setProperty("--mx", `${px * 100}%`);
              el.style.setProperty("--my", `${py * 100}%`);
            }
          : undefined
      }
      onPointerLeave={
        canHover
          ? () => {
              rx.set(0);
              ry.set(0);
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}
