import styled from 'styled-components'

import type { StyledCardProps } from './ProductCard.types'

export const Card = styled.div<StyledCardProps>`
  width: 18rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: ${(props) =>
    (props.boxShadow === true) ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none'};
`

export const CardBody = styled.div`
  padding: 0.4rem;
  text-align: center;
`

export const CardTitle = styled.h3`
  margin-bottom: 0.2rem;
`

export const CardText = styled.p`
  margin: 1rem 0;
`
