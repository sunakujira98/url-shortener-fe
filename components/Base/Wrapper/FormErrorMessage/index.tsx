import { ComponentPropsWithoutRef } from 'react'

import { Text } from '@/components/Text'

export type FormErrorMessageProps = ComponentPropsWithoutRef<'p'>

export const FormErrorMessage = ({ children, ...props }: FormErrorMessageProps) => {
  return (
    <Text variant="caption" as="span" className="inline-block font-medium !text-error ml-3" {...props}>
      {children}
    </Text>
  )
}
