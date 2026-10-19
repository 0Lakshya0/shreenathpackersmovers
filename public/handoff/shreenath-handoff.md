# Shree Nath Packers & Movers — complete project handoff

**TL;DR for the agent reading this:** the real code is on branch
`arena/adfb3ae5-shreenathpackersmovers` of `0Lakshya0/shreenathpackersmovers` — **not** on `main`.
Then `npm install --no-package-lock --legacy-peer-deps && npm run dev`. Read §2, §5 and §9 before
touching anything. The only thing under active review is Scene 01, in
`src/components/packing-scene-animation.tsx` + `src/packing-preview.css`.

> **How to use this file:** paste this whole document as the first message in a fresh chat
> (Arena / Claude / ChatGPT — any coding agent). It contains the repo location, the current
> state of every page, the animation architecture, the standing rules the user has set, and
> the open work. After pasting, also attach `shreenath-source.tar.gz` (same folder) if the
> new chat cannot reach GitHub.

---

## 1. The project in one paragraph

A production marketing site for **Shree Nath Packers & Movers**, a packers-and-movers company
based at Dewas Naka, Indore (MP, India). It is a hand-built, editorial-looking multi-page site
built with **TanStack Start + Vite + React 19 + Tailwind v4**, deployed as a **static
prerendered** build to **GitHub Pages**. Two unlisted, `noindex` "animation preview" routes
carry hand-drawn black-and-white SVG scenes of the crew at work (3 000+ lines of JSX + ~73 000
lines of generated CSS, entirely CSS-animated, no JS animation library, no canvas, no Lottie).

All site copy is **English** and must stay English. UI is premium/editorial, not "local
packers" clip-art.

---

## 2. Where everything lives

| Thing                                  | Value                                                                                              |
| -------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Owner/repo                             | `0Lakshya0/shreenathpackersmovers` (public)                                                        |
| **Working branch (the real code)**     | `arena/adfb3ae5-shreenathpackersmovers`                                                            |
| Live site (this branch, auto-deployed) | https://0lakshya0.github.io/shreenathpackersmovers/                                                |
| Scene 01 preview                       | https://0lakshya0.github.io/shreenathpackersmovers/animation-preview/                              |
| Scene 02 preview                       | https://0lakshya0.github.io/shreenathpackersmovers/animation-preview-2/                            |
| Current HEAD                           | `1465643` — "Scene 01: route copy mentions the full crew"                                          |
| Deploy workflow                        | `.github/workflows/public-preview.yml` (push to the branch above → build → `actions/deploy-pages`) |

> **CRITICAL:** `main` still contains only the old Lovable template. **Every real file lives on
> the branch above** (16 commits ahead of `main`). Any new chat must
> `git clone` then `git checkout arena/adfb3ae5-shreenathpackersmovers`, otherwise it will see
> an empty starter app and think the work is missing.

```bash
git clone https://github.com/0Lakshya0/shreenathpackersmovers.git
cd shreenathpackersmovers
git checkout arena/adfb3ae5-shreenathpackersmovers
npm install --no-package-lock --legacy-peer-deps
npm run dev          # http://localhost:8080
```

For a GitHub-Pages-shaped build (prerendered, `base = /shreenathpackersmovers/`):

```bash
APP_DEPLOY_TARGET=github-pages npm run build
python3 -m http.server 8080 --directory .output/public
```

---

## 3. What the site actually is

Routes (TanStack Start file-based routing, `src/routes/`):

| Route                  | File                      | Purpose                                                                                                                          |
| ---------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `/`                    | `index.tsx`               | Long editorial landing page: hero, services grid, process, fleet/trust strip, quote form, tracking panel, FAQ teaser, CTA/footer |
| `/services`            | `services.tsx`            | Full service detail cards (household, office, vehicle, warehouse, domestic, etc.)                                                |
| `/about`               | `about.tsx`               | Approach / why-us narrative                                                                                                      |
| `/faq`                 | `faq.tsx`                 | Accordion FAQ                                                                                                                    |
| `/contact`             | `contact.tsx`             | Contact + quote form                                                                                                             |
| `/animation-preview`   | `animation-preview.tsx`   | **unlisted** Scene 01 (indoor packing) — `noindex, nofollow`                                                                     |
| `/animation-preview-2` | `animation-preview-2.tsx` | **unlisted** Scene 02 (moving/loading) — `noindex, nofollow`                                                                     |

