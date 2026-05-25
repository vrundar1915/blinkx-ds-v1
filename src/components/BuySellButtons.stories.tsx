import type { Meta, StoryObj } from '@storybook/react-vite'
import { HugeiconsIcon } from '@hugeicons/react'
import { Download01Icon } from '@hugeicons/core-free-icons'
import { useArgs, useEffect } from 'storybook/preview-api'

import {
  BlinkXBuySellButton,
  type BlinkXBuySellButtonProps,
  type BlinkXBuySellButtonSide,
  type BlinkXBuySellButtonSize,
  type BlinkXBuySellButtonState,
  type BlinkXBuySellButtonStyle,
  type BlinkXBuySellButtonTheme,
  type BlinkXBuySellButtonType,
} from './BlinkXBuySellButton'
import { BlinkXButton } from './BlinkXButton'
import { ComponentCodeBlock } from './ComponentCodeBlock'
import './ButtonsStory.css'

const buttonTypes: BlinkXBuySellButtonType[] = ['Primary', 'Secondary']
const buttonStyles: BlinkXBuySellButtonStyle[] = ['Default', 'Symbol']
const buttonSides: BlinkXBuySellButtonSide[] = ['Buy', 'Sell']
const buttonSizes: BlinkXBuySellButtonSize[] = ['sm', 'md', 'lg', 'xl', '2xl']
const buttonStates: BlinkXBuySellButtonState[] = ['Default', 'Focused', 'Hover', 'Disabled']
const buttonThemes: BlinkXBuySellButtonTheme[] = ['light', 'dark']
const componentPropertyCategory = 'Component\u00A0property'
const buySellMarkdownHref = '/blinkx-buy-sell-buttons.md'
const buySellMarkdownDownloadName = 'blinkx-buy-sell-buttons.md'

type ActiveTextControl =
  | 'buy-primary'
  | 'buy-secondary'
  | 'sell-primary'
  | 'sell-secondary'
  | 'symbol-buy'
  | 'symbol-sell'

type BuySellStoryArgs = BlinkXBuySellButtonProps & {
  activeTextControl?: ActiveTextControl
}

type BuySellSizeSpec = {
  defaultSampleWidth: string
  fontSize: string
  height: string
  lineHeight: string
  paddingDefaultX: string
  paddingSymbolX: string
  symbolSampleWidth: string
}

const themeTokens = {
  light: {
    bgBuyDefault: '#2BB02B',
    bgBuyHoverPrimary: '#289329',
    bgBuyHoverSecondary: '#E9F7E9',
    bgSellDefault: '#DD2006',
    bgSellHoverPrimary: '#B6200C',
    bgSellHoverSecondary: '#FBE8E6',
    bgDisabled: '#E7E7E7',
    focusBuy: '#D5EFD5',
    focusSell: '#F8D2CD',
    strokeBuy: '#2BB02B',
    strokeDisabled: '#CECECE',
    strokeSell: '#DD2006',
    textBuy: '#2BB02B',
    textDisabled: '#9D9D9D',
    textOnPrimary: '#FFFFFF',
    textSell: '#DD2006',
  },
  dark: {
    bgBuyDefault: '#48A848',
    bgBuyHoverPrimary: '#367139',
    bgBuyHoverSecondary: '#1F2C27',
    bgSellDefault: '#CD4937',
    bgSellHoverPrimary: '#85382F',
    bgSellHoverSecondary: '#2C2225',
    bgDisabled: '#33373B',
    focusBuy: '#2C5532',
    focusSell: '#622F2B',
    strokeBuy: '#48A848',
    strokeDisabled: '#4D4F52',
    strokeSell: '#CD4937',
    textBuy: '#48A848',
    textDisabled: '#808081',
    textOnPrimary: '#FFFFFF',
    textSell: '#CD4937',
  },
} satisfies Record<BlinkXBuySellButtonTheme, Record<string, string>>

