# blinkX Design System V1 - Loader

Generated from `src/components/Loader.stories.tsx`, `src/components/BlinkXLoader.tsx`, and `src/components/BlinkXLoader.css` so the downloadable markdown matches the Storybook Loader page.

## Component

`BlinkXLoader` is the compact blinkX loading indicator. It combines a circular surface, blinkX logo, neutral background ring, and animated brand ring. It supports light and dark themes and three rotation behaviors.

```tsx
import { BlinkXLoader } from './BlinkXLoader'
import './BlinkXLoader.css'

export function Example() {
  return <BlinkXLoader rotatingVariation="Constant" theme="light" />
}
```

## Props

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `theme` | `"light" \| "dark"` | `"light"` | Uses light or dark Figma token values. |
| `rotatingVariation` | `"Constant" \| "Eased / snatch" \| "Stretch"` | `"Constant"` | Controls the animation behavior of the rotating ring. |
| `aria-label` | `string` | `"Loading"` | Accessible status text. |
| `className` | `string` | `""` | Optional class appended to the root. |

## Figma Component

| Item | Value |
| --- | --- |
| Loader | `6194:15899` |
| Surface | `6194:15904` |
| Logo | `6194:15912` |
| Bg - Grey Ring | `6194:15913` |
| Rotating Ring | `6194:15914` |
| Storybook title | `Components / Loader` |
| Component properties | `Theme`, `Rotating variation` |

## Layout Specs

| Element | Value |
| --- | --- |
| Wrapper | `56px` x `56px` / `3.5rem` x `3.5rem` |
| Surface | `56px` x `56px` / `3.5rem` x `3.5rem` |
| Surface radius | `999px` |
| Ring SVG | `56px` x `56px` / `3.5rem` x `3.5rem` |
| Ring viewBox | `0 0 56 56` |
| Ring circle radius | `21px` |
| Ring stroke width | `5px` / `0.3125rem` |
| Fixed arc length | `33px` dash on a `131.9px` circumference |
| Logo | `28px` x `28px` / `1.75rem` x `1.75rem` |
| Surface shadow | Foundation `Shadow-lg` |

## Rotation Variations

| Variation | Behavior | Timing |
| --- | --- | --- |
| `Constant` | Fixed 90deg arc, constant-speed rotation. Predictable and quiet - the safe default. | `linear` / `0.8s` |
| `Eased / snatch` | Same arc, but the rotation accelerates then decelerates each turn. Feels lively, with momentum. | `cubic-bezier(0.65, 0, 0.35, 1)` / `1.3s` |
| `Stretch` | The arc itself grows and shrinks while rotating. Most expressive - the Material indeterminate spinner. | rotate + dash / `1.8s` |

## Light Theme Tokens

| Usage | Value | Figma variable |
| --- | --- | --- |
| Rotating ring | `#171EFD` | `Color/background/brand/bg-brand-default` -> `Colors/brand/Light/brand-500` |
| Grey ring | `#E7E7E7` | `Color/background/brand/bg-brand-disable` -> `Colors/neutral/Light/neutral-100` |
| Surface | `#FFFFFF` | `Color/Surface - Elevation/surface 1` -> `Colors/surface/Light/1` |
| Focus ring token | `#D1D2FF` | `Color/background/brand/bg-brand-focus_ring` -> `Colors/brand/Light/brand-100` |
| Shadow-lg | `0 2px 2px -1px #0A0D100A, 0 4px 6px -2px #0A0D1008, 0 12px 16px -4px #0A0D1014` | Foundation Shadow/Shadow-lg |

## Dark Theme Tokens

| Usage | Value | Figma variable |
| --- | --- | --- |
| Rotating ring | `#585DFE` | `Color/background/brand/bg-brand-default` -> `Colors/brand/Dark/brand-500` |
| Grey ring | `#33373B` | `Color/background/brand/bg-brand-disable` -> `Colors/neutral/Dark/neutral-100` |
| Surface | `#1A1E23` | `Color/Surface - Elevation/surface 1` -> `Colors/surface/Dark/1` |
| Focus ring token | `#3F44A6` | `Color/background/brand/bg-brand-focus_ring` -> `Colors/brand/Dark/brand-300` |
| Shadow-lg | `0 2px 2px -1px #0A0D1033, 0 4px 6px -2px #0A0D102E, 0 12px 16px -4px #0A0D105C` | Foundation Shadow/Shadow-lg |

## Accessibility

| Rule | Value |
| --- | --- |
| Root role | `status` |
| Live region | `aria-live="polite"` |
| Accessible name | `aria-label`, default `"Loading"` |
| Decorative SVGs | `aria-hidden="true"` |
| Reduced motion | Animations collapse to a single short iteration under `prefers-reduced-motion: reduce`. |

