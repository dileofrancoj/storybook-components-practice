import { fireEvent, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { createRender } from '../../../../../tests/helper'
import { Image } from '../'
import { type Props } from '../Image.props'

describe('Button', () => {
  const render = createRender(Image)
  let defaultProps: Props

  beforeEach(() => {
    defaultProps = {
      src: 'some-image-src',
      onImageClick: vi.fn(),
      alt: 'some-image-alt'
    }
  })
  it('Should render the Image component', () => {
    render(defaultProps)
    // https://testing-library.com/docs/queries/byalttext/
    const element = screen.getByAltText('some-image-alt')
    expect(element).toBeDefined()
    expect(element.getAttribute('src')).toBe('some-image-src')
    expect(element.getAttribute('loading')).toBeFalsy()
  })
  it('should throw an event click', () => {
    render(defaultProps)
    const element = screen.getByAltText('some-image-alt')
    fireEvent.click(element)
    expect(defaultProps.onImageClick).toHaveBeenCalled()
  })
  it('should render Image component with lazy loading', () => {
    defaultProps.lazyLoad = true
    render(defaultProps)
    const element = screen.getByAltText('some-image-alt')
    expect(element.getAttribute('loading')).toBe('lazy')
    expect(element.getAttribute('data-src')).toBe('some-image-src')
  })
  it('should render Image with thumbnail', () => {
    defaultProps.thumbnail = true
    render(defaultProps)
    const element = screen.getByAltText('some-image-alt')
    // @ts-expect-error definition.ts
    expect(element).toHaveStyle('border-radius: 4px')
  })
})
