"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useMotionPrefs } from "./useMotionPrefs";

export function Reveal({
  children,
  delay = 0,
  distance = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  distance?: number;
  className?: string;
}) {
  const { reduced } = useMotionPrefs();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      data-reveal
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
