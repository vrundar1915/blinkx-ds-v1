import type { Meta, StoryObj } from '@storybook/react-vite'
import { HugeiconsIcon } from '@hugeicons/react'
import { Download01Icon } from '@hugeicons/core-free-icons'

import {
  BlinkXLoader,
  type BlinkXLoaderProps,
  type BlinkXLoaderTheme,
  type BlinkXLoaderVariation,
} from './BlinkXLoader'
import { BlinkXButton } from './BlinkXButton'
import { ComponentCodeBlock } from './ComponentCodeBlock'
import './ButtonsStory.css'

const loaderThemes: BlinkXLoaderTheme[] = ['light', 'dark']
const loaderVariations: BlinkXLoaderVariation[] = ['Constant', 'Breathing arc', 'Stretch']
const componentPropertyCategory = 'Component\u00A0property'
const loaderMarkdownHref = '/blinkx-loader.md'
const loaderMarkdownDownloadName = 'blinkx-loader.md'

type LoaderStoryArgs = BlinkXLoaderProps

type LoaderThemeTokens = {
  arcEnd: string
  arcMiddle: string
  arcStart: string
  surface: string
  track: string
}

const loaderThemeTokens = {
  light: {
    arcEnd: '#DD3B59',
    arcMiddle: '#FB8043',
    arcStart: '#F8BC67',
    surface: '#FFFFFF',
    track: '#F2F2F2',
  },
  dark: {
    arcEnd: '#DD3B5999',
    arcMiddle: '#FB804399',
    arcStart: '#F8BC6799',
    surface: '#1A1E23',
    track: '#33373B',
  },
} satisfies Record<BlinkXLoaderTheme, LoaderThemeTokens>

const loaderTokenAliases = {
  light: {
    arcEnd: 'Gradient/G4 stop 3 -> #DD3B59',
    arcMiddle: 'Gradient/G4 stop 2 -> #FB8043',
    arcStart: 'Gradient/G4 stop 1 -> #F8BC67',
    surface: 'Color/Surface - Elevation/surface 1 -> Colors/surface/Light/1',
    track: 'Bg - Grey Ring -> #F2F2F2',
  },
  dark: {
    arcEnd: 'Color/Gradient/g-3_alpha-60 -> #DD3B5999',
    arcMiddle: 'Color/Gradient/g-4_alpha-60 -> #FB804399',
    arcStart: 'Color/Gradient/g-5_alpha-60 -> #F8BC6799',
    surface: 'Color/Surface - Elevation/surface 1 -> Colors/surface/Dark/1',
    track: 'Color/background/brand/bg-brand-disable -> Colors/neutral/Dark/neutral-100',
  },
} satisfies Record<BlinkXLoaderTheme, Record<keyof LoaderThemeTokens, string>>

const variationDetails = {
  Constant: {
    description: 'Fixed 90deg arc, constant-speed rotation. Predictable and quiet - the safe default.',
    timing: 'linear · 0.8s',
  },
  'Breathing arc': {
    description:
      'The arc rotates while its stroke thickens and thins. Subtle weight shift, no length change.',
    timing: 'rotate + stroke-width · 1.4s',
  },
  Stretch: {
    description:
      'The arc itself grows and shrinks while rotating. Most expressive - the Material indeterminate spinner.',
    timing: 'rotate + dash · 1.8s',
  },
} satisfies Record<BlinkXLoaderVariation, { description: string; timing: string }>

const loaderSpec = {
  arcLength: '104px',
  circumference: '159.3px',
  gapLength: '55.3px',
  logoSize: '28px',
  ringRadius: '25.35px',
  ringSize: '56px',
  strokeWidth: '5.3px',
  surfaceSize: '56px',
  wrapperSize: '56px',
} as const

