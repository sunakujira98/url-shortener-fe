import clsx from 'clsx'

export type TextVariants = 'display' | 'headline' | 'title' | 'subtitle' | 'body1' | 'body2' | 'caption'

const baseClass = 'whitespace-pre-wrap text-neutral-950 dark:text-neutral-200'

const variantClasses = {
  display: 'text-2xl md:text-3xl lg:text-4xl font-bold leading-tight',
  headline: 'text-lg md:text-xl font-bold leading-tight',
  title: 'text-sm lg:text-md font-bold leading-tight',
  subtitle: 'text-sm font-bold leading-tight',
  body1: 'text-xs leading-normal',
  body2: 'text-2xs leading-5',
  caption: 'text-3xs leading-normal',
}

export const textStyles = (variant: TextVariants = 'body2', className?: string) => {
  return clsx(baseClass, variantClasses[variant], className)
}
