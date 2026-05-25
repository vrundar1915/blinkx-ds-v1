import type { Meta, StoryObj } from '@storybook/react-vite'
import { HugeiconsIcon } from '@hugeicons/react'
import { Download01Icon } from '@hugeicons/core-free-icons'
import { useArgs } from 'storybook/preview-api'

import {
  BlinkXChip,
  type BlinkXChipProps,
  type BlinkXChipSize,
  type BlinkXChipState,
  type BlinkXChipTheme,
  type BlinkXChipType,
} from './BlinkXChip'
import { BlinkXButton } from './BlinkXButton'
import { ComponentCodeBlock } from './ComponentCodeBlock'
import './ButtonsStory.css'

const chipTypes: BlinkXChipType[] = ['Chip-basic', 'chip-Number']
const chipStates: BlinkXChipState[] = ['active', 'default', 'disabled', 'focused', 'hover']
const chipSizes: BlinkXChipSize[] = ['sm', 'md', 'lg']
const chipThemes: BlinkXChipTheme[] = ['light', 'dark']
const componentPropertyCategory = 'Component\u00A0property'
const chipsMarkdownHref = '/blinkx-chips.md'
const chipsMarkdownDownloadName = 'blinkx-chips.md'

type ChipStoryArgs = BlinkXChipProps & {
  basicChipText: string
  numberChipText: string
}

type ChipSizeSpec = {
  basicPadding: string
  fontSize: string
  height: string
  lineHeight: string
  numberGap: string
  numberPadding: string
  numberTagFontSize: string
  numberTagHeight: string
  numberTagMinWidth: string
  numberTagPadding: string
}

type ChipThemeTokens = {
  activeStroke: string
  activeText: string
  disabledStroke: string
  disabledText: string
  focusRing: string
  hoverFill: string
  hoverStroke: string
  hoverText: string
  numberActiveFill: string
  numberDefaultFill: string
  numberDisabledFill: string
  numberHoverFill: string
  primaryStroke: string
  secondaryText: string
  surface: string
}

const chipSizeSpecs = {
  sm: {
    basicPadding: '4px 12px',
    fontSize: '12px',
    height: '24px',
    lineHeight: '16px',
    numberGap: '4px',
    numberPadding: '4px 4px 4px 8px',
    numberTagFontSize: '11px',
    numberTagHeight: '16px',
    numberTagMinWidth: '20px',
    numberTagPadding: '0 4px',
  },
  md: {
    basicPadding: '4px 12px',
    fontSize: '14px',
    height: '32px',
    lineHeight: '20px',
    numberGap: '4px',
    numberPadding: '4px 6px 4px 10px',
    numberTagFontSize: '12px',
    numberTagHeight: '20px',
    numberTagMinWidth: '24px',
    numberTagPadding: '2px 6px',
  },
  lg: {
    basicPadding: '4px 16px',
    fontSize: '14px',
    height: '40px',
    lineHeight: '20px',
    numberGap: '8px',
    numberPadding: '6px 6px 6px 10px',
    numberTagFontSize: '12px',
    numberTagHeight: '24px',
    numberTagMinWidth: '28px',
    numberTagPadding: '4px 8px',
  },
} satisfies Record<BlinkXChipSize, ChipSizeSpec>

const chipThemeTokens = {
  light: {
    activeStroke: '#171EFD',
    activeText: '#171EFD',
    disabledStroke: '#CECECE',
    disabledText: '#9D9D9D',
    focusRing: '#D1D2FF',
    hoverFill: '#F2F2F2',
    hoverStroke: '#CECECE',
    hoverText: '#41414E',
    numberActiveFill: '#E7E8FE',
    numberDefaultFill: '#F2F2F2',
    numberDisabledFill: '#F2F2F2',
    numberHoverFill: '#E7E7E7',
    primaryStroke: '#E7E7E7',
    secondaryText: '#666666',
    surface: '#FFFFFF',
  },
  dark: {
    activeStroke: '#585DFE',
    activeText: '#585DFE',
    disabledStroke: '#4D4F52',
    disabledText: '#808081',
    focusRing: '#3F44A6',
    hoverFill: '#33373B',
    hoverStroke: '#4D4F52',
    hoverText: '#CACACE',
    numberActiveFill: '#262B4F',
    numberDefaultFill: '#33373B',
    numberDisabledFill: '#33373B',
    numberHoverFill: '#272A2F',
    primaryStroke: '#33373B',
    secondaryText: '#B2B2B3',
    surface: '#1A1E23',
  },
} satisfies Record<BlinkXChipTheme, ChipThemeTokens>

