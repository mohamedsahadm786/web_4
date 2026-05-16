# Changes log

## Build 1 — ALLUVI site recreation (BodyPharm UAE reference)

Recreated `bodypharm.ae/uae` as the brand **ALLUVI**, with a futuristic /
vibrant / 3D-feel layer on top (see `action/action.md`).

**Stack:** Vite + React 18 + TypeScript + Tailwind CSS + React Router +
Motion + GSAP (ScrollTrigger) + Lenis. No three.js — 3D is done as 3D-feel
(CSS perspective tilt, parallax, glow, glass).

### Scaffolding
- Vite/TS/Tailwind/PostCSS configs, `index.html`, favicon.
- Design tokens (base theme + futuristic accents) in `index.css` + Tailwind.
- `lib/`: `gsap.ts`, `images.ts` (import.meta.glob resolver), `format.ts`,
  `constants.ts`. `data/`: `products.ts` (8 products), `reviews.ts`, `faqs.ts`.
- `<Img>` + `<Placeholder>` — real image / video / graceful placeholder.

### Shared shell
- Header (transparent → glass on scroll, scroll promo, search, cart),
  SearchOverlay, floating BottomNav, Footer, WhatsappButton, CookieBanner,
  CartDrawer (+ CartContext), Cursor (glow follower), Layout, ScrollManager.
- Helpers: `Reveal`, `TiltCard`, `Magnetic`, `Counter`, `Stars`,
  `SectionHeading`, `Accordion`, `ProductCard`, `Logo`.

### Pages
- **Home** — reviews ticker, hero (8-product strip), image bands, Why ALLUVI
  feature trio + count-up stats, featured products, FAQ accordion, trust
  badges, contact CTA.
- **Shop** — All Products grid (8 cards, compare icon), disclaimer strip.
- **Product detail** — gallery with floating proof badges + 4 thumbnails,
  sticky add-to-cart bar, benefit rows, product FAQ, "What Researchers Say"
  review grid, related products, not-found state.

### Content
- All copy is ALLUVI's own (from `changes/content-and-assets.md`) or freshly
  written for ALLUVI (home/product FAQs, trust badges, benefit rows, extra
  testimonials). No BodyPharm copy reused.
- Brand: ALLUVI. Email kept as `sales@lumauae.com` per user instruction.

### Verified
- `tsc` clean, `npm run build` succeeds, no console errors/warnings.
- Checked at mobile (390), tablet/desktop widths. `prefers-reduced-motion`
  block neutralises animation. SPA fallback added (`_redirects`, `vercel.json`).

### Known follow-ups
- Some product/gallery source images are large (1–3 MB). Recommend
  compressing them for faster loads — `<Img>` already lazy-loads non-hero
  images, but smaller files would help mobile performance.
