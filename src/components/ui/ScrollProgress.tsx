"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { useMotionPrefs } from "@/components/motion/useMotionPrefs";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });
  const { reduced } = useMotionPrefs();
  return <motion.div className="lab-progress" style={{ scaleX: reduced ? scrollYProgress : smooth }} aria-hidden="true" />;
}
