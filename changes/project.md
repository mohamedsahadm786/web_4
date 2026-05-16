# ALLUVI — Project Reference & Editing Guide

> **Read this first.** A complete briefing on the ALLUVI website: what it is,
> how it is built, every section, every animation, and **exactly which file to
> open to change any given thing**. If you want to edit the site, point Claude
> at this file.
>
> Companion files in this folder: `content-and-assets.md` (all written copy +
> the image-slot system), `recreation-rules.md` (build playbook),
> `changes.md` (build log). Design analysis lives in `action/action.md`.

---

## 1. What this site is

- **Brand:** ALLUVI — a premium research-peptide / supplement-formulation
  e-commerce site (UAE).
- **Origin:** a behavioural recreation of `bodypharm.ae/uae` — same layout,
  section flow and calm premium theme — rebuilt with ALLUVI's own content and
  a **vibrant / futuristic / 3D-feel** layer added on top.
- **Pages:** Home, Shop (`/shop`), Product detail (`/product/:slug`).
- **Type:** single-page React app (client-side routing). No backend — the
  cart checks out through WhatsApp.

---

## 2. Tech stack

| Layer | Tool |
|-------|------|
| Build tool | **Vite** |
| Framework | **React 18** + **TypeScript** |
| Styling | **Tailwind CSS** (tokens via CSS variables) |
| Routing | **React Router** (`react-router-dom`) |
| UI animation | **Motion** (`motion/react`) |
| Scroll animation | **GSAP** + **ScrollTrigger** |
| Smooth scroll | **Lenis** |
| Misc motion | Pure CSS keyframes (marquee, float, shine, aurora, pulse) |

No three.js — "3D" is done as **3D-feel** (CSS perspective tilt, parallax,
glow, glass). No other animation libraries.

---

## 3. Running the project

```bash
npm install      # install dependencies (first time only)
npm run dev      # start dev server  → http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
npm run typecheck
```

---

## 4. Folder structure (the file map)

```
web_4/
├─ index.html                 page shell, <title>, meta description
├─ tailwind.config.js         design tokens: colours, fonts, keyframes
├─ vite.config.ts             build config (path alias "@/")
├─ public/
│  ├─ favicon.svg
│  └─ _redirects              SPA routing fallback (Netlify)
├─ vercel.json                SPA routing fallback (Vercel)
├─ src/
│  ├─ main.tsx                app entry — mounts React + Router
│  ├─ App.tsx                 ROUTE TABLE (which URL → which page)
│  ├─ index.css               global styles, CSS variable tokens, .btn/.glass…
│  │
│  ├─ lib/
│  │  ├─ constants.ts         BRAND info, nav links, footer links, disclaimer
│  │  ├─ products.ts? (no — see data/)
│  │  ├─ images.ts            image resolver (maps file names → URLs)
│  │  ├─ format.ts            price formatting + WhatsApp link helper
│  │  └─ gsap.ts              GSAP plugin registration
│  │
│  ├─ data/                   ← ALL CONTENT DATA lives here
│  │  ├─ products.ts          the 8 products (name, price, blurb, benefits…)
│  │  ├─ reviews.ts           customer testimonials
│  │  └─ faqs.ts              home FAQ + product-FAQ generator
│  │
│  ├─ hooks/
│  │  ├─ useLenis.ts          smooth-scroll setup
│  │  ├─ useMediaQuery.ts     responsive / reduced-motion / pointer checks
│  │  └─ useScrolled.ts       "has the page scrolled past N px" flag
│  │
│  ├─ context/
│  │  └─ CartContext.tsx      shopping-cart state (add / remove / qty)
│  │
│  ├─ components/             reusable UI building blocks (see §7)
│  ├─ sections/               the home-page sections (see §6)
│  ├─ pages/                  one file per route: Home, Shop, ProductPage
│  └─ images/                 real photos — one folder per slot (see §9)
```

**Rule of thumb:**
- Change **wording / prices / products** → `src/data/` or `src/lib/constants.ts`.
- Change a **home section's layout** → `src/sections/<Section>.tsx`.
- Change something on **every page** (header, footer, cart…) → `src/components/`.
- Change **colours, fonts, animation timing** → `tailwind.config.js` + `src/index.css`.
- Swap a **photo** → drop a file into `src/images/<folder>/` (see §9).

---

## 5. Design system

### 5.1 Colours — where to change them
All colours are CSS variables in **`src/index.css`** (the `:root` block).
Editing a value there recolours the whole site.

