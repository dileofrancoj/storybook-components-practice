import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '.'
import type { Props } from './Input.Props'

const meta = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'import {Input} from "@..."'
      }
    },
    layout: 'centered'
  },
  argTypes: {
    placeholder: {
      description: 'Input placeholder',
      type: 'string',
      defaultValue: 'placeholder'
    }
  }
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<Props>

export const Playground: Story = {
  args: {
    placeholder: 'Nombre',
    label: 'Nombre',
    required: false
  }
}
