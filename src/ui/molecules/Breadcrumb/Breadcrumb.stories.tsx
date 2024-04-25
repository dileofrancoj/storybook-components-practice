import type { Meta, StoryObj } from '@storybook/react'

import { breadcrumb } from '../../../__mocks__/breadcrumb'
import type { Props } from './Breadcrumb.types'
import { Breadcrumb } from './index'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Molecules/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    items: breadcrumb,
    onItemClick: { action: 'breadcrum clicked' }
  }
}

export default meta
type Story = StoryObj<Props>

export const Playground: Story = {
  args: {
    items: breadcrumb
  }
}
