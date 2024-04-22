// @ts-expect-error types
import { type StyledProps } from '@types/Image'

export interface Props extends StyledProps {
  src: string
  alt: string
  lazyLoad?: boolean
  onImageClick: () => void
}
