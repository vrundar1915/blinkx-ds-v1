import type { Meta, StoryObj } from '@storybook/react-vite'
import { HugeiconsIcon } from '@hugeicons/react'
import { Download01Icon } from '@hugeicons/core-free-icons'

import {
  BlinkXTooltip,
  type BlinkXTooltipProps,
  type BlinkXTooltipType,
} from './BlinkXTooltip'
import { BlinkXButton } from './BlinkXButton'
import { ComponentCodeBlock } from './ComponentCodeBlock'
import './ButtonsStory.css'

const tooltipTypes: BlinkXTooltipType[] = [
  'Top-left',
  'Top-Centre',
  'Top-right',
  'bottom-left',
  'bottom-Centre',
  'bottom-right',
  'left',
  'right',
]
const componentPropertyCategory = 'Component\u00A0property'
const defaultHeaderText = 'Text goes here'
const defaultSupportingText =
  'Tooltips are used to describe or identify an  element. In most scenarios, tooltips help the user understand meaning, function or alt-text.'
const tooltipMarkdownHref = '/blinkx-tooltip.md'
const tooltipMarkdownDownloadName = 'blinkx-tooltip.md'

type TooltipStoryArgs = BlinkXTooltipProps

type TooltipTypeSpec = {
  arrowBottom?: string
  arrowLeft?: string
  arrowRight?: string
  arrowTop?: string
  arrowTransform: string
}

type TooltipSpec = TooltipTypeSpec & {
  arrowSize: string
  background: string
  bodyColorDark: string
  bodyColorLight: string
  bodyFontSize: string
  bodyFontWeight: string
  bodyLineHeight: string
  gap: string
  radius: string
  shadow: string
  surfacePadding: string
  surfaceWidth: string
  titleColor: string
  titleFontSize: string
  titleFontWeight: string
  titleLineHeight: string
}

const typeSpecs = {
  'Top-left': {
    arrowLeft: '28px',
    arrowTop: '6px',
    arrowTransform: 'rotate(45deg)',
  },
  'Top-Centre': {
    arrowLeft: '50%',
    arrowTop: '6px',
    arrowTransform: 'translateX(-50%) rotate(45deg)',
  },
  'Top-right': {
    arrowRight: '28px',
    arrowTop: '6px',
    arrowTransform: 'rotate(45deg)',
  },
  'bottom-left': {
    arrowBottom: '6px',
    arrowLeft: '28px',
    arrowTransform: 'rotate(45deg)',
  },
  'bottom-Centre': {
    arrowBottom: '6px',
    arrowLeft: '50%',
    arrowTransform: 'translateX(-50%) rotate(45deg)',
  },
  'bottom-right': {
    arrowBottom: '6px',
    arrowRight: '28px',
    arrowTransform: 'rotate(45deg)',
  },
  left: {
    arrowLeft: '6px',
    arrowTop: '50%',
    arrowTransform: 'translateY(-50%) rotate(45deg)',
  },
  right: {
    arrowRight: '6px',
    arrowTop: '50%',
    arrowTransform: 'translateY(-50%) rotate(45deg)',
  },
} satisfies Record<BlinkXTooltipType, TooltipTypeSpec>

const tooltipSpec = {
  arrowSize: '12px',
  background: '#000000',
  bodyColorLight: '#E7E7E7',
  bodyColorDark: '#B2B2B3',
  bodyFontSize: '12px',
  bodyFontWeight: '400',
  bodyLineHeight: '16px',
  gap: '8px',
  radius: '6px',
  shadow: '0 24px 40px -8px rgb(10 13 16 / 32%)',
  surfacePadding: '12px',
  surfaceWidth: '224px',
  titleColor: '#FFFFFF',
  titleFontSize: '12px',
  titleFontWeight: '600',
  titleLineHeight: '16px',
} satisfies Omit<TooltipSpec, keyof TooltipTypeSpec>

const tokenAliases = {
  background: 'Color/background/tooltip/bg-tooltip-black -> Colors/base/black',
  bodyColorLight: 'Color/Tooltips/tooltip-supporting-text -> Colors/neutral/Light/neutral-100',
  bodyColorDark: 'Color/Tooltips/tooltip-supporting-text -> Colors/font/Dark/2',
  titleColor: 'Colors/base/white',
}