const meta = {
  title: 'Components/Chips',
  component: BlinkXChip,
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
      options: chipTypes,
      table: {
        category: componentPropertyCategory,
      },
    },
    state: {
      control: 'select',
      name: 'State',
      options: chipStates,
      table: {
        category: componentPropertyCategory,
      },
    },
    size: {
      control: 'inline-radio',
      name: 'Size',
      options: chipSizes,
      table: {
        category: componentPropertyCategory,
      },
    },
    basicChipText: {
      control: 'text',
      if: { arg: 'type', eq: 'Chip-basic' },
      name: 'Text on Basic chip',
      table: {
        category: componentPropertyCategory,
      },
    },
    numberChipText: {
      control: 'text',
      if: { arg: 'type', eq: 'chip-Number' },
      name: 'Text on chip-number',
      table: {
        category: componentPropertyCategory,
      },
    },
    numberTagText: {
      control: 'text',
      if: { arg: 'type', eq: 'chip-Number' },
      name: 'Number tag text',
      table: {
        category: componentPropertyCategory,
      },
    },
    showLeadingLogo: {
      control: 'boolean',
      if: { arg: 'type', eq: 'chip-Number' },
      name: 'Show leading Logo',
      table: {
        category: componentPropertyCategory,
      },
    },
    theme: {
      control: 'inline-radio',
      name: 'Theme',
      options: chipThemes,
      table: {
        category: componentPropertyCategory,
      },
    },
    label: {
      table: {
        disable: true,
      },
    },
    numberTagState: {
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
    onClick: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<ChipStoryArgs>

export default meta

type Story = StoryObj<ChipStoryArgs>

const chipCode = `import { useState } from 'react'
import { BlinkXChip } from './BlinkXChip'
import './BlinkXChip.css'

export function Example() {
  const [state, setState] = useState('default')

  return (
    <BlinkXChip
      type="chip-Number"
      state={state}
      size="md"
      label="Options"
      numberTagText="12"
      theme="light"
      onClick={() => setState('active')}
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

function downloadChipsMarkdown() {
  const link = document.createElement('a')
  link.href = chipsMarkdownHref
  link.download = chipsMarkdownDownloadName
  document.body.appendChild(link)
  link.click()
  link.remove()
}

function ChipsHeader() {
  return (
    <header className="components-buttons-header">
      <div>
        <p className="components-buttons-kicker">Components / Chips</p>
        <h1>Chips</h1>
        <p className="components-buttons-subtext">Chips component properties from Figma.</p>
      </div>

      <div className="components-buttons-header-actions">
        <BlinkXButton
          aria-label="Download Chips markdown"
          className="components-buttons-download-button"
          label="Download .md File"
          leadingIconNode={<DownloadIcon />}
          onClick={downloadChipsMarkdown}
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

function getChipLabel(args: ChipStoryArgs) {
  return args.type === 'chip-Number'
    ? args.numberChipText || 'Options'
    : args.basicChipText || 'Options'
}

function getChipComponentProps(args: ChipStoryArgs): BlinkXChipProps {
  const type = args.type ?? 'Chip-basic'

  return {
    label: getChipLabel(args),
    numberTagText: args.numberTagText ?? '12',
    showLeadingLogo: args.showLeadingLogo ?? true,
    size: args.size ?? 'sm',
    state: args.state ?? 'default',
    theme: args.theme ?? 'light',
    type,
  }
}

function getDetailedCode(args: ChipStoryArgs) {
  const chipProps = getChipComponentProps(args)
  const theme = chipProps.theme ?? 'light'
  const state = chipProps.state ?? 'default'
  const size = chipProps.size ?? 'sm'
  const type = chipProps.type ?? 'Chip-basic'
  const label = chipProps.label ?? 'Options'
  const numberTagText = chipProps.numberTagText ?? '12'
  const showLeadingLogo = chipProps.showLeadingLogo ?? true
  const sizeSpec = chipSizeSpecs[size]
  const tokens = chipThemeTokens[theme]
  const isNumberChip = type === 'chip-Number'

  return `import { useState } from 'react'

const [chipState, setChipState] = useState('${state}')

<BlinkXChip
  type="${type}"
  state={chipState}
  size="${size}"
  label="${label}"
${isNumberChip ? `  numberTagText="${numberTagText}"\n  showLeadingLogo={${showLeadingLogo}}\n` : ''}  theme="${theme}"
  onClick={() => setChipState('active')}
/>

/* Component CSS */
.blinkx-chip {
  --chip-bg: transparent;
  --chip-border: ${tokens.primaryStroke};
  --chip-border-active: ${tokens.activeStroke};
  --chip-border-disabled: ${tokens.disabledStroke};
  --chip-border-hover: ${tokens.hoverStroke};
  --chip-focus-ring: ${tokens.focusRing};
  --chip-label: ${tokens.secondaryText};
  --chip-label-active: ${tokens.activeText};
  --chip-label-disabled: ${tokens.disabledText};
  --chip-label-hover: ${tokens.hoverText};
  --chip-number-active-bg: ${tokens.numberActiveFill};
  --chip-number-default-bg: ${tokens.numberDefaultFill};
  --chip-number-disabled-bg: ${tokens.numberDisabledFill};
  --chip-number-hover-bg: ${tokens.numberHoverFill};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-width: 0;
  height: ${sizeSpec.height}; /* ${pxToRem(sizeSpec.height)} */
  padding: ${isNumberChip ? sizeSpec.numberPadding : sizeSpec.basicPadding};
  border: 1px solid var(--chip-border);
  border-radius: 9999px;
  background: var(--chip-bg);
  color: var(--chip-label);
  font-family: Barlow, sans-serif;
  font-size: ${sizeSpec.fontSize}; /* ${pxToRem(sizeSpec.fontSize)} */
  font-weight: 600;
  line-height: ${sizeSpec.lineHeight}; /* ${pxToRem(sizeSpec.lineHeight)} */
  letter-spacing: 0;
  white-space: nowrap;
  cursor: pointer;
  transition: background 160ms cubic-bezier(0.2, 0, 0, 1),
    border-color 160ms cubic-bezier(0.2, 0, 0, 1),
    box-shadow 160ms cubic-bezier(0.2, 0, 0, 1),
    color 160ms cubic-bezier(0.2, 0, 0, 1);
}

.blinkx-chip__content {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${isNumberChip ? sizeSpec.numberGap : '7px'}; /* ${
    isNumberChip ? pxToRem(sizeSpec.numberGap) : '0.4375rem'
  } */
}

.blinkx-chip:hover:not(:disabled),
.blinkx-chip[data-state="hover"] {
  background: ${tokens.hoverFill};
  border-color: var(--chip-border-hover);
  color: var(--chip-label-hover);
}

.blinkx-chip[data-state="active"] {
  border-color: var(--chip-border-active);
  color: var(--chip-label-active);
}

.blinkx-chip:focus-visible,
.blinkx-chip[data-state="focused"] {
  border-color: var(--chip-border-active);
  box-shadow: 0 0 0 3px var(--chip-focus-ring);
  outline: none;
}

.blinkx-chip:disabled,
.blinkx-chip[data-state="disabled"] {
  border-color: var(--chip-border-disabled);
  color: var(--chip-label-disabled);
  cursor: not-allowed;
}

.blinkx-chip__number-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: ${sizeSpec.numberTagMinWidth}; /* ${pxToRem(sizeSpec.numberTagMinWidth)} */
  height: ${sizeSpec.numberTagHeight}; /* ${pxToRem(sizeSpec.numberTagHeight)} */
  padding: ${sizeSpec.numberTagPadding};
  border-radius: 24px; /* 1.5rem */
  background: var(--chip-number-default-bg);
  color: var(--chip-label);
  font-size: ${sizeSpec.numberTagFontSize}; /* ${pxToRem(sizeSpec.numberTagFontSize)} */
  font-weight: 600;
  line-height: 16px; /* 1rem */
}

