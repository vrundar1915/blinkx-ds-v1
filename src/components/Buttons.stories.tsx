import type { Meta, StoryObj } from '@storybook/react-vite'
import { HugeiconsIcon } from '@hugeicons/react'
import { Download01Icon } from '@hugeicons/core-free-icons'

import {
  BlinkXButton,
  type BlinkXButtonProps,
  type BlinkXButtonSize,
  type BlinkXButtonState,
  type BlinkXButtonTheme,
  type BlinkXButtonType,
} from './BlinkXButton'
import { ComponentCodeBlock } from './ComponentCodeBlock'
import './ButtonsStory.css'

const buttonTypes: BlinkXButtonType[] = ['Primary', 'Secondary', 'with-icon']
const buttonSizes: BlinkXButtonSize[] = ['sm', 'md', 'lg', 'xl', '2xl']
const buttonStates: BlinkXButtonState[] = ['Default', 'Hover', 'Focused', 'Disabled']
const buttonThemes: BlinkXButtonTheme[] = ['light', 'dark']
const componentPropertyCategory = 'Component\u00A0property'
const brandMarkdownHref = '/blinkx-brand-buttons.md'
const brandMarkdownDownloadName = 'blinkx-brand-buttons.md'

type ButtonStoryArgs = BlinkXButtonProps & {
  primaryLabel?: string
  secondaryLabel?: string
  withIconLabel?: string
}

type ButtonSizeSpec = {
  boltSize: string
  fontSize: string
  height: string
  lineHeight: string
  paddingLeft: string
  paddingRight: string
  plusSize: string
  width: string
}

const themeTokens = {
  light: {
    bgBrandDefault: '#171EFD',
    bgBrandHoverPrimary: '#181ED1',
    bgBrandHoverSecondary: '#E7E8FE',
    bgDisabled: '#E7E7E7',
    focusRing: '#D1D2FF',
    iconDisabled: '#CECECE',
    iconFillOnDisabledCta: '#9D9D9D',
    iconFillWhite: '#FFFFFF',
    strokeBrand: '#171EFD',
    strokeDisabled: '#CECECE',
    textBrand: '#171EFD',
    textDisabled: '#9D9D9D',
    textWhiteOnCta: '#FFFFFF',
  },
  dark: {
    bgBrandDefault: '#585DFE',
    bgBrandHoverPrimary: '#4C50D2',
    bgBrandHoverSecondary: '#202439',
    bgDisabled: '#33373B',
    focusRing: '#3F44A6',
    iconDisabled: '#4D4F52',
    iconFillOnDisabledCta: '#808081',
    iconFillWhite: '#FFFFFF',
    strokeBrand: '#585DFE',
    strokeDisabled: '#4D4F52',
    textBrand: '#585DFE',
    textDisabled: '#808081',
    textWhiteOnCta: '#FFFFFF',
  },
} satisfies Record<BlinkXButtonTheme, Record<string, string>>

const themeTokenAliases = {
  light: {
    bgBrandDefault: 'Colors/brand/Light/brand-500',
    bgBrandHoverPrimary: 'Colors/brand/Light/brand-600',
    bgBrandHoverSecondary: 'Colors/brand/Light/brand-50',
    bgDisabled: 'Colors/neutral/Light/neutral-100',
    focusRing: 'Colors/brand/Light/brand-100',
    iconDisabled: 'Colors/neutral/Light/neutral-200',
    iconFillOnDisabledCta: 'Colors/neutral/Light/neutral-400',
    iconFillWhite: 'Colors/base/white',
    strokeBrand: 'Colors/brand/Light/brand-500',
    strokeDisabled: 'Colors/neutral/Light/neutral-200',
    textBrand: 'Colors/brand/Light/brand-500',
    textDisabled: 'Colors/neutral/Light/neutral-400',
    textWhiteOnCta: 'Colors/base/white',
  },
  dark: {
    bgBrandDefault: 'Colors/brand/Dark/brand-500',
    bgBrandHoverPrimary: 'Colors/brand/Dark/brand-400',
    bgBrandHoverSecondary: 'Colors/brand/Dark/brand-50',
    bgDisabled: 'Colors/neutral/Dark/neutral-100',
    focusRing: 'Colors/brand/Dark/brand-300',
    iconDisabled: 'Colors/neutral/Dark/neutral-200',
    iconFillOnDisabledCta: 'Colors/neutral/Dark/neutral-400',
    iconFillWhite: 'Colors/base/white',
    strokeBrand: 'Colors/brand/Dark/brand-500',
    strokeDisabled: 'Colors/neutral/Dark/neutral-200',
    textBrand: 'Colors/brand/Dark/brand-500',
    textDisabled: 'Colors/neutral/Dark/neutral-400',
    textWhiteOnCta: 'Colors/base/white',
  },
} satisfies Record<BlinkXButtonTheme, Record<keyof typeof themeTokens.light, string>>