const meta = {
  title: 'Components/Loader',
  component: BlinkXLoader,
  parameters: {
    layout: 'fullscreen',
    controls: {
      sort: 'none',
    },
  },
  argTypes: {
    theme: {
      control: 'inline-radio',
      name: 'Theme',
      options: loaderThemes,
      table: {
        category: componentPropertyCategory,
      },
    },
    rotatingVariation: {
      control: 'inline-radio',
      name: 'Rotating variation',
      options: loaderVariations,
      table: {
        category: componentPropertyCategory,
      },
    },
    'aria-label': {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<LoaderStoryArgs>

export default meta

type Story = StoryObj<LoaderStoryArgs>

const loaderCode = `import { BlinkXLoader } from './BlinkXLoader'
import './BlinkXLoader.css'

export function Example() {
  return <BlinkXLoader rotatingVariation="Constant" theme="light" />
}`

function DownloadIcon() {
  return (
    <HugeiconsIcon
      aria-hidden="true"
      className="components-buttons-download-icon"
      icon={Download01Icon}
      strokeWidth={2.4}
    />
  )
}

function downloadLoaderMarkdown() {
  const link = document.createElement('a')
  link.href = loaderMarkdownHref
  link.download = loaderMarkdownDownloadName
  document.body.appendChild(link)
  link.click()
  link.remove()
}

function LoaderHeader() {
  return (
    <header className="components-buttons-header">
      <div>
        <p className="components-buttons-kicker">Components / Loader</p>
        <h1>Loader</h1>
        <p className="components-buttons-subtext">Loader component properties from Figma.</p>
      </div>

      <div className="components-buttons-header-actions">
        <BlinkXButton
          aria-label="Download Loader markdown"
          className="components-buttons-download-button"
          label="Download .md File"
          leadingIconNode={<DownloadIcon />}
          onClick={downloadLoaderMarkdown}
          size="lg"
          type="Secondary"
        />
      </div>
    </header>
  )
}

function pxToRem(value: string) {
  const px = Number.parseFloat(value)

  if (!Number.isFinite(px)) return value

  const rem = px / 16
  const rounded = Number.parseFloat(rem.toFixed(4))

  return `${rounded}rem`
}

function getDetailedCode(args: LoaderStoryArgs) {
  const theme = args.theme ?? 'light'
  const rotatingVariation = args.rotatingVariation ?? 'Constant'
  const tokens = loaderThemeTokens[theme]
  const aliases = loaderTokenAliases[theme]
  const variation = variationDetails[rotatingVariation]

  return `import type { HTMLAttributes } from 'react'
import './BlinkXLoader.css'

export type BlinkXLoaderTheme = 'light' | 'dark'
export type BlinkXLoaderVariation = 'Constant' | 'Breathing arc' | 'Stretch'

export type BlinkXLoaderProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  rotatingVariation?: BlinkXLoaderVariation
  theme?: BlinkXLoaderTheme
}

<BlinkXLoader
  rotatingVariation="${rotatingVariation}"
  theme="${theme}"
/>

/* Figma nodes */
/* Loader: 6194:15899 | Surface: 6194:15904 | Logo: 6194:15912 */
/* Bg - Grey Ring: 6194:15913 | Rotating Ring: 6194:15914 */

/* Resolved tokens for ${theme} theme */
--loader-arc-start: ${tokens.arcStart}; /* ${aliases.arcStart} */
--loader-arc-middle: ${tokens.arcMiddle}; /* ${aliases.arcMiddle} */
--loader-arc-end: ${tokens.arcEnd}; /* ${aliases.arcEnd} */
--loader-track: ${tokens.track}; /* ${aliases.track} */
--loader-surface: ${tokens.surface}; /* ${aliases.surface} */

/* Component CSS */
.blinkx-loader {
  --loader-arc-start: ${tokens.arcStart};
  --loader-arc-middle: ${tokens.arcMiddle};
  --loader-arc-end: ${tokens.arcEnd};
  --loader-surface: ${tokens.surface};
  --loader-track: ${tokens.track};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${loaderSpec.wrapperSize}; /* ${pxToRem(loaderSpec.wrapperSize)} */
  height: ${loaderSpec.wrapperSize}; /* ${pxToRem(loaderSpec.wrapperSize)} */
}

.blinkx-loader__surface {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${loaderSpec.surfaceSize}; /* ${pxToRem(loaderSpec.surfaceSize)} */
  height: ${loaderSpec.surfaceSize}; /* ${pxToRem(loaderSpec.surfaceSize)} */
  border-radius: 999px;
  background: var(--loader-surface);
}

.blinkx-loader__ring {
  position: absolute;
  width: ${loaderSpec.ringSize}; /* ${pxToRem(loaderSpec.ringSize)} */
  height: ${loaderSpec.ringSize}; /* ${pxToRem(loaderSpec.ringSize)} */
  overflow: visible;
  transform-origin: 50% 50%;
}

.blinkx-loader__track,
.blinkx-loader__arc {
  fill: none;
  stroke-width: ${loaderSpec.strokeWidth}; /* ${pxToRem(loaderSpec.strokeWidth)} */
}

.blinkx-loader__track {
  stroke: var(--loader-track);
}

.blinkx-loader__arc {
  stroke: url("#blinkx-loader-ring-gradient");
  stroke-dasharray: ${loaderSpec.arcLength} ${loaderSpec.gapLength};
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}

.blinkx-loader__logo {
  width: ${loaderSpec.logoSize}; /* ${pxToRem(loaderSpec.logoSize)} */
  height: ${loaderSpec.logoSize}; /* ${pxToRem(loaderSpec.logoSize)} */
  position: relative;
  z-index: 1;
}

/* ${rotatingVariation}: ${variation.description} */
.blinkx-loader--variation-constant .blinkx-loader__ring {
  animation: blinkx-loader-rotate 0.8s linear infinite;
}

.blinkx-loader--variation-breathing-arc .blinkx-loader__ring {
  animation: blinkx-loader-rotate 1.4s linear infinite;
}

.blinkx-loader--variation-breathing-arc .blinkx-loader__arc {
  animation: blinkx-loader-breathe-width 1.4s ease-in-out infinite;
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

@keyframes blinkx-loader-breathe-width {
  0% {
    stroke-width: 4.3;
  }

  50% {
    stroke-width: 6.3;
  }

  100% {
    stroke-width: 4.3;
  }
}

@keyframes blinkx-loader-stretch {
  0% {
    stroke-dasharray: 40 119.3;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 124 35.3;
    stroke-dashoffset: -40;
  }

  100% {
    stroke-dasharray: 40 119.3;
    stroke-dashoffset: -159.3;
  }
}`
}

function PreviewCanvas(args: LoaderStoryArgs) {
  const theme = args.theme ?? 'light'

  return (
    <main className="components-buttons-page">
      <LoaderHeader />

      <section className="button-live-section">
        <div className="button-live-preview" data-theme={theme}>
          <BlinkXLoader {...args} theme={theme} />
        </div>

        <ComponentCodeBlock code={getDetailedCode(args)} />
      </section>
    </main>
  )
}

function GalleryCanvas() {
  return (
    <main className="components-buttons-page">
      <LoaderHeader />

      <div className="buttons-section-list">
        <section className="buttons-section">
          <div className="buttons-section__header">
            <h2>Rotating variation</h2>
            <span>{loaderVariations.length}</span>
          </div>

          <div className="buttons-token-grid loader-variation-grid">
            {loaderVariations.map((rotatingVariation) => (
              <article className="buttons-token" key={rotatingVariation}>
                <div className="buttons-token__preview blinkx-loader-token-preview">
                  <BlinkXLoader rotatingVariation={rotatingVariation} />
                </div>
                <div className="buttons-token__body">
                  <span className="buttons-token__name">{rotatingVariation}</span>
                  <span className="components-buttons-subtext">
                    {variationDetails[rotatingVariation].timing}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="buttons-section">
          <div className="buttons-section__header">
            <h2>Theme</h2>
            <span>{loaderThemes.length}</span>
          </div>

          <div className="buttons-token-grid loader-theme-grid">
            {loaderThemes.map((theme) => (
              <article className="buttons-token" key={theme}>
                <div
                  className="buttons-token__preview blinkx-loader-token-preview button-live-preview"
                  data-theme={theme}
                >
                  <BlinkXLoader rotatingVariation="Breathing arc" theme={theme} />
                </div>
                <div className="buttons-token__body">
                  <span className="buttons-token__name">{theme}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export const Preview: Story = {
  args: {
    rotatingVariation: 'Constant',
    theme: 'light',
  },
  parameters: {
    docs: {
      source: {
        code: loaderCode,
      },
    },
  },
  render: (args) => <PreviewCanvas {...args} />,
}

export const Gallery: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => <GalleryCanvas />,
}
