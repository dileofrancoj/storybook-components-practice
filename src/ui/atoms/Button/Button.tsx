import React from 'react'

import type { Props } from './Button.props'
import * as Styled from './styled'

export const Button: React.FC<Props> = ({
  variant = 'primary',
  textColor,
  label,
  onButtonClick,
  ...props
}) => {
  return (
    <Styled.Button onClick={onButtonClick} variant={variant} {...props}>
      <Styled.Label textColor={textColor}>{label}</Styled.Label>
    </Styled.Button>
  )
}
