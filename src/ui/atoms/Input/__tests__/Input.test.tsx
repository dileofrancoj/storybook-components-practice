import { fireEvent, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { createRender } from '../../../../../tests/helper'
import { Input } from '../'
import { type Props } from '../Input.Props'

describe('Button', () => {
  const render = createRender(Input)
  let defaultProps: Props

  beforeEach(() => {
    defaultProps = {
      name: 'name',
      onChange: vi.fn(),
      placeholder: 'Nombre...'
    }
  })
  it('Should render the Input component', () => {
    render(defaultProps)
    const element = screen.getByPlaceholderText('Nombre...')
    expect(element).toBeDefined()
    expect(element.getAttribute('name')).toBe('name')
    expect(element.getAttribute('value')).toBe(null)
  })

  it('Should render the Input with label', () => {
    defaultProps.label = 'Nombre'
    defaultProps.value = ''
    render(defaultProps)
    expect(screen.getByText('Nombre')).toBeDefined()
  })

  it('Should handle onChange event', () => {
    render(defaultProps)
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    const element = screen.getByPlaceholderText('Nombre...') as HTMLInputElement
    fireEvent.change(element, { target: { value: 'some-name' } })
    expect(element.value).toBe('some-name')
  })
})
