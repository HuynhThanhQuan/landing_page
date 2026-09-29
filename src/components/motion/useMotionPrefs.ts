"use client";
import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const on = () => setMatches(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, [query]);
  return matches;
}

// canHover = mouse-like pointer AND the user has not asked for reduced motion.
export function useMotionPrefs() {
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  const fine = useMediaQuery("(hover: hover) and (pointer: fine)");
  return { reduced, fine, canHover: fine && !reduced };
}
