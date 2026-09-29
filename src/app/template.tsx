"use client";
import { motion } from "framer-motion";
import { useMotionPrefs } from "@/components/motion/useMotionPrefs";

// Re-mounts on every navigation, so it plays an entrance animation per route.
export default function Template({ children }: { children: React.ReactNode }) {
  const { reduced } = useMotionPrefs();
  if (reduced) return <>{children}</>;
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}
