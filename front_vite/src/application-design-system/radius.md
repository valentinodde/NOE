# Border Radius

## Scale

| Name | Value | Usage |
|---|---|---|
| None | 0px | — |
| Small | 8px | Small icon containers, tooltip panels |
| Control | 12px | Buttons, inputs, inner data cards, accordion headers |
| Card | 16px | Section cards, modals, large panels, page header |
| Full / Pill | 9999px | Status pills, badges, dots, count chips |
| Top-only | 8px top corners, 0 bottom | Navigation tab buttons |

## Application Rules

### Buttons & Inputs
```css
border-radius: 12px;
```
Never use `9999px` (pill) for buttons or inputs — pills are reserved exclusively for badges.

### Cards
```css
/* Section card, modal, form card */
border-radius: 16px;

/* Data sub-card, metric card, callout panel */
border-radius: 12px;
```

### Badges & Pills
```css
border-radius: 9999px;
```
Status badges, count chips, delta badges, timeline pills — all use `9999px`.

### Icon Containers
```css
/* Large (56×56, 48×48px) */
border-radius: 12px;

/* Medium (44×44, 40×40px) */
border-radius: 12px;

/* Small (36×36px) */
border-radius: 8px;

/* Dot indicator */
border-radius: 9999px;
```

### Tab Panel Wrappers
```css
/* Outer wrapper */
border-radius: 16px;
overflow: hidden;
/* Tab buttons inside are flat — no individual radius */
```

### Navigation Tabs (underline style)
```css
border-top-left-radius: 8px;
border-top-right-radius: 8px;
border-bottom-left-radius: 0;
border-bottom-right-radius: 0;
```

### Accordion / Collapsible
```css
/* Header button — closed state */
border-radius: 12px;

/* Header button — open state (connects to panel below) */
border-top-left-radius: 12px;
border-top-right-radius: 12px;
border-bottom-left-radius: 0;
border-bottom-right-radius: 0;

/* Panel body */
border-top-left-radius: 0;
border-top-right-radius: 0;
border-bottom-left-radius: 12px;
border-bottom-right-radius: 12px;
```

## What NOT to Use

- `9999px` on buttons — use `12px`.
- Values above `16px` for cards — maximum is `16px`.
- Values of `4px` or `6px` — minimum for visible elements is `8px`.
