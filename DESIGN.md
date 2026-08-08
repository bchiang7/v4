---
name: Angelo Ortiz Vega — Portfolio
description: After-Dark Studio. A dark, precise canvas for a Fullstack AI Engineer.
colors:
  amber-signal: "#e8813a"
  signal-tint: "rgba(232, 129, 58, 0.12)"
  pure-white: "#ffffff"
  white-tint: "rgba(255, 255, 255, 0.08)"
  highlight-tint: "rgba(255, 255, 255, 0.04)"
  outline-light: "rgba(255, 255, 255, 0.12)"
  bright-text: "#e0e0e0"
  light-text: "#aaaaaa"
  muted-text: "#888888"
  dim-text: "#444444"
  lifted-surface: "#1a1a1a"
  dim-surface: "#111111"
  studio-canvas: "#0a0a0a"
  void-black: "#000000"
  shadow-deep: "rgba(0, 0, 0, 0.8)"
typography:
  display:
    fontFamily: "'Inter', 'Calibre', 'San Francisco', 'SF Pro Text', -apple-system, sans-serif"
    fontSize: "clamp(56px, 9vw, 96px)"
    fontWeight: 200
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "'Inter', 'Calibre', 'San Francisco', 'SF Pro Text', -apple-system, sans-serif"
    fontSize: "clamp(40px, 8vw, 60px)"
    fontWeight: 300
    lineHeight: 1.1
  title:
    fontFamily: "'Inter', 'Calibre', 'San Francisco', 'SF Pro Text', -apple-system, sans-serif"
    fontSize: "clamp(22px, 5vw, 34px)"
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: "0.05em"
  body:
    fontFamily: "'Inter', 'Calibre', 'San Francisco', 'SF Pro Text', -apple-system, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.3
  label:
    fontFamily: "'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace"
    fontSize: "12px"
    fontWeight: 400
    letterSpacing: "0.1em"
rounded:
  sharp: "2px"
spacing:
  xs: "10px"
  sm: "20px"
  md: "40px"
  lg: "100px"
  xl: "150px"
  section-max: "1000px"
  content-max: "1600px"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.sharp}"
    padding: "1.25rem 2rem"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.pure-white}"
    textColor: "{colors.studio-canvas}"
    rounded: "{rounded.sharp}"
  button-small:
    backgroundColor: "transparent"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.sharp}"
    padding: "0.75rem 1rem"
    typography: "{typography.label}"
  button-small-hover:
    backgroundColor: "{colors.pure-white}"
    textColor: "{colors.studio-canvas}"
    rounded: "{rounded.sharp}"
---

# Design System: Angelo Ortiz Vega — Portfolio

## Overview

**Creative North Star: "The After-Dark Studio"**

A working space at night — no ambient noise, no borrowed decoration. The near-black canvas (`#0a0a0a`) is not a stylistic choice; it is an operating condition. Every element on it exists because it needs to. The single warm light is the amber signal (`#e8813a`), and it burns deliberately: section counters, list markers, the occasional inline CTA. Its rarity is not restraint — it is the mechanism.

The typographic approach is equally precise. Ultra-light display weights (200) let large text sit without mass. The monospaced font family carries labels, nav items, and buttons — wiring every piece of UI copy to the engineering context it inhabits. Body text sits at a comfortable 19px but reads like documentation: dense, accurate, no padding sentences.

Interaction is fast and binary. Ghost buttons invert to solid fills in 300ms. Inline links grow an underline from left to right. Nothing floats, bounces, or lingers past its purpose. Confidence expressed through exactness, not decoration.

**Key Characteristics:**
- Near-black canvas with a single, sparing warm accent
- Ultra-light to light heading weights — mass through scale, not weight
- All interactive chrome in monospaced uppercase — buttons read as commands
- Binary hover states: ghost → solid fill, instant reversal
- Section structure announced by signal-colored numeric counters
- Virtually zero border radius — 2px across the entire system

## Colors

One accent, one structural white, one deep ramp. Everything else is air.

### Primary

- **Bone White** (`#ffffff`): The primary interactive color. Buttons, links on hover, logo, headings in contrast states. Not softened — full white is the deliberate choice against the dark canvas.

### Signal

- **Amber Signal** (`#e8813a`): The brand's single warm frequency. Used on section counters (`01.`, `02.`…), fancy-list bullet markers (`▹`), and select inline emphasis. Applied to ≤10% of any given screen's visible tokens. Its scarcity is the point.
- **Signal Tint** (`rgba(232, 129, 58, 0.12)`): Background wash for signal-colored hover states. Barely visible — a heat shimmer, not a fill.

### Neutral

