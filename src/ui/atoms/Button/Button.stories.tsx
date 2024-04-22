import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'primary',
        'secondary',
        'success',
        'danger'
      ],
      control: { type: 'radio' },
      description: 'The visual style of the button'
    },
    onButtonClick: { action: 'On button click' }
  }
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary', // Establecer el valor predeterminado aquí
    label: 'Button'
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Button'
  }
}
