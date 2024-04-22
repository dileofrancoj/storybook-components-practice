import styled from 'styled-components'

import { type StyledProps } from '../../../types/Image'

export const Container = styled.picture``

export const Image = styled.img<StyledProps>`
    max-width: ${(props) => props.maxWidth ?? '100%'};
    height: auto;
    border-radius: ${(props) => (props.thumbnail === true ? '4px' : '0')};
    box-shadow: ${(props) => props.thumbnail === true ? '0 1px 2px rgba(0,0,0,0.15)' : 'none'};
`
