import React from 'react'

import type { Props } from '../ui/molecules/Stepper/Stepper.types'

interface UseStepperProps {
  increment: () => void
  decrement: () => void
  isRemovePressed: boolean
  isAddPressed: boolean
  shouldShowTrashIcon: boolean
  setIsAddPressed: React.Dispatch<React.SetStateAction<boolean>>
  setIsRemovePressed: React.Dispatch<React.SetStateAction<boolean>>
  count: number
}
export const useStepper = (props: Props): UseStepperProps => {
  const {
    defaultValue = 0,
    min = 1,
    withTrashIcon = true,
    max,
    onStepperChange
  } = props
  const [count, setCount] = React.useState<number>(defaultValue)
  const [isRemovePressed, setIsRemovePressed] = React.useState(false)
  const [isAddPressed, setIsAddPressed] = React.useState(false)

  const shouldShowTrashIcon = React.useMemo(
    () => count === min && withTrashIcon,
    [min, count, withTrashIcon]
  )
  React.useEffect(() => {
    onStepperChange(count)
  }, [count])

  const increment = (): void => {
    if (count >= max) return
    setCount((prevCount) => prevCount + 1)
  }

  const decrement = (): void => {
    if (count > 0 && count > min) {
      setCount((prevCount) => prevCount - 1)
      onStepperChange(count)
    }
  }

  return {
    increment,
    decrement,
    isRemovePressed,
    isAddPressed,
    shouldShowTrashIcon,
    setIsAddPressed,
    setIsRemovePressed,
    count
  }
}
