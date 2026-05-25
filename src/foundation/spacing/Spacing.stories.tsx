import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import './Spacing.css'
import { BlinkXButton } from '../../components/BlinkXButton'
import { spacingTokens, type SpacingToken } from './spacingTokens'

const meta = {
  title: 'Foundation/Spacing',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>
type SpacingStyle = CSSProperties & {
  '--spacing-size': string
}

const spacingMarkdownHref = '/blinkx-spacing.md'
const spacingMarkdownDownloadName = 'blinkx-spacing.md'

function SpacingCard({ token }: { token: SpacingToken }) {
  return (
    <article className="spacing-token">
      <div className="spacing-token__preview">
        <span
          aria-label={`${token.displayName} spacing preview`}
          className="spacing-token__bar"
          style={{ '--spacing-size': token.value } as SpacingStyle}
        />
      </div>
      <div className="spacing-token__body">
        <span className="spacing-token__name" title={token.name}>
          {token.displayName}
        </span>
        <span className="spacing-token__values">
          <span className="spacing-token__value">{token.value}</span>
          <span className="spacing-token__value">{token.remValue}</span>
        </span>
      </div>
    </article>
  )
}

function downloadSpacingMarkdown() {
  const link = document.createElement('a')
  link.href = spacingMarkdownHref
  link.download = spacingMarkdownDownloadName
  document.body.appendChild(link)
  link.click()
  link.remove()
}

function SpacingPage() {
  return (
    <main className="foundation-spacing-page">
      <header className="foundation-spacing-header">
        <div>
          <p className="foundation-spacing-kicker">Foundation / Spacing</p>
          <h1>Spacing</h1>
          <p>{spacingTokens.length} spacing variables from Figma.</p>
        </div>

        <div className="spacing-header-actions">
          <BlinkXButton
            aria-label="Download Spacing markdown"
            className="spacing-md-cta"
            label="Download .md File"
            onClick={downloadSpacingMarkdown}
            size="lg"
            type="Secondary"
          />
        </div>
      </header>

      <section className="spacing-group">
        <div className="spacing-group__header">
          <h2>Spacing</h2>
          <span>{spacingTokens.length}</span>
        </div>
        <div className="spacing-token-grid">
          {spacingTokens.map((token) => (
            <SpacingCard key={token.name} token={token} />
          ))}
        </div>
      </section>
    </main>
  )
}

export const Tokens: Story = {
  render: () => <SpacingPage />,
}
