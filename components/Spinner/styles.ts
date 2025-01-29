import clsx from 'clsx'

export type SpinnerVariants = 'primary' | 'success'

const baseClass = 'aspect-square animate-spin rounded-full h-6 border-2'

const variantClasses = {
  primary: 'border-white border-t-primary',
  success: 'border-white border-t-success',
}

export const spinnerStyles = (variant: SpinnerVariants = 'primary', className?: string) => {
  return clsx(baseClass, variantClasses[variant], className)
}
