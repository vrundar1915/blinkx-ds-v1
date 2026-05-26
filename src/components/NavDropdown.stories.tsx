import type { Meta, StoryObj } from '@storybook/react-vite'
import { useArgs } from 'storybook/preview-api'
import { HugeiconsIcon } from '@hugeicons/react'
import { Download01Icon } from '@hugeicons/core-free-icons'

import {
  BlinkXNavDropdown,
  type BlinkXNavDropdownHoveredItem,
  type BlinkXNavDropdownProps,
  type BlinkXNavDropdownState,
  type BlinkXNavDropdownTheme,
} from './BlinkXNavDropdown'
import { BlinkXButton } from './BlinkXButton'
import { ComponentCodeBlock } from './ComponentCodeBlock'
import './ButtonsStory.css'

const componentPropertyCategory = 'Component\u00A0property'
const navDropdownThemes: BlinkXNavDropdownTheme[] = ['light', 'dark']
const navDropdownStates: BlinkXNavDropdownState[] = ['Default', 'Hover', 'Active', 'Focused']
const hoveredItems: BlinkXNavDropdownHoveredItem[] = ['None', 'Item 1', 'Item 2', 'Item 3']
const navDropdownMarkdownHref = '/blinkx-nav-dropdown.md'
const navDropdownMarkdownDownloadName = 'blinkx-nav-dropdown.md'

type NavDropdownStoryArgs = BlinkXNavDropdownProps

type NavDropdownThemeTokens = {
  activeFill: string
  focusRing: string
  focusStroke: string
  hoverFill: string
  icon: string
  menuStroke: string
  menuSurface: string
  shadowLg: string
  textPrimary: string
}

const navDropdownThemeTokens = {
  light: {
    activeFill: '#E7E7E7',
    focusRing: '#D1D2FF',
    focusStroke: '#171EFD',
    hoverFill: '#F2F2F2',
    icon: '#414143',
    menuStroke: '#E7E7E7',
    menuSurface: '#FFFFFF',
    shadowLg:
      '0 2px 2px -1px #0A0D100A, 0 4px 6px -2px #0A0D1008, 0 12px 16px -4px #0A0D1014',
    textPrimary: '#414143',
  },
  dark: {
    activeFill: '#272A2F',
    focusRing: '#3F44A6',
    focusStroke: '#7478FE',
    hoverFill: '#33373B',
    icon: '#999999',
    menuStroke: '#33373B',
    menuSurface: '#1A1E23',
    shadowLg:
      '0 2px 2px -1px #0A0D1033, 0 4px 6px -2px #0A0D102E, 0 12px 16px -4px #0A0D105C',
    textPrimary: '#CACACE',
  },
} satisfies Record<BlinkXNavDropdownTheme, NavDropdownThemeTokens>

const navDropdownTokenAliases = {
  activeFill: 'Color/Interation/hover/interaction-hover-2',
  focusRing: 'Color/background/brand/bg-brand-focus_ring',
  focusStroke: 'Color/background/brand/bg-brand-default',
  hoverFill: 'Color/Interation/hover/interaction-hover-1',
  icon: 'Color/icons/icon-primary',
  menuStroke: 'Color/stroke/stroke-primary',
  menuSurface: 'Color/Surface - Elevation/surface 1',
  shadowLg: 'Shadow/Shadow-lg',
  textPrimary: 'Color/text/text-primary',
}

const navDropdownSpec = {
  caretSize: '16px',
  dropdownPadding: '0px',
  dropdownRadius: '12px',
  dropdownWidth: '100%',
  dropdownMinWidth: '151px',
  gap: '4px',
  itemHeight: '30px',
  itemPadding: '3px 6px',
  itemRadius: '8px',
  itemShellHeight: '34px',
  itemWidth: '100%',
  textFont: 'Barlow SemiBold 600',
  textSize: '14px',
  textLineHeight: '20px',
  triggerGap: '4px',
  triggerHeight: '32px',
  triggerMinWidth: '0px',
  triggerPadding: '4px 6px 4px 8px',
  triggerRadius: '8px',
  triggerWidth: 'max-content',
}

