import { useState } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { Refresh03Icon } from '@hugeicons/core-free-icons'

type ComponentResetButtonProps = {
  active?: boolean
  onReset?: () => void
}

export function ComponentResetButton({
  active = false,
  onReset,
}: ComponentResetButtonProps) {
  const [isResetting, setIsResetting] = useState(false)
  const isVisible = active || isResetting

  return (
    <button
      aria-label="Reset component state"
      className="component-reset-button"
      data-resetting={isResetting ? 'true' : undefined}
      disabled={!isVisible}
      onClick={() => {
        if (!isVisible || isResetting) return

        setIsResetting(true)

        window.setTimeout(() => {
          onReset?.()
          setIsResetting(false)
        }, 180)
      }}
      type="button"
    >
      <HugeiconsIcon
        aria-hidden="true"
        className="component-reset-button__icon"
        icon={Refresh03Icon}
      />
    </button>
  )
}
