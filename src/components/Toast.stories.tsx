import type { Meta, StoryObj } from '@storybook/react-vite'
import { HugeiconsIcon } from '@hugeicons/react'
import { Download01Icon } from '@hugeicons/core-free-icons'

import {
  BlinkXToast,
  type BlinkXToastProps,
  type BlinkXToastTheme,
  type BlinkXToastType,
} from './BlinkXToast'
import { BlinkXButton } from './BlinkXButton'
import { ComponentCodeBlock } from './ComponentCodeBlock'
import './ButtonsStory.css'

const toastThemes: BlinkXToastTheme[] = ['light', 'dark']
const toastTypes: BlinkXToastType[] = ['negative', 'positive']
const componentPropertyCategory = 'Component\u00A0property'
const defaultNegativeTitle = 'Order rejected : Market order not allowed in AMO'
const defaultPositiveTitle = 'After market order placed successfully.'
const defaultSupportingText =
  'Tooltips are used to describe or identify an  element. In most scenarios, tooltips help the user understand meaning, function or alt-text.'
const defaultActionText = 'Undo'
const toastMarkdownHref = '/blinkx-toast-message.md'
const toastMarkdownDownloadName = 'blinkx-toast-message.md'

type ToastStoryArgs = BlinkXToastProps

type ToastThemeTokens = {
  actionText: string
  actionTextHover: string
  closeBackground: string
  closeBackgroundHover: string
  closeIcon: string
  negative: string
  positiveAccent: string
  positiveIcon: string
  stroke: string
  supportingText: string
  surface: string
  titleText: string
}

const toastThemeTokens = {
  light: {
    actionText: '#171EFD',
    actionTextHover: '#181EA6',
    closeBackground: '#F2F2F2',
    closeBackgroundHover: '#E7E7E7',
    closeIcon: '#414143',
    negative: '#DD2006',
    positiveAccent: '#2BB02B',
    positiveIcon: '#2BB02B',
    stroke: '#F2F2F2',
    supportingText: '#666666',
    surface: '#FFFFFF',
    titleText: '#41414E',
  },
  dark: {
    actionText: '#9B9EFE',
    actionTextHover: '#BCBEFF',
    closeBackground: '#272A2F',
    closeBackgroundHover: '#33373B',
    closeIcon: '#999999',
    negative: '#CD4937',
    positiveAccent: '#48A848',
    positiveIcon: '#2BB02B',
    stroke: '#272A2F',
    supportingText: '#B2B2B3',
    surface: '#23282E',
    titleText: '#CACACE',
  },
} satisfies Record<BlinkXToastTheme, ToastThemeTokens>

const toastTokenAliases = {
  actionText: 'Color/text/text-brand',
  actionTextHover: 'Color/toast/toast-cta-brand-hover',
  closeBackground: 'Color/background/tag/bg-tag-neutral-1 or bg-tag-neutral-2',
  closeBackgroundHover: 'Toast hover state / x tag hover fill',
  closeIcon: 'Color/icons/icon-primary',
  negative: 'Color/background/sell/bg-sell-default',
  positiveAccent: 'Color/background/buy/bg-buy-default',
  positiveIcon: 'Color/background/Buy/bg-buy',
  stroke: 'Color/stroke/stroke-subtle',
  supportingText: 'Color/text/text-secondary',
  surface: 'Color/Surface - Elevation/surface 2',
  titleText: 'Color/text/text-primary',
}

const toastSpec = {
  actionGap: '4px',
  closeIconSize: '10px',
  closeSize: '20px',
  contentGap: '28px',
  gap: '9px',
  iconSize: '24px',
  padding: '12px',
  radiusDefault: '8px',
  radiusSupporting: '12px',
  sideAccentHeight: '22px',
  sideAccentWidth: '4px',
  supportingWidth: '280px',
  textFontSize: '12px',
  textLineHeight: '16px',
  widthDefault: '384px',
  widthTrailing: '413px',
}

