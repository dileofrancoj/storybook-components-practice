export interface ImageProps {
  maxWidth?: string
  thumbnail?: boolean
  src: string
  alt: string
}

export interface StyledCardProps {
  boxShadow?: boolean
}

export interface ProductProps {
  name: string
  description: string
  image: ImageProps

}

export interface Props extends StyledCardProps {
  product: ProductProps
  buttonText: string
  onButtonClick: (product: ProductProps) => ProductProps
  onQuantityChange: (quantity: number) => void
}
