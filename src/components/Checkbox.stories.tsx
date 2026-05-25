import type { Meta, StoryObj } from '@storybook/react-vite'
import { HugeiconsIcon } from '@hugeicons/react'
import { Download01Icon } from '@hugeicons/core-free-icons'
import { useArgs } from 'storybook/preview-api'

import {
  BlinkXCheckbox,
  type BlinkXCheckboxProps,
  type BlinkXCheckboxSize,
  type BlinkXCheckboxState,
  type BlinkXCheckboxTheme,
} from './BlinkXCheckbox'
import { BlinkXButton } from './BlinkXButton'
import { ComponentCodeBlock } from './ComponentCodeBlock'
import { ComponentResetButton } from './ComponentResetButton'
import './ButtonsStory.css'

const checkboxSizes: BlinkXCheckboxSize[] = ['sm', 'md', 'lg']
const checkboxStates: BlinkXCheckboxState[] = [
  'Default',
  'Focused',
  'Active',
  'Interminate',
  'Disable',
  'default-hover',
  'Active-Hover',
]
const checkboxThemes: BlinkXCheckboxTheme[] = ['light', 'dark']
const componentPropertyCategory = 'Component\u00A0property'
const checkboxMarkdownHref = '/blinkx-checkbox.md'
const checkboxMarkdownDownloadName = 'blinkx-checkbox.md'

type CheckboxStoryArgs = BlinkXCheckboxProps & {
  hasInteraction?: boolean
}

type CheckboxSizeSpec = {
  checkPath: string
  controlSize: string
  focusRingRadius: string
  focusRingSize: string
  iconSize: string
  markStrokeWidth: string
  minusPath: string
  radius: string
  strokeWidth: string
}

type ResolvedCheckboxSpec = CheckboxSizeSpec & {
  background: string
  borderColor: string
  borderWidth: string
  checkOpacity: string
  cursor: string
  focusRingOpacity: string
  focusRingStroke: string
  iconColor: string
  iconTransform: string
  minusOpacity: string
}

const themeTokens = {
  light: {
    bgBrandDefault: '#171EFD',
    bgBrandHoverPrimary: '#181ED1',
    bgDisabled: '#E7E7E7',
    focusRing: '#D1D2FF',
    hoverInteraction: '#F2F2F2',
    iconDisabled: '#CECECE',
    iconPrimary: '#414143',
    iconWhite: '#FFFFFF',
    strokeBrand: '#171EFD',
    surface: '#FFFFFF',
  },
  dark: {
    bgBrandDefault: '#585DFE',
    bgBrandHoverPrimary: '#4C50D2',
    bgDisabled: '#33373B',
    focusRing: '#3F44A6',
    hoverInteraction: '#33373B',
    iconDisabled: '#4D4F52',
    iconPrimary: '#999999',
    iconWhite: '#FFFFFF',
    strokeBrand: '#5C60F5',
    surface: '#1A1E23',
  },
} satisfies Record<BlinkXCheckboxTheme, Record<string, string>>

const themeTokenAliases = {
  light: {
    bgBrandDefault: 'Color/background/brand/bg-brand-default -> Colors/brand/Light/brand-500',
    bgBrandHoverPrimary: 'Color/background/brand/bg-brand-hover_prime-cta -> Colors/brand/Light/brand-600',
    bgDisabled: 'Color/background/brand/bg-brand-disable -> Colors/neutral/Light/neutral-100',
    focusRing: 'Color/background/brand/bg-brand-focus_ring -> Colors/brand/Light/brand-100',
    hoverInteraction: 'Color/Interation/hover/interaction-hover-1 -> Colors/neutral/Light/neutral-50',
    iconDisabled: 'Color/icons/icon-disabled -> Colors/neutral/Light/neutral-200',
    iconPrimary: 'Color/icons/icon-primary -> Colors/misc/Light/Icon-p',
    iconWhite: 'Color/Icon/icon-White -> Colors/generic/white',
    strokeBrand: 'Color/Border/stroke-brand -> Colors/primary/primary-500',
    surface: 'Color/Surface - Elevation/surface 1 -> Colors/surface/Light/1',
  },
  dark: {
    bgBrandDefault: 'Color/background/brand/bg-brand-default -> Colors/brand/Dark/brand-500',
    bgBrandHoverPrimary: 'Color/background/brand/bg-brand-hover_prime-cta -> Colors/brand/Dark/brand-400',
    bgDisabled: 'Color/background/brand/bg-brand-disable -> Colors/neutral/Dark/neutral-100',
    focusRing: 'Color/background/brand/bg-brand-focus_ring -> Colors/brand/Dark/brand-300',
    hoverInteraction: 'Color/Interation/hover/interaction-hover-1 -> Colors/neutral/Dark/neutral-100',
    iconDisabled: 'Color/icons/icon-disabled -> Colors/neutral/Dark/neutral-200',
    iconPrimary: 'Color/icons/icon-primary -> Colors/neutral/Dark/neutral-500',
    iconWhite: 'Color/Icon/icon-White -> Colors/generic/white',
    strokeBrand: 'Color/Border/stroke-brand -> Colors/primary/primary-450',
    surface: 'Color/Surface - Elevation/surface 1 -> Colors/surface/Dark/1',
  },
} satisfies Record<BlinkXCheckboxTheme, Record<keyof typeof themeTokens.light, string>>

