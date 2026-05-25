import type { Meta, StoryObj } from '@storybook/react-vite'
import { HugeiconsIcon } from '@hugeicons/react'
import { Download01Icon } from '@hugeicons/core-free-icons'
import { useArgs } from 'storybook/preview-api'

import {
  BlinkXToggle,
  type BlinkXToggleProps,
  type BlinkXToggleSize,
  type BlinkXToggleState,
  type BlinkXToggleTheme,
} from './BlinkXToggle'
import { BlinkXButton } from './BlinkXButton'
import { ComponentCodeBlock } from './ComponentCodeBlock'
import { ComponentResetButton } from './ComponentResetButton'
import './ButtonsStory.css'

const toggleSizes: BlinkXToggleSize[] = ['sm', 'md']
const toggleStates: BlinkXToggleState[] = ['Active', 'Focused', 'default', 'disable']
const toggleThemes: BlinkXToggleTheme[] = ['light', 'dark']
const componentPropertyCategory = 'Component\u00A0property'
const toggleMarkdownHref = '/blinkx-toggle.md'
const toggleMarkdownDownloadName = 'blinkx-toggle.md'

type ToggleStoryArgs = BlinkXToggleProps & {
  hasInteraction?: boolean
}

type ToggleSizeSpec = {
  focusRingHeight: string
  focusRingWidth: string
  frameSize: string
  thumbSize: string
  thumbTranslate: string
  trackHeight: string
  trackPadding: string
  trackWidth: string
}

type ResolvedToggleSpec = ToggleSizeSpec & {
  cursor: string
  focusRingBorder: string
  focusRingOpacity: string
  thumbBackground: string
  thumbShadow: string
  thumbTransform: string
  trackBackground: string
}

const themeTokens = {
  light: {
    bgToggleDefault: '#9D9D9D',
    bgToggleActive: '#171EFD',
    bgToggleDisabled: '#E7E7E7',
    bgToggleCircle: '#FFFFFF',
    bgToggleCircleDisabled: '#FFFFFF',
    focusRing: '#D1D2FF',
    surface: '#FFFFFF',
  },
  dark: {
    bgToggleDefault: '#66686A',
    bgToggleActive: '#585DFE',
    bgToggleDisabled: '#4D4F52',
    bgToggleCircle: '#FFFFFF',
    bgToggleCircleDisabled: '#ADADAD',
    focusRing: '#3F44A6',
    surface: '#1A1E23',
  },
} satisfies Record<BlinkXToggleTheme, Record<string, string>>

const themeTokenAliases = {
  light: {
    bgToggleDefault: 'Color/background/toggle/bg-toggle-default -> Colors/neutral/Light/neutral-400',
    bgToggleActive: 'Color/background/toggle/bg-toggle-active -> Colors/brand/Light/brand-500',
    bgToggleDisabled: 'Color/background/toggle/bg-toggle-disabled -> Colors/neutral/Light/neutral-100',
    bgToggleCircle: 'Colors/base/white',
    bgToggleCircleDisabled: 'Color/background/toggle/bg-toggle_circle-disabled -> Colors/base/white',
    focusRing: 'Color/background/brand/bg-brand-focus_ring -> Colors/brand/Light/brand-100',
    surface: 'Color/Surface - Elevation/surface 1 -> Colors/surface/Light/1',
  },
  dark: {
    bgToggleDefault: 'Color/background/toggle/bg-toggle-default -> Colors/neutral/Dark/neutral-300',
    bgToggleActive: 'Color/background/toggle/bg-toggle-active -> Colors/brand/Dark/brand-500',
    bgToggleDisabled: 'Color/background/toggle/bg-toggle-disabled -> Colors/neutral/Dark/neutral-200',
    bgToggleCircle: 'Colors/base/white',
    bgToggleCircleDisabled: 'Color/background/toggle/bg-toggle_circle-disabled -> Colors/neutral/Dark/neutral-600',
    focusRing: 'Color/background/brand/bg-brand-focus_ring -> Colors/brand/Dark/brand-300',
    surface: 'Color/Surface - Elevation/surface 1 -> Colors/surface/Dark/1',
  },
} satisfies Record<BlinkXToggleTheme, Record<keyof typeof themeTokens.light, string>>

