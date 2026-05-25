import type { InputHTMLAttributes } from 'react'

import './BlinkXToggle.css'

export type BlinkXToggleSize = 'sm' | 'md'
export type BlinkXToggleState = 'Active' | 'Focused' | 'default' | 'disable'
export type BlinkXToggleTheme = 'light' | 'dark'

export type BlinkXToggleProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> & {
  size?: BlinkXToggleSize
  state?: BlinkXToggleState
  theme?: BlinkXToggleTheme
}

export function BlinkXToggle({
  'aria-label': ariaLabel = 'Toggle',
  checked,
  className = '',
  disabled = false,
  onChange,
  size = 'sm',
  state = 'default',
  theme = 'light',
  ...inputProps
}: BlinkXToggleProps) {
  const isDisabled = disabled || state === 'disable'
  const isChecked = checked ?? state === 'Active'
  const classes = [
    'blinkx-toggle',
    `blinkx-toggle--size-${size}`,
    `blinkx-toggle--state-${state.toLowerCase()}`,
    `blinkx-toggle--theme-${theme}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <label className={classes} data-state={state} data-theme={theme}>
      <input
        {...inputProps}
        aria-checked={isChecked}
        aria-label={ariaLabel}
        checked={isChecked}
        className="blinkx-toggle__input"
        disabled={isDisabled}
        onChange={onChange}
        readOnly={!onChange}
        type="checkbox"
      />
      <span className="blinkx-toggle__track" aria-hidden="true">
        <span className="blinkx-toggle__thumb" />
      </span>
    </label>
  )
}
