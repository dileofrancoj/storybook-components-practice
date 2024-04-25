export interface ItemProps {
  value: string
  href: string
}

export interface Props {
  items: ItemProps[]
  onItemClick: (item: ItemProps) => ItemProps
}