const meta = {
  title: 'Components/Tooltip',
  component: BlinkXTooltip,
  parameters: {
    layout: 'fullscreen',
    controls: {
      sort: 'none',
    },
  },
  argTypes: {
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
    type: {
      control: 'select',
      name: 'Type',
      options: tooltipTypes,
      table: {
        category: componentPropertyCategory,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<TooltipStoryArgs>

export default meta

type Story = StoryObj<TooltipStoryArgs>

const tooltipCode = `import { BlinkXTooltip } from './BlinkXTooltip'
import './BlinkXTooltip.css'

export function Example() {
  return (
    <BlinkXTooltip
      type="Top-left"
      title="${defaultHeaderText}"
      showSupportingText
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

function downloadTooltipMarkdown() {
  const link = document.createElement('a')
  link.href = tooltipMarkdownHref
  link.download = tooltipMarkdownDownloadName
  document.body.appendChild(link)
  link.click()
  link.remove()
}

function TooltipHeader() {
  return (
    <header className="components-buttons-header">
      <div>
        <p className="components-buttons-kicker">Components / Tooltip</p>
        <h1>Tooltip</h1>
        <p className="components-buttons-subtext">Tooltip component properties from Figma.</p>
      </div>

      <div className="components-buttons-header-actions">
        <BlinkXButton
          aria-label="Download Tooltip markdown"
          className="components-buttons-download-button"
          label="Download .md File"
          leadingIconNode={<DownloadIcon />}
          onClick={downloadTooltipMarkdown}
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

function getDetailedCode(args: TooltipStoryArgs) {
  const type = args.type ?? 'Top-left'
  const headerText = args.title ?? defaultHeaderText
  const supportingText = args.supportingText ?? defaultSupportingText
  const showSupportingText = args.showSupportingText ?? true
  const specs: TooltipSpec = {
    ...tooltipSpec,
    ...typeSpecs[type],
  }
  const bodyTextDisplay = showSupportingText
    ? `\n    <p className="blinkx-tooltip__supporting-text">${supportingText}</p>`
    : ''
  const headerOnlyClass = showSupportingText ? '' : ' blinkx-tooltip--header-only'
  const surfaceWidth = showSupportingText ? specs.surfaceWidth : 'fit-content'
  const surfaceMaxWidth = specs.surfaceWidth
  const surfacePadding = showSupportingText ? specs.surfacePadding : '8px'
  const surfaceGap = showSupportingText ? specs.gap : '0'
  const arrowPosition = [
    specs.arrowTop ? `  top: ${specs.arrowTop};` : null,
    specs.arrowRight ? `  right: ${specs.arrowRight};` : null,
    specs.arrowBottom ? `  bottom: ${specs.arrowBottom};` : null,
    specs.arrowLeft ? `  left: ${specs.arrowLeft};` : null,
  ]
    .filter(Boolean)
    .join('\n')

  return `<BlinkXTooltip
  type="${type}"
  title="${headerText}"
  showSupportingText={${showSupportingText}}
  supportingText="${supportingText}"
/>`
    + `

/* Resolved JSX content */
<div className="blinkx-tooltip blinkx-tooltip--type-${type.toLowerCase()}${headerOnlyClass}">
  <span className="blinkx-tooltip__arrow" aria-hidden="true" />
  <div className="blinkx-tooltip__surface">
    <p className="blinkx-tooltip__title">${headerText}</p>${bodyTextDisplay}
  </div>
</div>

/* Resolved CSS for current selection */
.blinkx-tooltip {
  display: inline-block;
  font-family: Barlow, sans-serif;
  padding: ${specs.arrowSize}; /* ${pxToRem(specs.arrowSize)} */
  filter: drop-shadow(0 22px 28px rgb(10 13 16 / 22%));
}

.blinkx-tooltip__surface {
  width: ${surfaceWidth};${surfaceWidth.endsWith('px') ? ` /* ${pxToRem(surfaceWidth)} */` : ''}
  max-width: ${surfaceMaxWidth}; /* ${pxToRem(surfaceMaxWidth)} */
  min-width: 0;
  padding: ${surfacePadding}; /* ${pxToRem(surfacePadding)} */
  display: grid;
  gap: ${surfaceGap}; /* ${pxToRem(surfaceGap)} */
  justify-items: stretch;
  background: ${specs.background};
  border-radius: ${specs.radius}; /* ${pxToRem(specs.radius)} */
  box-shadow: ${specs.shadow};
}

.blinkx-tooltip__title {
  color: ${specs.titleColor};
  font-family: Barlow, sans-serif;
  font-size: ${specs.titleFontSize}; /* ${pxToRem(specs.titleFontSize)} */
  font-weight: ${specs.titleFontWeight};
  line-height: ${specs.titleLineHeight}; /* ${pxToRem(specs.titleLineHeight)} */
  letter-spacing: 0;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  overflow-wrap: anywhere;
}

.blinkx-tooltip__supporting-text {
  color: ${specs.bodyColorLight};
  font-family: Barlow, sans-serif;
  font-size: ${specs.bodyFontSize}; /* ${pxToRem(specs.bodyFontSize)} */
  font-weight: ${specs.bodyFontWeight};
  line-height: ${specs.bodyLineHeight}; /* ${pxToRem(specs.bodyLineHeight)} */
  letter-spacing: 0;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  overflow-wrap: anywhere;
}

.blinkx-tooltip__arrow {
  width: ${specs.arrowSize}; /* ${pxToRem(specs.arrowSize)} */
  height: ${specs.arrowSize}; /* ${pxToRem(specs.arrowSize)} */
  background: ${specs.background};
  border-radius: 2px;
${arrowPosition}
  transform: ${specs.arrowTransform};
}

/*
Figma component set
- Node: 170:411
- Name: tooltip
- Component properties: Type=${type}, Header Text="${headerText}", Supporting Text, Show Supporting Text=${showSupportingText}
- Variants: Top-left, Top-Centre, Top-right, bottom-left, bottom-Centre, bottom-right, left, right
- Captured visual bounds from Figma: 224px x 100px

Color tokens extracted from Figma variables
- Color/background/tooltip/bg-tooltip-black: ${specs.background} -> ${tokenAliases.background}
- Color/Tooltips/tooltip-supporting-text (light): ${specs.bodyColorLight} -> ${tokenAliases.bodyColorLight}
- Color/Tooltips/tooltip-supporting-text (dark): ${specs.bodyColorDark} -> ${tokenAliases.bodyColorDark}
- Title/icon white: ${specs.titleColor} -> ${tokenAliases.titleColor}

Typography tokens
- Family/font-family: Barlow
- Font weight/semiBold: 600
- Font weight/regular: 400
- size/body/text-sm: ${pxAndRem(specs.bodyFontSize)}
- Line height/body/text-sm: ${pxAndRem(specs.bodyLineHeight)}

Layout tokens
- Surface width: ${surfaceWidth === 'fit-content' ? 'hug contents / fit-content' : pxAndRem(specs.surfaceWidth)}
- Surface max-width: ${pxAndRem(surfaceMaxWidth)}
- Surface padding: ${pxAndRem(surfacePadding)}
- Content gap: ${pxAndRem(surfaceGap)}
- Arrow: ${pxAndRem(specs.arrowSize)}
- Radius: ${pxAndRem(specs.radius)}
*/`
}

function PreviewCanvas(args: TooltipStoryArgs) {
  return (
    <main className="components-buttons-page">
      <TooltipHeader />

      <section className="button-live-section">
        <div className="button-live-preview">
          <BlinkXTooltip {...args} />
        </div>

        <ComponentCodeBlock code={getDetailedCode(args)} />
      </section>
    </main>
  )
}

function GalleryCanvas() {
  return (
    <main className="components-buttons-page">
      <TooltipHeader />

      <div className="buttons-section-list">
        <section className="buttons-section">
          <div className="buttons-section__header">
            <h2>Type</h2>
            <span>{tooltipTypes.length}</span>
          </div>

          <div className="buttons-token-grid tooltip-token-grid">
            {tooltipTypes.map((type) => (
              <article className="buttons-token" key={type}>
                <div className="buttons-token__preview tooltip-token-preview">
                  <BlinkXTooltip type={type} />
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
            <h2>Supporting Text</h2>
            <span>2</span>
          </div>

          <div className="buttons-token-grid tooltip-token-grid">
            {[true, false].map((showSupportingText) => (
              <article className="buttons-token" key={String(showSupportingText)}>
                <div className="buttons-token__preview tooltip-token-preview">
                  <BlinkXTooltip showSupportingText={showSupportingText} type="Top-left" />
                </div>
                <div className="buttons-token__body">
                  <span className="buttons-token__name">
                    {showSupportingText ? 'Show Supporting Text' : 'Hide Supporting Text'}
                  </span>
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
    showSupportingText: true,
    title: defaultHeaderText,
    supportingText: defaultSupportingText,
    type: 'Top-left',
  },
  parameters: {
    docs: {
      source: {
        code: tooltipCode,
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
