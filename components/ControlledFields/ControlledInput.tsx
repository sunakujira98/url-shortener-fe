'use client'

import { Controller, FieldValues } from 'react-hook-form'

import { getFormErrorMessage } from '@/utils/getFormErrorMessage'

import { Input, InputProps } from '../Input'

import { BaseControlledFieldProps } from './ControlledFields.types'

type ControlledInputProps<T extends FieldValues> = BaseControlledFieldProps<T> & InputProps

export function ControlledInput<T extends FieldValues>({
  control,
  errors,
  name,
  ...inputProps
}: ControlledInputProps<T>) {
  return (
    <Controller
      render={({ field: { value, ...otherFieldProps } }) => (
        <Input {...otherFieldProps} {...inputProps} value={value || ''} error={getFormErrorMessage(errors, name)} />
      )}
      name={name}
      control={control}
    />
  )
}
