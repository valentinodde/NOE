# Modals

> Dependencies: `colors.md`, `radius.md`, `shadows.md`, `buttons.md`

## Overlay (Backdrop)

```css
position: fixed;
inset: 0;
z-index: 40;
display: flex;
align-items: center;
justify-content: center;
padding: 0 16px;
background: rgba(0,10,67,0.35);    /* deep navy tint — not pure black */
```

## Content Container

```css
background: #ffffff;
border-radius: 16px;
width: 100%;
max-width: 448px;         /* standard modal */
box-shadow: 0 0 48px rgba(0,10,67,0.06);    /* page shadow level */

/* Wide form variant */
max-width: 512px;
```

## Header

```css
padding: 20px 28px;
border-bottom: 1px solid #e8eaf3;    /* surface-high */
display: flex;
align-items: center;
justify-content: space-between;

/* Title */
font-size: 1rem;
font-weight: 600;
color: var(--color-on-surface);
letter-spacing: -0.01em;

/* Close button (×) */
background: none;
border: none;
cursor: pointer;
padding: 4px;
font-size: 1.25rem;
line-height: 1;
color: var(--color-on-surface-var);
transition: color 150ms;

/* Close button — hover */
color: var(--color-on-surface);
```

## Body

```css
padding: 24px 28px;
display: flex;
flex-direction: column;
gap: 20px;

/* Body text */
font-size: 0.875rem;
color: var(--color-on-surface-var);
line-height: 1.625;
```

## Footer

```css
padding: 20px 28px;
border-top: 1px solid #e8eaf3;    /* surface-high */
display: flex;
align-items: center;
justify-content: flex-end;
gap: 12px;

/* Cancel / ghost button */
font-size: 0.875rem;
font-weight: 500;
color: var(--color-on-surface-var);
background: none;
border: none;
cursor: pointer;
transition: color 150ms;

/* Cancel — hover */
color: var(--color-on-surface);

/* Confirm / primary button */
color: #ffffff;
font-weight: 600;
padding: 10px 20px;
border-radius: 12px;
font-size: 0.875rem;
background: linear-gradient(135deg, #000a43 0%, #051b71 100%);
border: none;
cursor: pointer;
```

## Confirmation Pop-up Variant

Centered layout with large icon:

```css
/* Inner wrapper */
padding: 40px 32px;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
text-align: center;

/* Icon container */
width: 48px;
height: 48px;
border-radius: 16px;
background: #e8eaf3;    /* surface-high */
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;

/* Heading */
font-size: 1.1rem;
font-weight: 600;
color: var(--color-on-surface);
margin-bottom: 8px;

/* Description */
font-size: 0.875rem;
color: var(--color-on-surface-var);
line-height: 1.625;

/* Button row */
display: flex;
gap: 12px;
```

## Rules

- Backdrop: `rgba(0,10,67,0.35)` — never `rgba(0,0,0,0.5)`.
- Modal container: `border-radius: 16px`, page-level shadow.
- Header/footer borders: `1px solid #e8eaf3` (surface-high).
- Close button (×): always present, transitions from `on-surface-var` to `on-surface` on hover.
- Accessibility: `role="dialog"`, `aria-modal="true"`, focus trap.
- Single light theme — no dark mode.
