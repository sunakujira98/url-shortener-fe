import { SpinnerVariants, spinnerStyles } from './styles'

export type SpinnerProps = {
  variant?: SpinnerVariants
  className?: string
}

export const Spinner = ({ variant, className }: SpinnerProps) => {
  return <div aria-label="loading" className={spinnerStyles(variant, className)} />
}