const sizeSpecs = {
  sm: {
    controlSize: '16px',
    radius: '4px',
    strokeWidth: '1.25px',
    focusRingSize: '22px',
    focusRingRadius: '7px',
    iconSize: '10px',
    markStrokeWidth: '1.25px',
    checkPath: 'M1.5625 5.3125L4.0625 7.8125L8.75 2.8125',
    minusPath: 'M1.5 5H8.5',
  },
  md: {
    controlSize: '20px',
    radius: '6px',
    strokeWidth: '1.5px',
    focusRingSize: '0px',
    focusRingRadius: '0px',
    iconSize: '12px',
    markStrokeWidth: '1.5px',
    checkPath: 'M1.875 6.375L4.875 9.375L10.5 3.375',
    minusPath: 'M1.745 6H10.273',
  },
  lg: {
    controlSize: '24px',
    radius: '6px',
    strokeWidth: '1.5px',
    focusRingSize: '30px',
    focusRingRadius: '9px',
    iconSize: '16px',
    markStrokeWidth: '2px',
    checkPath: 'M2.5 8.5L6.5 12.5L14 4.5',
    minusPath: 'M2.5 8H13.5',
  },
} satisfies Record<BlinkXCheckboxSize, CheckboxSizeSpec>

const meta = {
  title: 'Components/Checkbox',
  component: BlinkXCheckbox,
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
      options: checkboxSizes,
      table: {
        category: componentPropertyCategory,
      },
    },
    state: {
      control: 'select',
      name: 'State',
      options: checkboxStates,
      table: {
        category: componentPropertyCategory,
      },
    },
    theme: {
      control: 'inline-radio',
      name: 'Theme',
      options: checkboxThemes,
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
} satisfies Meta<CheckboxStoryArgs>

export default meta

type Story = StoryObj<CheckboxStoryArgs>

const checkboxCode = `import { BlinkXCheckbox } from './BlinkXCheckbox'
import './BlinkXCheckbox.css'

export function Example() {
  return <BlinkXCheckbox size="sm" state="Default" theme="light" />
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

function downloadCheckboxMarkdown() {
  const link = document.createElement('a')
  link.href = checkboxMarkdownHref
  link.download = checkboxMarkdownDownloadName
  document.body.appendChild(link)
  link.click()
  link.remove()
}

function CheckboxHeader() {
  return (
    <header className="components-buttons-header">
      <div>
        <p className="components-buttons-kicker">Components / Checkbox</p>
        <h1>Checkbox</h1>
        <p className="components-buttons-subtext">Checkbox component properties from Figma.</p>
      </div>

      <div className="components-buttons-header-actions">
        <BlinkXButton
          aria-label="Download Checkbox markdown"
          className="components-buttons-download-button"
          label="Download .md File"
          leadingIconNode={<DownloadIcon />}
          onClick={downloadCheckboxMarkdown}
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

function getResolvedCheckboxSpec(args: BlinkXCheckboxProps): ResolvedCheckboxSpec {
  const size = args.size ?? 'sm'
  const state = args.state ?? 'Default'
  const theme = args.theme ?? 'light'
  const tokens = themeTokens[theme]
  const sizeSpec = sizeSpecs[size]
  const base = {
    ...sizeSpec,
    background: 'transparent',
    borderColor: tokens.iconPrimary,
    borderWidth: sizeSpec.strokeWidth,
    checkOpacity: '0',
    cursor: 'pointer',
    focusRingOpacity: '0',
    focusRingStroke: `3px solid ${tokens.focusRing}`,
    iconColor: tokens.iconWhite,
    iconTransform: 'scale(0.75)',
    minusOpacity: '0',
  }

  if (state === 'Focused') {
    return {
      ...base,
      borderColor: tokens.strokeBrand,
      focusRingOpacity: size === 'md' ? '0' : '1',
    }
  }

  if (state === 'default-hover') {
    return {
      ...base,
      background: tokens.hoverInteraction,
    }
  }

  if (state === 'Disable') {
    return {
      ...base,
      background: tokens.bgDisabled,
      borderColor: tokens.iconDisabled,
      cursor: 'not-allowed',
    }
  }

  if (state === 'Active' || state === 'Active-Hover' || state === 'Interminate') {
    return {
      ...base,
      background: state === 'Active-Hover' ? tokens.bgBrandHoverPrimary : tokens.bgBrandDefault,
      borderColor: 'transparent',
      borderWidth: '0px',
      checkOpacity: state === 'Interminate' ? '0' : '1',
      iconTransform: 'scale(1)',
      minusOpacity: state === 'Interminate' ? '1' : '0',
    }
  }

  return base
}

function getDetailedCode(args: BlinkXCheckboxProps) {
  const size = args.size ?? 'sm'
  const state = args.state ?? 'Default'
  const theme = args.theme ?? 'light'
  const specs = getResolvedCheckboxSpec(args)
  const tokens = themeTokens[theme]
  const tokenAliases = themeTokenAliases[theme]

  return `<BlinkXCheckbox
  size="${size}"
  state="${state}"
  theme="${theme}"
