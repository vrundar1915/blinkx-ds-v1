export type RadiusToken = {
  aliasTo: string
  displayName: string
  group: string
  name: string
  remValue: string
  value: string
}

export const radiusTokens = [
  {
    name: 'radius-none',
    displayName: 'radius-none',
    group: 'Radius',
    value: '0px',
    remValue: '0rem',
    aliasTo: 'unit/0',
  },
  {
    name: 'radius-xxs',
    displayName: 'radius-xxs',
    group: 'Radius',
    value: '2px',
    remValue: '0.125rem',
    aliasTo: 'unit/2',
  },
  {
    name: 'radius-xs',
    displayName: 'radius-xs',
    group: 'Radius',
    value: '4px',
    remValue: '0.25rem',
    aliasTo: 'unit/4',
  },
  {
    name: 'radius-sm',
    displayName: 'radius-sm',
    group: 'Radius',
    value: '6px',
    remValue: '0.375rem',
    aliasTo: 'unit/6',
  },
  {
    name: 'radius-md',
    displayName: 'radius-md',
    group: 'Radius',
    value: '8px',
    remValue: '0.5rem',
    aliasTo: 'unit/8',
  },
  {
    name: 'radius-lg',
    displayName: 'radius-lg',
    group: 'Radius',
    value: '10px',
    remValue: '0.625rem',
    aliasTo: 'unit/10',
  },
  {
    name: 'radius-xl',
    displayName: 'radius-xl',
    group: 'Radius',
    value: '12px',
    remValue: '0.75rem',
    aliasTo: 'unit/12',
  },
  {
    name: 'radius-2xl',
    displayName: 'radius-2xl',
    group: 'Radius',
    value: '16px',
    remValue: '1rem',
    aliasTo: 'unit/16',
  },
  {
    name: 'radius-3xl',
    displayName: 'radius-3xl',
    group: 'Radius',
    value: '20px',
    remValue: '1.25rem',
    aliasTo: 'unit/20',
  },
  {
    name: 'radius-4xl',
    displayName: 'radius-4xl',
    group: 'Radius',
    value: '24px',
    remValue: '1.5rem',
    aliasTo: 'unit/24',
  },
  {
    name: 'radius-full',
    displayName: 'radius-full',
    group: 'Radius',
    value: '9999px',
    remValue: '624.9375rem',
    aliasTo: 'unit/9999',
  },
] satisfies RadiusToken[]
