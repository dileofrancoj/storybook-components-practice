import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 108px;
  height: 36px;
  border: 1px solid gray;
  position: absolute;
  z-index: 1;
  background: white;
`
interface StepperButtonProps {
  isPressed: boolean
}

export const Button = styled.button<StepperButtonProps>`
  border: none;
  background: white;
  transition: all 0.2 ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 22px;
  background: white;
  border-radius: 4px;
  background-color: ${({ isPressed }) => (isPressed ? 'gray' : 'transparent')};
`