Shared pieces:

- `src/components/site-shell.tsx` — header + mobile nav + footer, wraps every public page.
- `src/components/quote-form.tsx` — the enquiry form (client-side validated; no backend, it hands
  off to WhatsApp / phone).
- `src/components/tracking-dashboard.tsx` — "send a shipment update" panel (deliberately _not_ a
  fake live tracker; the old simulated tracker was removed on purpose).
- `src/components/reveal.tsx` — scroll-in reveal helper.
- `src/lib/site-data.ts` — **single source of truth for content**: `PHONE`, `EMAIL`,
  `PHONE_LINK`, `MAP_LINK`, `WHATSAPP(msg)`, `SERVICES[]`, `PROCESS_STEPS[]`, `FAQ_ITEMS[]`.

Contact facts (do not invent new ones): phone **7000568402**, e-mail
**shreenathpackermovers@gmail.com**, base **Dewas Naka, Indore**, pan-India reach.

---

## 4. Design system (keep this look)

Tokens in `src/styles.css` (`:root`):

```
--background #f7f5ef   --foreground #222a26   --card #fffefa
--primary    #ad704a   --navy       #202f2a   --secondary #efede6
--muted      #eceae3   --muted-foreground #70766f  --border #dfdcd2
--whatsapp   #21865c
```

- Display font: **Bodoni Moda** (serif, high contrast) — headings.
- UI font: **Outfit** (sans) — body.
- Scene captions use **Caveat** (handwriting) for the doodle feel.
- Layout: generous whitespace, thin rules, uppercase micro-labels with letter-spacing, warm
  paper background, muted photography, deep-green (`--navy`) blocks for contrast sections.
- `src/enterprise.css` = the premium section styling (hero, service cards, process, stats).
- The animation routes load their own stylesheets (`?url` imports): `packing-preview.css`
  (Scene 01, 668 KB / 40 898 lines) and `animation-preview.css` (Scene 02, 497 KB) — these are
  route-scoped so they never bloat the main site.

**Never** restyle the global site while iterating on a scene, and never change the English copy
without being asked.

---

## 5. Scene 01 — "inside the home" (the thing that gets iterated most)

Files: `src/components/packing-scene-animation.tsx` (1 405 lines) +
`src/packing-preview.css` (40 898 lines, **generated**).

### 5.1 What should happen on screen

A hand-drawn, black-and-white, 72-second looping cartoon of a house interior:

1. A **porter** walks in through the **arched passage** on the left carrying a vase and a lamp,
   sets them on a **stool** beside a packer, and walks back out.
2. A **helper** brings books and a picture frame in the same way; a second helper brings
   **finished cartons** in and out through the **open front door** on the right.
3. **Two packers sit on the floor** next to the stools; they take an item, put it in the carton,
   fold the flaps, tape it, and shove the sealed box onto the mat.
4. A **supervisor** with a clipboard stands in the foreground watching and gesturing.
5. Nobody lingers inside; workers are always either entering, working or leaving.

Six workers total: 3 carriers + 2 packers + 1 supervisor. **The user explicitly demanded the
crew grow, not shrink — do not reduce the number of workers.**

### 5.2 Hard constraints the user has repeated (all still active)

- Black & white **hand-drawn doodle** with real-life proportions. Cartoon-flat-vector was rejected.
- **House interior only.** Nothing outdoors may be visible (no street, no truck, no sky, no gate names).
- The inner opening must read as a **doorway inside the house**; the right-hand opening must read
  as the **front door you exit the house through**.
