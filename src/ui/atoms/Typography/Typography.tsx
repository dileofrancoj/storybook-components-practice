import * as React from 'react'

import * as Styled from './Typography.styled'
import type { Props } from './Typography.types'

export const Typography: React.FC<Props> = ({
  children,
  color = 'black',
  component = 'span',
  ...props
}) => {
  return (
    <Styled.Typography as={component} color={color} {...props}>
      {children}
    </Styled.Typography>
  )
}
