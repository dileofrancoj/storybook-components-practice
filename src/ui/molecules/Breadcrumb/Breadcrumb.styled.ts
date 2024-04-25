import styled from 'styled-components'

export const Container = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
`

export const Item = styled.li`
  &:not(:last-child)::after {
    content: '>';
    margin: 0 0.5em;
  }
`

export const Link = styled.span`
  color: blue;
  cursor: pointer;
  text-decoration: underline;
  &:not(:last-child)::after {
    color: #007bff;
  }
  &:hover {
    text-decoration: underline;
  }
`

export const LastItem = styled.span`
  color: black;
`
