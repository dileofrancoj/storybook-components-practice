import React from 'react'

import type { Props2 } from './Button.props'
import * as Styled from './styled'

export const ButtonChildren: React.FC<Props2> = ({
  variant = 'primary',
  textColor,
  children,
  onButtonClick,
  ...props
}) => {
  return (
    <Styled.Button onClick={onButtonClick} variant={variant} {...props}>
      <Styled.Label textColor={textColor}>{children}</Styled.Label>
    </Styled.Button>
  )
}
