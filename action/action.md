# Action Brief — Recreating BodyPharm UAE as **ALLUVI**

> **What this file is.** A single working reference for rebuilding the
> reference site **bodypharm.ae/uae** as our own brand **ALLUVI**. It records
> the reference site's structure, theme, sections, motion and 3D feel — and
> maps *our* content (`changes/content-and-assets.md` + `src/images/`) onto it.
>
> **Golden rule.** Take the reference's **design, layout, colour theme,
> animation and motion** and recreate it faithfully — but **every word and
> image is ALLUVI's own**. Never copy BodyPharm's marketing copy, review text,
> FAQ wording, or product names. Where BodyPharm has a section our content file
> doesn't cover, write new copy that is 100% about ALLUVI's real products
> (peptides / research formulations) — see §9.
>
> **Layer on top.** On top of the faithful recreation, ALLUVI's version must be
> **smoother, more user-friendly, fully responsive, vibrant, shining, and
> futuristic** — same site, elevated. See §2A for exactly how.
>
> Companion files: `changes/content-and-assets.md` (all brand copy + the image
> system), `changes/recreation-rules.md` (stack + motion playbook + do-nots).

---

## 1. The reference site at a glance

- **URL analysed:** `https://www.bodypharm.ae/uae` (home), `/uae/products`,
  `/uae/product/:slug`.
- **Sector:** premium research-peptide e-commerce, UAE.
- **Overall feel:** light, warm, calm, *premium-clinical*. Soft off-white
  canvas, generous white space, big confident headings, pastel product
  colours, soft shadows and glassy panels. The opposite of a dark "lab" theme —
  it reads like a high-end wellness/pharma brand.
- **Pages:** Home (long, ~4300px), Products grid, Product detail (very long,
  ~6000px), plus secondary routes (reviews, faq, about, blog, lab-results,
  policies) — we rebuild **Home, Shop, Product detail** first.

---

## 2. Design tokens (measured from the reference)

Put these in `tailwind.config.js` theme + CSS variables. **No hardcoded hex in
components.** This is the *base* theme — keep it; §2A adds the futuristic layer
on top without replacing it.

| Token | Value | Use |
|-------|-------|-----|
| `background` | `hsl(40 20% 97%)` ≈ `#F9F8F6` | warm off-white page canvas |
| `foreground` | `hsl(30 10% 15%)` ≈ `#2A2622` | body + heading text (warm near-black) |
| `card` | `hsl(40 15% 100%)` ≈ white | cards, panels |
| `muted` | `hsl(35 12% 91%)` | subtle fills, icon circles |
| `muted-foreground` | `hsl(30 5% 46%)` ≈ `#797470` | sub-text, captions |
| `border` | `hsl(35 12% 88%)` | hairline borders |
| `primary` / accent | `hsl(255 22% 65%)` ≈ `#A39BC4` | **soft lavender / periwinkle** — buttons, links, the 2nd headline line, highlights |
| `ring` / glow | `hsl(255 22% 65%)` | focus + soft glows |

Gradients (CSS variables):
- `--gradient-hero: linear-gradient(135deg, hsl(40 25% 96%) 0%, hsl(255 15% 96%) 50%, hsl(30 20% 96%) 100%)`
- `--gradient-subtle: linear-gradient(180deg, hsl(40 18% 97%), hsl(35 15% 95%))`
- `--gradient-card: linear-gradient(180deg, #fff, hsl(40 15% 97%))`

**Per-product pastel tints.** Every product on the reference has its *own*
pastel colour (teal, coral, lavender, olive, periwinkle-blue, tan...). The
"Add to Cart" button, the mg-badge and card glow all pick up that product's
tint. Keep this — `products.ts` already has a `tint` field; give each of our 8
products a distinct soft pastel.

**Shape language:** cards radius ~`12-16px`; pills/buttons fully rounded
(`9999px`); soft diffuse shadows (`0 1px 3px rgba(0,0,0,.08)` resting, deeper
on hover); occasional glassmorphism (`backdrop-blur` + translucent white) on
the sticky bar and floating badges.

**Easing:** one standard curve `cubic-bezier(0.22, 1, 0.36, 1)`.

---

## 2A. Futuristic / vibrant enhancement layer  ⭐ (ALLUVI's edge)

The brief: **"looks like the exact same web, but our version is user-friendly,
responsive, futuristic, vibrant."** So we keep §2's base theme and *enhance* it
— never trash it. Apply these consistently:

