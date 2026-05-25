import { useState, type HTMLAttributes, type KeyboardEvent } from 'react'

import './BlinkXTab.css'

export type BlinkXTabCount = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10'
export type BlinkXTabTheme = 'light' | 'dark'

export type BlinkXTabProps = Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  defaultSelectedIndex?: number
  labels?: string[]
  noOfTabs?: BlinkXTabCount
  onValueChange?: (selectedIndex: number) => void
  selectedIndex?: number
  showTag?: boolean
  tagIndex?: number
  tagPosition?: number
  tagText?: string
  theme?: BlinkXTabTheme
}

function getTabCount(noOfTabs: BlinkXTabCount) {
  return Number.parseInt(noOfTabs, 10)
}

function clampIndex(index: number, count: number) {
  return Math.min(Math.max(index, 0), count - 1)
}

export function BlinkXTab({
  'aria-label': ariaLabel = 'Tabs',
  className = '',
  defaultSelectedIndex = 0,
  labels,
  noOfTabs = '3',
  onValueChange,
  selectedIndex,
  showTag = true,
  tagIndex = 2,
  tagPosition,
  tagText = 'NEW',
  theme = 'light',
  ...containerProps
}: BlinkXTabProps) {
  const tabCount = getTabCount(noOfTabs)
  const [internalIndex, setInternalIndex] = useState(() =>
    clampIndex(defaultSelectedIndex, tabCount),
  )
  const activeIndex = clampIndex(selectedIndex ?? internalIndex, tabCount)
  const safeTagIndex = clampIndex(tagPosition === undefined ? tagIndex : tagPosition - 1, tabCount)
  const tabLabels = Array.from({ length: tabCount }, (_, index) => {
    if (labels?.[index]) return labels[index]

    return index === 0 ? 'F&O' : 'Equity'
  })
  const classes = ['blinkx-tab', `blinkx-tab--theme-${theme}`, className].filter(Boolean).join(' ')

  function selectTab(nextIndex: number) {
    const clampedIndex = clampIndex(nextIndex, tabCount)

    if (selectedIndex === undefined) {
      setInternalIndex(clampedIndex)
    }

    onValueChange?.(clampedIndex)
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault()
      selectTab((index + 1) % tabCount)
    }

    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault()
      selectTab((index - 1 + tabCount) % tabCount)
    }

    if (event.key === 'Home') {
      event.preventDefault()
      selectTab(0)
    }

    if (event.key === 'End') {
      event.preventDefault()
      selectTab(tabCount - 1)
    }
  }

  return (
    <div
      {...containerProps}
      aria-label={ariaLabel}
      className={classes}
      data-count={noOfTabs}
      data-theme={theme}
      role="tablist"
    >
      {tabLabels.map((label, index) => {
        const isActive = index === activeIndex
        const shouldShowTag = showTag && index === safeTagIndex

        return (
          <button
            aria-selected={isActive}
            className="blinkx-tab__item"
            data-active={isActive ? 'true' : 'false'}
            key={`${label}-${index}`}
            onClick={() => selectTab(index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            role="tab"
            tabIndex={isActive ? 0 : -1}
            type="button"
          >
            <span className="blinkx-tab__label-wrap">
              <span className="blinkx-tab__label">{label}</span>
              {shouldShowTag ? (
                <span className="blinkx-tab__tag">
                  <span className="blinkx-tab__tag-label">{tagText}</span>
                </span>
              ) : null}
            </span>
            <span className="blinkx-tab__indicator" aria-hidden="true" />
          </button>
        )
      })}
    </div>
  )
}
