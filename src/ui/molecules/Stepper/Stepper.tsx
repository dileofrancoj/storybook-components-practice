/* eslint-disable multiline-ternary */
import * as React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { FaRegTrashCan } from 'react-icons/fa6'

import { useStepper } from '../../../hooks/useStepper'
import { Typography } from '../../atoms/Typography'
import * as Styled from './Stepper.styled'
import type { Props } from './Stepper.types'

export const Stepper: React.FC<Props> = (props: Props) => {
  const { defaultValue, max, onStepperChange, withTrashIcon, min = 0 } = props
  const {
    decrement,
    increment,
    setIsAddPressed,
    setIsRemovePressed,
    isRemovePressed,
    isAddPressed,
    shouldShowTrashIcon,
    count
  } = useStepper({ defaultValue, max, onStepperChange, withTrashIcon, min })

  return (
    <Styled.Container>
      <Styled.Button
        isPressed={isRemovePressed}
        data-testid="minus-btn"
        onMouseDown={() => {
          setIsRemovePressed(true)
        }}
        onMouseUp={() => {
          setIsRemovePressed(false)
        }}
        onClick={decrement}
      >
        {/* remueve al elemento de la navegación pero permite que sea focuseable   */}
        {shouldShowTrashIcon ? (
          <FaRegTrashCan role="button" tabIndex={-1} />
        ) : (
          <FaMinus role="button" tabIndex={-1} />
        )}
      </Styled.Button>
      <Typography>{count}</Typography>
      <Styled.Button
        isPressed={isAddPressed}
        onMouseDown={() => {
          setIsAddPressed(true)
        }}
        onMouseUp={() => {
          setIsAddPressed(false)
        }}
        onClick={increment}
        data-testid="plus-btn"
      >
        <FaPlus role="button" tabIndex={-1} />
      </Styled.Button>
    </Styled.Container>
  )
}
