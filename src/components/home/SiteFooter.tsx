"use client";
import { topics } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="lab-footer">
      <div className="lab-marquee" aria-hidden="true">
        <div className="lab-marquee-track">
          {[...topics, ...topics].map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>
      <div className="lab-container lab-footer-row">
        <span>© 2026 Curious Machine · Built by Quan</span>
        <span>Vietnam-based. Globally curious.</span>
        <a className="lab-link" href="https://github.com/HuynhThanhQuan/curious-machine">
          GitHub ↗
        </a>
      </div>
    </footer>
  );
}
