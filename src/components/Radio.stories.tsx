import type { Meta, StoryObj } from '@storybook/react-vite'
import { HugeiconsIcon } from '@hugeicons/react'
import { Download01Icon } from '@hugeicons/core-free-icons'
import { useArgs } from 'storybook/preview-api'

import {
  BlinkXRadio,
  type BlinkXRadioProps,
  type BlinkXRadioSize,
  type BlinkXRadioState,
  type BlinkXRadioTheme,
} from './BlinkXRadio'
import { BlinkXButton } from './BlinkXButton'
import { ComponentCodeBlock } from './ComponentCodeBlock'
import { ComponentResetButton } from './ComponentResetButton'
import './ButtonsStory.css'

const radioSizes: BlinkXRadioSize[] = ['sm', 'md', 'lg']
const radioStates: BlinkXRadioState[] = ['Active', 'Default', 'Disable', 'Focused']
const radioThemes: BlinkXRadioTheme[] = ['light', 'dark']
const componentPropertyCategory = 'Component\u00A0property'
const radioMarkdownHref = '/blinkx-radio.md'
const radioMarkdownDownloadName = 'blinkx-radio.md'

type RadioStoryArgs = BlinkXRadioProps & {
  hasInteraction?: boolean
}

type RadioSizeSpec = {
  controlSize: string
  dotSize: string
  focusedStrokeWidth: string
  focusRingSize: string
  strokeWidth: string
}

const themeTokens = {
  light: {
    brandDefault: '#171EFD',
    focusRing: '#D1D2FF',
    iconPrimary: '#414143',
    bgDisabled: '#E7E7E7',
    iconDisabled: '#CECECE',
    surface: '#FFFFFF',
  },
  dark: {
    brandDefault: '#585DFE',
    focusRing: '#3F44A6',
    iconPrimary: '#999999',
    bgDisabled: '#33373B',
    iconDisabled: '#4D4F52',
    surface: '#1A1E23',
  },
} satisfies Record<BlinkXRadioTheme, Record<string, string>>

const themeTokenAliases = {
  light: {
    brandDefault: 'Color/background/brand/bg-brand-default -> Colors/brand/Light/brand-500',
    focusRing: 'Color/background/brand/bg-brand-focus_ring -> Colors/brand/Light/brand-100',
    iconPrimary: 'Color/icons/icon-primary -> Colors/misc/Light/Icon-p',
    bgDisabled: 'Color/background/brand/bg-brand-disable -> Colors/neutral/Light/neutral-100',
    iconDisabled: 'Color/icons/icon-disabled -> Colors/neutral/Light/neutral-200',
    surface: 'Color/Surface - Elevation/surface 1 -> Colors/surface/Light/1',
  },
  dark: {
    brandDefault: 'Color/background/brand/bg-brand-default -> Colors/brand/Dark/brand-500',
    focusRing: 'Color/background/brand/bg-brand-focus_ring -> Colors/brand/Dark/brand-300',
    iconPrimary: 'Color/icons/icon-primary -> Colors/neutral/Dark/neutral-500',
    bgDisabled: 'Color/background/brand/bg-brand-disable -> Colors/neutral/Dark/neutral-100',
    iconDisabled: 'Color/icons/icon-disabled -> Colors/neutral/Dark/neutral-200',
    surface: 'Color/Surface - Elevation/surface 1 -> Colors/surface/Dark/1',
  },
} satisfies Record<BlinkXRadioTheme, Record<keyof typeof themeTokens.light, string>>

const sizeSpecs = {
  sm: {
    controlSize: '16px',
    dotSize: '10px',
    strokeWidth: '1.25px',
    focusedStrokeWidth: '2px',
    focusRingSize: '22px',
  },
  md: {
    controlSize: '20px',
    dotSize: '12px',
    strokeWidth: '1.5px',
    focusedStrokeWidth: '2px',
    focusRingSize: '26px',
  },
  lg: {
    controlSize: '24px',
    dotSize: '16px',
    strokeWidth: '1.5px',
    focusedStrokeWidth: '2px',
    focusRingSize: '30px',
  },
} satisfies Record<BlinkXRadioSize, RadioSizeSpec>

const meta = {
  title: 'Components/Radio',
  component: BlinkXRadio,
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
      options: radioSizes,
      table: {
        category: componentPropertyCategory,
      },
    },
    state: {
      control: 'select',
      name: 'State',
      options: radioStates,
      table: {
        category: componentPropertyCategory,
      },
    },
    theme: {
      control: 'inline-radio',
      name: 'Theme',
      options: radioThemes,
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
} satisfies Meta<RadioStoryArgs>

export default meta

