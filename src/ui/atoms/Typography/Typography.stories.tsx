import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './index'
import type { Props } from './Typography.types'

const meta: Meta<typeof Typography> = {
  title: 'Atoms/Typography',
  component: Typography,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    component: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
      defaultValue: 'span',
      description: 'HTML Tag'
    },
    color: {
      description: 'Color value',
      defaultValue: 'black',
      table: {
        type: { summary: 'string' }
      }
    }
  }
}

export default meta
type Story = StoryObj<Props>

export const Playground: Story = {
  args: {
    color: 'black',
    children: 'Typography Children'
  }
}