const sizeSpecs = {
  sm: {
    width: 'auto',
    height: '24px',
    paddingLeft: '12px',
    paddingRight: '8px',
    fontSize: '12px',
    lineHeight: '16px',
    boltSize: '16px',
    plusSize: '12px',
  },
  md: {
    width: 'auto',
    height: '32px',
    paddingLeft: '12px',
    paddingRight: '8px',
    fontSize: '12px',
    lineHeight: '16px',
    boltSize: '16px',
    plusSize: '16px',
  },
  lg: {
    width: 'auto',
    height: '36px',
    paddingLeft: '16px',
    paddingRight: '8px',
    fontSize: '14px',
    lineHeight: '20px',
    boltSize: '20px',
    plusSize: '16px',
  },
  xl: {
    width: 'auto',
    height: '40px',
    paddingLeft: '16px',
    paddingRight: '12px',
    fontSize: '16px',
    lineHeight: '24px',
    boltSize: '24px',
    plusSize: '20px',
  },
  '2xl': {
    width: 'auto',
    height: '48px',
    paddingLeft: '20px',
    paddingRight: '16px',
    fontSize: '18px',
    lineHeight: '24px',
    boltSize: '24px',
    plusSize: '20px',
  },
} satisfies Record<BlinkXButtonSize, ButtonSizeSpec>