const meta = {
  title: 'Components/Dropdown/Nav Dropdown',
  component: BlinkXNavDropdown,
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
      options: navDropdownStates,
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
    hoveredItem: {
      control: 'select',
      if: { arg: 'state', eq: 'Active' },
      name: 'Hovered item',
      options: hoveredItems,
      table: {
        category: componentPropertyCategory,
      },
    },
    theme: {
      control: 'inline-radio',
      name: 'Theme',
      options: navDropdownThemes,
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
} satisfies Meta<NavDropdownStoryArgs>

export default meta

type Story = StoryObj<NavDropdownStoryArgs>

const navDropdownCode = `import { BlinkXNavDropdown } from './BlinkXNavDropdown'
import './BlinkXNavDropdown.css'

export function Example() {
  return (
    <BlinkXNavDropdown
      menuLabel="Name of the Menu"
      item1Label="Menu Content 1"
      item2Label="Menu Content 2"
      item3Label="Menu Content 3"
      state="Active"
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

function downloadNavDropdownMarkdown() {
  const link = document.createElement('a')
  link.href = navDropdownMarkdownHref
  link.download = navDropdownMarkdownDownloadName
  document.body.appendChild(link)
  link.click()
  link.remove()
}

function NavDropdownHeader() {
  return (
    <header className="components-buttons-header">
      <div>
        <p className="components-buttons-kicker">Components / Dropdown / Nav Dropdown</p>
        <h1>Nav Dropdown</h1>
        <p className="components-buttons-subtext">Nav Dropdown component properties from Figma.</p>
      </div>

      <div className="components-buttons-header-actions">
        <BlinkXButton
          aria-label="Download Nav Dropdown markdown"
          className="components-buttons-download-button"
          label="Download .md File"
          leadingIconNode={<DownloadIcon />}
          onClick={downloadNavDropdownMarkdown}
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

function getDetailedCode(args: NavDropdownStoryArgs) {
  const theme = args.theme ?? 'light'
  const state = args.state ?? 'Default'
  const hoveredItem = args.hoveredItem ?? 'None'
  const menuLabel = args.menuLabel ?? 'Name of the Menu'
  const item1Label = args.item1Label ?? 'Menu Content 1'
  const item2Label = args.item2Label ?? 'Menu Content 2'
  const item3Label = args.item3Label ?? 'Menu Content 3'
  const tokens = navDropdownThemeTokens[theme]

  return `import { useEffect, useId, useRef, type HTMLAttributes } from 'react'
import './BlinkXNavDropdown.css'

export type BlinkXNavDropdownTheme = 'light' | 'dark'
export type BlinkXNavDropdownState = 'Default' | 'Hover' | 'Active' | 'Focused'
export type BlinkXNavDropdownHoveredItem = 'None' | 'Item 1' | 'Item 2' | 'Item 3'

export type BlinkXNavDropdownProps = Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> & {
  hoveredItem?: BlinkXNavDropdownHoveredItem
  item1Label?: string
  item2Label?: string
  item3Label?: string
  menuLabel?: string
  onItemSelect?: (index: number, label: string) => void
  onStateChange?: (state: BlinkXNavDropdownState) => void
  state?: BlinkXNavDropdownState
  theme?: BlinkXNavDropdownTheme
}

export function BlinkXNavDropdown({
  className = '',
  hoveredItem = 'None',
  item1Label = 'Menu Content 1',
  item2Label = 'Menu Content 2',
  item3Label = 'Menu Content 3',
  menuLabel = 'Name of the Menu',
  onItemSelect,
  onStateChange,
  state = 'Default',
  theme = 'light',
  ...dropdownProps
}: BlinkXNavDropdownProps) {
  const dropdownId = useId()
  const rootRef = useRef<HTMLDivElement>(null)
  const isOpen = state === 'Active'
  const hoveredIndex = hoveredItem === 'Item 1' ? 0 : hoveredItem === 'Item 2' ? 1 : hoveredItem === 'Item 3' ? 2 : -1
  const items = [item1Label, item2Label, item3Label]

  function handleTriggerClick() {
    onStateChange?.(isOpen ? 'Default' : 'Active')
  }

  useEffect(() => {
    if (!isOpen) return

    function handleOutsidePointerDown(event: PointerEvent) {
      if (!(event.target instanceof Node)) return

      if (!rootRef.current?.contains(event.target)) {
        onStateChange?.('Default')
      }
    }

    document.addEventListener('pointerdown', handleOutsidePointerDown)

    return () => {
      document.removeEventListener('pointerdown', handleOutsidePointerDown)
    }
  }, [isOpen, onStateChange])

  return (
    <div
      {...dropdownProps}
      className={\`blinkx-nav-dropdown blinkx-nav-dropdown--theme-\${theme} blinkx-nav-dropdown--state-\${state.toLowerCase()} \${className}\`}
      data-state={state}
      data-theme={theme}
      ref={rootRef}
    >
      <button
        aria-controls={dropdownId}
        aria-expanded={isOpen}
        className="blinkx-nav-dropdown__trigger"
        onClick={handleTriggerClick}
        type="button"
      >
        <span className="blinkx-nav-dropdown__label">{menuLabel}</span>
        <svg
          aria-hidden="true"
          className="blinkx-nav-dropdown__caret"
          data-open={isOpen ? 'true' : 'false'}
          fill="none"
          viewBox="0 0 16 16"
        >
          <path d="M3 6.25 8 10.75l5-4.5" />
        </svg>
      </button>

      <div
        aria-hidden={!isOpen}
        className="blinkx-nav-dropdown__menu"
        data-open={isOpen ? 'true' : 'false'}
        id={dropdownId}
        role="menu"
      >
        {items.map((item, index) => (
          <div className="blinkx-nav-dropdown__item-shell" key={\`\${item}-\${index}\`}>
            <button
              className="blinkx-nav-dropdown__item"
              data-hovered={hoveredIndex === index ? 'true' : 'false'}
              onClick={() => onItemSelect?.(index, item)}
              role="menuitem"
              tabIndex={isOpen ? 0 : -1}
              type="button"
            >
              {item}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

<BlinkXNavDropdown
  menuLabel="${menuLabel}"
  item1Label="${item1Label}"
  item2Label="${item2Label}"
  item3Label="${item3Label}"
  hoveredItem="${hoveredItem}"
  state="${state}"
  theme="${theme}"
/>

/* Component CSS for current selection */
.blinkx-nav-dropdown {
  --nav-dropdown-active-fill: ${tokens.activeFill}; /* ${navDropdownTokenAliases.activeFill} */
  --nav-dropdown-focus-ring: ${tokens.focusRing}; /* ${navDropdownTokenAliases.focusRing} */
  --nav-dropdown-focus-stroke: ${tokens.focusStroke}; /* ${navDropdownTokenAliases.focusStroke} */
  --nav-dropdown-hover-fill: ${tokens.hoverFill}; /* ${navDropdownTokenAliases.hoverFill} */
  --nav-dropdown-icon: ${tokens.icon}; /* ${navDropdownTokenAliases.icon} */
  --nav-dropdown-menu-stroke: ${tokens.menuStroke}; /* ${navDropdownTokenAliases.menuStroke} */
  --nav-dropdown-shadow: ${tokens.shadowLg}; /* ${navDropdownTokenAliases.shadowLg} */
  --nav-dropdown-surface: ${tokens.menuSurface}; /* ${navDropdownTokenAliases.menuSurface} */
  --nav-dropdown-text: ${tokens.textPrimary}; /* ${navDropdownTokenAliases.textPrimary} */
  display: inline-flex;
  flex-direction: column;
  gap: ${navDropdownSpec.gap}; /* ${pxToRem(navDropdownSpec.gap)} */
  min-width: ${navDropdownSpec.triggerMinWidth}; /* ${pxToRem(navDropdownSpec.triggerMinWidth)} */
  width: ${navDropdownSpec.triggerWidth};
  font-family: Barlow, sans-serif;
}

.blinkx-nav-dropdown__trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: ${navDropdownSpec.triggerMinWidth}; /* ${pxToRem(navDropdownSpec.triggerMinWidth)} */
  width: ${navDropdownSpec.triggerWidth};
  height: ${navDropdownSpec.triggerHeight}; /* ${pxToRem(navDropdownSpec.triggerHeight)} */
  padding: ${navDropdownSpec.triggerPadding};
  gap: ${navDropdownSpec.triggerGap}; /* ${pxToRem(navDropdownSpec.triggerGap)} */
  border: 1px solid transparent;
  border-radius: ${navDropdownSpec.triggerRadius}; /* ${pxToRem(navDropdownSpec.triggerRadius)} */
  background: ${
    state === 'Active'
      ? 'var(--nav-dropdown-active-fill)'
      : state === 'Hover'
        ? 'var(--nav-dropdown-hover-fill)'
        : 'transparent'
  };
  color: var(--nav-dropdown-text);
  font-size: ${navDropdownSpec.textSize}; /* ${pxToRem(navDropdownSpec.textSize)} */
  font-weight: 600;
  line-height: ${navDropdownSpec.textLineHeight}; /* ${pxToRem(navDropdownSpec.textLineHeight)} */
}

.blinkx-nav-dropdown__trigger:hover {
  background: var(--nav-dropdown-hover-fill);
}

.blinkx-nav-dropdown__trigger:focus-visible,
.blinkx-nav-dropdown--state-focused .blinkx-nav-dropdown__trigger {
  border-color: var(--nav-dropdown-focus-stroke);
  box-shadow: 0 0 0 3px var(--nav-dropdown-focus-ring);
  outline: none;
}

.blinkx-nav-dropdown__label {
  flex: 0 0 auto;
  min-width: 0;
  white-space: nowrap;
}

.blinkx-nav-dropdown__caret {
  flex: 0 0 auto;
  width: ${navDropdownSpec.caretSize}; /* ${pxToRem(navDropdownSpec.caretSize)} */
  height: ${navDropdownSpec.caretSize}; /* ${pxToRem(navDropdownSpec.caretSize)} */
  stroke: var(--nav-dropdown-icon);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.25px;
}

.blinkx-nav-dropdown__menu {
  width: ${navDropdownSpec.dropdownWidth}; /* ${pxToRem(navDropdownSpec.dropdownWidth)} */
  min-width: ${navDropdownSpec.dropdownMinWidth}; /* ${pxToRem(navDropdownSpec.dropdownMinWidth)} */
  padding: ${navDropdownSpec.dropdownPadding}; /* ${pxToRem(navDropdownSpec.dropdownPadding)} */
  border: 1px solid var(--nav-dropdown-menu-stroke);
  border-radius: ${navDropdownSpec.dropdownRadius}; /* ${pxToRem(navDropdownSpec.dropdownRadius)} */
  background: var(--nav-dropdown-surface);
  box-shadow: var(--nav-dropdown-shadow);
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  opacity: 0;
  transform: translateY(-8px);
  pointer-events: none;
  transition:
    transform 260ms cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 160ms ease-out;
}

.blinkx-nav-dropdown__menu[data-open="true"] {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.blinkx-nav-dropdown__item-shell {
  height: ${navDropdownSpec.itemShellHeight}; /* ${pxToRem(navDropdownSpec.itemShellHeight)} */
  padding: 3px 4px 1px;
}

.blinkx-nav-dropdown__item-shell + .blinkx-nav-dropdown__item-shell {
  padding: 1px 4px 3px;
}

.blinkx-nav-dropdown__item {
  width: ${navDropdownSpec.itemWidth};
  height: ${navDropdownSpec.itemHeight}; /* ${pxToRem(navDropdownSpec.itemHeight)} */
  padding: ${navDropdownSpec.itemPadding};
  border: 0;
  border-radius: ${navDropdownSpec.itemRadius}; /* ${pxToRem(navDropdownSpec.itemRadius)} */
  background: transparent;
  color: var(--nav-dropdown-text);
  font-size: ${navDropdownSpec.textSize}; /* ${pxToRem(navDropdownSpec.textSize)} */
  font-weight: 600;
  line-height: ${navDropdownSpec.textLineHeight}; /* ${pxToRem(navDropdownSpec.textLineHeight)} */
}

.blinkx-nav-dropdown__item:hover,
.blinkx-nav-dropdown__item[data-hovered="true"] {
  background: var(--nav-dropdown-hover-fill);
}

/*
Figma source
- Section: Dropdown / Nav -> 6211:29559
- Trigger component set: Nav Menu -> 123:2100
- Dropdown surface: Dropdown -> 123:2116
- Hover dropdown example: Dropdown / hover -> 123:2119

Figma properties
- states: Default | Hover | Active | Focused
- Dropdown menu item states: default | hover
- Theme is mapped from semantic token light/dark modes.
*/`
}

function PreviewCanvas(args: NavDropdownStoryArgs) {
  return (
    <main className="components-buttons-page">
      <NavDropdownHeader />

      <section className="button-live-section">
        <div className="button-live-preview nav-dropdown-live-preview" data-theme={args.theme}>
          <BlinkXNavDropdown {...args} />
        </div>

        <ComponentCodeBlock code={getDetailedCode(args)} />
      </section>
    </main>
  )
}

function NavDropdownCard({
  label,
  previewTheme = 'light',
  ...dropdownProps
}: NavDropdownStoryArgs & { label: string; previewTheme?: BlinkXNavDropdownTheme }) {
  return (
    <article className="buttons-token">
      <div
        className="buttons-token__preview button-live-preview nav-dropdown-token-preview"
        data-theme={previewTheme}
      >
        <BlinkXNavDropdown {...dropdownProps} />
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
      <NavDropdownHeader />

      <div className="buttons-section-list">
        <section className="buttons-section">
          <div className="buttons-section__header">
            <h2>State</h2>
            <span>4</span>
          </div>

          <div className="buttons-token-grid nav-dropdown-token-grid">
            <NavDropdownCard label="Default" state="Default" />
            <NavDropdownCard label="Hover" state="Hover" />
            <NavDropdownCard label="Active" state="Active" />
            <NavDropdownCard label="Focused" state="Focused" />
          </div>
        </section>

        <section className="buttons-section">
          <div className="buttons-section__header">
            <h2>Dropdown Item Hover</h2>
            <span>3</span>
          </div>

          <div className="buttons-token-grid nav-dropdown-token-grid">
            <NavDropdownCard label="Menu Content 1" hoveredItem="Item 1" state="Active" />
            <NavDropdownCard label="Menu Content 2" hoveredItem="Item 2" state="Active" />
            <NavDropdownCard label="Menu Content 3" hoveredItem="Item 3" state="Active" />
          </div>
        </section>

        <section className="buttons-section">
          <div className="buttons-section__header">
            <h2>Theme</h2>
            <span>2</span>
          </div>

          <div className="buttons-token-grid nav-dropdown-token-grid">
            <NavDropdownCard
              label="light"
              hoveredItem="Item 1"
              previewTheme="light"
              state="Active"
              theme="light"
            />
            <NavDropdownCard
              label="dark"
              hoveredItem="Item 1"
              previewTheme="dark"
              state="Active"
              theme="dark"
            />
          </div>
        </section>
      </div>
    </main>
  )
}

export const Preview: Story = {
  args: {
    state: 'Default',
    menuLabel: 'Name of the Menu',
    item1Label: 'Menu Content 1',
    item2Label: 'Menu Content 2',
    item3Label: 'Menu Content 3',
    hoveredItem: 'None',
    theme: 'light',
  },
  parameters: {
    docs: {
      source: {
        code: navDropdownCode,
      },
    },
  },
  render: (args) => {
    const [, updateArgs] = useArgs<NavDropdownStoryArgs>()

    return (
      <PreviewCanvas
        {...args}
        onItemSelect={() => updateArgs({ state: 'Default', hoveredItem: 'None' })}
        onStateChange={(nextState) =>
          updateArgs({
            state: nextState,
            hoveredItem: nextState === 'Active' ? args.hoveredItem : 'None',
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
