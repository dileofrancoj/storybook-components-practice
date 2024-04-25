import * as React from 'react'

import * as Styled from './Breadcrumb.styled'
import type { ItemProps, Props } from './Breadcrumb.types'

export const Breadcrumb: React.FC<Props> = (props: Props) => {
  const { items, onItemClick } = props

  const renderBreadcrumbItem = (item: ItemProps, idx: number): React.ReactNode => {
    if (idx === items.length - 1 || items.length === 1) {
      return <Styled.LastItem>{item.value}</Styled.LastItem>
    }

    return (
      <Styled.Link onClick={() => onItemClick(item)}>
        {item.value}
      </Styled.Link>
    )
  }

  return (
    <Styled.Container data-testid='breadcrumb'>
      {items.map((item, idx) => (
        <Styled.Item key={`${item.value} - ${idx}`}>
          {renderBreadcrumbItem(item, idx)}
        </Styled.Item>
      ))}
    </Styled.Container>
  )
}