| Variable | Meaning |
|----------|---------|
| `--background` | page canvas (warm off-white) |
| `--foreground` | main text colour (warm near-black) |
| `--card` | card / panel surfaces (white) |
| `--muted` / `--muted-foreground` | subtle fills / secondary text |
| `--border` | hairline borders |
| `--ink` | deep dark — footer, dark banners |
| `--primary` | soft lavender accent |
| `--primary-vivid` | punchier lavender (gradients) |
| `--accent-cool` | electric cyan companion |

The accent **gradient** (lavender → cyan) is used through the `.text-grad`
class and many `from-primary-vivid to-accent-cool` utilities.

### 5.2 Fonts
- **Hanken Grotesk** for everything (headings + body), loaded from Google
  Fonts at the top of `src/index.css`.
- To change the font: update the `@import` line in `src/index.css` **and**
  the `fontFamily` entry in `tailwind.config.js`.

### 5.3 Reusable style classes (defined in `src/index.css`)
| Class | What it is |
|-------|------------|
| `.shell` | centered max-width page container |
| `.section-pad` | standard vertical section padding |
| `.eyebrow` | small uppercase label above headings |
| `.text-grad` | lavender→cyan gradient text |
| `.btn-primary` | gradient pill button with hover shine sweep |
| `.btn-ghost` | outlined pill button |
| `.glass` | frosted-glass panel (blur + translucency) |
| `.card-surface` | white card with soft shadow |

### 5.4 Animation keyframes
Defined in **`tailwind.config.js`** (`keyframes` + `animation`): `marquee`,
`float`, `float-slow`, `spin-slow`, `pulseglow`, `shine`, `aurora`,
`fade-up`. Use them as classes, e.g. `animate-float`, `animate-aurora`.

---

## 6. The Home page — section by section

The Home page is assembled in **`src/pages/Home.tsx`** — it simply stacks the
section components in order. Each section is its own file in `src/sections/`.

| # | Section | File | Anchor id | What it contains |
|---|---------|------|-----------|------------------|
| 1 | Reviews ticker | `sections/ReviewsTicker.tsx` | — | thin auto-scrolling strip of mini reviews (sits at top of hero) |
| 2 | Hero | `sections/Hero.tsx` | `#top` | headline, sub-text, buttons, 8-product strip |
| 3 | Image band #1 | `sections/ImageBand.tsx` | — | full-bleed parallax video band |
| 4 | Why ALLUVI | `sections/WhySection.tsx` | `#why` | 3 feature cards + count-up stats |
| 5 | Image band #2 | `sections/ImageBand.tsx` | — | full-bleed parallax image + caption |
| 6 | Our Formulations | `sections/ProductsSection.tsx` | `#products` | 3 featured product cards |
| 7 | FAQ | `sections/FaqSection.tsx` | `#faq` | accordion of 4 questions |
| 8 | Trust badges | `sections/TrustBadges.tsx` | — | 4 trust items row |
| 9 | Contact CTA | `sections/ContactSection.tsx` | `#contact` | dark banner, contact details, WhatsApp button |
| — | Footer | `components/Footer.tsx` | — | rendered globally (see §7) |

> **To reorder, add, or remove a home section:** edit `src/pages/Home.tsx`.
> **To change a section's content or layout:** edit its file above.
> The two `ImageBand` instances are configured by props in `Home.tsx`
> (which image, caption text, call-to-action).

---

## 7. Shared components (`src/components/`)

These appear on multiple pages. The global ones (header, footer, nav, cart,
etc.) are mounted once in **`src/components/Layout.tsx`**, which wraps every
page.