## Core Component Code

```tsx
import type { HTMLAttributes } from 'react'
import './BlinkXLoader.css'

export type BlinkXLoaderTheme = 'light' | 'dark'
export type BlinkXLoaderVariation = 'Constant' | 'Eased / snatch' | 'Stretch'

export type BlinkXLoaderProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  rotatingVariation?: BlinkXLoaderVariation
  theme?: BlinkXLoaderTheme
}

const variationClassNames: Record<BlinkXLoaderVariation, string> = {
  Constant: 'blinkx-loader--variation-constant',
  'Eased / snatch': 'blinkx-loader--variation-eased-snatch',
  Stretch: 'blinkx-loader--variation-stretch',
}

export function BlinkXLoader({
  'aria-label': ariaLabel = 'Loading',
  className = '',
  rotatingVariation = 'Constant',
  theme = 'light',
  ...loaderProps
}: BlinkXLoaderProps) {
  const classes = [
    'blinkx-loader',
    `blinkx-loader--theme-${theme}`,
    variationClassNames[rotatingVariation],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      {...loaderProps}
      aria-label={ariaLabel}
      aria-live="polite"
      className={classes}
      data-theme={theme}
      data-variation={rotatingVariation}
      role="status"
    >
      <span aria-hidden="true" className="blinkx-loader__surface">
        <svg className="blinkx-loader__ring" fill="none" viewBox="0 0 56 56">
          <circle className="blinkx-loader__track" cx="28" cy="28" r="21" />
          <circle className="blinkx-loader__arc" cx="28" cy="28" r="21" />
        </svg>

        <span className="blinkx-loader__logo">
          <BlinkXLoaderLogo />
        </span>
      </span>
    </div>
  )
}
```

## Core CSS

```css
.blinkx-loader {
  --loader-arc: #171efd;
  --loader-focus-ring: #d1d2ff;
  --loader-shadow:
    0 2px 2px -1px #0a0d100a,
    0 4px 6px -2px #0a0d1008,
    0 12px 16px -4px #0a0d1014;
  --loader-surface: #ffffff;
  --loader-track: #e7e7e7;
  align-items: center;
  display: inline-flex;
  height: 56px;
  justify-content: center;
  width: 56px;
}

.blinkx-loader--theme-dark {
  --loader-arc: #585dfe;
  --loader-focus-ring: #3f44a6;
  --loader-shadow:
    0 2px 2px -1px #0a0d1033,
    0 4px 6px -2px #0a0d102e,
    0 12px 16px -4px #0a0d105c;
  --loader-surface: #1a1e23;
  --loader-track: #33373b;
}

.blinkx-loader__surface {
  align-items: center;
  background: var(--loader-surface);
  border-radius: 999px;
  box-shadow: var(--loader-shadow);
  display: inline-flex;
  height: 56px;
  justify-content: center;
  position: relative;
  width: 56px;
}

.blinkx-loader__ring {
  height: 56px;
  overflow: visible;
  position: absolute;
  transform-origin: 50% 50%;
  width: 56px;
}

.blinkx-loader__track,
.blinkx-loader__arc {
  fill: none;
  stroke-width: 5;
}

.blinkx-loader__track {
  stroke: var(--loader-track);
}

.blinkx-loader__arc {
  stroke: var(--loader-arc);
  stroke-dasharray: 33 131.9;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}

.blinkx-loader__logo {
  align-items: center;
  display: inline-flex;
  height: 28px;
  justify-content: center;
  position: relative;
  width: 28px;
  z-index: 1;
}

.blinkx-loader--variation-constant .blinkx-loader__ring {
  animation: blinkx-loader-rotate 0.8s linear infinite;
}

.blinkx-loader--variation-eased-snatch .blinkx-loader__ring {
  animation: blinkx-loader-rotate 1.3s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}

.blinkx-loader--variation-stretch .blinkx-loader__ring {
  animation: blinkx-loader-rotate 1.8s linear infinite;
}

.blinkx-loader--variation-stretch .blinkx-loader__arc {
  animation: blinkx-loader-stretch 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes blinkx-loader-rotate {
  to {
    transform: rotate(360deg);
  }
}

@keyframes blinkx-loader-stretch {
  0% {
    stroke-dasharray: 16 115.9;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 84 47.9;
    stroke-dashoffset: -28;
  }

  100% {
    stroke-dasharray: 16 115.9;
    stroke-dashoffset: -131.9;
  }
}
```