- **Bright Text** (`#e0e0e0`): All heading elements. Bright enough to contrast the canvas cleanly; cooler than pure white so it doesn't compete with interactive affordances.
- **Light Text** (`#aaaaaa`): Subheadings, secondary labels, nav items at rest.
- **Muted Text** (`#888888`): Primary body copy. Mid-gray that reads comfortably at length against `#0a0a0a`.
- **Dim Text** (`#444444`): Disabled states, placeholder copy, scrollbar thumb. Barely legible — intentional.
- **Lifted Surface** (`#1a1a1a`): Code blocks, elevated cards, subtle panel backgrounds.
- **Dim Surface** (`#111111`): Slight lift from canvas for dividers and layered surfaces.
- **Studio Canvas** (`#0a0a0a`): Primary background. Not quite pure black — has just enough warmth to feel inhabited.
- **Void Black** (`#000000`): Darkest state. Used for the deepest nav shadows and the `--dark-bg-color` floor.
- **Outline Light** (`rgba(255, 255, 255, 0.12)`): Section divider lines, borders. Barely-there hairlines that structure without interrupting.
- **Shadow Deep** (`rgba(0, 0, 0, 0.8)`): Elevation shadow, nav scroll shadow. Dense — depth here is about contrast, not softness.

### Named Rules

**The One Signal Rule.** The amber signal (`#e8813a`) is never used as a button fill, background block, or text color for long-form copy. It lives on punctuation: list markers, section counters, and a single inline CTA per context. The moment it becomes ambient, it stops being a signal.

**The White Is Active Rule.** `#ffffff` means "interactive or highest contrast." It does not appear as decorative trim, illustration fill, or background. When you see white, something is clickable or highest-priority.

## Typography

**Display Font:** Inter / Calibre (custom-loaded) — San Francisco / system-ui fallback  
**Body Font:** Same stack as display — unified sans-serif pairing  
**Mono Font:** SF Mono — Fira Code, Fira Mono, Roboto Mono fallbacks

**Character:** A single sans-serif family carries everything except code and UI chrome, which shifts to monospaced. The pairing creates a clean register split: prose is fluid and human; buttons, labels, and nav are precise and mechanical. There is no decorative or display-only typeface — the system earns its character from weight and spacing, not font choice.

### Hierarchy

- **Display** (weight 200, `clamp(56px, 9vw, 96px)`, line-height 1.1, letter-spacing −0.03em): The hero name. Mass through scale alone — ultralight at large sizes reads as monumental without heaviness.
- **Headline** (weight 300, `clamp(40px, 8vw, 60px)`, line-height 1.1): Page-level subheadings, archive titles.
- **Title** (weight 300, `clamp(22px, 5vw, 34px)`, letter-spacing 0.05em, uppercase): Numbered section headings. Always preceded by the amber signal counter.
- **Body** (weight 400, 19px, line-height 1.3): Primary prose. Drops to 17px on narrow viewports (≤480px). Copy reads dense and technical — no decorative line spacing.
- **Label / Mono** (SF Mono, weight 400, 12–13px, letter-spacing 0.08–0.12em, uppercase): All buttons, nav items, chip annotations, code references, and overlines. The mechanical layer of the system.

### Named Rules

**The Mono-Is-Chrome Rule.** Monospaced text signals UI infrastructure: it means button, label, badge, or code — never ambient prose. If a sentence reads as running text, it belongs in the sans-serif stack.

## Layout

The main content container sits inside a `max-width: 1600px` shell with generous horizontal padding (`150px` desktop, scaling to `25px` on mobile). Section content is constrained to `max-width: 1000px` and centered — a readable column width that never stretches to full container.

Section vertical rhythm uses `100px` top/bottom padding (dropping to `80px` at 768px and `60px` at 480px), creating a long-scroll structure where each section is a distinct beat. The generous whitespace is earned by the dark canvas — there is nothing to fill, only space to breathe.

Featured project layouts use a `12-column grid` with content and image alternating sides — odd-indexed projects are right-aligned, even-indexed left-aligned. On mobile (≤768px) the grid collapses to a single column with consistent `40px` internal padding.

Navigation is `100px` tall at rest, compressing to `70px` on scroll with a `box-shadow` to signal elevation. On mobile, it shifts to a full-screen hamburger overlay.

Breakpoints (max-width): 330px / 400px / 480px / 600px / 768px / 900px / 1080px / 1200px / 1400px.

## Elevation & Depth

The system is flat by default. Surfaces do not cast shadows at rest — the depth of the canvas handles spatial separation. Shadows appear only when state demands it: the nav on scroll, project cards on hover, and the mobile menu overlay.

Shadow values use `rgba(0, 0, 0, 0.8)` — a dense, near-opaque shadow that reads as deep contrast rather than soft depth. On a `#0a0a0a` background this reads as a crisp step down, not a diffuse glow.

### Shadow Vocabulary

- **Ambient Lift** (`0 10px 30px -15px rgba(0, 0, 0, 0.8)`): Project cards and elevated containers at rest.
- **Hover Depth** (`0 20px 30px -15px rgba(0, 0, 0, 0.8)`): Same containers on hover — distance increases, spread widens.
- **Nav Scroll** (`0 10px 30px -10px rgba(0, 0, 0, 0.8)`): Header shadow when the user has scrolled past the hero. Tighter spread than card hover.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows appear only as a response to state or scroll. No decorative drop shadows on static text blocks, icons, or dividers.