| File | Role | Edit it to… |
|------|------|-------------|
| `Layout.tsx` | global wrapper — mounts header/footer/nav/cart/cursor; route transitions | change what appears on every page |
| `Header.tsx` | top bar — logo, scroll promo, search, cart | change the header |
| `Footer.tsx` | site footer — links, contact, social, watermark | change the footer |
| `BottomNav.tsx` | floating bottom navigation bar | change bottom-nav items |
| `SearchOverlay.tsx` | search modal (filters products) | change search behaviour |
| `CartDrawer.tsx` | slide-in cart panel + WhatsApp checkout | change the cart panel |
| `WhatsappButton.tsx` | floating green WhatsApp button | change/remove that button |
| `CookieBanner.tsx` | privacy / cookie consent banner | change cookie text |
| `Cursor.tsx` | custom glow cursor (desktop only) | change/remove the cursor |
| `ScrollManager.tsx` | scrolls to top / to anchors on navigation | scroll behaviour on route change |
| `Logo.tsx` | ALLUVI logo (wordmark or image) | change the logo |
| `Header`/`Footer` nav | data comes from `lib/constants.ts` (`NAV`, `FOOTER_LINKS`) | change nav link labels/targets |
| **Building blocks** | | |
| `ProductCard.tsx` | the product card (home + shop) | change how products look in grids |
| `ProductGallery.tsx` | product-page image gallery + floating badges | change the product image area |
| `Accordion.tsx` | expandable Q&A list (FAQ sections) | change accordion behaviour |
| `SectionHeading.tsx` | eyebrow + big heading block | change heading style |
| `Reveal.tsx` | scroll-reveal wrapper (fade/slide/blur in) | change the reveal animation |
| `TiltCard.tsx` | 3D pointer-tilt wrapper for cards | change/disable card tilt |
| `Magnetic.tsx` | makes a button drift toward the cursor | change/disable magnetic effect |
| `Counter.tsx` | number that counts up when scrolled into view | change count-up stats |
| `Stars.tsx` | 5-star rating row | — |
| `Img.tsx` | smart image — real photo / video / placeholder | image rendering logic |
| `Placeholder.tsx` | grey placeholder when an image is missing | placeholder look |
| `icons.tsx` | all SVG icons used on the site | add/edit an icon |

---

## 8. The pages (`src/pages/`)

| File | Route | Notes |
|------|-------|-------|
| `Home.tsx` | `/` | stacks the home sections (§6) |
| `Shop.tsx` | `/shop` | "All Products" — grid of all 8 products |
| `ProductPage.tsx` | `/product/:slug` | single product — gallery, sticky add-to-cart bar, benefits, product FAQ, review grid, related products; shows a "not found" state for an unknown slug |

Routes are declared in **`src/App.tsx`** — add a new page/route there.

---

## 9. Content & data — where the words and products live

### 9.1 Brand details
**`src/lib/constants.ts`** — `BRAND` object: name, tagline, address, email,
phone, WhatsApp number, social links. Also `NAV`, `FOOTER_LINKS`, and the
legal `DISCLAIMER` text.