/>`
    + `

/* Resolved CSS for current selection */
.blinkx-checkbox.blinkx-checkbox--size-${size}.blinkx-checkbox--state-${state.toLowerCase()}.blinkx-checkbox--theme-${theme} {
  width: ${specs.controlSize}; /* ${pxToRem(specs.controlSize)} */
  height: ${specs.controlSize}; /* ${pxToRem(specs.controlSize)} */
  cursor: ${specs.cursor};
}

.blinkx-checkbox::before {
  width: ${specs.focusRingSize}; /* ${pxToRem(specs.focusRingSize)} */
  height: ${specs.focusRingSize}; /* ${pxToRem(specs.focusRingSize)} */
  border: ${specs.focusRingStroke};
  border-radius: ${specs.focusRingRadius};
  box-sizing: border-box;
  opacity: ${specs.focusRingOpacity};
}

.blinkx-checkbox__control {
  width: ${specs.controlSize}; /* ${pxToRem(specs.controlSize)} */
  height: ${specs.controlSize}; /* ${pxToRem(specs.controlSize)} */
  background: ${specs.background};
  border: ${specs.borderWidth} solid ${specs.borderColor};
  border-radius: ${specs.radius};
  color: ${specs.iconColor};
}

.blinkx-checkbox__icon {
  width: ${specs.iconSize}; /* ${pxToRem(specs.iconSize)} */
  height: ${specs.iconSize}; /* ${pxToRem(specs.iconSize)} */
  transform: translate(-50%, -50%) ${specs.iconTransform};
}

.blinkx-checkbox__icon--check {
  opacity: ${specs.checkOpacity};
}

.blinkx-checkbox__icon--minus {
  opacity: ${specs.minusOpacity};
}

/* SVG mark geometry from Figma */
<svg
  className="blinkx-checkbox__icon blinkx-checkbox__icon--check"
  viewBox="0 0 ${Number.parseFloat(specs.iconSize)} ${Number.parseFloat(specs.iconSize)}"
  fill="none"
>
  <path
    d="${specs.checkPath}"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="${specs.markStrokeWidth}"
  />
</svg>

<svg
  className="blinkx-checkbox__icon blinkx-checkbox__icon--minus"
  viewBox="0 0 ${Number.parseFloat(specs.iconSize)} ${Number.parseFloat(specs.iconSize)}"
  fill="none"
>
  <path
    d="${specs.minusPath}"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-width="${specs.markStrokeWidth}"
  />
</svg>