**Colour & light**
- Keep the warm off-white canvas, but make the lavender accent **more alive**:
  add a richer accent stop and a second cool accent (soft cyan / electric
  periwinkle) so highlights can use a **vibrant gradient**, not a flat colour.
- Buttons, badges, active states, links use **gradient fills** + a subtle
  **glow** (`box-shadow` halo in the accent colour).
- **Shine sweep:** primary buttons and product cards get a diagonal light
  sweep on hover (animated gradient highlight crossing the surface).
- Section backgrounds get faint **animated aurora/mesh gradients** drifting
  slowly behind content (very low opacity — never fights the text).

**Depth & "3D"** (3D-feel, no WebGL — see §8 / §11)
- Cards & product images get **pointer-tracked tilt** (perspective transform
  reacting to cursor) with a soft moving sheen.
- Hero product strip and full-bleed bands get **multi-layer parallax** for
  real depth.
- Floating elements (badge pills, hero blobs) drift on subtle 3D paths.
- Glass panels get crisper: `backdrop-blur`, thin gradient border, inner glow.

**Motion polish**
- Everything is **smooth**: Lenis smooth-scroll, consistent easing, no jank.
- Richer entrance reveals — blur-in + slide + slight scale, staggered.
- Animated counters, magnetic buttons (button drifts slightly toward cursor),
  a tasteful custom cursor / glow follower on fine-pointer devices.
- Micro-interactions on every interactive element (hover, press, focus).

**Vibrancy accents**
- Tasteful neon-edge highlights, gradient hairlines, light "scan"/grid
  textures in dark or feature panels.
- Optional one bold **dark, glowing feature section** as a futuristic contrast
  moment (the rest stays light) — confirm placement while building.

**User-friendly & responsive (non-negotiable)**
- Mobile-first; every section verified at 360 / 768 / 1024 / 1440 widths.
- Real touch targets, the floating bottom nav is genuinely usable on mobile.
- Fast: lazy-load images, compress, keep animations on `transform`/`opacity`.
- Full `prefers-reduced-motion` path — all the above gracefully simplifies.
- Keyboard-accessible, visible focus states, sensible contrast.

> **Restraint rule.** Futuristic ≠ noisy. Effects are *layered and subtle* —
> the page must still feel like the calm premium BodyPharm site, just smarter
> and more alive. If an effect hurts readability or performance, dial it back.

---

## 3. Typography

- The reference uses **Inter** everywhere (headings 600-700 weight, tight
  letter-spacing `≈ -1.2px`, line-height ~1.0 on big headings; body normal).
- ✅ **DECIDED (user):** do **not** use Inter — it breaks
  `recreation-rules.md` §11. Use a **characterful grotesk for headings**
  (e.g. *Hanken Grotesk* or *General Sans* — pick one, load from Fontshare /
  Google Fonts) with tight letter-spacing (`≈ -1.2px`) and weights 600-700,
  and a clean neutral sans for body text. This matches the reference's feel
  without being literally Inter.
