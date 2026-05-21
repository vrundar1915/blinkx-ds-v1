import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'

import { BlinkXButton } from './BlinkXButton'

const meta = {
  component: BlinkXButton,
  tags: ['ai-generated'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BlinkXButton>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Get started',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'View tokens',
    variant: 'secondary',
  },
}

export const Large: Story = {
  args: {
    children: 'Publish system',
    size: 'lg',
    variant: 'primary',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Unavailable',
    disabled: true,
    variant: 'primary',
  },
}

export const CssCheck: Story = {
  args: {
    children: 'Get started',
    variant: 'primary',
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /get started/i })
    await expect(getComputedStyle(button).backgroundColor).toBe(
      'rgb(23, 30, 253)',
    )
  },
}