const themeTokenAliases = {
  light: {
    bgBuyDefault: 'Colors/green/Light/green-500',
    bgBuyHoverPrimary: 'Colors/green/Light/green-600',
    bgBuyHoverSecondary: 'Colors/green/Light/green-50',
    bgSellDefault: 'Colors/red/Light/red-500',
    bgSellHoverPrimary: 'Colors/red/Light/red-600',
    bgSellHoverSecondary: 'Colors/red/Light/red-50',
    bgDisabled: 'Colors/neutral/Light/neutral-100',
    focusBuy: 'Colors/green/Light/green-100',
    focusSell: 'Colors/red/Light/red-100',
    strokeBuy: 'Colors/green/Light/green-500',
    strokeDisabled: 'Colors/neutral/Light/neutral-200',
    strokeSell: 'Colors/red/Light/red-500',
    textBuy: 'Colors/green/Light/green-500',
    textDisabled: 'Colors/neutral/Light/neutral-400',
    textOnPrimary: 'Colors/base/white',
    textSell: 'Colors/red/Light/red-500',
  },
  dark: {
    bgBuyDefault: 'Colors/green/Dark/green-500',
    bgBuyHoverPrimary: 'Colors/green/Dark/green-300',
    bgBuyHoverSecondary: 'Colors/green/Dark/green-50',
    bgSellDefault: 'Colors/red/Dark/red-500',
    bgSellHoverPrimary: 'Colors/red/Dark/red-300',
    bgSellHoverSecondary: 'Colors/red/Dark/red-50',
    bgDisabled: 'Colors/neutral/Dark/neutral-100',
    focusBuy: 'Colors/green/Dark/green-200',
    focusSell: 'Colors/red/Dark/red-200',
    strokeBuy: 'Colors/green/Dark/green-500',
    strokeDisabled: 'Colors/neutral/Dark/neutral-200',
    strokeSell: 'Colors/red/Dark/red-500',
    textBuy: 'Colors/green/Dark/green-500',
    textDisabled: 'Colors/neutral/Dark/neutral-400',
    textOnPrimary: 'Colors/base/white',
    textSell: 'Colors/red/Dark/red-500',
  },
} satisfies Record<BlinkXBuySellButtonTheme, Record<keyof typeof themeTokens.light, string>>

const sizeSpecs = {
  sm: {
    defaultSampleWidth: '52px',
    symbolSampleWidth: '28px',
    height: '24px',
    paddingDefaultX: '16px',
    paddingSymbolX: '10px',
    fontSize: '12px',
    lineHeight: '16px',
  },
  md: {
    defaultSampleWidth: '60px',
    symbolSampleWidth: '36px',
    height: '32px',
    paddingDefaultX: '20px',
    paddingSymbolX: '14px',
    fontSize: '12px',
    lineHeight: '16px',
  },
  lg: {
    defaultSampleWidth: '72px',
    symbolSampleWidth: '42px',
    height: '36px',
    paddingDefaultX: '24px',
    paddingSymbolX: '16px',
    fontSize: '14px',
    lineHeight: '20px',
  },
  xl: {
    defaultSampleWidth: '82px',
    symbolSampleWidth: '50px',
    height: '40px',
    paddingDefaultX: '28px',
    paddingSymbolX: '20px',
    fontSize: '16px',
    lineHeight: '24px',
  },
  '2xl': {
    defaultSampleWidth: '94px',
    symbolSampleWidth: '60px',
    height: '48px',
    paddingDefaultX: '32px',
    paddingSymbolX: '24px',
    fontSize: '18px',
    lineHeight: '24px',
  },
} satisfies Record<BlinkXBuySellButtonSize, BuySellSizeSpec>

