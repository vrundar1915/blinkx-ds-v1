import { useEffect } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { HugeiconsIcon } from '@hugeicons/react'
import { Download01Icon } from '@hugeicons/core-free-icons'
import { useArgs } from 'storybook/preview-api'

import {
  BlinkXSegment,
  type BlinkXSegmentCount,
  type BlinkXSegmentProps,
  type BlinkXSegmentSize,
  type BlinkXSegmentTheme,
} from './BlinkXSegment'
import { BlinkXButton } from './BlinkXButton'
import { ComponentCodeBlock } from './ComponentCodeBlock'
import './ButtonsStory.css'

const segmentCounts: BlinkXSegmentCount[] = [
  'Segment-2',
  'Segment-3',
  'Segment-4',
  'Segment-5',
  'Segment-6',
  'Segment-7',
]
const segmentSizes: BlinkXSegmentSize[] = ['sm', 'md']
const segmentThemes: BlinkXSegmentTheme[] = ['light', 'dark']
const segmentOffSlots = [1, 2, 3, 4, 5, 6] as const
const componentPropertyCategory = 'Component\u00A0property'
const segmentMarkdownHref = '/blinkx-segment.md'
const segmentMarkdownDownloadName = 'blinkx-segment.md'

type SegmentOffSlot = typeof segmentOffSlots[number]
type SegmentTextArgs = {
  segment0OnText: string
  segment1SingleOffText: string
} & {
  [Key in `segment${SegmentOffSlot}OffText`]: string
}
type SegmentVisibilityArgs = {
  segment1SingleOffVisible?: boolean
} & {
  [Key in `segment${SegmentOffSlot}OffVisible`]?: boolean
}
type SegmentStoryArgs = BlinkXSegmentProps & SegmentTextArgs & SegmentVisibilityArgs

function getSegmentButtonCount(noOfButtons: BlinkXSegmentCount) {
  return Number.parseInt(noOfButtons.replace('Segment-', ''), 10)
}

function clampSelectedIndex(selectedIndex: number | undefined, buttonCount: number) {
  return Math.min(Math.max(selectedIndex ?? 0, 0), buttonCount - 1)
}

function getOffTextArgKey(slot: SegmentOffSlot) {
  return `segment${slot}OffText` as keyof SegmentTextArgs
}

function getOffVisibleArgKey(slot: SegmentOffSlot) {
  return `segment${slot}OffVisible` as keyof SegmentVisibilityArgs
}

function getSegmentTextVisibility(buttonCount: number) {
  return segmentOffSlots.reduce<SegmentVisibilityArgs>(
    (visibility, slot) => {
      visibility[getOffVisibleArgKey(slot)] = buttonCount > 2 && slot <= buttonCount - 1

      return visibility
    },
    {
      segment1SingleOffVisible: buttonCount === 2,
    },
  )
}

function getSegmentLabels(args: SegmentStoryArgs) {
  const noOfButtons = args.noOfButtons ?? 'Segment-2'
  const buttonCount = getSegmentButtonCount(noOfButtons)
  const activeIndex = clampSelectedIndex(args.selectedIndex, buttonCount)
  let offSlot = 1

  return Array.from({ length: buttonCount }, (_, index) => {
    if (index === activeIndex) {
      return args.segment0OnText || 'Local'
    }

    if (buttonCount === 2) {
      return args.segment1SingleOffText || 'Local'
    }

    const textKey = getOffTextArgKey(offSlot as SegmentOffSlot)
    offSlot += 1

    return args[textKey] || 'Local'
  })
}

function getSegmentComponentProps(args: SegmentStoryArgs): BlinkXSegmentProps {
  const {
    noOfButtons = 'Segment-2',
    onValueChange,
    selectedIndex,
    size = 'sm',
    theme = 'light',
  } = args
  const buttonCount = getSegmentButtonCount(noOfButtons)

  return {
    labels: getSegmentLabels(args),
    noOfButtons,
    onValueChange,
    selectedIndex: clampSelectedIndex(selectedIndex, buttonCount),
    size,
    theme,
  }
}

