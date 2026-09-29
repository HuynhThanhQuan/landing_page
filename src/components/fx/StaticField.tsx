// src/components/fx/StaticField.tsx
// Deterministic dots so server and client markup match.
const DOTS = (() => {
  let s = 7;
  const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
  return Array.from({ length: 70 }, () => ({ x: r() * 100, y: r() * 100, r: 0.6 + r() * 1.6, c: r() }));
})();

export function StaticField() {
  return (
    <div className="lab-static" aria-hidden="true">
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        {DOTS.map((d, i) => (
          <circle
            key={i}
            cx={d.x.toFixed(2)}
            cy={d.y.toFixed(2)}
            r={(d.r * 0.18).toFixed(2)}
            fill={d.c > 0.9 ? "var(--amber)" : d.c > 0.5 ? "var(--violet)" : "var(--cyan)"}
            opacity={(0.35 + d.c * 0.4).toFixed(2)}
          />
        ))}
      </svg>
    </div>
  );
}
