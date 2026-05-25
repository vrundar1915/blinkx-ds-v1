import type { Meta, StoryObj } from '@storybook/react-vite'
import { HugeiconsIcon } from '@hugeicons/react'
import { Download01Icon } from '@hugeicons/core-free-icons'

import {
  BlinkXQuickActionBar,
  type BlinkXQuickActionBarProps,
  type BlinkXQuickActionBarTheme,
} from './BlinkXQuickActionBar'
import { BlinkXButton } from './BlinkXButton'
import { ComponentCodeBlock } from './ComponentCodeBlock'
import './ButtonsStory.css'

const quickActionStates = [
  'none',
  'buy',
  'sell',
  'trading-view',
  'view-chart',
  'market-depth',
  'option-chain',
  'more-options',
] as const
const quickActionThemes: BlinkXQuickActionBarTheme[] = ['light', 'dark']
const componentPropertyCategory = 'Component\u00A0property'
const quickActionMarkdownHref = '/blinkx-quick-action-bar.md'
const quickActionMarkdownDownloadName = 'blinkx-quick-action-bar.md'

type QuickActionState = typeof quickActionStates[number]
type QuickActionStoryArgs = BlinkXQuickActionBarProps & {
  activeAction: QuickActionState
}

type QuickActionThemeTokens = {
  buy: string
  buyHover: string
  controlBackground: string
  controlHover: string
  icon: string
  sell: string
  sellHover: string
  shadowLg: string
  shadowXl: string
  stroke: string
  surface: string
  tooltipBackground: string
  tooltipStroke: string
  tooltipText: string
}

const quickActionLabels: Record<Exclude<QuickActionState, 'none'>, string> = {
  buy: 'Buy',
  sell: 'Sell',
  'trading-view': 'Trading View',
  'view-chart': 'View Chart',
  'market-depth': 'Market depth',
  'option-chain': 'Option chain',
  'more-options': 'More options',
}

const quickActionThemeTokens = {
  light: {
    buy: '#2BB02B',
    buyHover: '#289329',
    controlBackground: '#FFFFFF',
    controlHover: '#F2F2F2',
    icon: '#414143',
    sell: '#DD2006',
    sellHover: '#B6200C',
    shadowLg:
      '0 2px 2px -1px #0A0D100A, 0 4px 6px -2px #0A0D1008, 0 12px 16px -4px #0A0D1014',
    shadowXl:
      '0 3px 3px -1.5px #0A0D100A, 0 8px 8px -4px #0A0D1008, 0 20px 24px -4px #0A0D1014',
    stroke: '#E0E0E0',
    surface: '#FFFFFF',
    tooltipBackground: '#000000',
    tooltipStroke: 'transparent',
    tooltipText: '#FFFFFF',
  },
  dark: {
    buy: '#45B045',
    buyHover: '#367139',
    controlBackground: '#1A1E23',
    controlHover: '#33373B',
    icon: '#999999',
    sell: '#DD422C',
    sellHover: '#85382F',
    shadowLg:
      '0 2px 2px -1px #0A0D1033, 0 4px 6px -2px #0A0D102E, 0 12px 16px -4px #0A0D105C',
    shadowXl:
      '0 3px 3px -1.5px #0A0D1033, 0 8px 8px -4px #0A0D102E, 0 20px 24px -4px #0A0D105C',
    stroke: '#353C46',
    surface: '#1A1E23',
    tooltipBackground: '#000000',
    tooltipStroke: '#24282D',
    tooltipText: '#FFFFFF',
  },
} satisfies Record<BlinkXQuickActionBarTheme, QuickActionThemeTokens>

const quickActionSpec = {
  actionSize: '28px',
  actionRadius: '8px',
  barGap: '4px',
  barHeight: '44px',
  barPadding: '8px',
  barRadius: '12px',
  barWidth: '246px',
  groupGap: '8px',
  iconSize: '16px',
  moreGap: '6px',
} as const