## Shapes

The entire system runs at `2px` border radius — a near-sharp corner that reads as engineered rather than organic. Nothing is fully squared (0px would feel intentionally harsh); the 2px is precision, not softness.

Buttons, code blocks, tags, and input elements all share the same `2px` radius. The consistency is the message: every interactive affordance is built from the same geometry. There are no rounded pill buttons, no circular avatars (images appear clipped in rectangular containers), and no soft-edged modals.

Section divider lines use `1px` height with `rgba(255, 255, 255, 0.12)` — hairlines that structure the eye without weight.

## Components

### Buttons

Buttons read as commands: monospaced font, uppercase, spaced tracking, ghost-then-fill interaction. There is no "soft" button variant.

- **Shape:** Near-sharp corners (2px radius)
- **Primary (Big):** Transparent background, `1px solid #ffffff` border, `1.25rem 2rem` padding, 12px SF Mono, 0.12em letter-spacing, uppercase
- **Primary (Default):** Same border/font treatment, `1.25rem 1.75rem` padding, 0.1em letter-spacing
- **Small:** Same border/font, `0.75rem 1rem` padding, 0.08em letter-spacing
- **Hover / Focus / Active:** Background fills to `#ffffff`; text inverts to `#0a0a0a`. No intermediate states. Transition: `all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)`.

### Navigation

- **Desktop:** Fixed header, full-width, `100px` tall at top / `70px` scrolled. Background `#0a0a0a` with `backdrop-filter: blur(10px)`. Nav links in SF Mono, 13px, `#aaaaaa` at rest, `#ffffff` on hover.
- **Scroll behavior:** On scroll-down, header translates off screen; on scroll-up, it returns with a nav shadow.
- **Mobile:** Hamburger icon opens a full-screen overlay with centered nav links in large format. Blur + darken applied to background content beneath.

### Inline Links

- Default color: inherited from parent
- Hover: color shifts to `#ffffff`
- Underline: 1px `#ffffff` bar at `opacity: 0.5`, width animates from `0 → 100%` on hover. Transition `0.3s` standard easing.

### Chips / Tech Tags

Tech stack labels on project cards. SF Mono, 11–13px, `#aaaaaa`, no background, no border. Pure typography — no pill shape. Lists use `flex-wrap` with tight `5px` gap.

### Project Card (Featured)

12-column grid. Image occupies 7 columns; content occupies 6 columns (overlapping by 1). On mobile, stacks to single column with `#111111` card background, `40px` internal padding, and the ambient lift shadow.
- Content: project title in Bright Text, description in a `#111111` card at `z-index 1` over the image.
- Tech list: mono chips, right-aligned on odd projects, left-aligned on even.
- Links: icon buttons (GitHub / external), `22px`, hover color `#ffffff`.

### Fancy List

Used in job descriptions and about sections.
- Bullet: `▹` character in `#e8813a` (amber signal), absolute-positioned at `left: 0`
- Item padding-left: `30px`
- Font: 17px body stack, `#888888`

### Numbered Section Heading

The structural workhorse. CSS counter auto-increments per section.
- Counter text: SF Mono, 13–15px, `#e8813a` (amber signal), no uppercase
- Heading text: `clamp(22px, 5vw, 34px)`, weight 300, 0.05em letter-spacing, uppercase, `#e0e0e0`
- Trailing rule: full-width `1px` `rgba(255, 255, 255, 0.12)` hairline, `margin-left: 20px`

## Do's and Don'ts

### Do:
- **Do** use `#e8813a` only on punctuation-scale elements: counters, list markers, a single inline emphasis per view. Never as a fill on large surfaces.
- **Do** write all button and label copy in SF Mono, uppercase, with letter-spacing ≥ 0.08em.
- **Do** keep border radius at `2px` across all interactive and contained elements — uniform geometry is the system's signature.
- **Do** let the dark canvas do the work. Use generous whitespace (section padding `100px`) rather than visual separators or background fills.
- **Do** animate state changes at exactly `0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)` — consistent easing makes the system feel authored.
- **Do** use font weight 200–300 for all display and heading text. Mass comes from size, not weight.

### Don't:
- **Don't** use `#e8813a` as a button fill, section background, or ambient text color. Once it becomes wallpaper it stops being a signal.
- **Don't** introduce border radius above `2px` — no pill buttons, no rounded cards, no circular avatars.
- **Don't** add decorative shadows to static elements (text, icons, dividers). Shadows respond to state, not decoration.
- **Don't** use the sans-serif stack for labels, buttons, or nav items. UI chrome is always monospaced.
- **Don't** set heading weights above 300 except for specific body-weight prose contexts. The system's authority is ultralight text at large scale.
- **Don't** add color beyond the established palette. No gradients, no secondary accent colors, no colored backgrounds on section blocks.
