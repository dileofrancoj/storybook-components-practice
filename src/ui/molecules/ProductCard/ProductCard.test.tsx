import { fireEvent, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { createRender } from '../../../../tests/helper'
import { ProductCard } from '../ProductCard'
import type { Props } from './ProductCard.types'

describe('Breadcrumb', () => {
  const render = createRender(ProductCard)
  let defaultProps: Props | undefined

  beforeEach(() => {
    defaultProps = {
      buttonText: 'Ver más',
      onButtonClick: vi.fn().mockReturnValue({
        name: 'Producto 1',
        description: 'Descripción del producto 1',
        image: {
          src: '',
          alt: 'alt tag'
        }
      }),
      onQuantityChange: vi.fn(),
      product: {
        name: 'Producto 1',
        description: 'Descripción',
        image: {
          src: '',
          alt: 'product image description'
        }
      }
    }
  })
  it('Should render the product', () => {
    render(defaultProps)
    expect(screen.getByText(/producto 1/i)).toBeDefined()
    expect(screen.getByText(/descripción/i)).toBeDefined()
    expect(screen.getByRole('button', { name: /ver más/i })).toBeDefined()
    expect(screen.getByRole('img', { name: 'product image description' }))
  })

  it('Should get product object when button is clicked', () => {
    render(defaultProps)
    const btn = screen.getByRole('button', { name: /ver más/i })
    fireEvent.click(btn)
    expect(defaultProps?.onButtonClick).toHaveBeenCalledWith(
      defaultProps?.product
    )
  })
})
