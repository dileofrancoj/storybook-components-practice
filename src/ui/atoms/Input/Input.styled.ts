import styled from 'styled-components'

const colors = {
  primary: '#007bff',
  error: '#dc3545',
  border: '#ced4da'
}

export const Input = styled.input<{ error?: boolean }>`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid ${({ error }) => (error === true ? '#dc3545' : '#ced4da')};
  border-radius: 0.35rem;
  width: 100%;
  margin-bottom: 1rem;
  transition:
    border-color: 0.15s ease-in-out,
    box-shadow: 0.15s ease-in-out;
  
  border: 1px solid ${({ error }) => (error !== null ? colors.error : colors.border)};
  &:focus {
    border-color: ${({ error }) => (error !== null ? colors.error : colors.primary)};
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`

export const Container = styled.div`
  margin-bottom: 1rem;
`

export const Label = styled.label`
  display: block;
  margin-bottom: 0.25rem;
  font-weight: bold;
`
