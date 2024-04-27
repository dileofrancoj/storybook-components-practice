import * as React from 'react'

import { Button } from '../../atoms'
import { Image } from '../../atoms/Image'
import { Stepper } from '../Stepper'
import * as Styled from './ProductCard.styled'
import type { Props } from './ProductCard.types'

export const ProductCard: React.FC<Props> = ({
  product,
  boxShadow,
  buttonText,
  onButtonClick,
  onQuantityChange
}) => {
  const { name, description, image } = product

  return (
    <Styled.Card boxShadow={boxShadow}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '4px 0 8px 0',
          width: '100%'
        }}
      >
        <Stepper
          max={10}
          onStepperChange={onQuantityChange}
        />
        <Image
          onImageClick={() => {}}
          src={image.src}
          alt={image.alt}
          thumbnail={image.thumbnail}
        />
      </div>
      <Styled.CardBody>
        <Styled.CardTitle>{name}</Styled.CardTitle>
        <Styled.CardText>{description}</Styled.CardText>
        <Button
          label={buttonText}
          onButtonClick={() => onButtonClick(product)}
        />
      </Styled.CardBody>
    </Styled.Card>
  )
}
