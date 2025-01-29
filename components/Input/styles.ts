import clsx from 'clsx'

export type InputVariantProps = {
  disabled?: boolean
  hasPlaceholder?: boolean
  isOtherType?: boolean
}

export type InputPlaceholderVariantProps = {
  isFocused?: boolean
}

export type InputIconVariantProps = {
  direction?: 'left' | 'right'
  error?: boolean
}

const baseInputClass =
  'px-3 w-full h-full dark:text-neutral-300 text-neutral-950 font-normal outline-none transition-all text-xs bg-transparent disabled:cursor-not-allowed'

const basePlaceholderClass =
  'absolute top-1/2 -translate-y-1/2 left-3 transition-all backface-hidden ease-out duration-300 dark:text-neutral-300 text-neutral-500 pointer-events-none'

const baseIconClass = 'flex items-center justify-center'

const inputVariantClasses = {
  hasPlaceholder: {
    true: 'pt-3',
  },
  isOtherType: {
    true: 'items-start pt-5',
  },
  disabled: {
    true: '!bg-neutral-200 dark:!bg-neutral-200 cursor-not-allowed',
  },
}

const inputPlaceholderClasses = {
  isFocused: {
    true: 'pt-4 top-[2px] leading-none -translate-y-0 text-3xs text-neutral-950',
  },
}

export const inputIconClasses = {
  direction: {
    left: 'pl-2',
    right: 'pr-2',
  },
  error: {
    true: 'text-error',
  },
}

export const inputStyles = (variants: InputVariantProps = {}) => {
  return clsx(
    baseInputClass,

    variants.hasPlaceholder && inputVariantClasses.hasPlaceholder.true,
    variants.isOtherType && inputVariantClasses.isOtherType.true,
  )
}

export const inputPlaceholderStyles = (variants: InputPlaceholderVariantProps) => {
  return clsx(basePlaceholderClass, variants.isFocused && inputPlaceholderClasses.isFocused.true)
}

export const inputIconStyles = (variants: InputIconVariantProps) => {
  return clsx(
    baseIconClass,
    variants.direction === 'left' && inputIconClasses.direction.left,
    variants.direction === 'right' && inputIconClasses.direction.right,
    variants.error && inputIconClasses.error.true,
  )
}
