import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import './Radius.css'
import { BlinkXButton } from '../../components/BlinkXButton'
import { radiusTokens, type RadiusToken } from './radiusTokens'

const meta = {
  title: 'Foundation/Radius',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>
type RadiusStyle = CSSProperties & {
  '--radius-size': string
}

const radiusMarkdownHref = '/blinkx-radius.md'
const radiusMarkdownDownloadName = 'blinkx-radius.md'

function RadiusCard({ token }: { token: RadiusToken }) {
  return (
    <article className="radius-token">
      <div className="radius-token__preview">
        <span
          aria-label={`${token.displayName} radius preview`}
          className="radius-token__shape"
          style={{ '--radius-size': token.value } as RadiusStyle}
        />
      </div>
      <div className="radius-token__body">
        <span className="radius-token__name" title={token.name}>
          {token.displayName}
        </span>
        <span className="radius-token__values">
          <span className="radius-token__value">{token.value}</span>
          <span className="radius-token__value">{token.remValue}</span>
        </span>
      </div>
    </article>
  )
}

function downloadRadiusMarkdown() {
  const link = document.createElement('a')
  link.href = radiusMarkdownHref
  link.download = radiusMarkdownDownloadName
  document.body.appendChild(link)
  link.click()
  link.remove()
}

function RadiusPage() {
  return (
    <main className="foundation-radius-page">
      <header className="foundation-radius-header">
        <div>
          <p className="foundation-radius-kicker">Foundation / Radius</p>
          <h1>Radius</h1>
          <p>{radiusTokens.length} radius variables from Figma.</p>
        </div>

        <div className="radius-header-actions">
          <BlinkXButton
            aria-label="Download Radius markdown"
            className="radius-md-cta"
            label="Download .md File"
            onClick={downloadRadiusMarkdown}
            size="lg"
            type="Secondary"
          />
        </div>
      </header>

      <section className="radius-group">
        <div className="radius-group__header">
          <h2>Radius</h2>
          <span>{radiusTokens.length}</span>
        </div>
        <div className="radius-token-grid">
          {radiusTokens.map((token) => (
            <RadiusCard key={token.name} token={token} />
          ))}
        </div>
      </section>
    </main>
  )
}

export const Tokens: Story = {
  render: () => <RadiusPage />,
}