const meta = {
  id: 'components-buttons-buy-sell',
  title: 'Components/Buttons/Buy∕Sell',
  component: BlinkXBuySellButton,
  parameters: {
    layout: 'fullscreen',
    controls: {
      sort: 'none',
    },
  },
  argTypes: {
    bs: {
      control: 'inline-radio',
      name: 'B/S',
      options: buttonSides,
      table: {
        category: componentPropertyCategory,
      },
    },
    type: {
      control: 'select',
      name: 'Type',
      options: buttonTypes,
      table: {
        category: componentPropertyCategory,
      },
    },
    buttonStyle: {
      control: 'select',
      name: 'Style',
      options: buttonStyles,
      table: {
        category: componentPropertyCategory,
      },
    },
    size: {
      control: 'inline-radio',
      name: 'Size',
      options: buttonSizes,
      table: {
        category: componentPropertyCategory,
      },
    },
    state: {
      control: 'select',
      name: 'State',
      options: buttonStates,
      table: {
        category: componentPropertyCategory,
      },
    },
    textOnBuyPrimary: {
      control: 'text',
      if: { arg: 'activeTextControl', eq: 'buy-primary' },
      name: 'Text on Buy CTA',
      table: {
        category: componentPropertyCategory,
      },
    },
    textOnBuySecondary: {
      control: 'text',
      if: { arg: 'activeTextControl', eq: 'buy-secondary' },
      name: 'Text on Buy CTA',
      table: {
        category: componentPropertyCategory,
      },
    },
    textOnSellPrimary: {
      control: 'text',
      if: { arg: 'activeTextControl', eq: 'sell-primary' },
      name: 'Text on Sell CTA',
      table: {
        category: componentPropertyCategory,
      },
    },
    textOnSellSecondary: {
      control: 'text',
      if: { arg: 'activeTextControl', eq: 'sell-secondary' },
      name: 'Text on Sell CTA',
      table: {
        category: componentPropertyCategory,
      },
    },
    textOnSymbolBuy: {
      control: 'text',
      if: { arg: 'activeTextControl', eq: 'symbol-buy' },
      name: 'Text on Buy symbol',
      table: {
        category: componentPropertyCategory,
      },
    },
    textOnSymbolSell: {
      control: 'text',
      if: { arg: 'activeTextControl', eq: 'symbol-sell' },
      name: 'Text on Sell symbol',
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
    activeTextControl: {
      control: false,
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
    onClick: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<BuySellStoryArgs>

export default meta

type Story = StoryObj<BuySellStoryArgs>

type ResolvedBuySellSpec = BuySellSizeSpec & {
  background: string
  border: string
  borderRadius: string
  color: string
  cursor: string
  focusRing: string
  fontFamily: string
  fontWeight: string
  outline: string
  paddingBottom: string
  paddingLeft: string
  paddingRight: string
  paddingTop: string
  sampleWidth: string
}

const buttonCode = `import { BlinkXBuySellButton } from './BlinkXBuySellButton'
import './BlinkXBuySellButton.css'

export function Example() {
  return (
    <BlinkXBuySellButton
      bs="Buy"
      type="Primary"
      buttonStyle="Default"
      size="sm"
      state="Default"
      theme="light"
    />
  )
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

function downloadBuySellMarkdown() {
  const link = document.createElement('a')
  link.href = buySellMarkdownHref
  link.download = buySellMarkdownDownloadName
  document.body.appendChild(link)
  link.click()
  link.remove()
}

function BuySellHeader() {
  return (
    <header className="components-buttons-header">
      <div>
        <p className="components-buttons-kicker">Components / Buttons / Buy/Sell</p>
        <h1>Buy/Sell</h1>
        <p className="components-buttons-subtext">Buy and sell button component properties from Figma.</p>
      </div>

      <div className="components-buttons-header-actions">
        <BlinkXButton
          aria-label="Download Buy/Sell button markdown"
          className="components-buttons-download-button"
          label="Download .md File"
          leadingIconNode={<DownloadIcon />}
          onClick={downloadBuySellMarkdown}
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

function getActiveTextControl(args: BuySellStoryArgs): ActiveTextControl {
  const bs = args.bs ?? 'Buy'
  const buttonStyle = args.buttonStyle ?? 'Default'
  const type = args.type ?? 'Primary'

  if (buttonStyle === 'Symbol') return bs === 'Sell' ? 'symbol-sell' : 'symbol-buy'
  if (bs === 'Sell') return type === 'Secondary' ? 'sell-secondary' : 'sell-primary'

  return type === 'Secondary' ? 'buy-secondary' : 'buy-primary'
}

function getActiveTextProp(args: BuySellStoryArgs) {
  const activeTextControl = getActiveTextControl(args)

  switch (activeTextControl) {
    case 'buy-secondary':
      return {
        prop: 'textOnBuySecondary',
        value: args.textOnBuySecondary ?? 'Buy',
      }
    case 'sell-primary':
      return {
        prop: 'textOnSellPrimary',
        value: args.textOnSellPrimary ?? 'Sell',
      }
    case 'sell-secondary':
      return {
        prop: 'textOnSellSecondary',
        value: args.textOnSellSecondary ?? 'Sell',
      }
    case 'symbol-buy':
      return {
        prop: 'textOnSymbolBuy',
        value: args.textOnSymbolBuy ?? 'B',
      }
    case 'symbol-sell':
      return {
        prop: 'textOnSymbolSell',
        value: args.textOnSymbolSell ?? 'S',
      }
    case 'buy-primary':
    default:
      return {
        prop: 'textOnBuyPrimary',
        value: args.textOnBuyPrimary ?? 'Buy',
      }
  }
}

function getResolvedBuySellSpec(args: BuySellStoryArgs): ResolvedBuySellSpec {
  const bs = args.bs ?? 'Buy'
  const buttonStyle = args.buttonStyle ?? 'Default'
  const size = args.size ?? 'sm'
  const state = args.state ?? 'Default'
  const theme = args.theme ?? 'light'
  const type = args.type ?? 'Primary'
  const tokens = themeTokens[theme]
  const sizeSpec = sizeSpecs[size]
  const isBuy = bs === 'Buy'
  const isDisabled = state === 'Disabled'
  const isFocused = state === 'Focused'
  const isHover = state === 'Hover'
  const isPrimary = type === 'Primary'
  const tone = {
    backgroundDefault: isBuy ? tokens.bgBuyDefault : tokens.bgSellDefault,
    backgroundHoverPrimary: isBuy ? tokens.bgBuyHoverPrimary : tokens.bgSellHoverPrimary,
    backgroundHoverSecondary: isBuy ? tokens.bgBuyHoverSecondary : tokens.bgSellHoverSecondary,
    focusRing: isBuy ? tokens.focusBuy : tokens.focusSell,
    stroke: isBuy ? tokens.strokeBuy : tokens.strokeSell,
    text: isBuy ? tokens.textBuy : tokens.textSell,
  }
  const background = isPrimary
    ? isDisabled
      ? tokens.bgDisabled
      : isHover
        ? tone.backgroundHoverPrimary
        : tone.backgroundDefault
    : isHover
      ? tone.backgroundHoverSecondary
      : 'transparent'
  const border = isPrimary
    ? '1px solid transparent'
    : `1px solid ${isDisabled ? tokens.strokeDisabled : tone.stroke}`
  const color = isPrimary
    ? isDisabled
      ? tokens.textDisabled
      : tokens.textOnPrimary
    : isDisabled
      ? tokens.textDisabled
      : tone.text
  const paddingX = buttonStyle === 'Symbol' ? sizeSpec.paddingSymbolX : sizeSpec.paddingDefaultX

  return {
    ...sizeSpec,
    background,
    border,
    borderRadius: '9999px',
    color,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    focusRing: tone.focusRing,
    fontFamily: 'Barlow',
    fontWeight: '600 / SemiBold',
    outline: isFocused ? `3px solid ${tone.focusRing}` : 'none',
    paddingBottom: '4px',
    paddingLeft: paddingX,
    paddingRight: paddingX,
    paddingTop: '4px',
    sampleWidth: buttonStyle === 'Symbol' ? sizeSpec.symbolSampleWidth : sizeSpec.defaultSampleWidth,
  }
}

function escapeCodeAttribute(value: string) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;')
}

function getDetailedCode(args: BuySellStoryArgs) {
  const bs = args.bs ?? 'Buy'
  const buttonStyle = args.buttonStyle ?? 'Default'
  const size = args.size ?? 'sm'
  const state = args.state ?? 'Default'
  const theme = args.theme ?? 'light'
  const type = args.type ?? 'Primary'
  const activeText = getActiveTextProp(args)
  const specs = getResolvedBuySellSpec(args)
  const tokens = themeTokens[theme]
  const tokenAliases = themeTokenAliases[theme]
  const componentClass = `blinkx-buy-sell-button blinkx-buy-sell-button--type-${type.toLowerCase()} blinkx-buy-sell-button--style-${buttonStyle.toLowerCase()} blinkx-buy-sell-button--side-${bs.toLowerCase()} blinkx-buy-sell-button--size-${size} blinkx-buy-sell-button--state-${state.toLowerCase()} blinkx-buy-sell-button--theme-${theme}`
  const [fontWeightValue, fontWeightName] = specs.fontWeight.split(' / ')

  return `<BlinkXBuySellButton
  bs="${bs}"
  type="${type}"
  buttonStyle="${buttonStyle}"
  size="${size}"
  state="${state}"
  ${activeText.prop}="${escapeCodeAttribute(activeText.value)}"
  theme="${theme}"
/>`
    + `

/* Resolved CSS for current selection */
.${componentClass.split(' ').join('.')} {
  width: auto; /* Figma hugs content. Default label sample width: ${specs.sampleWidth} */
  height: ${specs.height}; /* ${pxToRem(specs.height)} */
  padding: ${specs.paddingTop} ${specs.paddingRight} ${specs.paddingBottom} ${specs.paddingLeft};
  /* padding rem: ${pxToRem(specs.paddingTop)} ${pxToRem(specs.paddingRight)} ${pxToRem(specs.paddingBottom)} ${pxToRem(specs.paddingLeft)} */

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

.blinkx-buy-sell-button__label {
  overflow: visible;
  text-overflow: clip;
  text-align: center;
}

/*
Figma component set
- Node: 83:1313
- Name: CTA B/S Light
- Variants: Type=Primary/Secondary, Style=Default/Symbol, B/S=Buy/Sell, Size=sm/md/lg/xl/2xl, State=Default/Focused/Hover/Disabled

Figma text component properties
- Text on Sell cta-primary
- Text on Sell cta-sec
- Text on Buy cta-primary
- Text on Buy cta-sec
- Text on symbol-buy
- Text on symbol-sell

Color tokens extracted from Figma variables (${theme})
- Color/background/buy/bg-buy-default: ${tokens.bgBuyDefault} -> ${tokenAliases.bgBuyDefault}
- Color/background/buy/bg-buy-hover_on-prime-cta: ${tokens.bgBuyHoverPrimary} -> ${tokenAliases.bgBuyHoverPrimary}
- Color/background/buy/bg-buy-hover_sec-cta: ${tokens.bgBuyHoverSecondary} -> ${tokenAliases.bgBuyHoverSecondary}
- Color/background/buy/bg-buy-focus_ring: ${tokens.focusBuy} -> ${tokenAliases.focusBuy}
- Color/stroke/stroke-buy: ${tokens.strokeBuy} -> ${tokenAliases.strokeBuy}
- Color/text/text-green: ${tokens.textBuy} -> ${tokenAliases.textBuy}
- Color/background/sell/bg-sell-default: ${tokens.bgSellDefault} -> ${tokenAliases.bgSellDefault}
- Color/background/sell/bg-sell-hover_on-prime-cta: ${tokens.bgSellHoverPrimary} -> ${tokenAliases.bgSellHoverPrimary}
- Color/background/sell/bg-sell-hover_on-sec-cta: ${tokens.bgSellHoverSecondary} -> ${tokenAliases.bgSellHoverSecondary}
- Color/background/sell/bg-sell-focus_ring: ${tokens.focusSell} -> ${tokenAliases.focusSell}
- Color/stroke/stroke-sell: ${tokens.strokeSell} -> ${tokenAliases.strokeSell}
- Color/text/text-red: ${tokens.textSell} -> ${tokenAliases.textSell}
- Color/background/brand/bg-brand-disable: ${tokens.bgDisabled} -> ${tokenAliases.bgDisabled}
- Color/stroke/stroke-disabled: ${tokens.strokeDisabled} -> ${tokenAliases.strokeDisabled}
- Color/text/text-white_on-cta: ${tokens.textOnPrimary} -> ${tokenAliases.textOnPrimary}
- Color/text/text_on-disabled-cta: ${tokens.textDisabled} -> ${tokenAliases.textDisabled}

Typography
- Family/font-family: ${specs.fontFamily}
- Font-weight/semiBold: ${fontWeightValue}
- Font-size: ${pxAndRem(specs.fontSize)}
- Line-height: ${pxAndRem(specs.lineHeight)}
- Letter-spacing: 0

Spacing and layout
- Width: hug content (auto in CSS)
- Figma sample width for current default text: ${pxAndRem(specs.sampleWidth)}
- Min-width: none
- Height: ${pxAndRem(specs.height)}
- Padding top: ${pxAndRem(specs.paddingTop)}
- Padding right: ${pxAndRem(specs.paddingRight)}
- Padding bottom: ${pxAndRem(specs.paddingBottom)}
- Padding left: ${pxAndRem(specs.paddingLeft)}
- Style: ${buttonStyle}
- Text truncation: none
- Text alignment: center

Radius and state
- Border radius: ${specs.borderRadius}
- Focus ring: ${specs.focusRing}
- Cursor: ${specs.cursor}
*/`
}

function getButtonComponentProps(args: BuySellStoryArgs): BlinkXBuySellButtonProps {
  const buttonProps = { ...args }

  delete buttonProps.activeTextControl

  return buttonProps
}

function PreviewCanvas(args: BuySellStoryArgs) {
  const theme = args.theme ?? 'light'
  const buttonProps = getButtonComponentProps(args)

  return (
    <main className="components-buttons-page">
      <BuySellHeader />

      <section className="button-live-section">
        <div className="button-live-preview" data-theme={theme}>
          <BlinkXBuySellButton {...buttonProps} />
        </div>

        <ComponentCodeBlock code={getDetailedCode(args)} />
      </section>
    </main>
  )
}

function GalleryCanvas() {
  return (
    <main className="components-buttons-page">
      <BuySellHeader />

      <div className="buttons-section-list">
        <section className="buttons-section">
          <div className="buttons-section__header">
            <h2>B/S</h2>
            <span>{buttonSides.length}</span>
          </div>

          <div className="buttons-token-grid">
            {buttonSides.map((bs) => (
              <article className="buttons-token" key={bs}>
                <div className="buttons-token__preview">
                  <BlinkXBuySellButton bs={bs} />
                </div>
                <div className="buttons-token__body">
                  <span className="buttons-token__name">{bs}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="buttons-section">
          <div className="buttons-section__header">
            <h2>Type</h2>
            <span>{buttonTypes.length}</span>
          </div>

          <div className="buttons-token-grid">
            {buttonTypes.map((type) => (
              <article className="buttons-token" key={type}>
                <div className="buttons-token__preview">
                  <BlinkXBuySellButton type={type} />
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
            <h2>Style</h2>
            <span>{buttonStyles.length}</span>
          </div>

          <div className="buttons-token-grid">
            {buttonStyles.map((buttonStyle) => (
              <article className="buttons-token" key={buttonStyle}>
                <div className="buttons-token__preview">
                  <BlinkXBuySellButton buttonStyle={buttonStyle} />
                </div>
                <div className="buttons-token__body">
                  <span className="buttons-token__name">{buttonStyle}</span>
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
                  <BlinkXBuySellButton size={size} />
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
                  <BlinkXBuySellButton state={state} />
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
    activeTextControl: 'buy-primary',
    bs: 'Buy',
    type: 'Primary',
    buttonStyle: 'Default',
    size: 'sm',
    state: 'Default',
    textOnBuyPrimary: 'Buy',
    textOnBuySecondary: 'Buy',
    textOnSellPrimary: 'Sell',
    textOnSellSecondary: 'Sell',
    textOnSymbolBuy: 'B',
    textOnSymbolSell: 'S',
    theme: 'light',
  },
  parameters: {
    docs: {
      source: {
        code: buttonCode,
      },
    },
  },
  render: (args) => {
    const [, updateArgs] = useArgs<BuySellStoryArgs>()
    const activeTextControl = getActiveTextControl(args)

    useEffect(() => {
      if (args.activeTextControl !== activeTextControl) {
        updateArgs({ activeTextControl })
      }
    }, [activeTextControl, args.activeTextControl, updateArgs])

    return <PreviewCanvas {...args} />
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
