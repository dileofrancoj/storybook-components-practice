import * as React from 'react'

import type { Props } from './Input.Props'
import * as Styled from './Input.styled'

export const Input: React.FC<Props> = ({ label, error, placeholder, onChange, value, name, ...props }) => {
  return (
    <Styled.Container>
      { label !== null && <Styled.Label htmlFor={name}>{label}</Styled.Label> }
      <Styled.Input
        id={name}
        name={name}
        error={Boolean(error)}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        aria-labelledby={name}
        {...props}
      />
    </Styled.Container>
  )
}
