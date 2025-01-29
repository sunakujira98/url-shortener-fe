import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { BaseFormElementProps, elementWrapperStyles } from './styles'

export type FormElementWrapperProps = BaseFormElementProps

export type FormElementProps = FormElementWrapperProps & {
  label?: ReactNode
}

export type FormELementWrapperProps = ComponentPropsWithoutRef<'div'> & FormElementWrapperProps

export const FormElementWrapper = ({
  children,
  isError,
  disabled,
  shouldAppend,
  ...props
}: FormELementWrapperProps) => {
  return (
    <div
      className={elementWrapperStyles({
        disabled,
        isError,
        shouldAppend,
      })}
      {...props}
    >
      {children}
    </div>
  )
}
