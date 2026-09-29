"use client";
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

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
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const style = { "--rd": `${delay}s`, "--rdist": `${distance}px` } as CSSProperties;
  return (
    <div ref={ref} className={`lab-reveal${className ? ` ${className}` : ""}`} style={style}>
      {children}
    </div>
  );
}