/*
Figma component set
- Node: 6124:46055
- Name: Checkbox
- Variants: Size=sm/md/lg, States=Default/Focused/Active/Interminate/Disable/default-hover/Active-Hover

Color tokens extracted from Figma variables (${theme})
- Color/icons/icon-primary: ${tokens.iconPrimary} -> ${tokenAliases.iconPrimary}
- Color/Interation/hover/interaction-hover-1: ${tokens.hoverInteraction} -> ${tokenAliases.hoverInteraction}
- Color/background/brand/bg-brand-disable: ${tokens.bgDisabled} -> ${tokenAliases.bgDisabled}
- Color/icons/icon-disabled: ${tokens.iconDisabled} -> ${tokenAliases.iconDisabled}
- Color/Border/stroke-brand: ${tokens.strokeBrand} -> ${tokenAliases.strokeBrand}
- Color/background/brand/bg-brand-focus_ring: ${tokens.focusRing} -> ${tokenAliases.focusRing}
- Color/background/brand/bg-brand-default: ${tokens.bgBrandDefault} -> ${tokenAliases.bgBrandDefault}
- Color/background/brand/bg-brand-hover_prime-cta: ${tokens.bgBrandHoverPrimary} -> ${tokenAliases.bgBrandHoverPrimary}
- Color/Icon/icon-White: ${tokens.iconWhite} -> ${tokenAliases.iconWhite}
- Color/Surface - Elevation/surface 1: ${tokens.surface} -> ${tokenAliases.surface}

Radius and stroke tokens
- ${size === 'sm' ? 'radius/radius-sm' : 'radius/radius-md'}: ${specs.radius}
- ${size === 'sm' ? 'stroke/stroke-md' : 'stroke/stroke-lg'}: ${specs.strokeWidth}

Sizing
- Checkbox control: ${pxAndRem(specs.controlSize)}
- Icon frame: ${pxAndRem(specs.iconSize)}
- Focus ring outer size: ${pxAndRem(specs.focusRingSize)}
- Mark stroke width: ${specs.markStrokeWidth}
*/`
}

type CheckboxPreviewCanvasProps = CheckboxStoryArgs & {
  canReset?: boolean
  onPreviewHoverEnd?: () => void
  onPreviewHoverStart?: () => void
  onReset?: () => void
}

function PreviewCanvas({
  canReset = false,
  hasInteraction: _hasInteraction,
  onPreviewHoverEnd,
  onPreviewHoverStart,
  onReset,
  ...args
}: CheckboxPreviewCanvasProps) {
  void _hasInteraction

  const theme = args.theme ?? 'light'

  return (
    <main className="components-buttons-page">
      <CheckboxHeader />

      <section className="button-live-section">
        <div className="button-live-preview" data-theme={theme}>
          <ComponentResetButton active={canReset} onReset={onReset} />
          <span
            className="component-preview-target"
            onMouseEnter={onPreviewHoverStart}
            onMouseLeave={onPreviewHoverEnd}
          >
            <BlinkXCheckbox {...args} />
          </span>
        </div>

        <ComponentCodeBlock code={getDetailedCode(args)} />
      </section>
    </main>
  )
}

function GalleryCanvas() {
  return (
    <main className="components-buttons-page">
      <CheckboxHeader />

      <div className="buttons-section-list">
        <section className="buttons-section">
          <div className="buttons-section__header">
            <h2>Size</h2>
            <span>{checkboxSizes.length}</span>
          </div>

          <div className="buttons-token-grid">
            {checkboxSizes.map((size) => (
              <article className="buttons-token" key={size}>
                <div className="buttons-token__preview">
                  <BlinkXCheckbox size={size} />
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
            <span>{checkboxStates.length}</span>
          </div>

          <div className="buttons-token-grid">
            {checkboxStates.map((state) => (
              <article className="buttons-token" key={state}>
                <div className="buttons-token__preview">
                  <BlinkXCheckbox state={state} />
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
            <span>{checkboxThemes.length}</span>
          </div>

          <div className="buttons-token-grid">
            {checkboxThemes.map((theme) => (
              <article className="buttons-token" key={theme}>
                <div className="buttons-token__preview button-live-preview" data-theme={theme}>
                  <BlinkXCheckbox state="Active" theme={theme} />
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
        code: checkboxCode,
      },
    },
  },
  render: (args) => {
    const [, updateArgs] = useArgs<CheckboxStoryArgs>()

    return (
      <PreviewCanvas
        {...args}
        canReset={Boolean(args.hasInteraction)}
        onPreviewHoverEnd={() => {
          if (args.state === 'default-hover') {
            updateArgs({ state: 'Default' })
          }

          if (args.state === 'Active-Hover') {
            updateArgs({ state: 'Active' })
          }
        }}
        onPreviewHoverStart={() => {
          if (args.state === 'Default') {
            updateArgs({ state: 'default-hover' })
          }

          if (args.state === 'Active') {
            updateArgs({ state: 'Active-Hover' })
          }
        }}
        onReset={() => updateArgs({ hasInteraction: false, state: 'Default' })}
        onChange={() => {
          if (args.state === 'Disable') return

          updateArgs({
            hasInteraction: true,
            state: args.state === 'Active' || args.state === 'Active-Hover' || args.state === 'Interminate'
              ? 'Default'
              : 'Active',
          })
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
