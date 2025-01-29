'use client'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { ComponentPropsWithoutRef, FocusEventHandler, ReactNode, forwardRef, useEffect, useState } from 'react'

import { FormElementProps, FormElementWrapper } from '../Base/Wrapper/FormElementWrapper'
import { FormErrorMessage } from '../Base/Wrapper/FormErrorMessage'
import { Text } from '../Text'

import { inputPlaceholderStyles, inputStyles, inputIconStyles } from './styles'

export type InputProps = Omit<ComponentPropsWithoutRef<'input'>, 'placeholder'> &
  FormElementProps & {
    rightElement?: ReactNode
    leftElement?: ReactNode
    placeholder?: ReactNode
    emptyPlaceholder?: ReactNode
  }

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      error,
      required,
      disabled,
      id,
      rightElement,
      leftElement,
      placeholder,
      emptyPlaceholder,
      value,
      defaultValue,
      onFocus,
      onBlur,
      type,
      shouldAppend,
      ...props
    },
    ref,
  ) => {
    const isOtherType = type === 'date' || type === 'time'
    const [isFocused, setIsFocused] = useState(!!value || value === 0 || !!defaultValue || isOtherType)

    useEffect(() => {
      if (value && !isFocused) {
        setIsFocused(true)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    const handleInputFocus: FocusEventHandler<HTMLInputElement> = (event) => {
      setIsFocused(true)
      onFocus?.(event)
    }

    const handleInputBlur: FocusEventHandler<HTMLInputElement> = (event) => {
      const uncontrolledValue = (document.getElementById(id || '') as HTMLInputElement)?.value

      onBlur?.(event)
      if (value || uncontrolledValue || isOtherType) {
        return
      }

      setIsFocused(false)
    }

    return (
      <div className={clsx('w-full', className)}>
        <FormElementWrapper error={error} isError={!!error} disabled={disabled} shouldAppend={shouldAppend}>
          {leftElement && <span className={inputIconStyles({ direction: 'left' })}>{leftElement}</span>}
          <div className="w-full self-stretch relative overflow-hidden">
            <input
              ref={ref}
              className={inputStyles({
                isOtherType,
                disabled,
                hasPlaceholder: !!placeholder,
              })}
              disabled={disabled}
              id={id}
              type={type}
              value={value}
              defaultValue={defaultValue || undefined}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              {...props}
            />
            {placeholder && (
              <Text
                as="span"
                variant="body2"
                className={inputPlaceholderStyles({
                  isFocused,
                })}
              >
                {(!isFocused && emptyPlaceholder) || required ? (
                  <>
                    {placeholder}{' '}
                    <Text as="span" className="!text-error">
                      *
                    </Text>
                  </>
                ) : (
                  placeholder
                )}
              </Text>
            )}
          </div>
          {error && (
            <span className={inputIconStyles({ direction: 'right', error: true })}>
              <ExclamationCircleIcon className="w-6 h-6" />
            </span>
          )}
          {rightElement && !error && <span className={inputIconStyles({ direction: 'right' })}>{rightElement}</span>}
        </FormElementWrapper>
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
      </div>
    )
  },
)
