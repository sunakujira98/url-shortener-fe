import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { TextVariants, textStyles } from './styles'

type TextVariantProps = {
  variant?: TextVariants
}

export type TextProps<T extends ElementType> = {
  as?: T
  children: ReactNode
  className?: string
} & ComponentPropsWithoutRef<T> &
  TextVariantProps

export const Text = <T extends ElementType>({ as, id, children, className, variant }: TextProps<T>) => {
  if (as === 'label') {
    return (
      <label className={textStyles(variant, className)} id={id} htmlFor={id}>
        {children}
      </label>
    )
  }

  const Component = as || 'p'

  return (
    <Component className={textStyles(variant, className)} id={id}>
      {children}
    </Component>
  )
}
