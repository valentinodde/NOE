---
name: "application-design-system"
description: "Tonal data-intelligence design system for AI coding agents."
metadata:
  author: custom
  source: workspace-importer
  projectName: "Application"
  projectLogoUrl: ""
  importSource: "Manual setup"
  primaryColorReference: "#000a43"
  surfaceColorReference: "#f9f9ff"
  textColorReference: "#181c22"
  typographyScale: "Inter, 9/10/11/13/14/16/18/22 px scale, uppercase letter-spacing labels, tight negative-spacing headings."
  spacingScale: "4px base grid — 4/8/12/16/20/24/28/32/40/48 px steps."
  radiusScale: "9999px for status pills only; 12px for controls/buttons/inputs; 16px for cards; 8px for small containers."
---

# Design System — Agent Instructions

This skill describes the visual design language for all UI output. Every component, layout, and page should follow the design specs in the module files below. These describe *what the design looks like* — you choose how to implement the styles in whatever technology you use.

## Style

A polished data-intelligence dashboard aesthetic: deep navy brand identity (#000a43 / #051b71), tonal blue-tinted surfaces (depth from background layering — not borders), Inter typography with tight tracking on headings and uppercase metadata labels, diffuse deep-navy box-shadows, color-coded left/top borders for contextual sections and tabs. Single light theme — no dark mode. Dense, precise, professional.

## Before Writing Any Code

1. **Read every module that applies.** For a dashboard page, read at minimum: `layout.md`, `typography.md`, `colors.md`, `buttons.md`, `cards.md`, `shadows.md`, `radius.md`, `borders.md`. Do NOT start coding until you have loaded all relevant modules.

## Critical Rules

- **Technology agnostic.** All values in this system are expressed as raw CSS (hex colors, px/rem sizes, rgba shadows). Implement them in whatever stack you use — CSS, CSS-in-JS, inline styles, utility classes, etc.
- **No dark mode.** Single light theme only. Never add color-scheme switching.
- **Tonal depth over borders.** Surface hierarchy is communicated through background color layering (surface → surface-low → surface-high → surface-highest). Avoid explicit borders unless the module specifies one.
- **Cross-reference modules.** A card containing buttons must satisfy both `cards.md` AND `buttons.md`.
- **Every interactive element needs hover, focus, and disabled states** — defined in the relevant module.
- **Semantic HTML:** proper heading hierarchy (`h1`→`h6`), `<button>` for actions, `<a>` for navigation, ARIA attributes where appropriate.

## Design Tokens (CSS Custom Properties)

Register these as CSS custom properties (or equivalent) in your global stylesheet:

```css
--color-surface: #f9f9ff;           /* page / app background */
--color-surface-lowest: #ffffff;
--color-surface-low: #f1f3fc;
--color-surface-high: #e8eaf3;
--color-surface-highest: #e0e2eb;

--color-primary: #000a43;           /* deep navy — headings, CTAs */
--color-primary-container: #051b71; /* royal blue — gradient end, focus */

--color-secondary: #964900;         /* alert amber */
--color-secondary-light: #fe851f;

--color-tertiary: #0097d6;          /* data cyan */
--color-tertiary-dark: #001421;

--color-on-surface: #181c22;        /* primary text */
--color-on-surface-var: #44474f;    /* secondary text */
```

## Module Index

### Foundation (read first for any UI work)
- [colors.md](colors.md) — surface hierarchy, brand, status, data accent tokens
- [typography.md](typography.md) — Inter scale, heading conventions, label patterns
- [layout.md](layout.md) — spacing rhythm, container, animations
- [radius.md](radius.md) — border-radius scale
- [shadows.md](shadows.md) — deep-navy diffuse elevation tokens
- [borders.md](borders.md) — tonal borders, accent rgba borders, color bars

### Components
- [buttons.md](buttons.md) — primary gradient, ghost, disabled
- [button-group.md](button-group.md) — inline mode switcher
- [cards.md](cards.md) — surface card hierarchy (section, content, data)
- [inputs.md](inputs.md) — surface-fill input with bottom-bar focus
- [alerts.md](alerts.md) — tinted info/warning/danger panels
- [badges.md](badges.md) — status pills, delta badges, count chips
- [lists.md](lists.md) — metadata rows, key-value pairs
- [avatars.md](avatars.md) — emoji icon containers
- [icon-shapes.md](icon-shapes.md) — rounded icon container variants

### Complex Components
- [accordion.md](accordion.md) — collapsible sections
- [dropdown.md](dropdown.md) — dropdown menus
- [modals.md](modals.md) — modal dialogs
- [tabs.md](tabs.md) — nav tabs (underline) and panel tabs (top-border)
- [tables.md](tables.md) — data tables
- [pagination.md](pagination.md) — pagination
- [sidebars.md](sidebars.md) — top navbar pattern
- [radios-checkboxes-toggle.md](radios-checkboxes-toggle.md) — selection controls
- [tooltips-popovers.md](tooltips-popovers.md) — tooltips and popovers
- [content.md](content.md) — grid, responsiveness
