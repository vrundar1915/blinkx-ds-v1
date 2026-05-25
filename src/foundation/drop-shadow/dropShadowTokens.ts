export type DropShadowTheme = 'light' | 'dark'

export type DropShadowLayer = {
  blur: number
  colorToken: string
  colors: Record<DropShadowTheme, string>
  spread: number
  x: number
  y: number
}

export type DropShadowToken = {
  displayName: string
  group: string
  layers: DropShadowLayer[]
  name: string
  styleId: string
}

const semanticShadowColors = {
  'drop Shadow/drop-shadow-3': {
    light: '#0A0D1008',
    dark: '#0A0D102E',
  },
  'drop Shadow/drop-shadow-4': {
    light: '#0A0D100A',
    dark: '#0A0D1033',
  },
  'drop Shadow/drop-shadow-5': {
    light: '#0A0D100D',
    dark: '#0A0D103D',
  },
  'drop Shadow/drop-shadow-6': {
    light: '#0A0D100F',
    dark: '#0A0D1047',
  },
  'drop Shadow/drop-shadow-8': {
    light: '#0A0D1014',
    dark: '#0A0D105C',
  },
  'drop Shadow/drop-shadow-10': {
    light: '#0A0D101A',
    dark: '#0A0D107A',
  },
  'drop Shadow/drop-shadow-14': {
    light: '#0A0D1024',
    dark: '#0A0D109E',
  },
  'drop Shadow/drop-shadow-18': {
    light: '#0A0D102E',
    dark: '#0A0D10D1',
  },
} satisfies Record<string, Record<DropShadowTheme, string>>

const layer = (
  x: number,
  y: number,
  blur: number,
  spread: number,
  colorToken: keyof typeof semanticShadowColors,
): DropShadowLayer => ({
  x,
  y,
  blur,
  spread,
  colorToken,
  colors: semanticShadowColors[colorToken],
})

export const dropShadowTokens = [
  {
    name: 'Shadow/Shadow-xs',
    displayName: 'Shadow-xs',
    group: 'Shadow',
    styleId: 'S:e92c6a4b2e11468e9a5e859d69e48127f5cb5ce8,',
    layers: [layer(0, 1, 2, 0, 'drop Shadow/drop-shadow-5')],
  },
  {
    name: 'Shadow/Shadow-sm',
    displayName: 'Shadow-sm',
    group: 'Shadow',
    styleId: 'S:6715b21cb4500446961c44242c722b3edb374751,',
    layers: [
      layer(0, 1, 2, -1, 'drop Shadow/drop-shadow-10'),
      layer(0, 1, 3, 0, 'drop Shadow/drop-shadow-5'),
    ],
  },
  {
    name: 'Shadow/Shadow-md',
    displayName: 'Shadow-md',
    group: 'Shadow',
    styleId: 'S:3ae633c05bbbaeb7c985dc3ecbe2359486feb42b,',
    layers: [
      layer(0, 2, 4, -2, 'drop Shadow/drop-shadow-6'),
      layer(0, 4, 6, -1, 'drop Shadow/drop-shadow-10'),
    ],
  },
  {
    name: 'Shadow/Shadow-lg',
    displayName: 'Shadow-lg',
    group: 'Shadow',
    styleId: 'S:f6274c0380dd10f35cbb35e69936bf636ea7e16c,',
    layers: [
      layer(0, 2, 2, -1, 'drop Shadow/drop-shadow-4'),
      layer(0, 4, 6, -2, 'drop Shadow/drop-shadow-3'),
      layer(0, 12, 16, -4, 'drop Shadow/drop-shadow-8'),
    ],
  },
  {
    name: 'Shadow/Shadow-xl',
    displayName: 'Shadow-xl',
    group: 'Shadow',
    styleId: 'S:c7933d4753b989363abc82e9a5524826fe765f37,',
    layers: [
      layer(0, 3, 3, -1.5, 'drop Shadow/drop-shadow-4'),
      layer(0, 8, 8, -4, 'drop Shadow/drop-shadow-3'),
      layer(0, 20, 24, -4, 'drop Shadow/drop-shadow-8'),
    ],
  },
  {
    name: 'Shadow/Shadow-2xl',
    displayName: 'Shadow-2xl',
    group: 'Shadow',
    styleId: 'S:c46a703f0b48c6d5f16d159b11a675ff81feab6a,',
    layers: [
      layer(0, 4, 4, -2, 'drop Shadow/drop-shadow-4'),
      layer(0, 24, 48, -12, 'drop Shadow/drop-shadow-18'),
    ],
  },
  {
    name: 'Shadow/Shadow-3xl',
    displayName: 'Shadow-3xl',
    group: 'Shadow',
    styleId: 'S:ef9ee8444e9174f4bff4888df80fafadb3d211ef,',
    layers: [
      layer(0, 5, 5, -2.5, 'drop Shadow/drop-shadow-4'),
      layer(0, 32, 64, -12, 'drop Shadow/drop-shadow-14'),
    ],
  },
] satisfies DropShadowToken[]

const formatPx = (value: number) => `${Number.isInteger(value) ? value : value.toFixed(1)}px`

export function getDropShadowCss(token: DropShadowToken, theme: DropShadowTheme) {
  return token.layers
    .map(
      (shadowLayer) =>
        `${formatPx(shadowLayer.x)} ${formatPx(shadowLayer.y)} ${formatPx(
          shadowLayer.blur,
        )} ${formatPx(shadowLayer.spread)} ${shadowLayer.colors[theme]}`,
    )
    .join(', ')
}