type Story = StoryObj<RadioStoryArgs>

type ResolvedRadioSpec = RadioSizeSpec & {
  background: string
  borderColor: string
  cursor: string
  dotOpacity: string
  dotScale: string
  dotColor: string
  focusRingBorder: string
  focusRingOpacity: string
  strokeWidth: string
}

const radioCode = `import { BlinkXRadio } from './BlinkXRadio'
import './BlinkXRadio.css'

export function Example() {
  return <BlinkXRadio size="sm" state="Default" theme="light" />
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

function downloadRadioMarkdown() {
  const link = document.createElement('a')
  link.href = radioMarkdownHref
  link.download = radioMarkdownDownloadName
  document.body.appendChild(link)
  link.click()
  link.remove()
}

function RadioHeader() {
  return (
    <header className="components-buttons-header">
      <div>
        <p className="components-buttons-kicker">Components / Radio</p>
        <h1>Radio</h1>
        <p className="components-buttons-subtext">Radio component properties from Figma.</p>
      </div>

      <div className="components-buttons-header-actions">
        <BlinkXButton
          aria-label="Download Radio markdown"
          className="components-buttons-download-button"
          label="Download .md File"
          leadingIconNode={<DownloadIcon />}
          onClick={downloadRadioMarkdown}
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

function getResolvedRadioSpec(args: BlinkXRadioProps): ResolvedRadioSpec {
  const size = args.size ?? 'sm'
  const state = args.state ?? 'Default'
  const theme = args.theme ?? 'light'
  const tokens = themeTokens[theme]
  const sizeSpec = sizeSpecs[size]

  if (state === 'Active') {
    return {
      ...sizeSpec,
      background: 'transparent',
      borderColor: tokens.brandDefault,
      cursor: 'pointer',
      dotOpacity: '1',
      dotScale: '1',
      dotColor: tokens.brandDefault,
      focusRingBorder: `3px solid ${tokens.focusRing}`,
      focusRingOpacity: '0',
      strokeWidth: sizeSpec.strokeWidth,
    }
  }

  if (state === 'Disable') {
    return {
      ...sizeSpec,
      background: tokens.bgDisabled,
      borderColor: tokens.iconDisabled,
      cursor: 'not-allowed',
      dotOpacity: '0',
      dotScale: '0.45',
      dotColor: 'transparent',
      focusRingBorder: `3px solid ${tokens.focusRing}`,
      focusRingOpacity: '0',
      strokeWidth: sizeSpec.strokeWidth,
    }
  }

  if (state === 'Focused') {
    return {
      ...sizeSpec,
      background: 'transparent',
      borderColor: tokens.brandDefault,
      cursor: 'pointer',
      dotOpacity: '0',
      dotScale: '0.45',
      dotColor: 'transparent',
      focusRingBorder: `3px solid ${tokens.focusRing}`,
      focusRingOpacity: '1',
      strokeWidth: sizeSpec.focusedStrokeWidth,
    }
  }

  return {
    ...sizeSpec,
    background: 'transparent',
    borderColor: tokens.iconPrimary,
    cursor: 'pointer',
    dotOpacity: '0',
    dotScale: '0.45',
    dotColor: 'transparent',
    focusRingBorder: `3px solid ${tokens.focusRing}`,
    focusRingOpacity: '0',
    strokeWidth: sizeSpec.strokeWidth,
  }
}

function getDetailedCode(args: BlinkXRadioProps) {
  const size = args.size ?? 'sm'
  const state = args.state ?? 'Default'
  const theme = args.theme ?? 'light'
  const specs = getResolvedRadioSpec(args)
  const tokens = themeTokens[theme]
  const tokenAliases = themeTokenAliases[theme]

  return `<BlinkXRadio
  size="${size}"
  state="${state}"
  theme="${theme}"
/>`
    + `

/* Resolved CSS for current selection */
.blinkx-radio.blinkx-radio--size-${size}.blinkx-radio--state-${state.toLowerCase()}.blinkx-radio--theme-${theme} {
  width: ${specs.controlSize}; /* ${pxToRem(specs.controlSize)} */
  height: ${specs.controlSize}; /* ${pxToRem(specs.controlSize)} */
  cursor: ${specs.cursor};
}

.blinkx-radio::before {
  width: ${specs.focusRingSize}; /* ${pxToRem(specs.focusRingSize)} */
  height: ${specs.focusRingSize}; /* ${pxToRem(specs.focusRingSize)} */
  border: ${specs.focusRingBorder};
  border-radius: 9999px;
  box-sizing: border-box;
  opacity: ${specs.focusRingOpacity};
}

