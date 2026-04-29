# Curious Machine — Landing Page

Marketing site for **Curious Machine**, a community focused on Data Science and AI education. Built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, and framer-motion.

## Tech stack

- **Framework**: Next.js 15.3 with the App Router and Turbopack dev server
- **UI**: React 19, Tailwind CSS v4 (via `@tailwindcss/postcss`), framer-motion for animation
- **Icons**: `lucide-react`, `react-icons`
- **Utilities**: `clsx` + `tailwind-merge` (re-exported as `cn` from [src/utils/cn.ts](src/utils/cn.ts))
- **Language**: TypeScript 5, strict mode
- **Linting**: ESLint 9 flat config (`eslint.config.mjs`) with `eslint-config-next`

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000  (Turbopack)
npm run build        # production build
npm run start        # serve the production build
npm run lint         # next lint
```

Node 20+ is recommended (matches `@types/node`).

## Project structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout: <LanguageProvider>, Header, NotificationBanner, FloatingButtons
│   ├── page.tsx                # Home page composition
│   ├── globals.css             # Tailwind v4 entrypoint + CSS variables (colors, gradients, fonts)
│   └── education/
│       ├── layout.tsx          # Education-specific header
│       └── page.tsx            # /education route
├── components/                 # All UI components (Hero, Roadmap, AboutUs, FAQContact, …)
├── contexts/
│   └── LanguageContext.tsx     # i18n provider; exposes { language, setLanguage, t }
├── translations/
│   └── index.ts                # Single-file en/vi dictionary consumed by t('a.b.c')
├── types/
│   └── index.ts                # Shared TS types (Course, etc.)
└── utils/
    └── cn.ts                   # clsx + tailwind-merge helper

public/                         # Static assets (logo.svg, /images, favicons)
next.config.js                  # Next.js config (image remotePatterns)
```

### Routing

- `/` — main landing page assembled in [src/app/page.tsx](src/app/page.tsx)
- `/education` — dedicated education page with its own header

### Internationalization

A lightweight in-house i18n lives in [src/contexts/LanguageContext.tsx](src/contexts/LanguageContext.tsx). It exposes a `t(key)` function that resolves dot-separated paths against the dictionary in [src/translations/index.ts](src/translations/index.ts).

- Default language: **Vietnamese (`vi`)**
- Supported: `vi`, `en`
- Language state lives in React state (no persistence) — switch via the language toggle in the header.

To add a new string:

1. Add the key under both `en` and `vi` in `src/translations/index.ts`.
2. Use it in any client component:
   ```tsx
   const { t } = useLanguage();
   return <h1>{t('hero.heading.line1')}</h1>;
   ```

### Styling conventions

- Tailwind utilities first; share design tokens via CSS variables defined in `globals.css` (e.g. `var(--gradient-background)`, `var(--font-heading)`, `var(--tertiary-color)`).
- Use the `cn(...)` helper from `@/utils/cn` to merge conditional class lists.
- Path alias `@/*` → `src/*` is configured in `tsconfig.json` and picked up by Next.js automatically.

### Animations

framer-motion is used liberally across hero, timeline, roadmap, and feature sections. Keep entrance animations short (~0.4–0.6s) and avoid stacking infinite loops above the fold.

### Images

Remote logo/image hosts must be allowlisted in `next.config.js` under `images.remotePatterns` before they can be rendered with `next/image`.

## Deployment

Optimized for [Vercel](https://vercel.com). Any platform that supports Next.js 15 standalone output works as well.

```bash
npm run build && npm run start
```

## Contributing

- Keep components in `src/components/` named with `PascalCase.tsx`, exported as named exports.
- Client components must declare `'use client'` at the top — required for `useState`, `useLanguage`, and framer-motion.
- Run `npm run lint` before opening a PR.
