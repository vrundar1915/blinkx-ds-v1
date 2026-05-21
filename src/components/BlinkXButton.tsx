import './BlinkXButton.css'

type BlinkXButtonProps = {
  children: React.ReactNode
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary'
}

export function BlinkXButton({
  children,
  disabled = false,
  size = 'md',
  variant = 'primary',
}: BlinkXButtonProps) {
  return (
    <button
      className={`blinkx-button blinkx-button--${variant} blinkx-button--${size}`}
      disabled={disabled}
      type="button"
    >
      <span>{children}</span>
      <span aria-hidden="true" className="blinkx-button__bolt">
        ↗
      </span>
    </button>
  )
}
