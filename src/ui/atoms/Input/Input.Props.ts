import type { InputHTMLAttributes } from 'react'

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  error?: string
  label?: string
  placeholder: string
}