const meta = {
  title: 'Components/Quick Action Bar',
  component: BlinkXQuickActionBar,
  parameters: {
    layout: 'fullscreen',
    controls: {
      sort: 'none',
    },
  },
  argTypes: {
    activeAction: {
      table: {
        disable: true,
      },
    },
    theme: {
      control: 'inline-radio',
      name: 'Theme',
      options: quickActionThemes,
      table: {
        category: componentPropertyCategory,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    defaultActiveAction: {
      table: {
        disable: true,
      },
    },
    onActionChange: {
      table: {
        disable: true,
      },
    },
    showTooltip: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<QuickActionStoryArgs>

export default meta

type Story = StoryObj<QuickActionStoryArgs>

const quickActionCode = `import { BlinkXQuickActionBar } from './BlinkXQuickActionBar'
import './BlinkXQuickActionBar.css'

export function Example() {
  return <BlinkXQuickActionBar theme="light" />
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

function downloadQuickActionMarkdown() {
  const link = document.createElement('a')
  link.href = quickActionMarkdownHref
  link.download = quickActionMarkdownDownloadName
  document.body.appendChild(link)
  link.click()
  link.remove()
}

function QuickActionHeader() {
  return (
    <header className="components-buttons-header">
      <div>
        <p className="components-buttons-kicker">Components / Quick Action Bar</p>
        <h1>Quick Action Bar</h1>
        <p className="components-buttons-subtext">
          Quick Action Bar component properties from Figma.
        </p>
      </div>

      <div className="components-buttons-header-actions">
        <BlinkXButton
          aria-label="Download Quick Action Bar markdown"
          className="components-buttons-download-button"
          label="Download .md File"
          leadingIconNode={<DownloadIcon />}
          onClick={downloadQuickActionMarkdown}
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

function getControlledAction(action: QuickActionState) {
  return action === 'none' ? undefined : action
}

function getDetailedCode(args: QuickActionStoryArgs) {
  const theme = args.theme ?? 'light'
  const tokens = quickActionThemeTokens[theme]

  return `import { BlinkXTooltip } from './BlinkXTooltip'

<BlinkXQuickActionBar theme="${theme}" />

/* Inside BlinkXQuickActionBar, reuse the shared Tooltip component. */
{hoveredAction !== 'none' ? (
  <BlinkXTooltip
    className="blinkx-quick-action-bar__tooltip"
    data-action={hoveredAction}
    showSupportingText={false}
    title={quickActionLabels[hoveredAction]}
    type="bottom-Centre"
  />
) : null}

/* Component CSS */
.blinkx-quick-action-bar {
  --qbar-buy: ${tokens.buy};
  --qbar-buy-hover: ${tokens.buyHover};
  --qbar-control-bg: ${tokens.controlBackground};
  --qbar-control-hover: ${tokens.controlHover};
  --qbar-icon: ${tokens.icon};
  --qbar-sell: ${tokens.sell};
  --qbar-sell-hover: ${tokens.sellHover};
  --qbar-shadow-lg: ${tokens.shadowLg};
  --qbar-shadow-xl: ${tokens.shadowXl};
  --qbar-stroke: ${tokens.stroke};
  --qbar-surface: ${tokens.surface};
  --qbar-tooltip-bg: ${tokens.tooltipBackground};
  --qbar-tooltip-stroke: ${tokens.tooltipStroke};
  --qbar-tooltip-text: ${tokens.tooltipText};
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  min-height: ${quickActionSpec.barHeight}; /* ${pxToRem(quickActionSpec.barHeight)} */
  padding: ${quickActionSpec.barPadding}; /* ${pxToRem(quickActionSpec.barPadding)} */
  gap: ${quickActionSpec.barGap}; /* ${pxToRem(quickActionSpec.barGap)} */
  border: 0;
  border-radius: ${quickActionSpec.barRadius}; /* ${pxToRem(quickActionSpec.barRadius)} */
  outline: 1px solid var(--qbar-stroke);
  outline-offset: -1px;
  background: var(--qbar-surface);
  box-shadow: var(--qbar-shadow-lg); /* Foundation Shadow/Shadow-lg */
  position: relative;
}

.blinkx-quick-action-bar__content {
  display: inline-flex;
  align-items: center;
  gap: ${quickActionSpec.moreGap}; /* ${pxToRem(quickActionSpec.moreGap)} */
  height: ${quickActionSpec.actionSize}; /* ${pxToRem(quickActionSpec.actionSize)} */
}

.blinkx-quick-action-bar__group {
  display: inline-flex;
  align-items: center;
  gap: ${quickActionSpec.groupGap}; /* ${pxToRem(quickActionSpec.groupGap)} */
}

.blinkx-quick-action-bar__action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${quickActionSpec.actionSize}; /* ${pxToRem(quickActionSpec.actionSize)} */
  height: ${quickActionSpec.actionSize}; /* ${pxToRem(quickActionSpec.actionSize)} */
  padding: 0;
  border: 1px solid var(--qbar-stroke);
  border-radius: ${quickActionSpec.actionRadius}; /* ${pxToRem(quickActionSpec.actionRadius)} */
  background: var(--qbar-control-bg);
  color: var(--qbar-icon);
  font-family: Barlow, sans-serif;
  font-size: 18px; /* 1.125rem */
  font-weight: 600;
  line-height: 22px; /* 1.375rem */
  cursor: pointer;
}

.blinkx-quick-action-bar__action[data-tone="buy"] {
  background: var(--qbar-buy);
  border-color: transparent;
  color: #FFFFFF;
}

.blinkx-quick-action-bar__action[data-tone="sell"] {
  background: var(--qbar-sell);
  border-color: transparent;
  color: #FFFFFF;
}

.blinkx-quick-action-bar__action:hover,
.blinkx-quick-action-bar__action[data-active="true"] {
  background: var(--qbar-control-hover);
}

.blinkx-quick-action-bar__action[data-tone="buy"]:hover,
.blinkx-quick-action-bar__action[data-tone="buy"][data-active="true"] {
  background: var(--qbar-buy-hover);
}

.blinkx-quick-action-bar__action[data-tone="sell"]:hover,
.blinkx-quick-action-bar__action[data-tone="sell"][data-active="true"] {
  background: var(--qbar-sell-hover);
}

.blinkx-quick-action-bar__icon,
.blinkx-quick-action-bar__dots {
  width: ${quickActionSpec.iconSize}; /* ${pxToRem(quickActionSpec.iconSize)} */
  height: ${quickActionSpec.iconSize}; /* ${pxToRem(quickActionSpec.iconSize)} */
}

.blinkx-quick-action-bar__more {
  width: ${quickActionSpec.iconSize}; /* ${pxToRem(quickActionSpec.iconSize)} */
  height: ${quickActionSpec.actionSize}; /* ${pxToRem(quickActionSpec.actionSize)} */
  padding: 0;
  border: 0;
  border-radius: 6px; /* 0.375rem */
  background: transparent;
  color: var(--qbar-icon);
  position: relative;
}

.blinkx-quick-action-bar__more::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  height: ${quickActionSpec.actionSize}; /* ${pxToRem(quickActionSpec.actionSize)} */
  width: ${quickActionSpec.iconSize}; /* ${pxToRem(quickActionSpec.iconSize)} */
  border-radius: 6px; /* 0.375rem */
  background: var(--qbar-control-hover);
  opacity: 0;
  transform: translate(-50%, -50%);
  transition:
    opacity 160ms cubic-bezier(0.2, 0, 0, 1),
    background 160ms cubic-bezier(0.2, 0, 0, 1);
  z-index: 0;
}

.blinkx-quick-action-bar__more:hover::before,
.blinkx-quick-action-bar__more[data-active="true"]::before {
  opacity: 1;
}

.blinkx-quick-action-bar__more .blinkx-quick-action-bar__dots {
  position: relative;
  z-index: 1;
}

.blinkx-quick-action-bar__tooltip {
  --tooltip-bg: var(--qbar-tooltip-bg);
  --tooltip-title: var(--qbar-tooltip-text);
  position: absolute;
  bottom: calc(100% - 6px);
  left: 22px;
  filter: none;
  pointer-events: none;
  transform: translateX(-50%);
  z-index: 2;
}

.blinkx-quick-action-bar__tooltip .blinkx-tooltip__surface {
  box-shadow: var(--qbar-shadow-xl); /* Foundation Shadow/Shadow-xl */
  justify-items: center;
  min-width: max-content;
  outline: 1px solid var(--qbar-tooltip-stroke);
  outline-offset: -1px;
  width: max-content;
  z-index: 2;
}

.blinkx-quick-action-bar__tooltip .blinkx-tooltip__arrow {
  box-shadow: 0 0 0 1px var(--qbar-tooltip-stroke);
}

.blinkx-quick-action-bar__tooltip .blinkx-tooltip__title {
  overflow-wrap: normal;
  text-align: center;
  white-space: nowrap;
  word-break: normal;
}

.blinkx-quick-action-bar__tooltip[data-action="buy"] .blinkx-tooltip__surface,
.blinkx-quick-action-bar__tooltip[data-action="sell"] .blinkx-tooltip__surface {
  padding-left: 14px; /* 0.875rem */
  padding-right: 14px; /* 0.875rem */
}

.blinkx-quick-action-bar__tooltip[data-action="sell"] {
  left: 58px;
}

.blinkx-quick-action-bar__tooltip[data-action="trading-view"] {
  left: 94px;
}

.blinkx-quick-action-bar__tooltip[data-action="view-chart"] {
  left: 130px;
}

.blinkx-quick-action-bar__tooltip[data-action="market-depth"] {
  left: 166px;
}

.blinkx-quick-action-bar__tooltip[data-action="option-chain"] {
  left: 202px;
}

.blinkx-quick-action-bar__tooltip[data-action="more-options"] {
  left: 230px;
}`
}

function PreviewCanvas(args: QuickActionStoryArgs) {
  const theme = args.theme ?? 'light'
  const { activeAction: _activeAction, onActionChange: _onActionChange, ...previewArgs } = args
  void _activeAction
  void _onActionChange

  return (
    <main className="components-buttons-page">
      <QuickActionHeader />

      <section className="button-live-section">
        <div className="button-live-preview" data-theme={theme}>
          <BlinkXQuickActionBar
            {...previewArgs}
            theme={theme}
          />
        </div>

        <ComponentCodeBlock code={getDetailedCode(args)} />
      </section>
    </main>
  )
}

function GalleryCanvas() {
  return (
    <main className="components-buttons-page">
      <QuickActionHeader />

      <div className="buttons-section-list">
        <section className="buttons-section">
          <div className="buttons-section__header">
            <h2>State</h2>
            <span>{quickActionStates.length}</span>
          </div>

          <div className="buttons-token-grid quick-action-state-grid">
            {quickActionStates.map((activeAction) => (
              <article className="buttons-token" key={activeAction}>
                <div className="buttons-token__preview blinkx-quick-action-bar-token-preview">
                  <BlinkXQuickActionBar activeAction={getControlledAction(activeAction)} />
                </div>
                <div className="buttons-token__body">
                  <span className="buttons-token__name">
                    {activeAction === 'none' ? 'Default' : quickActionLabels[activeAction]}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="buttons-section">
          <div className="buttons-section__header">
            <h2>Theme</h2>
            <span>{quickActionThemes.length}</span>
          </div>

          <div className="buttons-token-grid quick-action-theme-grid">
            {quickActionThemes.map((theme) => (
              <article className="buttons-token" key={theme}>
                <div
                  className="buttons-token__preview blinkx-quick-action-bar-token-preview button-live-preview"
                  data-theme={theme}
                >
                  <BlinkXQuickActionBar activeAction="market-depth" theme={theme} />
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
    activeAction: 'none',
    theme: 'light',
  },
  parameters: {
    docs: {
      source: {
        code: quickActionCode,
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
