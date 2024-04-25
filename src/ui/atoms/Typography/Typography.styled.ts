import styled from 'styled-components'

interface Props {
  color: string
}

export const Typography = styled.span<Props>`
  font-family: Roboto, 'Nunito Sans', monospace;
  color: ${(props) => props.color};
`