const meta = {
  title: 'Components/Buttons/Brand',
  component: BlinkXButton,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    type: {
      control: 'select',
      options: buttonTypes,
      table: {
        category: componentPropertyCategory,
      },
    },
    primaryLabel: {
      control: 'text',
      if: { arg: 'type', eq: 'Primary' },
      name: 'Text on Primary CTA',
      table: {
        category: componentPropertyCategory,
      },
    },
    secondaryLabel: {
      control: 'text',
      if: { arg: 'type', eq: 'Secondary' },
      name: 'Text on Secondary CTA',
      table: {
        category: componentPropertyCategory,
      },
    },
    withIconLabel: {
      control: 'text',
      if: { arg: 'type', eq: 'with-icon' },
      name: 'Text on with-icon CTA',
      table: {
        category: componentPropertyCategory,
      },
    },
    trailingIcon: {
      control: 'boolean',
      if: { arg: 'type', eq: 'with-icon' },
      name: 'Trailing icon',
      table: {
        category: componentPropertyCategory,
      },
    },
    leadingIcon: {
      control: 'boolean',
      if: { arg: 'type', eq: 'with-icon' },
      name: 'Leading icon',
      table: {
        category: componentPropertyCategory,
      },
    },
    size: {
      control: 'inline-radio',
      options: buttonSizes,
      table: {
        category: componentPropertyCategory,
      },
    },
    state: {
      control: 'select',
      options: buttonStates,
      table: {
        category: componentPropertyCategory,
      },
    },
    theme: {
      control: 'inline-radio',
      options: buttonThemes,
      table: {
        category: componentPropertyCategory,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
    label: {
      table: {
        disable: true,
      },
    },
    children: {
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
    htmlType: {
      table: {
        disable: true,
      },
    },
    variant: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<ButtonStoryArgs>

export default meta

type Story = StoryObj<ButtonStoryArgs>
type ResolvedButtonSpec = ButtonSizeSpec & {
  background: string
  border: string
  borderRadius: string
  color: string
  cursor: string
  focusRing: string
  fontFamily: string
  fontWeight: string
  gap: string
  iconColor: string
  iconSize: string
  outline: string
  paddingBottom: string
  paddingTop: string
}

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

function downloadBrandMarkdown() {
  const link = document.createElement('a')
  link.href = brandMarkdownHref
  link.download = brandMarkdownDownloadName
  document.body.appendChild(link)
  link.click()
  link.remove()
}

function BrandHeader() {
  return (
    <header className="components-buttons-header">
      <div>
        <p className="components-buttons-kicker">Components / Buttons / Brand</p>
        <h1>Brand</h1>
        <p className="components-buttons-subtext">Brand button component properties from Figma.</p>
      </div>

      <div className="components-buttons-header-actions">
        <BlinkXButton
          aria-label="Download Brand button markdown"
          className="components-buttons-download-button"
          label="Download .md File"
          leadingIconNode={<DownloadIcon />}
          onClick={downloadBrandMarkdown}
          size="lg"
          type="Secondary"
        />
      </div>
    </header>
  )
}

const buttonCode = `import { BlinkXButton } from './BlinkXButton'
import './BlinkXButton.css'

export function Example() {
  return (
    <BlinkXButton
      label="Button"
      size="sm"
      state="Default"
      theme="light"
      type="Primary"
    />
  )
}`

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

function getButtonLabel(args: ButtonStoryArgs) {
  const type = args.type ?? 'Primary'

  if (type === 'Secondary') return args.label ?? args.secondaryLabel ?? 'Button'
  if (type === 'with-icon') return args.label ?? args.withIconLabel ?? 'Button'

  return args.label ?? args.primaryLabel ?? 'Button'
}

function getButtonProps(args: ButtonStoryArgs): BlinkXButtonProps {
  const { primaryLabel, secondaryLabel, withIconLabel, ...buttonProps } = args

  void primaryLabel
  void secondaryLabel
  void withIconLabel

  return {
    ...buttonProps,
    label: getButtonLabel(args),
  }
}

function getResolvedButtonSpec(args: BlinkXButtonProps): ResolvedButtonSpec {
  const theme = args.theme ?? 'light'
  const type = args.type ?? 'Primary'
  const size = args.size ?? 'sm'
  const state = args.state ?? 'Default'
  const tokens = themeTokens[theme]
  const sizeSpec = sizeSpecs[size]
  const isDisabled = state === 'Disabled'
  const isHover = state === 'Hover'
  const isFocused = state === 'Focused'
  const isPrimary = type === 'Primary'
  const isWithIcon = type === 'with-icon'
  const leadingIcon = args.leadingIcon ?? true
  const trailingIcon = args.trailingIcon ?? true
  const withIconBasePadding = '10px'
  const oneSidedIconPadding = '12px'
  const withIconPaddingLeft =
    isWithIcon && !leadingIcon && trailingIcon ? oneSidedIconPadding : withIconBasePadding
  const withIconPaddingRight =
    isWithIcon && leadingIcon && !trailingIcon ? oneSidedIconPadding : withIconBasePadding

  if (isPrimary) {
    return {
      ...sizeSpec,
      background: isDisabled
        ? tokens.bgDisabled
        : isHover
          ? tokens.bgBrandHoverPrimary
          : tokens.bgBrandDefault,
      border: '1px solid transparent',
      borderRadius: '9999px',
      color: isDisabled ? tokens.textDisabled : tokens.textWhiteOnCta,
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      focusRing: tokens.focusRing,
      fontFamily: 'Barlow',
      fontWeight: '600 / SemiBold',
      gap: '8px',
      iconColor: isDisabled ? tokens.iconFillOnDisabledCta : tokens.iconFillWhite,
      iconSize: sizeSpec.boltSize,
      outline: isFocused ? `3px solid ${tokens.focusRing}` : 'none',
      paddingBottom: '4px',
      paddingTop: '4px',
    }
  }

  return {
    ...sizeSpec,
    background: isHover ? tokens.bgBrandHoverSecondary : 'transparent',
    border: `1px solid ${isDisabled ? tokens.strokeDisabled : tokens.strokeBrand}`,
    borderRadius: '9999px',
    color: isDisabled ? tokens.textDisabled : tokens.textBrand,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    focusRing: tokens.focusRing,
    fontFamily: 'Barlow',
    fontWeight: '600 / SemiBold',
    gap: isWithIcon ? '4px' : '0px',
    iconColor: isDisabled ? tokens.iconDisabled : tokens.strokeBrand,
    iconSize: sizeSpec.plusSize,
    outline: isFocused ? `3px solid ${tokens.focusRing}` : 'none',
    paddingBottom: '4px',
    paddingLeft: isWithIcon ? withIconPaddingLeft : sizeSpec.paddingLeft,
    paddingRight: isWithIcon ? withIconPaddingRight : sizeSpec.paddingLeft,
    paddingTop: '4px',
  }
}

function getDetailedCode(args: ButtonStoryArgs) {
  const buttonProps = getButtonProps(args)
  const label = buttonProps.label ?? 'Button'
  const size = buttonProps.size ?? 'sm'
  const state = buttonProps.state ?? 'Default'
  const theme = buttonProps.theme ?? 'light'
  const type = buttonProps.type ?? 'Primary'
  const specs = getResolvedButtonSpec(buttonProps)
  const tokens = themeTokens[theme]
  const tokenAliases = themeTokenAliases[theme]
  const componentClass = `blinkx-button blinkx-button--type-${type.toLowerCase()} blinkx-button--size-${size} blinkx-button--state-${state.toLowerCase()} blinkx-button--theme-${theme}`
  const [fontWeightValue, fontWeightName] = specs.fontWeight.split(' / ')
  const leadingIcon = buttonProps.leadingIcon ?? true
  const trailingIcon = buttonProps.trailingIcon ?? true
  const iconProps =
    type === 'with-icon'
      ? `
  trailingIcon={${trailingIcon}}
  leadingIcon={${leadingIcon}}`
      : ''
  const primaryBoltSvg =
    type === 'Primary'
      ? `

/* Bolt icon SVG used in Primary CTA */
<svg aria-hidden="true" className="blinkx-button__bolt" fill="currentColor" viewBox="0 0 24 24">
  <path d="M13.1 2.8 5.6 13h5.2l-1.4 8.2L18.6 9h-5.4l-.1-6.2Z" />
</svg>`
      : ''

  return `<BlinkXButton
  label="${label}"
  size="${size}"
  state="${state}"
  theme="${theme}"
  type="${type}"${iconProps}
/>${primaryBoltSvg}`
    + `

/* Resolved CSS for current selection */
.${componentClass.split(' ').join('.')} {
  width: ${specs.width}; /* hug content */
  height: ${specs.height}; /* ${pxToRem(specs.height)} */
  padding: ${specs.paddingTop} ${specs.paddingRight} ${specs.paddingBottom} ${specs.paddingLeft};
  /* padding rem: ${pxToRem(specs.paddingTop)} ${pxToRem(specs.paddingRight)} ${pxToRem(specs.paddingBottom)} ${pxToRem(specs.paddingLeft)} */
  gap: ${specs.gap};

  background: ${specs.background};
  color: ${specs.color};
  border: ${specs.border};
  border-radius: ${specs.borderRadius};
  outline: ${specs.outline};

  font-family: ${specs.fontFamily}, sans-serif;
  font-size: ${specs.fontSize}; /* ${pxToRem(specs.fontSize)} */
  font-weight: ${fontWeightValue}; /* ${fontWeightName} */
  line-height: ${specs.lineHeight}; /* ${pxToRem(specs.lineHeight)} */
  letter-spacing: 0;
  text-align: center;
  white-space: nowrap;

  cursor: ${specs.cursor};
}

.blinkx-button__label {
  overflow: visible;
  text-overflow: clip;
  text-align: center;
}

/* Icon */
.blinkx-button__${type === 'Primary' ? 'bolt' : 'plus'} {
  width: ${specs.iconSize}; /* ${pxToRem(specs.iconSize)} */
  height: ${specs.iconSize}; /* ${pxToRem(specs.iconSize)} */
  color: ${specs.iconColor};
}

/*
Design spec from Figma variables

Theme
- ${theme}

Color tokens extracted from Figma variables
- Color/background/brand/bg-brand-default: ${tokens.bgBrandDefault} -> ${tokenAliases.bgBrandDefault}
- Color/background/brand/bg-brand-hover_prime-cta: ${tokens.bgBrandHoverPrimary} -> ${tokenAliases.bgBrandHoverPrimary}
- Color/background/brand/bg-brand-hover_on-sec-cta: ${tokens.bgBrandHoverSecondary} -> ${tokenAliases.bgBrandHoverSecondary}
- Color/background/brand/bg-brand-disable: ${tokens.bgDisabled} -> ${tokenAliases.bgDisabled}
- Color/background/brand/bg-brand-focus_ring: ${tokens.focusRing} -> ${tokenAliases.focusRing}
- Color/stroke/stroke-brand: ${tokens.strokeBrand} -> ${tokenAliases.strokeBrand}
- Color/stroke/stroke-disabled: ${tokens.strokeDisabled} -> ${tokenAliases.strokeDisabled}
- Color/text/text-brand: ${tokens.textBrand} -> ${tokenAliases.textBrand}
- Color/text/text-white_on-cta: ${tokens.textWhiteOnCta} -> ${tokenAliases.textWhiteOnCta}
- Color/text/text_on-disabled-cta: ${tokens.textDisabled} -> ${tokenAliases.textDisabled}
- Color/icons/icon-fill-white: ${tokens.iconFillWhite} -> ${tokenAliases.iconFillWhite}
- Color/icons/icon-fill_on-disabled-cta: ${tokens.iconFillOnDisabledCta} -> ${tokenAliases.iconFillOnDisabledCta}
- Color/icons/icon-disabled: ${tokens.iconDisabled} -> ${tokenAliases.iconDisabled}

Typography
- Family/font-family: ${specs.fontFamily}
- Font-weight/semiBold: ${fontWeightValue}
- Font-size: ${pxAndRem(specs.fontSize)}
- Line-height: ${pxAndRem(specs.lineHeight)}
- Letter-spacing: 0

Spacing and layout
- Width: hug content (${specs.width})
- Min-width: none
- Height: ${pxAndRem(specs.height)}
- Padding top: ${pxAndRem(specs.paddingTop)}
- Padding right: ${pxAndRem(specs.paddingRight)}
- Padding bottom: ${pxAndRem(specs.paddingBottom)}
- Padding left: ${pxAndRem(specs.paddingLeft)}
- Gap: ${pxAndRem(specs.gap)}
- Icon size: ${pxAndRem(specs.iconSize)}
- Text truncation: none
- Text alignment: center
${type === 'with-icon' ? `- Leading icon: ${leadingIcon ? 'on' : 'off'}
- Trailing icon: ${trailingIcon ? 'on' : 'off'}
- One-sided icon padding adjustment: ${leadingIcon !== trailingIcon ? '+2px' : 'none'}` : ''}

Radius and state
- Border radius: ${specs.borderRadius}
- Focus ring: ${specs.focusRing}
- Cursor: ${specs.cursor}
*/`
}

function PreviewCanvas(args: ButtonStoryArgs) {
  const buttonProps = getButtonProps(args)
  const theme = buttonProps.theme ?? 'light'

  return (
    <main className="components-buttons-page">
      <BrandHeader />

      <section className="button-live-section">
        <div className="button-live-preview" data-theme={theme}>
          <BlinkXButton {...buttonProps} />
        </div>

        <ComponentCodeBlock code={getDetailedCode(args)} />
      </section>
    </main>
  )
}

function GalleryCanvas() {
  return (
    <main className="components-buttons-page">
      <BrandHeader />

      <div className="buttons-section-list">
        <section className="buttons-section">
          <div className="buttons-section__header">
            <h2>Type</h2>
            <span>{buttonTypes.length}</span>
          </div>

          <div className="buttons-token-grid">
            {buttonTypes.map((type) => (
              <article className="buttons-token" key={type}>
                <div className="buttons-token__preview">
                  <BlinkXButton label="Button" type={type} />
                </div>
                <div className="buttons-token__body">
                  <span className="buttons-token__name">{type}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="buttons-section">
          <div className="buttons-section__header">
            <h2>Size</h2>
            <span>{buttonSizes.length}</span>
          </div>

          <div className="buttons-token-grid">
            {buttonSizes.map((size) => (
              <article className="buttons-token" key={size}>
                <div className="buttons-token__preview">
                  <BlinkXButton label="Button" size={size} />
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
            <span>{buttonStates.length}</span>
          </div>

          <div className="buttons-token-grid">
            {buttonStates.map((state) => (
              <article className="buttons-token" key={state}>
                <div className="buttons-token__preview">
                  <BlinkXButton label="Button" state={state} />
                </div>
                <div className="buttons-token__body">
                  <span className="buttons-token__name">{state}</span>
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
    type: 'Primary',
    primaryLabel: 'Button',
    secondaryLabel: 'Button',
    withIconLabel: 'Button',
    trailingIcon: true,
    leadingIcon: true,
    size: 'sm',
    state: 'Default',
    theme: 'light',
  },
  parameters: {
    docs: {
      source: {
        code: buttonCode,
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
