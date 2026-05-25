import type { CSSProperties } from 'react'
import { useMemo, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { HugeiconsIcon } from '@hugeicons/react'
import { Download01Icon, Moon02Icon } from '@hugeicons/core-free-icons'

import './Color.css'
import { BlinkXButton } from '../../components/BlinkXButton'
import {
  primitiveColorsByTheme,
  type PrimitiveColor,
  type PrimitiveColorTheme,
} from './primitiveColors'
import { semanticColorsByTheme, type SemanticColor } from './semanticColors'

const meta = {
  title: 'Foundation/Color',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>
type ColorSwatch = (PrimitiveColor | SemanticColor) & {
  displayName?: string
}
type ColorTheme = PrimitiveColorTheme
type SwatchStyle = CSSProperties & {
  '--swatch-color': string
}

function groupColors(colors: ColorSwatch[]) {
  return colors.reduce<Array<[string, ColorSwatch[]]>>((groups, color) => {
    const currentGroup = groups.at(-1)

    if (!currentGroup || currentGroup[0] !== color.group) {
      groups.push([color.group, [color]])
      return groups
    }

    currentGroup[1].push(color)
    return groups
  }, [])
}

function getSwatchLabel(name: string) {
  return name.split('/').at(-1) ?? name
}

function ColorCard({ color }: { color: ColorSwatch }) {
  const tokenName = color.displayName ?? getSwatchLabel(color.name)

  return (
    <article className="color-token">
      <div
        aria-label={`${tokenName} swatch`}
        className="color-token__swatch"
        style={{ '--swatch-color': color.value } as SwatchStyle}
      />
      <div className="color-token__body">
        <span className="color-token__name" title={color.name}>
          {tokenName}
        </span>
        <span className="color-token__value">{color.value}</span>
      </div>
    </article>
  )
}

function MoonIcon() {
  return <HugeiconsIcon aria-hidden="true" className="theme-switch__icon" icon={Moon02Icon} />
}

function DownloadIcon() {
  return (
    <HugeiconsIcon
      aria-hidden="true"
      className="foundation-color-download-icon"
      icon={Download01Icon}
      strokeWidth={2.4}
    />
  )
}

function SunIcon() {
  return (
    <svg aria-hidden="true" className="theme-switch__icon" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.2M12 19.3v2.2M4.7 4.7l1.6 1.6M17.7 17.7l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.7 19.3l1.6-1.6M17.7 6.3l1.6-1.6" />
    </svg>
  )
}

function downloadColorMarkdown(href: string, downloadName: string) {
  const link = document.createElement('a')
  link.href = href
  link.download = downloadName
  document.body.appendChild(link)
  link.click()
  link.remove()
}

function ColorTokensPage({
  colorsByTheme,
  downloadHref,
  downloadName,
  title,
}: {
  colorsByTheme: Record<ColorTheme, ColorSwatch[]>
  downloadHref: string
  downloadName: string
  title: string
}) {
  const [theme, setTheme] = useState<ColorTheme>('light')
  const colors = colorsByTheme[theme]
  const colorGroups = useMemo(() => groupColors(colors), [colors])
  const isDark = theme === 'dark'

  return (
    <main className="foundation-color-page" data-theme={theme}>
      <header className="foundation-color-header">
        <div>
          <p className="foundation-color-kicker">Foundation / Color</p>
          <h1>{title}</h1>
          <p>{colors.length} {theme} theme colors from Figma.</p>
        </div>

        <div className="foundation-color-actions">
          <BlinkXButton
            aria-label={`Download ${title} markdown`}
            className="foundation-color-download-button"
            label="Download .md File"
            leadingIconNode={<DownloadIcon />}
            onClick={() => downloadColorMarkdown(downloadHref, downloadName)}
            size="lg"
            theme={theme}
            type="Secondary"
          />

          <span aria-hidden="true" className="foundation-color-actions__divider" />

          <button
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            aria-checked={isDark}
            className="theme-switch"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            role="switch"
            type="button"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </header>

      <div className="color-group-list">
        {colorGroups.map(([group, groupColors]) => (
          <section className="color-group" key={group}>
            <div className="color-group__header">
              <h2>{group}</h2>
              <span>{groupColors.length}</span>
            </div>
            <div className="color-token-grid">
              {groupColors.map((color) => (
                <ColorCard color={color} key={`${theme}-${color.name}`} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}

export const Primitives: Story = {
  render: () => (
    <ColorTokensPage
      colorsByTheme={primitiveColorsByTheme}
      downloadHref="/blinkx-primitive-colors.md"
      downloadName="blinkx-primitive-colors.md"
      title="Primitives"
    />
  ),
}

export const Semantics: Story = {
  render: () => (
    <ColorTokensPage
      colorsByTheme={semanticColorsByTheme}
      downloadHref="/blinkx-semantic-colors.md"
      downloadName="blinkx-semantic-colors.md"
      title="Semantics"
    />
  ),
}
