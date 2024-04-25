import type { Meta, StoryObj } from '@storybook/react'

import { Stepper } from './index'
import type { Props } from './Stepper.types'

const meta: Meta<typeof Stepper> = {
  title: 'Molecules/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      description: 'default value for stepper'
    },
    min: {
      description: 'minimum possible value',
      control: { type: 'number' }
    },
    onStepperChange: { action: 'stepper clicked' }
  }
}

export default meta
type Story = StoryObj<Props>

export const Playground: Story = {
  args: {
    max: 10,
    defaultValue: 1
  }
}
