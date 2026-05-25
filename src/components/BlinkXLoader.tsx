import type { HTMLAttributes } from 'react'

import './BlinkXLoader.css'

export type BlinkXLoaderTheme = 'light' | 'dark'
export type BlinkXLoaderVariation = 'Constant' | 'Eased / snatch' | 'Stretch'

export type BlinkXLoaderProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  rotatingVariation?: BlinkXLoaderVariation
  theme?: BlinkXLoaderTheme
}

const variationClassNames: Record<BlinkXLoaderVariation, string> = {
  Constant: 'blinkx-loader--variation-constant',
  'Eased / snatch': 'blinkx-loader--variation-eased-snatch',
  Stretch: 'blinkx-loader--variation-stretch',
}

function BlinkXLoaderLogo() {
  return (
    <svg
      aria-hidden="true"
      className="blinkx-loader__logo-svg"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        clipRule="evenodd"
        d="M8.4762 17.936H14.4409L12.9879 25.7068H0.846388C0.355143 25.7068 -0.0843914 25.4886 0.0138575 25.0016L2.93806 9.29238C3.2328 7.69564 4.31096 5.7769 5.3555 4.63257C6.22164 3.6905 6.69479 3.27003 7.75743 2.5648C8.16852 2.29069 8.56928 2.10175 9.00364 1.89417C9.05018 1.87022 9.0993 1.84893 9.14843 1.82498C9.98096 1.42047 11.403 1 12.5458 1H19.3431C19.6378 1 19.9144 1.35394 19.8498 1.63869L19.2293 4.96789C19.2164 5.07168 17.7375 6.8201 16.9721 7.72492C16.7343 8.00435 16.5662 8.20394 16.5326 8.24652C16.4137 8.38756 16.1706 8.67764 15.8397 9.0715C13.8928 11.3894 8.91056 17.316 8.4762 17.9334V17.936ZM23.5238 14.0666H17.5591L19.0121 6.29584H31.1536C31.6449 6.29584 32.0844 6.49809 31.9861 7.00106L29.0619 22.7103C28.7672 24.307 27.689 26.2098 26.6445 27.3515C25.7784 28.3095 25.3052 28.73 24.2426 29.4192C23.8237 29.712 23.4178 29.9062 22.9783 30.1165C22.9369 30.1351 22.8955 30.1564 22.8542 30.175C22.0216 30.5795 20.5996 31 19.4723 31H12.6595C12.3648 31 12.1037 30.6461 12.1528 30.3453L12.7733 27.0321C12.7862 26.9283 14.2936 25.1347 15.0511 24.2352C15.2761 23.9664 15.4364 23.7774 15.47 23.7375C16.287 22.7795 23.0196 14.7905 23.5264 14.0666H23.5238Z"
        fill="url(#blinkx-loader-logo-gradient)"
        fillRule="evenodd"
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="blinkx-loader-logo-gradient"
          x1="-0.00165547"
          x2="32.0017"
          y1="16.0013"
          y2="16.0013"
        >
          <stop stopColor="#EA7124" />
          <stop offset="1" stopColor="#E2136E" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function BlinkXLoader({
  'aria-label': ariaLabel = 'Loading',
  className = '',
  rotatingVariation = 'Constant',
  theme = 'light',
  ...loaderProps
}: BlinkXLoaderProps) {
  const classes = [
    'blinkx-loader',
    `blinkx-loader--theme-${theme}`,
    variationClassNames[rotatingVariation],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      {...loaderProps}
      aria-label={ariaLabel}
      aria-live="polite"
      className={classes}
      data-theme={theme}
      data-variation={rotatingVariation}
      role="status"
    >
      <span aria-hidden="true" className="blinkx-loader__surface">
        <svg className="blinkx-loader__ring" fill="none" viewBox="0 0 56 56">
          <circle className="blinkx-loader__track" cx="28" cy="28" r="21" />
          <circle className="blinkx-loader__arc" cx="28" cy="28" r="21" />
        </svg>

        <span className="blinkx-loader__logo">
          <BlinkXLoaderLogo />
        </span>
      </span>
    </div>
  )
}
