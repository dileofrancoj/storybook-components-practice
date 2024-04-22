import styled, { css } from 'styled-components'

import type { VariantProps } from './Button.props'

export interface ButtonProps {
  variant?: VariantProps
}

interface LabelProps {
  textColor: React.CSSProperties['color']
}

const getButtonColor = (variant: string): string => {
  switch (variant) {
    case 'primary':
      return '#007bff'
    case 'secondary':
      return '#6c757d'
    case 'success':
      return '#28a745'
    case 'danger':
      return '#dc3545'
    default:
      return '#007bff'
  }
}
export const Label = styled.span<LabelProps>`
  color: ${(props) => props.textColor ?? 'white'};
`

export const Button = styled.button<ButtonProps>`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  ${(props) => css`
    color: #fff;
    background-color: ${getButtonColor(props.variant ?? 'primary')};
    border-color: ${getButtonColor(props.variant ?? 'primary')};
  `}

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  &:disabled,
  &:disabled:hover {
    opacity: 0.65;
  }
`