.blinkx-chip[data-state="active"] .blinkx-chip__number-tag {
  background: var(--chip-number-active-bg);
  color: var(--chip-label-active);
}`
}

function PreviewCanvas(args: ChipStoryArgs) {
  const chipProps = getChipComponentProps(args)
  const theme = chipProps.theme ?? 'light'

  return (
    <main className="components-buttons-page">
      <ChipsHeader />

      <section className="button-live-section">
        <div className="button-live-preview" data-theme={theme}>
          <BlinkXChip {...chipProps} onClick={args.onClick} />
        </div>

        <ComponentCodeBlock code={getDetailedCode(args)} />
      </section>
    </main>
  )
}

function GalleryCanvas() {
  return (
    <main className="components-buttons-page">
      <ChipsHeader />

      <div className="buttons-section-list">
        <section className="buttons-section">
          <div className="buttons-section__header">
            <h2>Type</h2>
            <span>{chipTypes.length}</span>
          </div>

          <div className="buttons-token-grid">
            {chipTypes.map((type) => (
              <article className="buttons-token" key={type}>
                <div className="buttons-token__preview blinkx-chip-token-preview">
                  <BlinkXChip
                    label="Options"
                    numberTagText="12"
                    size="md"
                    state="default"
                    type={type}
                  />
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
            <span>{chipSizes.length}</span>
          </div>

          <div className="buttons-token-grid">
            {chipSizes.map((size) => (
              <article className="buttons-token" key={size}>
                <div className="buttons-token__preview blinkx-chip-token-preview">
                  <BlinkXChip label="Options" size={size} state="default" type="Chip-basic" />
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
            <span>{chipStates.length}</span>
          </div>

          <div className="buttons-token-grid">
            {chipStates.map((state) => (
              <article className="buttons-token" key={state}>
                <div className="buttons-token__preview blinkx-chip-token-preview">
                  <BlinkXChip label="Options" size="md" state={state} type="Chip-basic" />
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
            <h2>Number tag</h2>
            <span>3</span>
          </div>

          <div className="buttons-token-grid">
            {(['default', 'active', 'disabled'] satisfies BlinkXChipState[]).map((state) => (
              <article className="buttons-token" key={state}>
                <div className="buttons-token__preview blinkx-chip-token-preview">
                  <BlinkXChip
                    label="Options"
                    numberTagText="12"
                    size="lg"
                    state={state}
                    type="chip-Number"
                  />
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
            <span>{chipThemes.length}</span>
          </div>

          <div className="buttons-token-grid">
            {chipThemes.map((theme) => (
              <article className="buttons-token" key={theme}>
                <div
                  className="buttons-token__preview blinkx-chip-token-preview button-live-preview"
                  data-theme={theme}
                >
                  <BlinkXChip
                    label="Options"
                    numberTagText="12"
                    size="lg"
                    state="active"
                    theme={theme}
                    type="chip-Number"
                  />
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
    type: 'Chip-basic',
    state: 'default',
    size: 'sm',
    basicChipText: 'Options',
    numberChipText: 'Options',
    numberTagText: '12',
    showLeadingLogo: true,
    theme: 'light',
  },
  parameters: {
    docs: {
      source: {
        code: chipCode,
      },
    },
  },
  render: (args) => {
    const [, updateArgs] = useArgs<ChipStoryArgs>()

    return (
      <PreviewCanvas
        {...args}
        onClick={() => {
          if (args.state !== 'disabled') {
            updateArgs({ state: 'active' })
          }
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