### 9.2 Products
**`src/data/products.ts`** — the 8 products. Each has: `slug`, `name`,
`price` (number, or `null` for "enquire only"), `badge` (dose label),
`category`, `tint` (the card's pastel colour), `blurb`, `description`
(2 paragraphs), `benefits` (bullet list on the product page).

- To **edit a product** (price, name, text) → edit its entry here.
- To **add/remove a product** → add/remove an entry here, then add matching
  images (see §9.5). The `slug` drives the URL **and** the image file names.

### 9.3 Reviews / testimonials
**`src/data/reviews.ts`** — used by the reviews ticker and the product-page
review grid. Each: `name`, `role`, `avatar`, `quote`, `date`.

### 9.4 FAQs
**`src/data/faqs.ts`** — `faqs` is the home-page FAQ list; `productFaqs(name)`
generates the per-product FAQ shown on each product page.

### 9.5 Images — the slot system
Real photos live in **`src/images/`**, one folder per area. The site loads
them automatically by **file name** — no code change needed.

| Folder | Holds |
|--------|-------|
| `logo/` | `site-logo` (else the ALLUVI wordmark shows) |
| `hero/` | hero background image |
| `products/` | one image per product, named after its `slug` |
| `product-gallery/` | 4 images per product: `<slug>_1` … `<slug>_4` |
| `about/` | media used in image bands |
| `extra/` | `E_1`, `E_2`, `E_3` — banner / decorative images |
| `testimonials/` | reviewer avatars |

To **swap a photo:** put a file with the matching name into the folder (any
of `.jpg/.png/.webp/.mp4`…). A missing file just shows a grey placeholder —
nothing breaks. Full detail is in `content-and-assets.md` §6–§8.

---

## 10. Animations & motion — the full catalogue

Each effect and the file/tool that owns it:

| Effect | Where / how |
|--------|-------------|
| Smooth page scrolling | Lenis — `hooks/useLenis.ts` (started in `Layout.tsx`) |
| Reviews ticker (infinite strip) | CSS `animate-marquee` — `sections/ReviewsTicker.tsx` |
| Hero entrance (staggered blur-in) | Motion variants — `sections/Hero.tsx` |
| Hero background parallax | GSAP ScrollTrigger — `sections/Hero.tsx` |
| Hero aurora blobs / floating glows | CSS `animate-aurora` / `animate-float-slow` |
| Sticky header promo slides in on scroll | Motion + `useScrolled` — `components/Header.tsx` |
| Section reveal (fade + slide + blur, once) | `components/Reveal.tsx` (Motion `whileInView`) |
| Full-bleed image parallax | GSAP ScrollTrigger — `sections/ImageBand.tsx` |
| Card 3D tilt + sheen on hover | `components/TiltCard.tsx` (Motion springs) |
| Buttons drift toward cursor (magnetic) | `components/Magnetic.tsx` |
| Button hover "shine sweep" | CSS `.btn-primary` / `animate-shine` — `index.css` |
| Count-up numbers | `components/Counter.tsx` |
| Accordion expand / collapse | Motion — `components/Accordion.tsx` |
| Product card image zoom on hover | CSS transform — `components/ProductCard.tsx` |
| Floating proof badges on product image | CSS `animate-float` — `components/ProductGallery.tsx` |
| Sticky "Add to Cart" bar on product page | Motion + `useScrolled` — `pages/ProductPage.tsx` |
| Cart drawer slide-in | Motion `AnimatePresence` — `components/CartDrawer.tsx` |
| WhatsApp button pulse glow | CSS `animate-pulseglow` — `components/WhatsappButton.tsx` |
| Custom glow cursor | `components/Cursor.tsx` (desktop only) |
| Page / route fade transition | Motion `AnimatePresence` — `components/Layout.tsx` |

**Accessibility:** every animation is disabled or simplified when the visitor
has "reduce motion" turned on — handled by a `prefers-reduced-motion` block
in `src/index.css` plus checks in the hooks/components.

**Motion rules used throughout:** only `transform` / `opacity` are animated
(no layout jank); scroll reveals play **once**; one shared easing curve
`cubic-bezier(0.22, 1, 0.36, 1)`.

---

## 11. "I want to change X" — quick lookup

| I want to… | Open this |
|------------|-----------|
| Change a price, product name, or blurb | `src/data/products.ts` |
| Add or remove a product | `src/data/products.ts` (+ images in `src/images/`) |
| Edit the brand email / phone / address | `src/lib/constants.ts` (`BRAND`) |
| Edit navigation links | `src/lib/constants.ts` (`NAV`, `FOOTER_LINKS`) |
| Edit the hero headline / buttons | `src/sections/Hero.tsx` |
| Edit the "Why ALLUVI" cards or stats | `src/sections/WhySection.tsx` |
| Edit the home FAQ questions | `src/data/faqs.ts` |
| Edit the trust badges | `src/sections/TrustBadges.tsx` |
| Edit the contact section | `src/sections/ContactSection.tsx` |
| Edit testimonials | `src/data/reviews.ts` |
| Edit the footer | `src/components/Footer.tsx` |
| Reorder / add / remove a home section | `src/pages/Home.tsx` |
| Change site colours | `src/index.css` (`:root` variables) |
| Change the font | `src/index.css` import + `tailwind.config.js` |
| Change animation speed / keyframes | `tailwind.config.js` |
| Swap a photo | drop a file in `src/images/<folder>/` |
| Change the page title / meta description | `index.html` |
| Add a new page / route | `src/App.tsx` (+ a file in `src/pages/`) |
| Tone down / disable animations | `components/Reveal.tsx`, `TiltCard.tsx`, `Magnetic.tsx`, `Cursor.tsx` |

---

## 12. Deployment notes

- `npm run build` outputs a static site to `dist/` — host it anywhere
  (Vercel, Netlify, etc.).
- SPA routing fallback is already configured: `public/_redirects` (Netlify)
  and `vercel.json` (Vercel) — needed so `/shop` and `/product/...` work on
  refresh / direct load.
- A few product source images are large (1–3 MB). Compressing them would
  speed up loading, especially on mobile. The site lazy-loads non-hero
  images already.

---

## 13. Conventions to keep

- No hardcoded hex colours in components — use the tokens (§5.1).
- Reuse `Reveal`, `TiltCard`, `Magnetic` rather than re-writing motion.
- Real images always go through the `<Img>` component, never `<img>` direct.
- Keep the `prefers-reduced-motion` handling intact.
- After any change: run `npm run typecheck` and check the site in a browser
  at mobile and desktop widths.
- Log notable changes in `changes/changes.md`.
