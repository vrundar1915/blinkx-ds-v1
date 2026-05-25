import { useEffect, useState } from 'react'
import { Copy01Icon, Tick02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

type ComponentCodeBlockProps = {
  code: string
}

const tokenPattern =
  /(\/\*.*?\*\/|\/\/.*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|#[0-9a-fA-F]{3,8}\b|--[a-zA-Z0-9-]+|\b\d+(?:\.\d+)?(?:px|rem|ms|s|%)?\b|[{}()[\];,:=<>/]|[@.]?[a-zA-Z_][a-zA-Z0-9_-]*)/g

const keywords = new Set([
  'const',
  'display',
  'export',
  'font',
  'from',
  'function',
  'import',
  'inline',
  'return',
  'type',
])

const cssProperties = new Set([
  'align-items',
  'animation',
  'background',
  'border',
  'border-radius',
  'box-shadow',
  'color',
  'cursor',
  'font-family',
  'font-size',
  'font-weight',
  'gap',
  'height',
  'letter-spacing',
  'line-height',
  'min-width',
  'opacity',
  'padding',
  'transform',
])

async function copyTextToClipboard(text: string) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text)
      return
    } catch {
      // Fall back for preview if the Clipboard API is unavailable or blocked.
    }
  }

  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.style.left = '-9999px'
  textarea.style.position = 'fixed'
  textarea.style.top = '0'
  document.body.append(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()
}

function prepareDeveloperHandoffCode(code: string) {
  return code
    .replace(/\n?\/\*\n(?:Design spec from Figma variables|Figma component set)[\s\S]*?\n\*\//g, '')
    .replace(/\/\* Resolved CSS for current selection \*\//g, '/* Component CSS */')
    .replace(/\/\* Resolved JSX content \*\//g, '/* Rendered structure */')
    .replace(/\/\* Figma hugs content\. Default label sample width: .*? \*\//g, '/* hug content */')
    .replace(/\/\* SVG mark geometry from Figma \*\//g, '/* SVG mark geometry */')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function getTokenClass(token: string) {
  if (token.startsWith('/*') || token.startsWith('//')) return 'component-code-token--comment'
  if (/^["'`]/.test(token)) return 'component-code-token--string'
  if (/^#[0-9a-fA-F]/.test(token) || /^\d/.test(token)) return 'component-code-token--value'
  if (token.startsWith('--')) return 'component-code-token--variable'
  if (keywords.has(token)) return 'component-code-token--keyword'
  if (cssProperties.has(token)) return 'component-code-token--property'
  if (/^[@.]/.test(token)) return 'component-code-token--selector'
  if (/^[{}()[\];,:=<>/]$/.test(token)) return 'component-code-token--punctuation'

  return undefined
}

function renderHighlightedCode(code: string) {
  return code.split('\n').map((line, lineIndex, lines) => {
    const parts = line.split(tokenPattern).filter((part) => part.length > 0)

    return (
      <span className="component-code-line" key={`${line}-${lineIndex}`}>
        {parts.map((part, partIndex) => {
          const tokenClass = getTokenClass(part)

          if (!tokenClass) return part

          return (
            <span className={tokenClass} key={`${part}-${partIndex}`}>
              {part}
            </span>
          )
        })}
        {lineIndex < lines.length - 1 ? '\n' : null}
      </span>
    )
  })
}

export function ComponentCodeBlock({ code }: ComponentCodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const handoffCode = prepareDeveloperHandoffCode(code)

  useEffect(() => {
    if (!copied) return undefined

    const timeout = window.setTimeout(() => {
      setCopied(false)
    }, 1400)

    return () => window.clearTimeout(timeout)
  }, [copied])

  return (
    <div className="button-code-block">
      <button
        aria-label={copied ? 'Code copied' : 'Copy code'}
        className="component-code-copy"
        data-copied={copied ? 'true' : undefined}
        onClick={async () => {
          await copyTextToClipboard(handoffCode)
          setCopied(true)
        }}
        type="button"
      >
        <HugeiconsIcon
          aria-hidden="true"
          className="component-code-copy__icon"
          icon={copied ? Tick02Icon : Copy01Icon}
        />
      </button>

      <pre className="component-code-pre">
        <code>{renderHighlightedCode(handoffCode)}</code>
      </pre>
    </div>
  )
}