const sizeSpecs = {
  sm: {
    frameSize: '50px',
    trackWidth: '32px',
    trackHeight: '16px',
    trackPadding: '2px',
    thumbSize: '12px',
    thumbTranslate: '16px',
    focusRingWidth: '38px',
    focusRingHeight: '22px',
  },
  md: {
    frameSize: '50px',
    trackWidth: '40px',
    trackHeight: '20px',
    trackPadding: '2px',
    thumbSize: '16px',
    thumbTranslate: '20px',
    focusRingWidth: '46px',
    focusRingHeight: '26px',
  },
} satisfies Record<BlinkXToggleSize, ToggleSizeSpec>

const meta = {
  title: 'Components/Toggle',
  component: BlinkXToggle,
  parameters: {
    layout: 'fullscreen',
    controls: {
      sort: 'none',
    },
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      name: 'Size',
      options: toggleSizes,
      table: {
        category: componentPropertyCategory,
      },
    },
    state: {
      control: 'select',
      name: 'States',
      options: toggleStates,
      table: {
        category: componentPropertyCategory,
      },
    },
    theme: {
      control: 'inline-radio',
      name: 'Theme',
      options: toggleThemes,
      table: {
        category: componentPropertyCategory,
      },
    },
    checked: {
      table: {
        disable: true,
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
    disabled: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
    hasInteraction: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<ToggleStoryArgs>

export default meta

type Story = StoryObj<ToggleStoryArgs>

const toggleCode = `import { BlinkXToggle } from './BlinkXToggle'
import './BlinkXToggle.css'

export function Example() {
  return <BlinkXToggle size="sm" state="default" theme="light" />
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

function downloadToggleMarkdown() {
  const link = document.createElement('a')
  link.href = toggleMarkdownHref
  link.download = toggleMarkdownDownloadName
  document.body.appendChild(link)
  link.click()
  link.remove()
}

function ToggleHeader() {
  return (
    <header className="components-buttons-header">
      <div>
        <p className="components-buttons-kicker">Components / Toggle</p>
        <h1>Toggle</h1>
        <p className="components-buttons-subtext">Toggle component properties from Figma.</p>
      </div>

      <div className="components-buttons-header-actions">
        <BlinkXButton
          aria-label="Download Toggle markdown"
          className="components-buttons-download-button"
          label="Download .md File"
          leadingIconNode={<DownloadIcon />}
          onClick={downloadToggleMarkdown}
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

function pxAndRem(value: string) {
  if (!Number.isFinite(Number.parseFloat(value))) return value

  return `${value} / ${pxToRem(value)}`
}

function getResolvedToggleSpec(args: BlinkXToggleProps): ResolvedToggleSpec {
  const size = args.size ?? 'sm'
  const state = args.state ?? 'default'
  const theme = args.theme ?? 'light'
  const specs = sizeSpecs[size]
  const tokens = themeTokens[theme]
  const thumbShadow = [
    '0 2px 4px -2px rgb(10 13 18 / 6%)',
    '0 4px 6px -1px rgb(10 13 18 / 10%)',
  ].join(', ')

  if (state === 'Active') {
    return {
      ...specs,
      cursor: 'pointer',
      focusRingBorder: `3px solid ${tokens.focusRing}`,
      focusRingOpacity: '0',
      thumbBackground: tokens.bgToggleCircle,
      thumbShadow,
      thumbTransform: `translateX(${specs.thumbTranslate})`,
      trackBackground: tokens.bgToggleActive,
    }
  }

  if (state === 'Focused') {
    return {
      ...specs,
      cursor: 'pointer',
      focusRingBorder: `3px solid ${tokens.focusRing}`,
      focusRingOpacity: '1',
      thumbBackground: tokens.bgToggleCircle,
      thumbShadow,
      thumbTransform: 'translateX(0)',
      trackBackground: tokens.bgToggleDefault,
    }
  }

  if (state === 'disable') {
    return {
      ...specs,
      cursor: 'not-allowed',
      focusRingBorder: `3px solid ${tokens.focusRing}`,
      focusRingOpacity: '0',
      thumbBackground: tokens.bgToggleCircleDisabled,
      thumbShadow: 'none',
      thumbTransform: 'translateX(0)',
      trackBackground: tokens.bgToggleDisabled,
    }
  }

  return {
    ...specs,
    cursor: 'pointer',
    focusRingBorder: `3px solid ${tokens.focusRing}`,
    focusRingOpacity: '0',
    thumbBackground: tokens.bgToggleCircle,
    thumbShadow,
    thumbTransform: 'translateX(0)',
    trackBackground: tokens.bgToggleDefault,
  }
}

function getDetailedCode(args: BlinkXToggleProps) {
  const size = args.size ?? 'sm'
  const state = args.state ?? 'default'
  const theme = args.theme ?? 'light'
  const specs = getResolvedToggleSpec(args)
  const tokens = themeTokens[theme]
  const tokenAliases = themeTokenAliases[theme]

  return `<BlinkXToggle
  size="${size}"
  state="${state}"
  theme="${theme}"
/>`
    + `

/* Resolved CSS for current selection */
.blinkx-toggle.blinkx-toggle--size-${size}.blinkx-toggle--state-${state.toLowerCase()}.blinkx-toggle--theme-${theme} {
  width: ${specs.frameSize}; /* ${pxToRem(specs.frameSize)} */
  height: ${specs.frameSize}; /* ${pxToRem(specs.frameSize)} */
  cursor: ${specs.cursor};
}

.blinkx-toggle__track {
  width: ${specs.trackWidth}; /* ${pxToRem(specs.trackWidth)} */
  height: ${specs.trackHeight}; /* ${pxToRem(specs.trackHeight)} */
  padding: ${specs.trackPadding}; /* ${pxToRem(specs.trackPadding)} */
  background: ${specs.trackBackground};
  border-radius: 9999px;
}

.blinkx-toggle__track::before {
  width: ${specs.focusRingWidth}; /* ${pxToRem(specs.focusRingWidth)} */
  height: ${specs.focusRingHeight}; /* ${pxToRem(specs.focusRingHeight)} */
  border: ${specs.focusRingBorder};
  border-radius: 9999px;
  opacity: ${specs.focusRingOpacity};
}

.blinkx-toggle__thumb {
  width: ${specs.thumbSize}; /* ${pxToRem(specs.thumbSize)} */
  height: ${specs.thumbSize}; /* ${pxToRem(specs.thumbSize)} */
  background: ${specs.thumbBackground};
  border-radius: 9999px;
  box-shadow: ${specs.thumbShadow};
  transform: ${specs.thumbTransform};
}

/*
Figma component set
- Node: 6145:46579
- Name: Toggle
- Component properties: Size=${size}, States=${state}
- Variants: Size=sm/md, States=Active/Focused/default/disable
- Variant frame: 50px x 50px

Color tokens extracted from Figma variables (${theme})
- Color/background/toggle/bg-toggle-default: ${tokens.bgToggleDefault} -> ${tokenAliases.bgToggleDefault}
- Color/background/toggle/bg-toggle-active: ${tokens.bgToggleActive} -> ${tokenAliases.bgToggleActive}
- Color/background/toggle/bg-toggle-disabled: ${tokens.bgToggleDisabled} -> ${tokenAliases.bgToggleDisabled}
- Color/background/toggle/bg-toggle_circle-disabled: ${tokens.bgToggleCircleDisabled} -> ${tokenAliases.bgToggleCircleDisabled}
- Color/background/brand/bg-brand-focus_ring: ${tokens.focusRing} -> ${tokenAliases.focusRing}
- Toggle thumb default: ${tokens.bgToggleCircle} -> ${tokenAliases.bgToggleCircle}
- Color/Surface - Elevation/surface 1: ${tokens.surface} -> ${tokenAliases.surface}

Radius and effects
- corner radius/toggle/radius-toggle: 9999px -> unit/9999
- Focus ring stroke: 3px
- Thumb shadow 1: 0 2px 4px -2px rgb(10 13 18 / 6%)
- Thumb shadow 2: 0 4px 6px -1px rgb(10 13 18 / 10%)

Sizing
- Component frame: ${pxAndRem(specs.frameSize)}
- Track: ${pxAndRem(specs.trackWidth)} x ${pxAndRem(specs.trackHeight)}
- Track padding: ${pxAndRem(specs.trackPadding)}
- Thumb: ${pxAndRem(specs.thumbSize)}
- Active thumb travel: ${pxAndRem(sizeSpecs[size].thumbTranslate)}
- Focus ring bounds: ${pxAndRem(specs.focusRingWidth)} x ${pxAndRem(specs.focusRingHeight)}
*/`
}

type TogglePreviewCanvasProps = ToggleStoryArgs & {
  canReset?: boolean
  onReset?: () => void
}

function PreviewCanvas({
  canReset = false,
  hasInteraction: _hasInteraction,
  onReset,
  ...args
}: TogglePreviewCanvasProps) {
  void _hasInteraction

  const theme = args.theme ?? 'light'

  return (
    <main className="components-buttons-page">
      <ToggleHeader />

      <section className="button-live-section">
        <div className="button-live-preview" data-theme={theme}>
          <ComponentResetButton active={canReset} onReset={onReset} />
          <BlinkXToggle {...args} />
        </div>

        <ComponentCodeBlock code={getDetailedCode(args)} />
      </section>
    </main>
  )
}

function GalleryCanvas() {
  return (
    <main className="components-buttons-page">
      <ToggleHeader />

      <div className="buttons-section-list">
        <section className="buttons-section">
          <div className="buttons-section__header">
            <h2>Size</h2>
            <span>{toggleSizes.length}</span>
          </div>

          <div className="buttons-token-grid">
            {toggleSizes.map((size) => (
              <article className="buttons-token" key={size}>
                <div className="buttons-token__preview">
                  <BlinkXToggle size={size} />
                </div>
                <div className="buttons-token__body">
                  <span className="buttons-token__name">{size}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="buttons-section">
          <div className="buttons-section__header">
            <h2>States</h2>
            <span>{toggleStates.length}</span>
          </div>

          <div className="buttons-token-grid">
            {toggleStates.map((state) => (
              <article className="buttons-token" key={state}>
                <div className="buttons-token__preview">
                  <BlinkXToggle state={state} />
                </div>
                <div className="buttons-token__body">
                  <span className="buttons-token__name">{state}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="buttons-section">
          <div className="buttons-section__header">
            <h2>Theme</h2>
            <span>{toggleThemes.length}</span>
          </div>

          <div className="buttons-token-grid">
            {toggleThemes.map((theme) => (
              <article className="buttons-token" key={theme}>
                <div className="buttons-token__preview button-live-preview" data-theme={theme}>
                  <BlinkXToggle state="Active" theme={theme} />
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
    hasInteraction: false,
    size: 'sm',
    state: 'default',
    theme: 'light',
  },
  parameters: {
    docs: {
      source: {
        code: toggleCode,
      },
    },
  },
  render: (args) => {
    const [, updateArgs] = useArgs<ToggleStoryArgs>()

    return (
      <PreviewCanvas
        {...args}
        canReset={Boolean(args.hasInteraction)}
        onChange={() => {
          if (args.state === 'disable') return

          updateArgs({
            hasInteraction: true,
            state: args.state === 'Active' ? 'default' : 'Active',
          })
        }}
        onReset={() => updateArgs({ hasInteraction: false, state: 'default' })}
      />
    )
  },
}

export const Gallery: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => <GalleryCanvas />,
}