const meta = {
  title: 'Components/Toast Message',
  component: BlinkXToast,
  parameters: {
    layout: 'fullscreen',
    controls: {
      sort: 'none',
    },
  },
  argTypes: {
    type: {
      control: 'select',
      name: 'Type',
      options: toastTypes,
      table: {
        category: componentPropertyCategory,
      },
    },
    showSupportingText: {
      control: 'boolean',
      name: 'Show Supporting Text',
      table: {
        category: componentPropertyCategory,
      },
    },
    title: {
      control: 'text',
      name: 'Header Text',
      table: {
        category: componentPropertyCategory,
      },
    },
    supportingText: {
      control: 'text',
      if: {
        arg: 'showSupportingText',
        truthy: true,
      },
      name: 'Supporting Text',
      table: {
        category: componentPropertyCategory,
      },
    },
    trailingText: {
      control: 'boolean',
      name: 'Trailing Text',
      table: {
        category: componentPropertyCategory,
      },
    },
    actionText: {
      control: 'text',
      if: {
        arg: 'trailingText',
        truthy: true,
      },
      name: 'Trailing Text Label',
      table: {
        category: componentPropertyCategory,
      },
    },
    theme: {
      control: 'inline-radio',
      name: 'Theme',
      options: toastThemes,
      table: {
        category: componentPropertyCategory,
      },
    },
    onActionClick: {
      table: {
        disable: true,
      },
    },
    onClose: {
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
} satisfies Meta<ToastStoryArgs>

export default meta

type Story = StoryObj<ToastStoryArgs>

const toastCode = `import { BlinkXToast } from './BlinkXToast'
import './BlinkXToast.css'

export function Example() {
  return (
    <BlinkXToast
      type="negative"
      theme="light"
      showSupportingText
      trailingText={false}
      title="${defaultNegativeTitle}"
      supportingText="${defaultSupportingText}"
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

function downloadToastMarkdown() {
  const link = document.createElement('a')
  link.href = toastMarkdownHref
  link.download = toastMarkdownDownloadName
  document.body.appendChild(link)
  link.click()
  link.remove()
}

function ToastHeader() {
  return (
    <header className="components-buttons-header">
      <div>
        <p className="components-buttons-kicker">Components / Toast Message</p>
        <h1>Toast Message</h1>
        <p className="components-buttons-subtext">Toast Message component properties from Figma.</p>
      </div>

      <div className="components-buttons-header-actions">
        <BlinkXButton
          aria-label="Download Toast Message markdown"
          className="components-buttons-download-button"
          label="Download .md File"
          leadingIconNode={<DownloadIcon />}
          onClick={downloadToastMarkdown}
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
  return `${value} / ${pxToRem(value)}`
}

function getDefaultTitle(type: BlinkXToastType) {
  return type === 'positive' ? defaultPositiveTitle : defaultNegativeTitle
}

function getDetailedCode(args: ToastStoryArgs) {
  const theme = args.theme ?? 'light'
  const type = args.type ?? 'negative'
  const showSupportingText = args.showSupportingText ?? true
  const trailingText = args.trailingText ?? false
  const title = args.title || getDefaultTitle(type)
  const supportingText = args.supportingText ?? defaultSupportingText
  const actionText = args.actionText ?? defaultActionText
  const tokens = toastThemeTokens[theme]
  const accent = type === 'positive' ? tokens.positiveAccent : tokens.negative
  const statusIcon = type === 'positive' ? tokens.positiveIcon : tokens.negative
  const width = trailingText ? toastSpec.widthTrailing : toastSpec.widthDefault
  const radius = showSupportingText ? toastSpec.radiusSupporting : toastSpec.radiusDefault
  const supportingMarkup = showSupportingText
    ? `\n            <p className="blinkx-toast__supporting-text">${supportingText}</p>`
    : ''
  const actionMarkup = trailingText
    ? `\n                <button className="blinkx-toast__action" type="button">${actionText}</button>`
    : ''

  return `import type { HTMLAttributes } from 'react'
import './BlinkXToast.css'

export type BlinkXToastTheme = 'light' | 'dark'
export type BlinkXToastType = 'negative' | 'positive'

export type BlinkXToastProps = Omit<HTMLAttributes<HTMLDivElement>, 'title'> & {
  actionText?: string
  onActionClick?: () => void
  onClose?: () => void
  showSupportingText?: boolean
  supportingText?: string
  theme?: BlinkXToastTheme
  title?: string
  trailingText?: boolean
  type?: BlinkXToastType
}

<BlinkXToast
  type="${type}"
  theme="${theme}"
  showSupportingText={${showSupportingText}}
  trailingText={${trailingText}}
  title="${title}"
  supportingText="${supportingText}"
  actionText="${actionText}"
/>

/* Rendered structure */
<div className="blinkx-toast blinkx-toast--theme-${theme} blinkx-toast--type-${type}">
  <span className="blinkx-toast__accent" aria-hidden="true" />
  <div className="blinkx-toast__content-frame">
    <div className="blinkx-toast__message-group">
      <svg className="blinkx-toast__status-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="${
          type === 'positive'
            ? 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1.2 14.6-4-4 1.4-1.4 2.6 2.6 5.2-5.2 1.4 1.4-6.6 6.6Z'
            : 'M11 15h2v2h-2v-2Zm0-8h2v6h-2V7Zm1-5a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z'
        }" />
      </svg>
      <div className="blinkx-toast__copy">
        <div className="blinkx-toast__headline-row">
          <p className="blinkx-toast__title">${title}</p>${actionMarkup}
        </div>${supportingMarkup}
      </div>
    </div>
    <button className="blinkx-toast__close" type="button" aria-label="Close toast">
      <svg className="blinkx-toast__close-icon" viewBox="0 0 10 10" aria-hidden="true">
        <path d="M2.1 2.1 7.9 7.9M7.9 2.1 2.1 7.9" />
      </svg>
    </button>
  </div>
</div>

/* Component CSS for current selection */
.blinkx-toast {
  --toast-accent: ${accent}; /* ${type === 'positive' ? toastTokenAliases.positiveAccent : toastTokenAliases.negative} */
  --toast-action-text: ${tokens.actionText}; /* ${toastTokenAliases.actionText} */
  --toast-action-text-hover: ${tokens.actionTextHover}; /* ${toastTokenAliases.actionTextHover} */
  --toast-close-bg: ${tokens.closeBackground}; /* ${toastTokenAliases.closeBackground} */
  --toast-close-bg-hover: ${tokens.closeBackgroundHover}; /* ${toastTokenAliases.closeBackgroundHover} */
  --toast-close-icon: ${tokens.closeIcon}; /* ${toastTokenAliases.closeIcon} */
  --toast-icon: ${statusIcon}; /* ${type === 'positive' ? toastTokenAliases.positiveIcon : toastTokenAliases.negative} */
  --toast-stroke: ${tokens.stroke}; /* ${toastTokenAliases.stroke} */
  --toast-supporting-text: ${tokens.supportingText}; /* ${toastTokenAliases.supportingText} */
  --toast-surface: ${tokens.surface}; /* ${toastTokenAliases.surface} */
  --toast-title: ${tokens.titleText}; /* ${toastTokenAliases.titleText} */
  display: inline-flex;
  align-items: center;
  width: ${width}; /* ${pxToRem(width)} */
  max-width: 100%;
  padding: ${toastSpec.padding}; /* ${pxToRem(toastSpec.padding)} */
  gap: ${toastSpec.gap}; /* ${pxToRem(toastSpec.gap)} */
  border: 1px solid var(--toast-stroke);
  border-radius: ${radius}; /* ${pxToRem(radius)} */
  background: var(--toast-surface);
  box-shadow:
    0 2px 2px -1px rgb(10 13 18 / 4%),
    0 4px 6px -2px rgb(10 13 18 / 3%),
    0 12px 16px -4px rgb(10 13 18 / 8%);
  font-family: Barlow, sans-serif;
}

.blinkx-toast__accent {
  position: absolute;
  left: 0;
  top: ${toastSpec.padding}; /* ${pxToRem(toastSpec.padding)} */
  width: ${toastSpec.sideAccentWidth}; /* ${pxToRem(toastSpec.sideAccentWidth)} */
  height: ${toastSpec.sideAccentHeight}; /* ${pxToRem(toastSpec.sideAccentHeight)} */
  border-radius: 0 12px 12px 0;
  background: var(--toast-accent);
}

.blinkx-toast__content-frame {
  display: flex;
  flex: 1 1 auto;
  align-items: ${showSupportingText ? 'flex-start' : 'center'};
  justify-content: space-between;
  gap: ${toastSpec.contentGap}; /* ${pxToRem(toastSpec.contentGap)} */
  min-width: 0;
}

.blinkx-toast__message-group {
  display: inline-flex;
  align-items: ${showSupportingText ? 'flex-start' : 'center'};
  gap: 8px; /* 0.5rem */
  min-width: 0;
}

.blinkx-toast__status-icon {
  width: ${toastSpec.iconSize}; /* ${pxToRem(toastSpec.iconSize)} */
  height: ${toastSpec.iconSize}; /* ${pxToRem(toastSpec.iconSize)} */
  color: var(--toast-icon);
  fill: currentColor;
}

.blinkx-toast__title,
.blinkx-toast__supporting-text,
.blinkx-toast__action {
  font-size: ${toastSpec.textFontSize}; /* ${pxToRem(toastSpec.textFontSize)} */
  line-height: ${toastSpec.textLineHeight}; /* ${pxToRem(toastSpec.textLineHeight)} */
  letter-spacing: 0;
}

.blinkx-toast__title {
  color: var(--toast-title);
  font-weight: 600;
}

.blinkx-toast__supporting-text {
  width: ${toastSpec.supportingWidth}; /* ${pxToRem(toastSpec.supportingWidth)} */
  color: var(--toast-supporting-text);
  font-weight: 500;
}

.blinkx-toast__action {
  color: var(--toast-action-text);
  font-weight: 600;
  transition: color 160ms ease;
}

.blinkx-toast__action:hover {
  color: var(--toast-action-text-hover);
}

.blinkx-toast__close {
  width: ${toastSpec.closeSize}; /* ${pxToRem(toastSpec.closeSize)} */
  height: ${toastSpec.closeSize}; /* ${pxToRem(toastSpec.closeSize)} */
  border: 0;
  border-radius: 999px;
  background: var(--toast-close-bg);
  color: var(--toast-close-icon);
  transition: background 160ms ease;
}

.blinkx-toast__close:hover {
  background: var(--toast-close-bg-hover);
}

/*
Figma component sets
- Light: 6205:15920
- Dark: 6205:16061

Figma properties
- color: white
- type: negative | positive
- supporting text: No supporting text | supporting text
- trailing Text: Off | On

Light nodes
- Negative, supporting text, trailing off: 6205:15931
- Negative, no supporting text, trailing on: 6205:15960
- Positive, no supporting text, trailing on: 6205:15980
- Negative, no supporting text, trailing off: 6205:15990
- Positive, supporting text, trailing off: 6205:16009
- Positive, no supporting text, trailing off: 6205:16028

Dark nodes
- Negative, supporting text, trailing off: 6205:16062
- Negative, no supporting text, trailing on: 6205:16072
- Positive, no supporting text, trailing on: 6205:16082
- Negative, no supporting text, trailing off: 6205:16092
- Positive, supporting text, trailing off: 6205:16101
- Positive, no supporting text, trailing off: 6205:16111

Spacing and type
- Padding: ${pxAndRem(toastSpec.padding)}
- Outer gap: ${pxAndRem(toastSpec.gap)}
- Icon/text gap: 8px / 0.5rem
- Content/close gap: ${pxAndRem(toastSpec.contentGap)}
- Text: Barlow SemiBold 600 for title/action, Medium 500 for supporting text
- Font size: ${pxAndRem(toastSpec.textFontSize)}
- Line height: ${pxAndRem(toastSpec.textLineHeight)}
- X tag hover: light #E7E7E7, dark #33373B
- Undo hover: light #181EA6, dark #BCBEFF
*/`
}

function PreviewCanvas(args: ToastStoryArgs) {
  return (
    <main className="components-buttons-page">
      <ToastHeader />

      <section className="button-live-section">
        <div className="button-live-preview" data-theme={args.theme}>
          <BlinkXToast {...args} title={args.title || getDefaultTitle(args.type ?? 'negative')} />
        </div>

        <ComponentCodeBlock code={getDetailedCode(args)} />
      </section>
    </main>
  )
}

function ToastCard({
  label,
  previewTheme = 'light',
  ...toastProps
}: BlinkXToastProps & { label: string; previewTheme?: BlinkXToastTheme }) {
  return (
    <article className="buttons-token">
      <div className="buttons-token__preview button-live-preview toast-token-preview" data-theme={previewTheme}>
        <BlinkXToast {...toastProps} />
      </div>
      <div className="buttons-token__body">
        <span className="buttons-token__name">{label}</span>
      </div>
    </article>
  )
}

function GalleryCanvas() {
  return (
    <main className="components-buttons-page">
      <ToastHeader />

      <div className="buttons-section-list">
        <section className="buttons-section">
          <div className="buttons-section__header">
            <h2>Type</h2>
            <span>2</span>
          </div>

          <div className="buttons-token-grid toast-token-grid">
            <ToastCard label="negative" type="negative" title={defaultNegativeTitle} />
            <ToastCard label="positive" type="positive" title={defaultPositiveTitle} />
          </div>
        </section>

        <section className="buttons-section">
          <div className="buttons-section__header">
            <h2>Supporting Text</h2>
            <span>2</span>
          </div>

          <div className="buttons-token-grid toast-token-grid">
            <ToastCard
              label="supporting text"
              showSupportingText
              title={defaultNegativeTitle}
              type="negative"
            />
            <ToastCard
              label="No supporting text"
              showSupportingText={false}
              title={defaultNegativeTitle}
              type="negative"
            />
          </div>
        </section>

        <section className="buttons-section">
          <div className="buttons-section__header">
            <h2>Trailing Text</h2>
            <span>2</span>
          </div>

          <div className="buttons-token-grid toast-token-grid">
            <ToastCard
              label="Off"
              showSupportingText={false}
              title={defaultNegativeTitle}
              trailingText={false}
              type="negative"
            />
            <ToastCard
              label="On"
              showSupportingText={false}
              title={defaultNegativeTitle}
              trailingText
              type="negative"
            />
          </div>
        </section>

        <section className="buttons-section">
          <div className="buttons-section__header">
            <h2>Theme</h2>
            <span>2</span>
          </div>

          <div className="buttons-token-grid toast-token-grid">
            <ToastCard label="light" previewTheme="light" theme="light" title={defaultNegativeTitle} />
            <ToastCard label="dark" previewTheme="dark" theme="dark" title={defaultNegativeTitle} />
          </div>
        </section>
      </div>
    </main>
  )
}

export const Preview: Story = {
  args: {
    type: 'negative',
    showSupportingText: true,
    title: defaultNegativeTitle,
    supportingText: defaultSupportingText,
    trailingText: false,
    actionText: defaultActionText,
    theme: 'light',
  },
  parameters: {
    docs: {
      source: {
        code: toastCode,
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