.blinkx-radio__control {
  width: ${specs.controlSize}; /* ${pxToRem(specs.controlSize)} */
  height: ${specs.controlSize}; /* ${pxToRem(specs.controlSize)} */
  background: ${specs.background};
  border: ${specs.strokeWidth} solid ${specs.borderColor};
  border-radius: 9999px;
}

.blinkx-radio__dot {
  width: ${specs.dotSize}; /* ${pxToRem(specs.dotSize)} */
  height: ${specs.dotSize}; /* ${pxToRem(specs.dotSize)} */
  background: ${specs.dotColor};
  border-radius: 9999px;
  opacity: ${specs.dotOpacity};
  transform: scale(${specs.dotScale});
  transition: opacity 160ms ease, transform 180ms cubic-bezier(0.2, 0, 0, 1);
}

/*
Figma component set
- Node: 32:387
- Name: Radio
- Variants: Size=sm/md/lg, State=Active/Default/Disable/Focused

Color tokens extracted from Figma variables (${theme})
- Color/background/brand/bg-brand-default: ${tokens.brandDefault} -> ${tokenAliases.brandDefault}
- Color/stroke/stroke-brand: ${tokens.brandDefault} -> ${tokenAliases.brandDefault}
- Color/background/brand/bg-brand-focus_ring: ${tokens.focusRing} -> ${tokenAliases.focusRing}
- Color/icons/icon-primary: ${tokens.iconPrimary} -> ${tokenAliases.iconPrimary}
- Color/background/brand/bg-brand-disable: ${tokens.bgDisabled} -> ${tokenAliases.bgDisabled}
- Color/icons/icon-disabled: ${tokens.iconDisabled} -> ${tokenAliases.iconDisabled}
- Color/Surface - Elevation/surface 1: ${tokens.surface} -> ${tokenAliases.surface}

Radius and stroke tokens
- radius/radius-round: 9999px
- stroke/stroke-md: 1.25px
- stroke/stroke-lg: 1.5px
- focused visual stroke override: 2px

Sizing
- Radio control: ${pxAndRem(specs.controlSize)}
- Active dot: ${pxAndRem(specs.dotSize)}
- Focus ring outer size: ${pxAndRem(specs.focusRingSize)}
- Stroke width: ${specs.strokeWidth}
*/`
}

type RadioPreviewCanvasProps = RadioStoryArgs & {
  canReset?: boolean
  onReset?: () => void
}

function PreviewCanvas({
  canReset = false,
  hasInteraction: _hasInteraction,
  onReset,
  ...args
}: RadioPreviewCanvasProps) {
  void _hasInteraction

  const theme = args.theme ?? 'light'

  return (
    <main className="components-buttons-page">
      <RadioHeader />

      <section className="button-live-section">
        <div className="button-live-preview" data-theme={theme}>
          <ComponentResetButton active={canReset} onReset={onReset} />
          <BlinkXRadio {...args} />
        </div>

        <ComponentCodeBlock code={getDetailedCode(args)} />
      </section>
    </main>
  )
}

function GalleryCanvas() {
  return (
    <main className="components-buttons-page">
      <RadioHeader />

      <div className="buttons-section-list">
        <section className="buttons-section">
          <div className="buttons-section__header">
            <h2>Size</h2>
            <span>{radioSizes.length}</span>
          </div>

          <div className="buttons-token-grid">
            {radioSizes.map((size) => (
              <article className="buttons-token" key={size}>
                <div className="buttons-token__preview">
                  <BlinkXRadio size={size} />
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
            <h2>State</h2>
            <span>{radioStates.length}</span>
          </div>

          <div className="buttons-token-grid">
            {radioStates.map((state) => (
              <article className="buttons-token" key={state}>
                <div className="buttons-token__preview">
                  <BlinkXRadio state={state} />
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
            <span>{radioThemes.length}</span>
          </div>

          <div className="buttons-token-grid">
            {radioThemes.map((theme) => (
              <article className="buttons-token" key={theme}>
                <div className="buttons-token__preview button-live-preview" data-theme={theme}>
                  <BlinkXRadio state="Active" theme={theme} />
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
    state: 'Default',
    theme: 'light',
  },
  parameters: {
    docs: {
      source: {
        code: radioCode,
      },
    },
  },
  render: (args) => {
    const [, updateArgs] = useArgs<RadioStoryArgs>()

    return (
      <PreviewCanvas
        {...args}
        canReset={Boolean(args.hasInteraction)}
        onReset={() => updateArgs({ hasInteraction: false, state: 'Default' })}
        onChange={() => {
          if (args.state === 'Disable') return

          updateArgs({ hasInteraction: true, state: 'Active' })
        }}
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
