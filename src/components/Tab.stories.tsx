import { useEffect } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { HugeiconsIcon } from '@hugeicons/react'
import { Download01Icon } from '@hugeicons/core-free-icons'
import { useArgs } from 'storybook/preview-api'

import {
  BlinkXTab,
  type BlinkXTabCount,
  type BlinkXTabProps,
  type BlinkXTabTheme,
} from './BlinkXTab'
import { BlinkXButton } from './BlinkXButton'
import { ComponentCodeBlock } from './ComponentCodeBlock'
import './ButtonsStory.css'

const tabCounts: BlinkXTabCount[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10']
const tabOffSlots = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const
const tabTagPositions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const
const tabThemes: BlinkXTabTheme[] = ['light', 'dark']
const componentPropertyCategory = 'Component\u00A0property'
const tabMarkdownHref = '/blinkx-tab.md'
const tabMarkdownDownloadName = 'blinkx-tab.md'

type TabOffSlot = typeof tabOffSlots[number]
type TabTextArgs = {
  tab1SingleOffText: string
  tabOnText: string
} & {
  [Key in `tab${TabOffSlot}OffText`]: string
}
type TabVisibilityArgs = {
  tab1SingleOffVisible?: boolean
} & {
  [Key in `tab${TabOffSlot}OffVisible`]?: boolean
}
type TabStoryArgs = BlinkXTabProps & TabTextArgs & TabVisibilityArgs

type TabSpec = {
  activeIndicatorHeight: string
  fontFamily: string
  fontSize: string
  fontWeight: string
  labelGap: string
  labelHeight: string
  labelPaddingX: string
  labelPaddingY: string
  lineHeight: string
  rootGap: string
  tagRadius: string
  tabHeight: string
}

type TabThemeTokens = {
  activeText: string
  borderColor: string
  focusRing: string
  hoverSurface: string
  hoverText: string
  inactiveText: string
  tagBg: string
  tagText: string
}

const tabSpec = {
  activeIndicatorHeight: '4px',
  fontFamily: 'Barlow',
  fontSize: '14px',
  fontWeight: '600',
  labelGap: '4px',
  labelHeight: '24px',
  labelPaddingX: '4px',
  labelPaddingY: '2px',
  lineHeight: '20px',
  rootGap: '8px',
  tagRadius: '9999px',
  tabHeight: '40px',
} satisfies TabSpec

const tabThemeTokens = {
  light: {
    activeText: '#171EFD',
    borderColor: '#E7E7E7',
    focusRing: '#D1D2FF',
    hoverSurface: '#F2F2F2',
    hoverText: '#41414E',
    inactiveText: '#666666',
    tagBg:
      'linear-gradient(90deg, rgb(68 15 118 / 10%) 0%, rgb(161 0 111 / 10%) 27.4038%, rgb(221 59 89 / 10%) 50%, rgb(251 128 67 / 10%) 70%, rgb(253 197 67 / 10%) 100%), #FFFFFF',
    tagText: 'linear-gradient(90deg, #A1006F 0%, #440F76 100%)',
  },
  dark: {
    activeText: '#585DFE',
    borderColor: '#33373B',
    focusRing: '#3F44A6',
    hoverSurface: '#272A2F',
    hoverText: '#CACACE',
    inactiveText: '#B2B2B3',
    tagBg: 'linear-gradient(90deg, #B84B96 0%, #9652D6 100%)',
    tagText: '#FFFFFF',
  },
} satisfies Record<BlinkXTabTheme, TabThemeTokens>

function getTabCountNumber(noOfTabs: BlinkXTabCount) {
  return Number.parseInt(noOfTabs, 10)
}

function clampSelectedIndex(selectedIndex: number | undefined, tabCount: number) {
  return Math.min(Math.max(selectedIndex ?? 0, 0), tabCount - 1)
}

function clampTagPosition(tagPosition: number | undefined, tabCount: number) {
  return Math.min(Math.max(tagPosition ?? Math.min(3, tabCount), 1), tabCount)
}

function getOffTextArgKey(slot: TabOffSlot) {
  return `tab${slot}OffText` as keyof TabTextArgs
}

function getOffVisibleArgKey(slot: TabOffSlot) {
  return `tab${slot}OffVisible` as keyof TabVisibilityArgs
}

function getTabTextVisibility(tabCount: number) {
  return tabOffSlots.reduce<TabVisibilityArgs>(
    (visibility, slot) => {
      visibility[getOffVisibleArgKey(slot)] = tabCount > 2 && slot <= tabCount - 1

      return visibility
    },
    {
      tab1SingleOffVisible: tabCount === 2,
    },
  )
}

function getDefaultLabels(tabCount: number) {
  return Array.from({ length: tabCount }, (_, index) => (index === 0 ? 'F&O' : 'Equity'))
}

function getTabLabels(args: TabStoryArgs) {
  const noOfTabs = args.noOfTabs ?? '3'
  const tabCount = getTabCountNumber(noOfTabs)
  const activeIndex = clampSelectedIndex(args.selectedIndex, tabCount)
  let offSlot = 1

  return Array.from({ length: tabCount }, (_, index) => {
    if (index === activeIndex) {
      return args.tabOnText || 'F&O'
    }

    if (tabCount === 2) {
      return args.tab1SingleOffText || 'Equity'
    }

    const textKey = getOffTextArgKey(offSlot as TabOffSlot)
    offSlot += 1

    return args[textKey] || 'Equity'
  })
}

function getTabComponentProps(args: TabStoryArgs): BlinkXTabProps {
  const {
    noOfTabs = '3',
    onValueChange,
    selectedIndex,
    showTag = true,
    tagIndex,
    tagText = 'NEW',
    theme = 'light',
  } = args
  const tabCount = getTabCountNumber(noOfTabs)
  const tagPosition = clampTagPosition(tagIndex, tabCount)

  return {
    labels: getTabLabels(args),
    noOfTabs,
    onValueChange,
    selectedIndex: clampSelectedIndex(selectedIndex, tabCount),
    showTag,
    tagPosition,
    tagText,
    theme,
  }
}

function getTabTextUpdatesForSelection(args: TabStoryArgs, selectedIndex: number, tabCount: number) {
  const labels = getTabLabels(args)
  const activeIndex = clampSelectedIndex(selectedIndex, tabCount)
  const updates: Partial<TabStoryArgs> = {
    selectedIndex: activeIndex,
    tabOnText: labels[activeIndex] ?? 'F&O',
  }

  if (tabCount === 2) {
    updates.tab1SingleOffText = labels[activeIndex === 0 ? 1 : 0] ?? 'Equity'

    return updates
  }

  let offSlot = 1

  labels.forEach((label, index) => {
    if (index === activeIndex) return

    updates[getOffTextArgKey(offSlot as TabOffSlot)] = label ?? 'Equity'
    offSlot += 1
  })

  return updates
}

const tabTextArgTypes = tabOffSlots.reduce<Record<string, unknown>>(
  (argTypes, slot) => {
    argTypes[`tab${slot}OffText`] = {
      control: 'text',
      if: { arg: `tab${slot}OffVisible`, truthy: true },
      name: `Text on tab-off-${slot}`,
      table: {
        category: componentPropertyCategory,
      },
    }
    argTypes[`tab${slot}OffVisible`] = {
      control: false,
      table: {
        disable: true,
      },
    }

    return argTypes
  },
  {
    tabOnText: {
      control: 'text',
      name: 'Text on tab-on',
      table: {
        category: componentPropertyCategory,
      },
    },
    tab1SingleOffText: {
      control: 'text',
      if: { arg: 'tab1SingleOffVisible', truthy: true },
      name: 'Text on tab-off',
      table: {
        category: componentPropertyCategory,
      },
    },
    tab1SingleOffVisible: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
)

const meta = {
  title: 'Components/Tab',
  component: BlinkXTab,
  parameters: {
    layout: 'fullscreen',
    controls: {
      sort: 'none',
    },
  },
  argTypes: {
    noOfTabs: {
      control: 'select',
      name: 'No. of tabs',
      options: tabCounts,
      table: {
        category: componentPropertyCategory,
      },
    },
    ...tabTextArgTypes,
    showTag: {
      control: 'boolean',
      name: 'Show Tag',
      table: {
        category: componentPropertyCategory,
      },
    },
    tagIndex: {
      control: 'select',
      if: { arg: 'showTag', truthy: true },
      name: 'Tag Position',
      options: tabTagPositions,
      table: {
        category: componentPropertyCategory,
      },
    },
    tagText: {
      control: 'text',
      if: { arg: 'showTag', truthy: true },
      name: 'Text on Tag',
      table: {
        category: componentPropertyCategory,
      },
    },
    theme: {
      control: 'inline-radio',
      name: 'Theme',
      options: tabThemes,
      table: {
        category: componentPropertyCategory,
      },
    },
    'aria-label': {
      table: {
        disable: true,
      },
    },
    tagPosition: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    defaultSelectedIndex: {
      table: {
        disable: true,
      },
    },
    labels: {
      table: {
        disable: true,
      },
    },
    onValueChange: {
      table: {
        disable: true,
      },
    },
    selectedIndex: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<TabStoryArgs>

export default meta

type Story = StoryObj<TabStoryArgs>

const tabCode = `import { useState } from 'react'
import { BlinkXTab } from './BlinkXTab'
import './BlinkXTab.css'

export function Example() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <BlinkXTab
      noOfTabs="3"
      selectedIndex={selectedIndex}
      onValueChange={setSelectedIndex}
      labels={["F&O", "Equity", "Equity"]}
      showTag
      tagPosition={3}
      tagText="NEW"
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

function downloadTabMarkdown() {
  const link = document.createElement('a')
  link.href = tabMarkdownHref
  link.download = tabMarkdownDownloadName
  document.body.appendChild(link)
  link.click()
  link.remove()
}

function TabHeader() {
  return (
    <header className="components-buttons-header">
      <div>
        <p className="components-buttons-kicker">Components / Tab</p>
        <h1>Tab</h1>
        <p className="components-buttons-subtext">Tab component properties from Figma.</p>
      </div>

      <div className="components-buttons-header-actions">
        <BlinkXButton
          aria-label="Download Tab markdown"
          className="components-buttons-download-button"
          label="Download .md File"
          leadingIconNode={<DownloadIcon />}
          onClick={downloadTabMarkdown}
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

function getDetailedCode(args: TabStoryArgs) {
  const noOfTabs = args.noOfTabs ?? '3'
  const tabCount = getTabCountNumber(noOfTabs)
  const activeIndex = clampSelectedIndex(args.selectedIndex, tabCount)
  const labels = getTabLabels(args)
  const showTag = args.showTag ?? true
  const tagPosition = clampTagPosition(args.tagIndex, tabCount)
  const tagText = args.tagText ?? 'NEW'
  const theme = args.theme ?? 'light'
  const tokens = tabThemeTokens[theme]

  return `const [selectedIndex, setSelectedIndex] = useState(${activeIndex})

<BlinkXTab
  noOfTabs="${noOfTabs}"
  selectedIndex={selectedIndex}
  onValueChange={setSelectedIndex}
  labels={${JSON.stringify(labels)}}
  showTag={${showTag}}
  tagPosition={${tagPosition}}
  tagText="${tagText}"
  theme="${theme}"
/>

/* Component CSS */
.blinkx-tab.blinkx-tab--theme-${theme} {
  --tab-active: ${tokens.activeText};
  --tab-hover: ${tokens.hoverSurface};
  --tab-stroke: ${tokens.borderColor};
  --tab-tag-bg: ${tokens.tagBg};
  --tab-tag-text: ${tokens.tagText};
  --tab-text-hover: ${tokens.hoverText};
  --tab-text-secondary: ${tokens.inactiveText};
  --tab-focus-ring: ${tokens.focusRing};
  display: inline-flex;
  align-items: flex-start;
  gap: ${tabSpec.rootGap}; /* ${pxToRem(tabSpec.rootGap)} */
  min-height: ${tabSpec.tabHeight}; /* ${pxToRem(tabSpec.tabHeight)} */
  width: fit-content;
  border-bottom: 1px solid var(--tab-stroke);
  font-family: ${tabSpec.fontFamily}, sans-serif;
}

.blinkx-tab__item {
  display: inline-flex;
  flex-direction: column;
  align-items: stretch;
  gap: 12px; /* 0.75rem */
  height: ${tabSpec.tabHeight}; /* ${pxToRem(tabSpec.tabHeight)} */
  padding: 0;
  color: var(--tab-text-secondary);
  background: transparent;
  border: 0;
  cursor: pointer;
}

.blinkx-tab__label-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${tabSpec.labelGap}; /* ${pxToRem(tabSpec.labelGap)} */
  height: ${tabSpec.labelHeight}; /* ${pxToRem(tabSpec.labelHeight)} */
  padding: ${tabSpec.labelPaddingY} ${tabSpec.labelPaddingX};
}

.blinkx-tab__label {
  font-size: ${tabSpec.fontSize}; /* ${pxToRem(tabSpec.fontSize)} */
  font-weight: ${tabSpec.fontWeight};
  line-height: ${tabSpec.lineHeight}; /* ${pxToRem(tabSpec.lineHeight)} */
  letter-spacing: 0;
  white-space: nowrap;
}

.blinkx-tab__indicator {
  width: 100%;
  height: ${tabSpec.activeIndicatorHeight}; /* ${pxToRem(tabSpec.activeIndicatorHeight)} */
  border-radius: 9999px 9999px 0 0;
  background: transparent;
}

.blinkx-tab__item:hover:not([data-active="true"]) {
  color: var(--tab-text-hover);
}

.blinkx-tab__item:hover:not([data-active="true"]) .blinkx-tab__indicator {
  background: var(--tab-hover);
}

.blinkx-tab__item:focus-visible .blinkx-tab__label-wrap {
  outline: 3px solid var(--tab-focus-ring);
  outline-offset: 2px;
}

.blinkx-tab__item[data-active="true"] {
  color: var(--tab-active);
}

.blinkx-tab__item[data-active="true"] .blinkx-tab__indicator {
  background: var(--tab-active);
}

.blinkx-tab__tag {
  display: inline-flex;
  align-items: center;
  height: 20px; /* 1.25rem */
  padding: 2px 7px;
  border-radius: ${tabSpec.tagRadius}; /* ${pxToRem(tabSpec.tagRadius)} */
  background: var(--tab-tag-bg);
  color: transparent;
  font-size: 12px; /* 0.75rem */
  font-weight: 600;
  line-height: 16px; /* 1rem */
  overflow: hidden;
  text-transform: uppercase;
  white-space: nowrap;
}

.blinkx-tab__tag-label {
  background: var(--tab-tag-text);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}`
}

function PreviewCanvas(args: TabStoryArgs) {
  const tabProps = getTabComponentProps(args)
  const theme = tabProps.theme ?? 'light'

  return (
    <main className="components-buttons-page">
      <TabHeader />

      <section className="button-live-section">
        <div className="button-live-preview" data-theme={theme}>
          <BlinkXTab {...tabProps} />
        </div>

        <ComponentCodeBlock code={getDetailedCode(args)} />
      </section>
    </main>
  )
}

function GalleryCanvas() {
  return (
    <main className="components-buttons-page">
      <TabHeader />

      <div className="buttons-section-list">
        <section className="buttons-section">
          <div className="buttons-section__header">
            <h2>No. of tabs</h2>
            <span>{tabCounts.length}</span>
          </div>

          <div className="buttons-token-grid tab-count-grid">
            {tabCounts.map((noOfTabs) => {
              const tabCount = getTabCountNumber(noOfTabs)

              return (
                <article className="buttons-token" key={noOfTabs}>
                  <div className="buttons-token__preview blinkx-tab-token-preview">
                    <BlinkXTab
                      labels={getDefaultLabels(tabCount)}
                      noOfTabs={noOfTabs}
                      showTag={noOfTabs === '3'}
                      tagPosition={3}
                    />
                  </div>
                  <div className="buttons-token__body">
                    <span className="buttons-token__name">{noOfTabs}</span>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="buttons-section">
          <div className="buttons-section__header">
            <h2>Tag</h2>
            <span>2</span>
          </div>

          <div className="buttons-token-grid">
            {[false, true].map((showTag) => (
              <article className="buttons-token" key={String(showTag)}>
                <div className="buttons-token__preview blinkx-tab-token-preview">
                  <BlinkXTab noOfTabs="3" showTag={showTag} tagPosition={3} />
                </div>
                <div className="buttons-token__body">
                  <span className="buttons-token__name">{showTag ? 'Show Tag' : 'Hide Tag'}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="buttons-section">
          <div className="buttons-section__header">
            <h2>Theme</h2>
            <span>{tabThemes.length}</span>
          </div>

          <div className="buttons-token-grid">
            {tabThemes.map((theme) => (
              <article className="buttons-token" key={theme}>
                <div
                  className="buttons-token__preview blinkx-tab-token-preview button-live-preview"
                  data-theme={theme}
                >
                  <BlinkXTab noOfTabs="3" showTag tagPosition={3} theme={theme} />
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
    noOfTabs: '3',
    tabOnText: 'F&O',
    tab1OffText: 'Equity',
    tab1OffVisible: true,
    tab1SingleOffText: 'Equity',
    tab1SingleOffVisible: false,
    tab2OffText: 'Equity',
    tab2OffVisible: true,
    tab3OffText: 'Equity',
    tab3OffVisible: false,
    tab4OffText: 'Equity',
    tab4OffVisible: false,
    tab5OffText: 'Equity',
    tab5OffVisible: false,
    tab6OffText: 'Equity',
    tab6OffVisible: false,
    tab7OffText: 'Equity',
    tab7OffVisible: false,
    tab8OffText: 'Equity',
    tab8OffVisible: false,
    tab9OffText: 'Equity',
    tab9OffVisible: false,
    selectedIndex: 0,
    showTag: true,
    tagIndex: 3,
    tagText: 'NEW',
    theme: 'light',
  },
  parameters: {
    docs: {
      source: {
        code: tabCode,
      },
    },
  },
  render: (args) => {
    const [, updateArgs] = useArgs<TabStoryArgs>()
    const noOfTabs = args.noOfTabs ?? '3'
    const tabCount = getTabCountNumber(noOfTabs)
    const activeIndex = clampSelectedIndex(args.selectedIndex, tabCount)
    const safeTagPosition = clampTagPosition(args.tagIndex, tabCount)
    const textVisibility = getTabTextVisibility(tabCount)

    useEffect(() => {
      const updates: Partial<TabStoryArgs> = {}

      if (args.selectedIndex !== activeIndex) {
        updates.selectedIndex = activeIndex
      }

      if (args.tagIndex !== safeTagPosition) {
        updates.tagIndex = safeTagPosition
      }

      if (args.tab1SingleOffVisible !== textVisibility.tab1SingleOffVisible) {
        updates.tab1SingleOffVisible = textVisibility.tab1SingleOffVisible
      }

      tabOffSlots.forEach((slot) => {
        const visibleKey = getOffVisibleArgKey(slot)

        if (args[visibleKey] !== textVisibility[visibleKey]) {
          updates[visibleKey] = textVisibility[visibleKey]
        }
      })

      if (Object.keys(updates).length > 0) {
        updateArgs(updates)
      }
    }, [activeIndex, args, safeTagPosition, textVisibility, updateArgs])

    return (
      <PreviewCanvas
        {...args}
        selectedIndex={activeIndex}
        tagIndex={safeTagPosition}
        {...textVisibility}
        onValueChange={(selectedIndex) => {
          updateArgs(getTabTextUpdatesForSelection(args, selectedIndex, tabCount))
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