- Heading scale: hero `h1` ≈ 48-56px; section headings (`Why...`, `Our
  Peptides.`, `Frequently Asked Questions`) are **large** — 40-64px, weight
  600, often centred, frequently ending in a full stop ("Why ALLUVI.", "Our
  Formulations."). Mirror that punctuation style.

---

## 4. Global / shared components

### 4.1 Header (top)
- Transparent over the hero: **logo left** (`logo/site-logo`, falls back to an
  `ALLUVI` wordmark), **country selector pill + "Sign In"** right.
- We don't need real auth — keep "Sign In" as a styled link, or swap for our
  own "Buy Now"/cart. Keep the country pill as a decorative element or drop it.

### 4.2 Sticky compact bar
- On scroll, a slim **glassy sticky bar** slides down from the top: left = a
  small eyebrow line; right = a primary pill button.
- Copy: eyebrow `Premium Research Formulations`, button `Shop Products`
  (→ `/shop`).

### 4.3 Floating bottom nav (desktop **and** mobile)
- A rounded floating bar pinned to the bottom centre with icon+label items.
  Active item highlighted in accent. Must be genuinely usable on mobile.
- ALLUVI items: **Home, Products, Why Us, Contact, Cart** (drop "Account" —
  no auth).

### 4.4 Floating WhatsApp button
- Fixed bottom-right, green circle, subtle pulsing glow ring.
- Link: `https://wa.me/971543800625` with a prefilled text about ALLUVI.

### 4.5 Cart drawer
- Slides in from the right; header "Your Cart" + item count, empty-state
  illustration + "Browse Products".

### 4.6 Cookie consent banner
- Bottom card: icon, "We value your privacy", text, **Decline / Accept All**,
  close. Keep, with ALLUVI's privacy wording.

### 4.7 Footer
- Top strip: full-width **disclaimer banner** (research-use-only / 18+).
- Main: brand blurb + social icons (Instagram, WhatsApp) · **Navigate** column
  · **Policies** column · **Contact** column.
- Bottom: long legal/disclaimer paragraph + `© {year} ALLUVI. All Rights
  Reserved.` Use footer copy from `content-and-assets.md` §4.1; add the
  research-use disclaimer (new copy, see §9).

---

## 5. HOME page — section-by-section spec

Order top → bottom. For each: layout, our content, motion.

**5.1 Reviews ticker (above hero).**
Thin horizontal **auto-scrolling marquee** of mini review chips (5 gold stars +
short quote + name + small avatar). Infinite loop, pause on hover.
→ Content: reuse our 3 testimonials (Michael Reed, Emily Carter, Sofia Bennett)
from content file §3.8, looped; avatars in `testimonials/`.

**5.2 Hero.**
Centred layout on the `--gradient-hero` canvas with soft blurred decorative
arcs/blobs on the edges. Eyebrow + 5 stars; a big **two-line headline** with
the **second line in the accent colour**; a sub-paragraph; one primary pill
button. Below: a **horizontal strip of all 8 product images** (upright "pen"
renders, each with name + a dot).
→ Content: eyebrow `High-Purity Research Peptides`; headline line 1 `Premium
Research` / line 2 (accent) `Formulations.`; sub-paragraph from content file
§3.1; button `Shop Products`. Strip = our 8 `products/` images.
→ Futuristic layer: gradient + glow on the headline accent line and button,
multi-layer parallax on the blobs + strip, magnetic button, blur-in stagger.

**5.3 Full-bleed lifestyle band #1.**
Edge-to-edge image revealing with parallax / scale on scroll.
→ Image: `extra/E_2` or `about/video.mp4` (video band works — autoplay muted
loop). GSAP ScrollTrigger `scrub`.

**5.4 "Why ALLUVI." — feature trio.**
Centred big heading + one-line sub, then **3 white feature cards** (icon in a
soft circle, title, short paragraph).
→ Content: cards = feature trio from content file §3.2 (Purity First /
Reliable Consistency / Secure Packaging).
→ Futuristic layer: pointer-tilt + sheen on cards, gradient icon circles,
reveal stagger.

**5.5 Full-bleed lifestyle band #2.** Same as 5.3, second image (`extra/E_3`).

**5.6 "Our Formulations." — featured products.**
Big centred heading + "View All Products →" link, then **3 product cards**:
image + **mg badge top-left** + **wishlist heart top-right**, name, one-line
category, price, full-width **"Add to Cart" button tinted to the product's
pastel**.
→ Content: 3 of our 8 products; category line invented per product (§9).
→ Futuristic layer: card tilt, image zoom, shine sweep on the button.

**5.7 FAQ.**
Very large heading `Frequently Asked Questions` (style the word "Questions" in
the accent colour). Accordion of 4 items; "View all FAQs →" link.
→ Content: **new** ALLUVI-relevant Q&As (§9). Do not copy BodyPharm's.

**5.8 Trust badges row.** 4 trust items: icon + bold label + small sub-line.
→ Content: new (§9), drawn from our marquee phrases / why-us points.

**5.9 Footer** — see §4.7.

> **Mapping note.** Our content file also describes an ALLUVI "About",
> "Marquee", "Why Us flip-circles", "Help/CTA" and "Testimonials carousel".
> **Follow BodyPharm's section set** — it is the design we're recreating.
> Reuse the ALLUVI *copy* from those sections wherever it fits a BodyPharm
> section (About paragraphs → footer brand blurb / a feature card;
> testimonials → reviews ticker & review grid; marquee phrases → trust
> badges). Don't force-add sections BodyPharm doesn't have.

---

## 6. SHOP page (`/shop`)

- `Back to Home` link, big heading `All Products`, intro paragraph (content
  file §4.2, reworded).
- **Product grid**, 3 columns, all 8 products. Card = home product card: mg /
  `Bundle` badge, wishlist heart, small **compare icon**, image, name,
  category line, price (optional strikethrough "was" price for bundles),
  tinted "Add to Cart".
- Bottom: research-use disclaimer strip, then footer.
- Motion: cards reveal in a stagger grid; futuristic tilt/glow on hover.

---

## 7. PRODUCT DETAIL page (`/product/:slug`)

Top → bottom:

1. `Back to Products` link.
2. **Product media block** — large product image with **floating badge pills**
   around it (e.g. *Third-Party Tested*, *cGMP Manufactured*, *24-Month
   Stability*, *Sealed & Protected*), small **share + save** icon buttons, and
   **carousel dots/thumbnails** (our `product-gallery/` = 4 images per product).
   Futuristic: pointer-tilt + sheen on the main image, floating badges drift.
3. **mg badge pill**, big **product name**, **2 description paragraphs** (from
   the product `blurb`, content file §5).
4. **Sticky "Add to Cart • AED {price}" bar** that sticks under the header on
   scroll. No-price products → `Enquire on WhatsApp`.
5. `View Lab Results →` style link.
6. Rating row: stars + verified count + a **scrolling mini-reviews strip**.
7. Full-bleed banner image (parallax).
8. **Benefit list** — stack of white rounded rows, each = checkmark + one
   sentence, revealing on scroll. 4-5 rows per product (new copy, §9).
9. **Product-specific FAQ accordion** ("Questions" in accent). 4-6 Q&As, new.
10. **"What Researchers Say"** — review grid (~3 cols × 2 rows): name, date,
    gold stars, short quote. Use our testimonials, expanded to ~6 (invent 3
    more, §9).
11. **"Share your experience"** expandable row with a `Get 10% off your next
    order` hook (optional).
12. Second full-bleed banner image.
13. `You May Also Like` related-products block (4 other products), §4.3.
14. Footer.

`Product not found` state: message + `Back to Shop` button.

---

## 8. Motion, "3D" & futuristic — technique catalog

The reference's "3D" feel is **not WebGL/three.js** — realistic product
**renders** + soft blur shapes + parallax + depth via shadows/glass. We
reproduce that and push it further (§2A) — still **no three.js** (keeps the
lean stack; a real 3D hero is an optional future upgrade, §11).

| Effect | Owner |
|---|---|
| Smooth scrolling | Lenis |
| Reviews ticker / marquee | CSS keyframes (infinite, pause on hover) |
| Hero load-in stagger (blur-in + slide + scale) | Motion |
| Hero decorative blobs / aurora drift | CSS keyframes |
| Hero product strip + bands multi-layer parallax | GSAP ScrollTrigger `scrub` |
| Sticky compact header bar slide-in | Motion (scroll threshold) |
| Section reveal (blur + slide-up, once) | Motion `whileInView` |
| Section heading line reveal | GSAP SplitText + ScrollTrigger |
| Full-bleed image parallax / scale | GSAP ScrollTrigger `scrub` |
| Card / product reveal stagger | Motion `whileInView` |
| Pointer-tracked card/image tilt + sheen | Motion (`useMotionValue`/`useSpring`) |
| Magnetic buttons | Motion |
| Shine sweep on buttons/cards | CSS gradient keyframe |
| Animated counters | GSAP + ScrollTrigger + custom hook |
| Floating badge pills bob / 3D drift | CSS keyframes |
| Accordion expand/collapse | Motion |
| Add-to-cart sticky bar | Motion / position sticky |
| Cart drawer slide-in | Motion (`AnimatePresence`) |
| WhatsApp button pulse glow | CSS keyframes (`box-shadow`) |
| Custom cursor / glow follower | Motion spring (fine-pointer only) |
| Page / route transitions | Motion |

Rules: animate **transform/opacity only**; reveal-on-scroll plays **once**;
every effect has a `prefers-reduced-motion` fallback; standard easing
`cubic-bezier(0.22,1,0.36,1)`.

---

## 9. Content we must INVENT (BodyPharm has it, our content file doesn't)

Write all fresh, 100% about ALLUVI's real products. **Never reuse BodyPharm's
wording.**

- **Home FAQ (§5.7)** — 4 Q&As: research-use only; purity/quality
  documentation; how ordering works (WhatsApp); delivery / packaging.
- **Trust badges (§5.8)** — 4 label + sub-line pairs from our marquee phrases
  & why-us points (content file §3.4 / §3.6).
- **Product card category line** — one short descriptor per product, e.g.
  BPC-157 & TB-500 → "Recovery & Repair Research"; NAD+ → "Cellular Research";
  Glow → "Skin & Longevity"; Retatrutide / Tirzepatide → "Metabolic Research".
- **Product detail benefit rows (§7.8)** — 4-5 factual, research-framed
  sentences per product, derived from the `blurb`.
- **Product detail FAQ (§7.9)** — 4-6 Q&As per product.
- **Extra testimonials (§7.10)** — ~3 more reviews in the voice of our
  existing 3 (research / wellness / fitness roles).
- **Footer research-use disclaimer** — short "for research purposes only, 18+,
  not for human consumption" paragraph, ALLUVI-branded.

Tone: calm, factual — "research formulations", "verified suppliers", "purity /
consistency / reliability" — matching `content-and-assets.md`.

---

## 10. Brand & asset mapping (ALLUVI)

| Field | Value |
|---|---|
| Brand | **ALLUVI** |
| Title | `ALLUVI — Premium Research Formulations` |
| Address | Level 5, Dubai, UAE |
| Email | `sales@lumauae.com` *(kept per user instruction; swap if an ALLUVI domain is provided later)* |
| Phone / WhatsApp | +971 54 380 0625 · `wa.me/971543800625` |
| Social | Instagram, Facebook (placeholder `#`) |

Images (already in `src/images/`, wired via `<Img>` + the resolver — see
`content-and-assets.md` §6-§8):
- `logo/site-logo` — empty → `ALLUVI` wordmark fallback shows.
- `hero/` — `home-hero-product-image`, `home-hero-background-image`.
- `products/` — 8 product images (hero strip + cards + shop).
- `product-gallery/` — 4 per product → product-detail thumbnails/dots.
- `about/` — `video.mp4`, `home-about-stat-image`, `home-about-small-image`.
- `extra/` — `E_1`, `E_2`, `E_3` → feature tile + the two full-bleed bands.
- `testimonials/` — 3 avatars for the reviews ticker / review grid.

8 products (slug → name → price): see `content-and-assets.md` §5. Slugs are
the source of truth for URLs **and** image filenames.

---

## 11. Stack & build order

Stack: **Vite + React 18 + TypeScript + Tailwind + React Router + Motion +
GSAP (ScrollTrigger/SplitText) + Lenis**. No CRA. No extra animation libs
without asking. 3D is done as **3D-feel** (CSS perspective/tilt/parallax) — no
three.js for now; a real WebGL hero object can be added later as an upgrade if
the user wants it.

Build order (next prompts):
1. Scaffold Vite project; base tokens (§2) + futuristic tokens (§2A) in
   Tailwind + `index.css`; `lib/gsap.ts`, `lib/images.ts`, `lib/products.ts`;
   `<Img>` + `<Placeholder>`.
2. Shared shell: Header, sticky bar, floating bottom nav, footer, WhatsApp
   button, cookie banner, cart drawer.
3. Home sections 5.1 → 5.9, verifying each in a browser.
4. Shop page.
5. Product detail page.
6. Motion + futuristic polish pass vs. the reference feel.
7. Verify: `tsc` clean, no console errors, every page + animation checked at
   360/768/1024/1440 widths, `prefers-reduced-motion` respected, SPA routing
   on refresh. Keep `changes/changes.md` updated.

---

## 12. Decisions log

- **Brand name** — **ALLUVI** (was "Luma" in the content file; rebrand all
  copy).
- **Email** — keep `sales@lumauae.com` per user; swap if an ALLUVI domain is
  given.
- **Fonts** — characterful grotesk for headings + neutral sans for body. No
  Inter. See §3.
- **Design direction** — faithful BodyPharm recreation **plus** a futuristic /
  vibrant / 3D-shine layer on top; more user-friendly + fully responsive. The
  base theme (§2) stays; §2A enhances it. See §2A.
- **3D** — 3D-feel via CSS/transforms/parallax; no three.js for now.

---

*Reference screenshots captured during analysis live in the project root:*
`bodypharm-full2.jpeg`, `sec-750/1500/2300/2900.jpeg`, `products-page.jpeg`,
`product-detail.jpeg`, `pd-top.jpeg`, `pd-2750.jpeg` — keep for visual
comparison while building.
