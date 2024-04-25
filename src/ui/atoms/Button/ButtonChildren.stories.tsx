import type { Meta, StoryObj } from '@storybook/react'

import { ButtonChildren } from './ButtonChildren'

const meta: Meta<typeof ButtonChildren> = {
  title: 'Atoms/ButtonChildren',
  component: ButtonChildren,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'success', 'danger'],
      control: { type: 'radio' },
      description: 'Visual style of button'
    },
    onButtonClick: { action: 'On button click' }
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: <span>Boton</span>
  }
}
