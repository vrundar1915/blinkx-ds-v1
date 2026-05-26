import type { Meta, StoryObj } from '@storybook/react-vite'
import { useArgs } from 'storybook/preview-api'
import { Download01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

import {
  BlinkXContentDropdown,
  type BlinkXContentDropdownHoveredItem,
  type BlinkXContentDropdownProps,
  type BlinkXContentDropdownSize,
  type BlinkXContentDropdownState,
  type BlinkXContentDropdownTheme,
} from './BlinkXContentDropdown'
import { BlinkXButton } from './BlinkXButton'
import { ComponentCodeBlock } from './ComponentCodeBlock'
import './ButtonsStory.css'

const componentPropertyCategory = 'Component\u00A0property'
const contentDropdownThemes: BlinkXContentDropdownTheme[] = ['light', 'dark']
const contentDropdownSizes: BlinkXContentDropdownSize[] = ['sm', 'md']
const contentDropdownStates: BlinkXContentDropdownState[] = ['Default', 'Hover', 'Active', 'Focused']
const hoveredItems: BlinkXContentDropdownHoveredItem[] = [
  'None',
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
  'Item 5',
]
const selectedItemOptions = [1, 2, 3, 4, 5]
const contentDropdownMarkdownHref = '/blinkx-content-dropdown.md'
const contentDropdownMarkdownDownloadName = 'blinkx-content-dropdown.md'

type ContentDropdownStoryArgs = BlinkXContentDropdownProps

type ContentDropdownThemeTokens = {
  brand: string
  focusFill: string
  focusRing: string
  hoverFill: string
  icon: string
  shadowLg: string
  stroke: string
  surface: string
  textPrimary: string
  triggerFill: string
}

const contentDropdownThemeTokens = {
  light: {
    brand: '#171EFD',
    focusFill: '#F3F4FF',
    focusRing: '#D1D2FF',
    hoverFill: '#F2F2F2',
    icon: '#414143',
    shadowLg:
      '0 2px 2px -1px #0A0D120A, 0 4px 6px -2px #0A0D1208, 0 12px 16px -4px #0A0D1214',
    stroke: '#E7E7E7',
    surface: '#FFFFFF',
    textPrimary: '#41414E',
    triggerFill: 'transparent',
  },
  dark: {
    brand: '#585DFE',
    focusFill: '#272A2F',
    focusRing: '#3F44A6',
    hoverFill: '#33373B',
    icon: '#999999',
    shadowLg:
      '0 2px 2px -1px #0A0D1033, 0 4px 6px -2px #0A0D102E, 0 12px 16px -4px #0A0D105C',
    stroke: '#33373B',
    surface: '#1A1E23',
    textPrimary: '#CACACE',
    triggerFill: 'transparent',
  },
} satisfies Record<BlinkXContentDropdownTheme, ContentDropdownThemeTokens>

const contentDropdownTokenAliases = {
  brand: 'Color/stroke/stroke-brand + Color/icons/icon-brand',
  focusFill: 'Focused trigger fill from Figma component',
  focusRing: 'Color/background/brand/bg-brand-focus_ring',
  hoverFill: 'Color/Interation/hover/interaction-hover-1',
  icon: 'Color/icons/icon-primary',
  shadowLg: 'Shadow/Light/shadow-lg or dark equivalent',
  stroke: 'Color/stroke/stroke-primary',
  surface: 'Color/Surface - Elevation/surface 1',
  textPrimary: 'Color/text/text-primary',
  triggerFill: 'Default trigger fill',
}

const contentDropdownSpec = {
  caretSize: '16px',
  checkSize: '12px',
  dropdownGap: '6px',
  leadingIconSize: '20px',
  menuPadding: '0px',
  menuRadius: '12px',
  rowRadius: '8px',
  rowSmHeight: '30px',
  rowMdHeight: '30px',
  surfaceSmBasicWidth: '142px',
  surfaceSmLeadingWidth: '158px',
  surfaceMdBasicWidth: '151px',
  surfaceMdLeadingWidth: '161px',
  textFont: 'Barlow SemiBold 600',
  textSize: '14px',
  textLineHeight: '20px',
  triggerSmMinWidth: '0px',
  triggerMdMinWidth: '0px',
  triggerHeight: '32px',
  triggerPadding: '4px 6px 4px 8px',
  triggerRadius: '8px',
  triggerSmGap: '8px',
  triggerMdGap: '10px',
  triggerSmTextSize: '12px',
  triggerMdTextSize: '14px',
  triggerSmLineHeight: '16px',
  triggerMdLineHeight: '20px',
}

const meta = {
  title: 'Components/Dropdown/Content Dropdown',
  component: BlinkXContentDropdown,
  parameters: {
    layout: 'fullscreen',
    controls: {
      sort: 'none',
    },
  },
  argTypes: {
    state: {
      control: 'select',
      name: 'State',
      options: contentDropdownStates,
      table: {
        category: componentPropertyCategory,
      },
    },
    leadingIcon: {
      control: 'boolean',
      name: 'Leading icon',
      table: {
        category: componentPropertyCategory,
      },
    },
    size: {
      control: 'inline-radio',
      name: 'Size',
      options: contentDropdownSizes,
      table: {
        category: componentPropertyCategory,
      },
    },
    menuLabel: {
      control: 'text',
      name: 'Text on menu',
      table: {
        category: componentPropertyCategory,
      },
    },
    selectedIndex: {
      control: 'select',
      if: { arg: 'state', eq: 'Active' },
      mapping: {
        1: 0,
        2: 1,
        3: 2,
        4: 3,
        5: 4,
      },
      name: 'Selected item',
      options: selectedItemOptions,
      table: {
        category: componentPropertyCategory,
      },
    },
    hoveredItem: {
      control: 'select',
      if: { arg: 'state', eq: 'Active' },
      name: 'Hovered item',
      options: hoveredItems,
      table: {
        category: componentPropertyCategory,
      },
    },
    item1Label: {
      control: 'text',
      if: { arg: 'state', eq: 'Active' },
      name: 'Menu Content 1',
      table: {
        category: componentPropertyCategory,
      },
    },
    item2Label: {
      control: 'text',
      if: { arg: 'state', eq: 'Active' },
      name: 'Menu Content 2',
      table: {
        category: componentPropertyCategory,
      },
    },
    item3Label: {
      control: 'text',
      if: { arg: 'state', eq: 'Active' },
      name: 'Menu Content 3',
      table: {
        category: componentPropertyCategory,
      },
    },
    item4Label: {
      control: 'text',
      if: { arg: 'state', eq: 'Active' },
      name: 'Menu Content 4',
      table: {
        category: componentPropertyCategory,
      },
    },
    item5Label: {
      control: 'text',
      if: { arg: 'state', eq: 'Active' },
      name: 'Menu Content 5',
      table: {
        category: componentPropertyCategory,
      },
    },
    theme: {
      control: 'inline-radio',
      name: 'Theme',
      options: contentDropdownThemes,
      table: {
        category: componentPropertyCategory,
      },
    },
    onItemSelect: {
      table: {
        disable: true,
      },
    },
    onStateChange: {
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
} satisfies Meta<ContentDropdownStoryArgs>

export default meta

type Story = StoryObj<ContentDropdownStoryArgs>

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

function downloadContentDropdownMarkdown() {
  const link = document.createElement('a')
  link.href = contentDropdownMarkdownHref
  link.download = contentDropdownMarkdownDownloadName
  document.body.appendChild(link)
  link.click()
  link.remove()
}

function ContentDropdownHeader() {
  return (
    <header className="components-buttons-header">
      <div>
        <p className="components-buttons-kicker">Components / Dropdown / Content Dropdown</p>
        <h1>Content Dropdown</h1>
        <p className="components-buttons-subtext">
          Content Dropdown component properties from Figma.
        </p>
      </div>

      <div className="components-buttons-header-actions">
        <BlinkXButton
          aria-label="Download Content Dropdown markdown"
          className="components-buttons-download-button"
          label="Download .md File"
          leadingIconNode={<DownloadIcon />}
          onClick={downloadContentDropdownMarkdown}
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

  return `${Number.parseFloat((px / 16).toFixed(4))}rem`
}

function getSizeSpec(size: BlinkXContentDropdownSize, leadingIcon: boolean) {
  if (size === 'sm') {
    return {
      menuWidth: leadingIcon
        ? contentDropdownSpec.surfaceSmLeadingWidth
        : contentDropdownSpec.surfaceSmBasicWidth,
      rowHeight: contentDropdownSpec.rowSmHeight,
      triggerGap: contentDropdownSpec.triggerSmGap,
      triggerLineHeight: contentDropdownSpec.triggerSmLineHeight,
      triggerMinWidth: contentDropdownSpec.triggerSmMinWidth,
      triggerTextSize: contentDropdownSpec.triggerSmTextSize,
    }
  }

  return {
    menuWidth: leadingIcon
      ? contentDropdownSpec.surfaceMdLeadingWidth
      : contentDropdownSpec.surfaceMdBasicWidth,
    rowHeight: contentDropdownSpec.rowMdHeight,
    triggerGap: contentDropdownSpec.triggerMdGap,
    triggerLineHeight: contentDropdownSpec.triggerMdLineHeight,
    triggerMinWidth: contentDropdownSpec.triggerMdMinWidth,
    triggerTextSize: contentDropdownSpec.triggerMdTextSize,
  }
}

function getDetailedCode(args: ContentDropdownStoryArgs) {
  const theme = args.theme ?? 'light'
  const state = args.state ?? 'Default'
  const size = args.size ?? 'md'
  const leadingIcon = args.leadingIcon ?? true
  const hoveredItem = args.hoveredItem ?? 'None'
  const selectedIndex = args.selectedIndex ?? 0
  const menuLabel = args.menuLabel ?? 'Name of the Menu'
  const items = [
    args.item1Label ?? 'Name of the Menu',
    args.item2Label ?? 'Name of the Menu',
    args.item3Label ?? 'Name of the Menu',
    args.item4Label ?? 'Name of the Menu',
    args.item5Label ?? 'Name of the Menu',
  ]
  const tokens = contentDropdownThemeTokens[theme]
  const sizeSpec = getSizeSpec(size, leadingIcon)

  return `import { BlinkXContentDropdown } from './BlinkXContentDropdown'
import './BlinkXContentDropdown.css'

export function Example() {
  return (
    <BlinkXContentDropdown
      menuLabel="${menuLabel}"
      item1Label="${items[0]}"
      item2Label="${items[1]}"
      item3Label="${items[2]}"
      item4Label="${items[3]}"
      item5Label="${items[4]}"
      leadingIcon={${leadingIcon}}
      selectedIndex={${selectedIndex}}
      hoveredItem="${hoveredItem}"
      size="${size}"
      state="${state}"
      theme="${theme}"
    />
  )
}

/* Component CSS for current selection */
.blinkx-content-dropdown {
  --content-dropdown-brand: ${tokens.brand}; /* ${contentDropdownTokenAliases.brand} */
  --content-dropdown-focus-fill: ${tokens.focusFill}; /* ${contentDropdownTokenAliases.focusFill} */
  --content-dropdown-focus-ring: ${tokens.focusRing}; /* ${contentDropdownTokenAliases.focusRing} */
  --content-dropdown-hover-fill: ${tokens.hoverFill}; /* ${contentDropdownTokenAliases.hoverFill} */
  --content-dropdown-icon: ${tokens.icon}; /* ${contentDropdownTokenAliases.icon} */
  --content-dropdown-shadow: ${tokens.shadowLg}; /* ${contentDropdownTokenAliases.shadowLg} */
  --content-dropdown-stroke: ${tokens.stroke}; /* ${contentDropdownTokenAliases.stroke} */
  --content-dropdown-surface: ${tokens.surface}; /* ${contentDropdownTokenAliases.surface} */
  --content-dropdown-text: ${tokens.textPrimary}; /* ${contentDropdownTokenAliases.textPrimary} */
  --content-dropdown-trigger-fill: ${tokens.triggerFill}; /* ${contentDropdownTokenAliases.triggerFill} */
  display: inline-flex;
  flex-direction: column;
  position: relative;
  width: max-content;
  font-family: Barlow, sans-serif;
}

.blinkx-content-dropdown__trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: ${sizeSpec.triggerMinWidth}; /* ${pxToRem(sizeSpec.triggerMinWidth)} */
  height: ${contentDropdownSpec.triggerHeight}; /* ${pxToRem(contentDropdownSpec.triggerHeight)} */
  padding: ${contentDropdownSpec.triggerPadding};
  gap: ${sizeSpec.triggerGap}; /* ${pxToRem(sizeSpec.triggerGap)} */
  border: 1px solid var(--content-dropdown-stroke);
  border-radius: ${contentDropdownSpec.triggerRadius}; /* ${pxToRem(contentDropdownSpec.triggerRadius)} */
  background: ${
    state === 'Active'
      ? 'var(--content-dropdown-hover-fill)'
      : 'var(--content-dropdown-trigger-fill)'
  };
  color: var(--content-dropdown-text);
  font-size: ${sizeSpec.triggerTextSize}; /* ${pxToRem(sizeSpec.triggerTextSize)} */
  font-weight: 600;
  line-height: ${sizeSpec.triggerLineHeight}; /* ${pxToRem(sizeSpec.triggerLineHeight)} */
  width: max-content;
}

.blinkx-content-dropdown__trigger:hover {
  background: var(--content-dropdown-hover-fill);
  border-color: var(--content-dropdown-stroke);
}

.blinkx-content-dropdown--state-active .blinkx-content-dropdown__trigger {
  background: var(--content-dropdown-hover-fill);
  border-color: var(--content-dropdown-stroke);
  box-shadow: none;
}

.blinkx-content-dropdown__trigger:focus-visible,
.blinkx-content-dropdown--state-focused .blinkx-content-dropdown__trigger {
  background: var(--content-dropdown-trigger-fill);
  border-color: var(--content-dropdown-stroke);
  box-shadow: none;
  outline: none;
}

.blinkx-content-dropdown__trigger-label {
  flex: 0 0 auto;
  min-width: 0;
  white-space: nowrap;
}

.blinkx-content-dropdown__caret {
  flex: 0 0 ${contentDropdownSpec.caretSize};
  width: ${contentDropdownSpec.caretSize}; /* ${pxToRem(contentDropdownSpec.caretSize)} */
  height: ${contentDropdownSpec.caretSize}; /* ${pxToRem(contentDropdownSpec.caretSize)} */
}

.blinkx-content-dropdown__menu {
  min-width: ${sizeSpec.menuWidth}; /* ${pxToRem(sizeSpec.menuWidth)} */
  width: max-content;
  padding: ${contentDropdownSpec.menuPadding}; /* ${pxToRem(contentDropdownSpec.menuPadding)} */
  border: 1px solid var(--content-dropdown-stroke);
  border-radius: ${contentDropdownSpec.menuRadius}; /* ${pxToRem(contentDropdownSpec.menuRadius)} */
  background: var(--content-dropdown-surface);
  box-shadow: var(--content-dropdown-shadow);
  position: absolute;
  top: calc(100% + ${contentDropdownSpec.dropdownGap});
  left: 0;
  opacity: 0;
  transform: translateY(-8px);
  pointer-events: none;
  transition:
    transform 260ms cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 160ms ease-out;
}

.blinkx-content-dropdown__menu[data-open="true"] {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.blinkx-content-dropdown__item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: ${sizeSpec.rowHeight}; /* ${pxToRem(sizeSpec.rowHeight)} */
  padding: 3px 6px;
  border: 0;
  border-radius: ${contentDropdownSpec.rowRadius}; /* ${pxToRem(contentDropdownSpec.rowRadius)} */
  background: transparent;
  color: var(--content-dropdown-text);
  font-size: ${contentDropdownSpec.textSize}; /* ${pxToRem(contentDropdownSpec.textSize)} */
  font-weight: 600;
  gap: 0;
  line-height: ${contentDropdownSpec.textLineHeight}; /* ${pxToRem(contentDropdownSpec.textLineHeight)} */
  margin: 3px 4px 1px;
  overflow: visible;
  white-space: nowrap;
  width: calc(100% - 8px);
}

.blinkx-content-dropdown__item + .blinkx-content-dropdown__item {
  margin: 1px 4px 3px;
}

.blinkx-content-dropdown__item:hover,
.blinkx-content-dropdown__item[data-hovered="true"] {
  background: var(--content-dropdown-hover-fill);
}

.blinkx-content-dropdown__leading-icon {
  width: ${contentDropdownSpec.leadingIconSize}; /* ${pxToRem(contentDropdownSpec.leadingIconSize)} */
  height: ${contentDropdownSpec.leadingIconSize}; /* ${pxToRem(contentDropdownSpec.leadingIconSize)} */
}

.blinkx-content-dropdown__check {
  width: ${contentDropdownSpec.checkSize}; /* ${pxToRem(contentDropdownSpec.checkSize)} */
  height: ${contentDropdownSpec.checkSize}; /* ${pxToRem(contentDropdownSpec.checkSize)} */
  margin-left: 8px; /* 0.5rem */
  stroke: var(--content-dropdown-brand);
  stroke-width: 1.25px;
}

/*
Figma source
- Section: Contetnt dropdown -> 6230:707
- Dropdown Menu component set -> 123:3312
- Content row components -> sm 123:3383, md 129:4062

Figma properties
- dropdown Menu size: sm | md
- dropdown Menu states: default | hover | focused
- Content row booleans: show leading Icon, Show tick
- Theme is mapped from semantic token light/dark modes.
*/`
}

function PreviewCanvas(args: ContentDropdownStoryArgs) {
  return (
    <main className="components-buttons-page">
      <ContentDropdownHeader />

      <section className="button-live-section">
        <div className="button-live-preview content-dropdown-live-preview" data-theme={args.theme}>
          <BlinkXContentDropdown {...args} />
        </div>

        <ComponentCodeBlock code={getDetailedCode(args)} />
      </section>
    </main>
  )
}

function ContentDropdownCard({
  label,
  previewTheme = 'light',
  ...dropdownProps
}: ContentDropdownStoryArgs & { label: string; previewTheme?: BlinkXContentDropdownTheme }) {
  return (
    <article className="buttons-token">
      <div
        className="buttons-token__preview button-live-preview content-dropdown-token-preview"
        data-theme={previewTheme}
      >
        <BlinkXContentDropdown {...dropdownProps} />
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
      <ContentDropdownHeader />

      <div className="buttons-section-list">
        <section className="buttons-section">
          <div className="buttons-section__header">
            <h2>State</h2>
            <span>4</span>
          </div>

          <div className="buttons-token-grid content-dropdown-token-grid">
            <ContentDropdownCard label="Default" state="Default" />
            <ContentDropdownCard label="Hover" state="Hover" />
            <ContentDropdownCard label="Active" state="Active" />
            <ContentDropdownCard label="Focused" state="Focused" />
          </div>
        </section>

        <section className="buttons-section">
          <div className="buttons-section__header">
            <h2>Leading Icon</h2>
            <span>2</span>
          </div>

          <div className="buttons-token-grid content-dropdown-token-grid">
            <ContentDropdownCard label="On" leadingIcon state="Active" />
            <ContentDropdownCard label="Off" leadingIcon={false} state="Active" />
          </div>
        </section>

        <section className="buttons-section">
          <div className="buttons-section__header">
            <h2>Size</h2>
            <span>2</span>
          </div>

          <div className="buttons-token-grid content-dropdown-token-grid">
            <ContentDropdownCard label="sm" size="sm" state="Active" />
            <ContentDropdownCard label="md" size="md" state="Active" />
          </div>
        </section>

        <section className="buttons-section">
          <div className="buttons-section__header">
            <h2>Menu Item Hover</h2>
            <span>2</span>
          </div>

          <div className="buttons-token-grid content-dropdown-token-grid">
            <ContentDropdownCard label="Leading icon hover" hoveredItem="Item 2" state="Active" />
            <ContentDropdownCard
              label="Basic hover"
              hoveredItem="Item 2"
              leadingIcon={false}
              state="Active"
            />
          </div>
        </section>

        <section className="buttons-section">
          <div className="buttons-section__header">
            <h2>Theme</h2>
            <span>2</span>
          </div>

          <div className="buttons-token-grid content-dropdown-token-grid">
            <ContentDropdownCard label="light" previewTheme="light" state="Active" theme="light" />
            <ContentDropdownCard label="dark" previewTheme="dark" state="Active" theme="dark" />
          </div>
        </section>
      </div>
    </main>
  )
}

export const Preview: Story = {
  args: {
    hoveredItem: 'None',
    item1Label: 'Name of the Menu',
    item2Label: 'Name of the Menu',
    item3Label: 'Name of the Menu',
    item4Label: 'Name of the Menu',
    item5Label: 'Name of the Menu',
    leadingIcon: true,
    menuLabel: 'Name of the Menu',
    selectedIndex: 0,
    size: 'md',
    state: 'Default',
    theme: 'light',
  },
  render: (args) => {
    const [, updateArgs] = useArgs<ContentDropdownStoryArgs>()

    return (
      <PreviewCanvas
        {...args}
        onItemSelect={(index) =>
          updateArgs({ hoveredItem: 'None', selectedIndex: index, state: 'Default' })
        }
        onStateChange={(nextState) =>
          updateArgs({
            hoveredItem: nextState === 'Active' ? args.hoveredItem : 'None',
            state: nextState,
          })
        }
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
