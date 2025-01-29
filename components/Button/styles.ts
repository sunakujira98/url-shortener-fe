import { clsx } from 'clsx'

export type ButtonVariants = 'primary' | 'secondary' | 'tertiary' | 'white' | 'warning' | 'success'

const baseClass =
  'flex items-center justify-center gap-1 transition-all disabled:opacity-70 disabled:cursor-not-allowed border py-3 px-4 rounded-full leading-none focus:ring-1 focus:ring-primary-light-hover ring-offset-2 h-10'

const buttonVariantClasses = {
  primary: 'bg-primary enabled:hover:bg-primary-700 dark:bg-primary enabled:dark:hover:bg-primary-700',
  secondary: 'bg-transparent enabled:hover:bg-neutral-400 dark:enabled:hover:bg-neutral-600',
  tertiary: 'bg-transparent py-2 underline underline-offset-2 ',
  white: 'bg-white enabled:hover:bg-primary-50 border-neutral',
  warning: 'bg-warning enabled:hover:bg-warning-400',
  success: 'bg-success enabled:hover:bg-success-300',
}

const textButtonVariantClasses = {
  primary: 'text-neutral-50 enabled:hover:bg-primary-light-hover',
  secondary: '!border-neutral-950 text-neutral-950 dark:text-neutral-300',
  tertiary: 'text-neutral-950 dark:text-neutral-300',
  white: 'text-neutral',
  warning: 'text-neutral-950',
  success: 'text-white',
}

export const buttonStyles = (variant: ButtonVariants = 'primary', className?: string) => {
  return clsx(baseClass, buttonVariantClasses[variant], textButtonVariantClasses[variant], className)
}
