import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import './Typography.css'
import { BlinkXButton } from '../../components/BlinkXButton'
import { typographyTokens, type TypographyToken } from './typographyTokens'

const meta = {
  title: 'Foundation/Typography',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>
type PreviewStyle = CSSProperties & {
  '--preview-font-size'?: string
  '--preview-font-weight'?: number
  '--preview-line-height'?: string
}

const fontWeightMap: Record<string, number> = {
  Bold: 700,
  Medium: 500,
  Regular: 400,
  SemiBold: 600,
}

const typographyMarkdownHref = '/blinkx-typography.md'
const typographyMarkdownDownloadName = 'blinkx-typography.md'
const barlowFontFamilyHref = 'https://fonts.google.com/specimen/Barlow'

function groupTypographyTokens() {
  return typographyTokens.reduce<Array<[string, TypographyToken[]]>>((groups, token) => {
    const currentGroup = groups.at(-1)

    if (!currentGroup || currentGroup[0] !== token.group) {
      groups.push([token.group, [token]])
      return groups
    }

    currentGroup[1].push(token)
    return groups
  }, [])
}

function getPreviewStyle(token: TypographyToken) {
  if (token.type === 'fontSize') {
    return { '--preview-font-size': token.value } as PreviewStyle
  }

  if (token.type === 'fontWeight') {
    return { '--preview-font-weight': fontWeightMap[token.value] } as PreviewStyle
  }

  if (token.type === 'lineHeight') {
    return { '--preview-line-height': token.value } as PreviewStyle
  }

  return undefined
}

function TypographyCard({ token }: { token: TypographyToken }) {
  return (
    <article className="typography-token">
      <div className="typography-token__preview" style={getPreviewStyle(token)}>
        Aa
      </div>
      <div className="typography-token__body">
        <span className="typography-token__name" title={token.name}>
          {token.displayName}
        </span>
        <span className="typography-token__values">
          <span className="typography-token__value">{token.value}</span>
          {token.remValue ? (
            <span className="typography-token__value">{token.remValue}</span>
          ) : null}
          {token.numericValue ? (
            <span className="typography-token__value">{token.numericValue}</span>
          ) : null}
        </span>
      </div>
    </article>
  )
}

function downloadTypographyMarkdown() {
  const link = document.createElement('a')
  link.href = typographyMarkdownHref
  link.download = typographyMarkdownDownloadName
  document.body.appendChild(link)
  link.click()
  link.remove()
}

function openBarlowFontFamily() {
  window.open(barlowFontFamilyHref, '_blank', 'noreferrer')
}

function TypographyPage() {
  const tokenGroups = groupTypographyTokens()

  return (
    <main className="foundation-typography-page">
      <header className="foundation-typography-header">
        <div>
          <p className="foundation-typography-kicker">Foundation / Typography</p>
          <h1>Typography</h1>
          <p>{typographyTokens.length} typography variables from Figma.</p>
        </div>

        <div className="typography-header-actions">
          <BlinkXButton
            aria-label="Download Typography markdown"
            className="typography-md-cta"
            label="Download .md File"
            onClick={downloadTypographyMarkdown}
            size="lg"
            type="Secondary"
          />
          <BlinkXButton
            aria-label="Download Barlow Font Family"
            className="typography-font-cta"
            label="Download Barlow Font Family"
            onClick={openBarlowFontFamily}
            size="lg"
            type="Primary"
          />
        </div>
      </header>

      <div className="typography-group-list">
        {tokenGroups.map(([group, tokens]) => (
          <section className="typography-group" key={group}>
            <div className="typography-group__header">
              <h2>{group}</h2>
              <span>{tokens.length}</span>
            </div>
            <div className="typography-token-grid">
              {tokens.map((token) => (
                <TypographyCard key={token.name} token={token} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}

export const Tokens: Story = {
  render: () => <TypographyPage />,
}