- The **front door stays open** (leaf flat against the wall).
- Walkers must **visibly walk in through the opening** — a fade-in is forbidden.
- **Nobody may merge / cross-fade** when passing in front of or behind someone else: real depth,
  solid occlusion only.
- Gait must be natural (no bouncing "uchak-uchak"), both feet planted, legs stop moving when the
  character stops. Timing must feel irregular, never metronomic.
- The hall must look like a nice living room (window, curtains, framed picture, wall clock,
  pendant lamp that sways slowly, rug).

### 5.3 Geometry (viewBox `0 0 960 520`; compact crop `60 60 840 460`)

```
wall bottom / floor line : y = 392 / 400
floor bands              : y = 428, 456, 484, 508
depth lanes              : y = 390 (inside openings) → 474 (back lane, items carried IN)
                           → 506 (front lane, cartons carried OUT)
inner arched passage     : x 92 – 204   (casing drawn over it)
front door opening       : x 772 – 898  (open leaf x 900 – 940, landing behind)
packers                  : (430, 460) and (700, 460)
stools                   : x 366 and x 636  (item resting height y 444)
cartons being packed     : (452, 486) and (678, 486)
mat with finished boxes  : x 585, y 506
supervisor               : (318, 500)
depth scale              : scl(y) = 0.86 + (y − 380) · 0.20 / 126
```

All these numbers live as SVG attributes in the TSX and as `translate()`s in the CSS. There is no
runtime JS layout — everything is static markup plus CSS keyframes.

### 5.4 The doorway trick (the important idea)

Each carrier is rendered **twice**, from the same components:

```jsx
<clipPath id={`pk-open-arch-${uid}`} clipPathUnits="userSpaceOnUse">
  <path d="M92 392 L92 214 A56 58 0 0 1 204 214 L204 392 Z" />
</clipPath>
<clipPath id={`pk-open-door-${uid}`} clipPathUnits="userSpaceOnUse">
  <path d="M772 160 H898 V392 H772 Z" />
</clipPath>

<g clipPath={`url(#pk-open-arch-${uid})`}>   {/* DEEP copies: only visible inside the opening */}
  <CarrierShell id="c1" deep>…</CarrierShell>
  <CarrierShell id="c3" deep>…</CarrierShell>
</g>
<g clipPath={`url(#pk-open-door-${uid})`}>
  <CarrierShell id="c2" deep>…</CarrierShell>
  <CarrierShell id="c3" deep>…</CarrierShell>
</g>
…
<CarrierShell id="c1">…</CarrierShell>        {/* FRONT copies: inside the room */}
<CarrierShell id="c3">…</CarrierShell>
<Supervisor />
<CarrierShell id="c2">…</CarrierShell>
<ArchCasing />                                {/* frames drawn LAST, over the walkers */}
<DoorFrame />
```

A worker is therefore **behind the wall** while `pk-deep-*` is on, and **in the room** while
`pk-front-*` is on. The two keyframe tracks switch at the same instant, on hard 0/1 steps (never
a tween), so the swap is invisible: same geometry, same keyframes, same transform, only the
clipping container changes. That is how "walking in through a doorway" is done here.

`uid` (`wide` / `compact`) scopes every `id` because the scene is rendered twice
(desktop + compact crop).

### 5.5 Draw order (depth is decided by element order, not z-index)

1. room shell, arch, window, picture, clock, pendant, rug, stools, door opening
2. soft lamp glow ellipse
3. deep carriers (inside the clip windows)
4. packers, cartons being packed
5. finished boxes on the mat, items waiting on the stools
6. front carriers c1 + c3, supervisor, front carrier c2
7. arch casing + door frame

Because everything is solid-filled, a foreground worker simply covers a background worker
completely — that is the "no merging" requirement.

### 5.6 Timeline (72 s loop, all times in seconds)

| Worker                      | Behaviour                                                                                                                                     |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **c1** (bald, porter)       | arch trips at 0.0 and 23.0; deep→front 1.4, front→deep 7.8, 24.4, 30.8; unloads at stool x≈366                                                |
| **c3** (flat hair, helper)  | arch trips 11.5 and 34.5; deep→front 12.9, 19.3, 35.9, 42.3, 59.6, 67.0; leaves through the **front door at 58.0** carrying a box (62.4–67.0) |
| **c2** (spiky hair, helper) | door trips 12.5 / 28.0 / 43.0; deep→front 14.1, 21.5, 29.6, 37.0, 44.6, 52.0                                                                  |
| **k1 packer**               | cycles at 6.0 s and 29.0 s, period 9.3 s; flaps 4.2→6.0, tape 6.3                                                                             |
| **k2 packer**               | cycles at 17.5 s and 40.5 s                                                                                                                   |
| **finished boxes**          | d1 14.5→15.9 (picked up 16.9), d2 26.0→27.4 (32.4), d3 37.5→38.9 (47.4), d4 49.0→50.4 (62.4)                                                  |
| **stool items**             | appear/leave at (5.2, 8.2), (16.7, 19.7), (28.2, 31.2), (39.7, 42.7)                                                                          |

Percentages in the CSS are simply `t / 72 × 100` with three decimals (e.g. 1.4 s → `1.944%`).

### 5.7 CSS map (`src/packing-preview.css`)

```
line ~1     .animation-preview__*  (page chrome for the preview route)
line ~87    SCENE 01 header comment
line ~98    plumbing: transform-box: fill-box on .pk-squash/.pk-bob/.pk-bend/.pk-upper/.pk-fit/…
line ~179   CARRIERS: .pk--c1/.c2/.c3 base transforms + walk/front tracks; .pk--deep overrides
line ~366   what each carrier is holding (.pk-item--carry-c1a … c3box)
line ~413   stool items + finished cartons
line ~462   packers (.pk--k1/.pk--k2 .pk-bend/.pk-upper/.pk-arm)
line ~566   supervisor
line ~595   cartons
line ~665   room ambience (lamp sway, clock, curtains)
line ~694   KEYFRAMES — 92 @keyframes blocks, then the reduced-motion tail at ~40895
```

Naming convention: `pk-walk-<id>`, `pk-fit-<id>`, `pk-thighf/thighb/shinf/shinb-<id>`,
`pk-bobbody`, `pk-squash`, `pk-arm`, `pk-flip`, `pk-deep-<id>`, `pk-front-<id>`,
`pk-show-<id>-<n>`, `pk-carry-<id>-<n>`, `pk-done<n>`, `pk-bend-k1/k2`, `pk-upper-k1/k2`,
`pk-sup-*`, plus ambience `pk-boil` (line wobble), `pk-blink`, `pk-breathe`, `pk-look`,
`pk-headsway`, `pk-lamp`, `pk-clock`, `pk-drape`.

Reduced motion (last block of the file) kills every animation and hides the deep copies — keep
it when editing:

```css
@media (prefers-reduced-motion: reduce) {
  .move-scene .pk,
  .move-scene .pk *,
  .move-scene [class*="pk-"] {
    animation: none !important;
  }
  .move-scene .pk--deep {
    opacity: 0 !important;
  }
}
```

### 5.8 How to change the animation

The current CSS was **generated** by a Python keyframe emitter (that generator is gone — the CSS
is now the source of truth). Two practical routes:

1. **Small timing retune (normal case):** edit the percentage stops inside the affected
   `@keyframes` block. Keep each pair of stops (`1.944% / 1.946%`) tight — deep/front switches
   must remain hard steps. Recompute as `t / 72 × 100`.
2. **New motion:** copy an existing block of the same family (e.g. `pk-walk-c1` → `pk-walk-c4`),
   adjust the `translate()` per cent stops, then add the element + hooks
   (`.move-scene .pk--c4 { animation: … }`, `.pk--c4.pk--deep { … }`, item keyframes, and a
   matching `CarrierShell`/`CarrierBody` pair — deep inside the clip window, front in the room).

If you ever rewrite generation, **keep** these invariants: gait phase `π · acc / STEP`, knees bent,
ankle ≈ 2°, `transform-box: fill-box` on every pivot, nested groups for separate transform
tracks (one element cannot run two transform animations), and no `animation-play-state` gating
(use generated long keyframes with holds instead).

### 5.9 Known-but-unverified visual risks

There is no browser in the dev sandbox, so these must be eyeballed in a real browser:

1. **Deep→front handoff** at each swap instant — should be pixel-identical (both copies share the
   same keyframes, so only the clip container changes).
2. **Lane occlusion** where c2 (front lane, y≈506) passes the packers (y≈460–486).
3. **Packer hand vs stool** — hand items are offset `translate(-64 -16)` from the arm; with the
   stools at x 366 / 636 the pickup should read as touching, not hovering.
4. Cartons leaving the mat under c2 at 16.9 / 32.4 / 47.4 s.

---

## 6. Scene 02

`src/components/move-scene-animation.tsx` (1 298 lines) + `src/animation-preview.css` (31 568
lines), route `/animation-preview-2`. This is the **older, accepted** outdoor loading/queue scene
(truck bed loading, parallel street). It has been left untouched for many iterations — it is the
reference for what the user liked before the indoor rewrite. **Do not casually edit it.**

---

## 7. Quality gate before every push

```bash
node_modules/.bin/prettier --write <changed files>
node_modules/.bin/tsc --noEmit
npx vitest run                     # 9 tests must pass
APP_DEPLOY_TARGET=github-pages npm run build
npm run lint                       # expect 0 errors (a few warnings are pre-existing)
git push origin arena/adfb3ae5-shreenathpackersmovers
gh run watch                       # workflow must end in success
```

Verification without a browser (the sandbox has no GUI, and `curl` to github.io is blocked):

```bash
python3 -m http.server 8080 --directory .output/public   # then check HTTP 200 + grep built HTML
grep -c "pk-open-arch-wide" .output/public/animation-preview/index.html
```

Tests: `src/test/app-routing.test.tsx`, `src/test/quote-form.test.tsx`,
`src/test/site-data.test.ts`.

---

## 8. Open work (in priority order)

1. **User review of Scene 01 v7** — waiting on the eye-test items in §5.9. Expect another
   iteration round; the user is exacting about gait, depth and "reality feel".
2. Only after Scene 01 is approved: decide whether the animation becomes part of the real site
   (currently unlisted + `noindex`, intentionally).
3. `roadmap.md` last open item: **verify quote flow and desktop/mobile layout**.
4. Keep `/animation-preview*` out of navigation and search.

Do **not**, without being asked: change `main`, delete the preview workflow, remove `noindex`,
rewrite English copy, reduce the worker count, add colour to the scenes, or replace the hand-drawn
style with vector/3D.

---

## 9. Traps that already cost time — do not repeat

- **`animation-play-state` gating** breaks long holds → generate long keyframes with explicit holds.
- **Two `transform` animations on one element** override each other → nest groups.
- **Inline `style` transform** on a CSS-animated element is ignored → wrap it in a group.
- **`transform-box: view-box` pivots** are unreliable in SVG → nest `<g transform>` + `fill-box`.
- **`edit_file` on prettier-wrapped JSX** silently misses → `grep -n`, then exact Python/`sed`
  replacement, and re-read the region after prettier rewraps.
- **Faked door entry with opacity** was rejected — entry must be a clip window.
- **Sandbox recycling:** between sessions the checkout can reset to the base commit and
  `node_modules` can disappear. Fix:
  `git fetch origin arena/adfb3ae5-shreenathpackersmovers && git reset --hard FETCH_HEAD && npm install --no-package-lock --legacy-peer-deps`.
- The scene is rendered **twice** (`wide` + `compact`); every new `id` must include `${uid}` or
  the two copies collide in the DOM.
- `src/routeTree.gen.ts` is generated by the TanStack router plugin — adding a route means running
  the dev server/build once, not hand-editing the tree.