function getSegmentTextUpdatesForSelection(
  args: SegmentStoryArgs,
  selectedIndex: number,
  buttonCount: number,
) {
  const labels = getSegmentLabels(args)
  const activeIndex = clampSelectedIndex(selectedIndex, buttonCount)
  const updates: Partial<SegmentStoryArgs> = {
    segment0OnText: labels[activeIndex] ?? 'Local',
    selectedIndex: activeIndex,
  }

  if (buttonCount === 2) {
    updates.segment1SingleOffText = labels[activeIndex === 0 ? 1 : 0] ?? 'Local'

    return updates
  }

  let offSlot = 1

  labels.forEach((label, index) => {
    if (index === activeIndex) return

    updates[getOffTextArgKey(offSlot as SegmentOffSlot)] = label ?? 'Local'
    offSlot += 1
  })

  return updates
}

const segmentTextArgTypes = segmentOffSlots.reduce<Record<string, unknown>>(
  (argTypes, slot) => {
    argTypes[`segment${slot}OffText`] = {
      control: 'text',
      if: { arg: `segment${slot}OffVisible`, truthy: true },
      name: `Text on segment-off-${slot}`,
      table: {
        category: componentPropertyCategory,
      },
    }
    argTypes[`segment${slot}OffVisible`] = {
      control: false,
      table: {
        disable: true,
      },
    }

    return argTypes
  },
  {
    segment0OnText: {
      control: 'text',
      name: 'Text on segment-on',
      table: {
        category: componentPropertyCategory,
      },
    },
    segment1SingleOffText: {
      control: 'text',
      if: { arg: 'segment1SingleOffVisible', truthy: true },
      name: 'Text on segment-off',
      table: {
        category: componentPropertyCategory,
      },
    },
    segment1SingleOffVisible: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
)

type SegmentSizeSpec = {
  fontSize: string
  itemHeight: string
  lineHeight: string
  minItemWidth: string
  rootPadding: string
  segmentPaddingX: string
  segmentPaddingY: string
}

type SegmentThemeTokens = {
  bgChip: string
  bgChipHover: string
  bgNeutral: string
  shadow: string
  strokePill: string
  textActive: string
  textHover: string
  textSecondary: string
}

const themeTokens = {
  light: {
    bgChip: '#FFFFFF',
    bgChipHover: '#E7E7E7',
    bgNeutral: '#F2F2F2',
    shadow: '#0A0D101A',
    strokePill: '#FFFFFF',
    textActive: '#171EFD',
    textHover: '#41414E',
    textSecondary: '#666666',
  },
  dark: {
    bgChip: '#202429',
    bgChipHover: '#272A2F',
    bgNeutral: '#33373B',
    shadow: '#0A0D107A',
    strokePill: '#202429',
    textActive: '#585DFE',
    textHover: '#CACACE',
    textSecondary: '#B2B2B3',
  },
} satisfies Record<BlinkXSegmentTheme, SegmentThemeTokens>

const themeTokenAliases = {
  light: {
    bgChip: 'Color/background/segment/bg-segment-chip -> Colors/base/white',
    bgChipHover: 'Color/background/segment/bg-segment-chip-hover -> Colors/neutral/Light/neutral-100',
    bgNeutral: 'Color/background/segment/bg-segment-neutral -> Colors/neutral/Light/neutral-50',
    shadow: 'drop Shadow/drop-shadow-10',
    strokePill: 'Color/stroke/stroke_on-segment-pill -> Colors/base/white',
    textActive: 'Color/text/text_on-segment-button -> Colors/brand/Light/brand-500',
    textHover: 'Color/text/text-primary -> Colors/font/Light/1',
    textSecondary: 'Color/text/text-secondary -> Colors/font/Light/2',
  },
  dark: {
    bgChip: 'Color/background/segment/bg-segment-chip -> Colors/neutral/Dark/neutral-25',
    bgChipHover: 'Color/background/segment/bg-segment-chip-hover -> Colors/neutral/Dark/neutral-50',
    bgNeutral: 'Color/background/segment/bg-segment-neutral -> Colors/neutral/Dark/neutral-100',
    shadow: 'drop Shadow/drop-shadow-10',
    strokePill: 'Color/stroke/stroke_on-segment-pill -> Colors/neutral/Dark/neutral-25',
    textActive: 'Color/text/text_on-segment-button -> Colors/brand/Dark/brand-500',
    textHover: 'Color/text/text-primary -> Colors/font/Dark/1',
    textSecondary: 'Color/text/text-secondary -> Colors/font/Dark/2',
  },
} satisfies Record<BlinkXSegmentTheme, Record<keyof SegmentThemeTokens, string>>

const sizeSpecs = {
  sm: {
    fontSize: '12px',
    itemHeight: '24px',
    lineHeight: '16px',
    minItemWidth: '54px',
    rootPadding: '2px',
    segmentPaddingX: '12px',
    segmentPaddingY: '4px',
  },
  md: {
    fontSize: '14px',
    itemHeight: '28px',
    lineHeight: '20px',
    minItemWidth: '58px',
    rootPadding: '2px',
    segmentPaddingX: '12px',
    segmentPaddingY: '4px',
  },
} satisfies Record<BlinkXSegmentSize, SegmentSizeSpec>

const meta = {
  title: 'Components/Segment',
  component: BlinkXSegment,
  parameters: {
    layout: 'fullscreen',
    controls: {
      sort: 'none',
    },
  },
  argTypes: {
    noOfButtons: {
      control: 'select',
      name: 'No. of Buttons',
      options: segmentCounts,
      table: {
        category: componentPropertyCategory,
      },
    },
    ...segmentTextArgTypes,
    size: {
      control: 'inline-radio',
      name: 'Size',
      options: segmentSizes,
      table: {
        category: componentPropertyCategory,
      },
    },
    theme: {
      control: 'inline-radio',
      name: 'Theme',
      options: segmentThemes,
      table: {
        category: componentPropertyCategory,
      },
    },
    className: {
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
} satisfies Meta<SegmentStoryArgs>

export default meta

type Story = StoryObj<SegmentStoryArgs>

const segmentCode = `import { BlinkXSegment } from './BlinkXSegment'
import './BlinkXSegment.css'

export function Example() {
  return <BlinkXSegment noOfButtons="Segment-2" size="sm" theme="light" />
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

function downloadSegmentMarkdown() {
  const link = document.createElement('a')
  link.href = segmentMarkdownHref
  link.download = segmentMarkdownDownloadName
  document.body.appendChild(link)
  link.click()
  link.remove()
}

function SegmentHeader() {
  return (
    <header className="components-buttons-header">
      <div>
        <p className="components-buttons-kicker">Components / Segment</p>
        <h1>Segment</h1>
        <p className="components-buttons-subtext">Segment component properties from Figma.</p>
      </div>

      <div className="components-buttons-header-actions">
        <BlinkXButton
          aria-label="Download Segment markdown"
          className="components-buttons-download-button"
          label="Download .md File"
          leadingIconNode={<DownloadIcon />}
          onClick={downloadSegmentMarkdown}
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

function getDetailedCode(args: SegmentStoryArgs) {
  const noOfButtons = args.noOfButtons ?? 'Segment-2'
  const size = args.size ?? 'sm'
  const theme = args.theme ?? 'light'
  const selectedIndex = args.selectedIndex ?? 0
  const buttonCount = getSegmentButtonCount(noOfButtons)
  const activeIndex = Math.min(Math.max(selectedIndex, 0), buttonCount - 1)
  const labels = getSegmentLabels(args)
  const specs = sizeSpecs[size]
  const tokens = themeTokens[theme]
  const tokenAliases = themeTokenAliases[theme]

  return `<BlinkXSegment
  noOfButtons="${noOfButtons}"
  size="${size}"
  theme="${theme}"
  selectedIndex={${activeIndex}}
  labels={${JSON.stringify(labels)}}
/>`
    + `

/* Resolved CSS for current selection */
.blinkx-segment.blinkx-segment--count-${buttonCount}.blinkx-segment--size-${size}.blinkx-segment--theme-${theme} {
  display: inline-flex;
  align-items: center;
  background: ${tokens.bgNeutral};
  border-radius: 9999px;
  padding: ${specs.rootPadding}; /* ${pxToRem(specs.rootPadding)} */
}

.blinkx-segment__item {
  min-width: ${specs.minItemWidth}; /* ${pxToRem(specs.minItemWidth)} */
  height: ${specs.itemHeight}; /* ${pxToRem(specs.itemHeight)} */
  padding: ${specs.segmentPaddingY} ${specs.segmentPaddingX};
  border-radius: 9999px;
  color: ${tokens.textSecondary};
  font-family: Barlow, sans-serif;
  font-size: ${specs.fontSize}; /* ${pxToRem(specs.fontSize)} */
  font-weight: 600;
  line-height: ${specs.lineHeight}; /* ${pxToRem(specs.lineHeight)} */
  letter-spacing: 0;
}

.blinkx-segment__item:hover:not([data-active="true"]) {
  background: ${tokens.bgChipHover};
  color: ${tokens.textHover};
}

.blinkx-segment__item[data-active="true"] {
  background: ${tokens.bgChip};
  border: 1px solid ${tokens.strokePill};
  color: ${tokens.textActive};
  box-shadow:
    0 1px 2px -1px ${tokens.shadow},
    0 1px 3px 0 ${tokens.shadow};
}

/*
Figma component set
- Node: 6134:46107
- Name: Segmented Set
- Component properties: No. of Buttons=${noOfButtons}, Size=${size}
- Variants: Segment-2/3/4/5/6/7, sm/md

Color tokens extracted from Figma variables (${theme})
- Color/background/segment/bg-segment-neutral: ${tokens.bgNeutral} -> ${tokenAliases.bgNeutral}
- Color/background/segment/bg-segment-chip: ${tokens.bgChip} -> ${tokenAliases.bgChip}
- Color/background/segment/bg-segment-chip-hover: ${tokens.bgChipHover} -> ${tokenAliases.bgChipHover}
- Color/stroke/stroke_on-segment-pill: ${tokens.strokePill} -> ${tokenAliases.strokePill}
- Color/text/text_on-segment-button: ${tokens.textActive} -> ${tokenAliases.textActive}
- Color/text/text-secondary: ${tokens.textSecondary} -> ${tokenAliases.textSecondary}
- Color/text/text-primary: ${tokens.textHover} -> ${tokenAliases.textHover}
- drop Shadow/drop-shadow-10: ${tokens.shadow} -> ${tokenAliases.shadow}

Typography tokens
- Family/font-family: Barlow
- Font weight/semiBold: 600
- ${size === 'sm' ? 'size/body/text-sm' : 'size/h6/text-md'}: ${pxAndRem(specs.fontSize)}
- ${size === 'sm' ? 'Line height/label-1/text-xs' : 'Line height/h6/display'}: ${pxAndRem(specs.lineHeight)}

Layout tokens
- Root padding: ${pxAndRem(specs.rootPadding)}
- Chip padding X: ${pxAndRem(specs.segmentPaddingX)}
- Chip padding Y: ${pxAndRem(specs.segmentPaddingY)}
- radius/radius-round: 9999px
*/`
}

function PreviewCanvas(args: SegmentStoryArgs) {
  const segmentProps = getSegmentComponentProps(args)
  const theme = segmentProps.theme ?? 'light'

  return (
    <main className="components-buttons-page">
      <SegmentHeader />

      <section className="button-live-section">
        <div className="button-live-preview" data-theme={theme}>
          <BlinkXSegment {...segmentProps} />
        </div>

        <ComponentCodeBlock code={getDetailedCode(args)} />
      </section>
    </main>
  )
}

function GalleryCanvas() {
  return (
    <main className="components-buttons-page">
      <SegmentHeader />

      <div className="buttons-section-list">
        <section className="buttons-section">
          <div className="buttons-section__header">
            <h2>No. of Buttons</h2>
            <span>{segmentCounts.length}</span>
          </div>

          <div className="buttons-token-grid segment-token-grid">
            {segmentCounts.map((noOfButtons) => (
              <article className="buttons-token" key={noOfButtons}>
                <div className="buttons-token__preview">
                  <BlinkXSegment noOfButtons={noOfButtons} />
                </div>
                <div className="buttons-token__body">
                  <span className="buttons-token__name">{noOfButtons}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="buttons-section">
          <div className="buttons-section__header">
            <h2>Size</h2>
            <span>{segmentSizes.length}</span>
          </div>

          <div className="buttons-token-grid">
            {segmentSizes.map((size) => (
              <article className="buttons-token" key={size}>
                <div className="buttons-token__preview">
                  <BlinkXSegment noOfButtons="Segment-2" size={size} />
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
            <h2>Theme</h2>
            <span>{segmentThemes.length}</span>
          </div>

          <div className="buttons-token-grid">
            {segmentThemes.map((theme) => (
              <article className="buttons-token" key={theme}>
                <div className="buttons-token__preview button-live-preview" data-theme={theme}>
                  <BlinkXSegment noOfButtons="Segment-2" theme={theme} />
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
    noOfButtons: 'Segment-2',
    segment0OnText: 'Local',
    segment1OffText: 'Local',
    segment1OffVisible: false,
    segment1SingleOffText: 'Local',
    segment1SingleOffVisible: true,
    segment2OffText: 'Local',
    segment2OffVisible: false,
    segment3OffText: 'Local',
    segment3OffVisible: false,
    segment4OffText: 'Local',
    segment4OffVisible: false,
    segment5OffText: 'Local',
    segment5OffVisible: false,
    segment6OffText: 'Local',
    segment6OffVisible: false,
    selectedIndex: 0,
    size: 'sm',
    theme: 'light',
  },
  parameters: {
    docs: {
      source: {
        code: segmentCode,
      },
    },
  },
  render: (args) => {
    const [, updateArgs] = useArgs<SegmentStoryArgs>()
    const noOfButtons = args.noOfButtons ?? 'Segment-2'
    const buttonCount = getSegmentButtonCount(noOfButtons)
    const activeIndex = clampSelectedIndex(args.selectedIndex, buttonCount)
    const textVisibility = getSegmentTextVisibility(buttonCount)

    useEffect(() => {
      const updates: Partial<SegmentStoryArgs> = {}

      if (args.selectedIndex !== activeIndex) {
        updates.selectedIndex = activeIndex
      }

      if (args.segment1SingleOffVisible !== textVisibility.segment1SingleOffVisible) {
        updates.segment1SingleOffVisible = textVisibility.segment1SingleOffVisible
      }

      segmentOffSlots.forEach((slot) => {
        const visibleKey = getOffVisibleArgKey(slot)

        if (args[visibleKey] !== textVisibility[visibleKey]) {
          updates[visibleKey] = textVisibility[visibleKey]
        }
      })

      if (Object.keys(updates).length > 0) {
        updateArgs(updates)
      }
    }, [activeIndex, args, textVisibility, updateArgs])

    return (
      <PreviewCanvas
        {...args}
        selectedIndex={activeIndex}
        {...textVisibility}
        onValueChange={(selectedIndex) => {
          updateArgs(getSegmentTextUpdatesForSelection(args, selectedIndex, buttonCount))
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
