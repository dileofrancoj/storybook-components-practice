export type VariantProps =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'

export interface Props {
  variant?: VariantProps
  textColor?: string
  onButtonClick: () => void
  label: string
}
