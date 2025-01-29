import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { Spinner } from '../Spinner'

import { ButtonVariants, buttonStyles } from './styles'

type ButtonVariantProps = {
  className?: string
  color?: ButtonVariants
}

export type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  loading?: boolean
  color?: ButtonVariants
} & ButtonVariantProps

export type BOButtonProps = ComponentPropsWithoutRef<'button'> & {
  loading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, loading, disabled, color, className, ...props }, ref) => (
    <button
      type="button"
      className={buttonStyles(color, className)}
      disabled={disabled || loading}
      ref={ref}
      {...props}
    >
      {children}
      {loading && <Spinner />}
    </button>
  ),
)
