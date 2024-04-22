import { fireEvent, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { createRender } from '../../../../../tests/helper'
import { Button } from '../Button'
import { type Props } from '../Button.props'

describe('Button', () => {
  const render = createRender(Button)
  let defaultProps: Props

  beforeEach(() => {
    defaultProps = {
      label: 'Hello world',
      onButtonClick: vi.fn()
    }
  })
  it('Should render the base button', () => {
    render(defaultProps)
    const btn = screen.getByRole('button', { name: 'Hello world' })
    expect(btn).toBeDefined()
    expect(btn.getAttribute('variant')).toBe('primary')
  })

  it('Should render the button with another variant', () => {
    defaultProps.variant = 'secondary'
    render(defaultProps)
    const btn = screen.getByRole('button', { name: 'Hello world' })
    expect(btn).toBeDefined()
    expect(btn.getAttribute('variant')).toBe('secondary')
  })

  it('Should call the button onClick callback', () => {
    render(defaultProps)
    const btn = screen.getByRole('button', { name: 'Hello world' })
    fireEvent.click(btn)
    expect(defaultProps.onButtonClick).toHaveBeenCalledOnce()
  })
})
