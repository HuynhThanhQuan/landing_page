# Public surface v2 — Dark Lab (29 September 2026)

## Use locally

```sh
npm ci
npm run lint
npm run typecheck
npm run build
npm run smoke
python3 -m http.server 3031 --bind 127.0.0.1 --directory out
```

Open http://127.0.0.1:3031/. `out/` is the complete static website; no database,
server-side API, API key or Studio instance is needed. `npm run dev` is for editing;
`next start` is not the preview command for an exported site.

## What ships

- Dark technical-lab redesign: 3D particle hero (three.js, lazy), scroll-scrubbed labs, tilt/magnetic/cursor micro-interactions, command palette (Ctrl/⌘+K), dark/light theme, route transitions. Content and bilingual copy are unchanged.
- Evidence-first home with selected experiments, scoped collaboration offerings,
  personal-portfolio cross-link and email contact. The mail link opens a mail client;
  nothing is sent or collected by the website. The old simulated-success form and
  unverified counts/testimonials are no longer rendered. Legacy components remain
  in source for reference, not in the public route tree.
- `/experiments.html`: searchable/filterable catalogue and 11 standalone lab pages,
  each with methods, limitations and downloadable synthetic/deterministic evidence.
- `/notes/`: three short English articles with links to their corresponding labs.
- `/tutorial/`: a working learning-resource index for the old portfolio link.
- Canonical metadata, Open Graph/Twitter PNG, robots, sitemap and organization data.
- Static build with system fonts, avoiding a failing external Google-font build fetch. The only added runtime dependency is three.js, loaded lazily.

## Content and language

English is the default for global readers. Home offers English/Vietnamese, persists
only a language preference in localStorage and updates the document language.
Field notes and experiment methods are deliberately English, labeled as such;
no claim of fully translated routes or hreflang alternates. Edit home copy in
`src/components/home/*.tsx` and `src/lib/content.ts`; notes in `src/lib/notes.ts`.

In the umbrella repository run `node scripts/publish-labs.mjs` to refresh both sites
from the lab sources, then rebuild this site. The packager copies only five public
assets per lab; it never copies Studio notes, source notebooks or credentials.
The generated library works without a JS framework and keeps all links visible
when JavaScript is disabled (search/filter requires JavaScript).

## Motion policy

- Motion is progressive: `prefers-reduced-motion: reduce` removes particle motion, pinning,
  tilt, magnetic effect, custom cursor, marquee and count-ups. Touch devices skip
  cursor, tilt and magnetic effects.
- Scroll reveals are CSS transitions toggled by an IntersectionObserver and are visible
  without JavaScript; the route entrance is a CSS animation. Pinning also requires a
  viewport at least 720 px tall.
- The hero canvas is fetched and started only after the window load event and an idle
  callback. On narrow or low-core devices it uses fewer particles (1600), DPR 1 and a
  30 fps cap. With WebGL missing, Save-Data, reduced motion or context loss it stays on
  the static SVG field.
- Theme choice (`cm-theme-v1`) and language (`cm-language-v1`) are the only localStorage keys.
- `npm run smoke` checks the export: required sections, theme script, no third-party
  asset requests, three.js not in the initial bundle, initial JS within baseline +60 KB gzip.

## Known limits / verification

- Lighthouse mobile performance measured 83-84 on the local static export under simulated
  throttling with software WebGL (LCP ~4.6 s; TBT 20-50 ms).
- The reduced-motion and WebGL-off paths are implemented but were not exercised in an
  automated browser test.

## Verification and boundaries

Lint, typecheck and production static export passed. Root-level
`node scripts/verify-public-sites.mjs` checks both sites' internal asset/link/anchor
targets and all 11 packages. Browser QA covers desktop/mobile, language persistence,
library filters and lab navigation. This is not a claimed Lighthouse 95+ audit.

Not deployed or committed by this release. Existing production URLs may still show
the previous version. Mail delivery, booking availability and external profiles were
not exercised. CRM/newsletter, paid checkout, verified testimonials, production
analytics and custom-domain migration require separate configuration/approval.
Only deploy the exported `out/` directory, never the repository or private Studio.
