import { fireEvent, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { createRender } from '../../../../../tests/helper'
import { breadcrumb } from '../../../../__mocks__/breadcrumb'
import { Breadcrumb } from '../Breadcrumb'
import { type Props } from '../Breadcrumb.types'

describe('Breadcrumb', () => {
  const render = createRender(Breadcrumb)
  let defaultProps: Props

  beforeEach(() => {
    defaultProps = {
      items: breadcrumb,
      onItemClick: vi.fn((item) => item)
    }
  })
  it('Should render with exact length', () => {
    render(defaultProps)
    const breadcrumbElement = screen
      .getByTestId('breadcrumb')
      .querySelectorAll('li')
    expect(breadcrumbElement).toHaveLength(2)
  })
  it('Should execute onBreadcrumbClick callback when a link is called', () => {
    render(defaultProps)
    const element = screen.getByText('Home')
    fireEvent.click(element)
    expect(defaultProps.onItemClick).toHaveBeenCalled()
  })

  it('Should not execute onBreadcrumbClick callback when a user click on last item', () => {
    render(defaultProps)
    const element = screen.getByText('Some Page')
    fireEvent.click(element)
    expect(defaultProps.onItemClick).not.toHaveBeenCalled()
  })
})
