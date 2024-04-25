import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'

import { createRender } from '../../../../tests/helper'
import { Typography } from './Typography'
import { type Props } from './Typography.types'

describe('Breadcrumb', () => {
  let defaultProps: Props

  beforeEach(() => {
    defaultProps = {
      children: 'Typography'
    }
  })
  it('Should render the default element', () => {
    render(<Typography {...defaultProps}>Typography</Typography>)
    const typographyElement = screen.getByText(/typography/i)
    expect(typographyElement.querySelector('span')).toBeDefined()
  })

  it('should render custom Typography element', () => {
    defaultProps.component = 'p'
    const customRender = createRender(Typography)
    customRender(defaultProps)
    const element = screen.getByText('Typography')
    expect(element).toBeDefined()
    expect(element.querySelector('p')).toBeDefined()
  })
})
