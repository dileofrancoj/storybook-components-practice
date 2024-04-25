import { fireEvent, screen, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { createRender } from '../../../../tests/helper'
import { Stepper } from './Stepper'
import { type Props } from './Stepper.types'

describe('Stepper', () => {
  const render = createRender(Stepper)
  let defaultProps: Props

  beforeEach(() => {
    defaultProps = {
      defaultValue: 0,
      max: 10,
      onStepperChange: vi.fn()
    }
  })
  it('Should render the stepper', () => {
    render(defaultProps)
    expect(screen.getByTestId('minus-btn')).toBeDefined()
    expect(screen.getByTestId('plus-btn')).toBeDefined()
    expect(screen.getByText(0)).toBeDefined()
  })
  it('Should render the stepper with defaultValue = 10', () => {
    defaultProps.defaultValue = 10
    render(defaultProps)
    expect(screen.getByText(10)).toBeDefined()
  })
  it('Should update stepper correctly', () => {
    render(defaultProps)
    const plusBtn = screen.getByTestId('plus-btn')
    const minusBtn = screen.getByTestId('minus-btn')
    fireEvent.click(plusBtn)
    void waitFor(() => {
      expect(defaultProps.onStepperChange).toHaveBeenCalledOnce()
      screen.getByText(1)
    })
    fireEvent.click(plusBtn)
    void waitFor(() => {
      screen.getByText(2)
    })
    fireEvent.click(minusBtn)
    void waitFor(() => {
      screen.getByText(1)
    })
  })
  it('Should update stepper correctly', () => {
    defaultProps.max = 2
    render(defaultProps)
    const plusBtn = screen.getByTestId('plus-btn')

    fireEvent.click(plusBtn)
    fireEvent.click(plusBtn)
    fireEvent.click(plusBtn)
    void waitFor(() => {
      screen.getByText(2)
    })
    expect(screen.queryByText(3)).toBeNull() // queryByText ya que getBy explota
  })
})
