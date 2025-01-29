import clsx from 'clsx'
import { ReactNode } from 'react'

export type BaseFormElementProps = {
  error?: ReactNode
  isError?: boolean
  disabled?: boolean
  shouldAppend?: boolean
}

const baseClass =
  'border !border-primary-400 text-sm outline-none focus-within:ring-offset-1 focus-within:ring-2 focus-within:ring-primary-300 transition-all w-full flex items-center justify-between text-left bg-transparent overflow-x-hidden group/form relative rounded-md min-h-[3.125rem]'

const variantClasses = {
  disabled: {
    true: '!bg-neutral-200 dark:!bg-neutral-600 cursor-not-allowed',
  },
  isError: {
    true: 'border-error',
  },
  shouldAppend: {
    true: 'rounded-none',
  },
}

export const elementWrapperStyles = (variants: BaseFormElementProps = {}) => {
  return clsx(
    baseClass,
    variants.disabled && variantClasses.disabled.true,
    variants.isError && variantClasses.isError.true,
    variants.shouldAppend && variantClasses.shouldAppend.true,
  )
}
