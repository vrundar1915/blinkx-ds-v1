import type { CSSProperties } from 'react'
import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { HugeiconsIcon } from '@hugeicons/react'
import { Download01Icon, Moon02Icon } from '@hugeicons/core-free-icons'

import './DropShadow.css'
import { BlinkXButton } from '../../components/BlinkXButton'
import {
  dropShadowTokens,
  getDropShadowCss,
  type DropShadowTheme,
  type DropShadowToken,
} from './dropShadowTokens'

const meta = {
  title: 'Foundation/Drop Shadow',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>
type ShadowStyle = CSSProperties & {
  '--shadow-value': string
}
const dropShadowMarkdownHref = '/blinkx-drop-shadow.md'
const dropShadowMarkdownDownloadName = 'blinkx-drop-shadow.md'

function MoonIcon() {
  return <HugeiconsIcon aria-hidden="true" className="theme-switch__icon" icon={Moon02Icon} />
}

function DownloadIcon() {
  return (
    <HugeiconsIcon
      aria-hidden="true"
      className="drop-shadow-download-icon"
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

function downloadDropShadowMarkdown() {
  const link = document.createElement('a')
  link.href = dropShadowMarkdownHref
  link.download = dropShadowMarkdownDownloadName
  document.body.appendChild(link)
  link.click()
  link.remove()
}

function DropShadowCard({ theme, token }: { theme: DropShadowTheme; token: DropShadowToken }) {
  const shadowValue = getDropShadowCss(token, theme)

  return (
    <article className="drop-shadow-token">
      <div className="drop-shadow-token__preview">
        <span
          aria-label={`${token.displayName} shadow preview`}
          className="drop-shadow-token__surface"
          style={{ '--shadow-value': shadowValue } as ShadowStyle}
        />
      </div>
      <div className="drop-shadow-token__body">
        <span className="drop-shadow-token__name" title={token.name}>
          {token.displayName}
        </span>
        <span className="drop-shadow-token__value">{shadowValue}</span>
        <div className="drop-shadow-token__layers" aria-label={`${token.displayName} layers`}>
          {token.layers.map((shadowLayer, index) => (
            <span className="drop-shadow-token__layer" key={`${shadowLayer.colorToken}-${index}`}>
              {shadowLayer.colorToken.replace('drop Shadow/', '')} · {shadowLayer.colors[theme]}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

function DropShadowPage() {
  const [theme, setTheme] = useState<DropShadowTheme>('light')
  const isDark = theme === 'dark'

  return (
    <main className="foundation-drop-shadow-page" data-theme={theme}>
      <header className="foundation-drop-shadow-header">
        <div>
          <p className="foundation-drop-shadow-kicker">Foundation / Drop Shadow</p>
          <h1>Drop Shadow</h1>
          <p>{dropShadowTokens.length} {theme} theme effect styles from Figma.</p>
        </div>

        <div className="drop-shadow-header-actions">
          <BlinkXButton
            aria-label="Download Drop Shadow markdown"
            className="drop-shadow-download-button"
            label="Download .md File"
            leadingIconNode={<DownloadIcon />}
            onClick={downloadDropShadowMarkdown}
            size="lg"
            theme={theme}
            type="Secondary"
          />

          <span aria-hidden="true" className="drop-shadow-header-actions__divider" />

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

      <section className="drop-shadow-group">
        <div className="drop-shadow-group__header">
          <h2>Shadow</h2>
          <span>{dropShadowTokens.length}</span>
        </div>
        <div className="drop-shadow-token-grid">
          {dropShadowTokens.map((token) => (
            <DropShadowCard key={token.name} theme={theme} token={token} />
          ))}
        </div>
      </section>
    </main>
  )
}

export const Tokens: Story = {
  render: () => <DropShadowPage />,
}
