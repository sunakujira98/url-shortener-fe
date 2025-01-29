import lodashGet from 'lodash/get'
import { FieldErrors, FieldValues, Path } from 'react-hook-form'

export function getFormErrorMessage<T extends FieldValues>(errors: FieldErrors<T> | undefined, name: Path<T>) {
  if (!errors) {
    return
  }

  const errorFields = lodashGet(errors, name)
  if (errorFields?.message) {
    return errorFields.message as string
  }

  const fieldError = Array.isArray(errorFields) ? errorFields.find((field) => field?.message) : false
  if (fieldError) {
    return fieldError.message as string
  }
}

export function getFormArrayErrorMessage<T extends FieldValues>(errors: FieldErrors<T> | undefined, name: Path<T>) {
  if (!errors) {
    return
  }

  const errorFields = lodashGet(errors, name)

  const message = errorFields?.message as string
  if (message) {
    return message
  }

  const fieldError = Array.isArray(errorFields) ? errorFields.find((field) => field?.message) : false
  if (fieldError) {
    return fieldError?.message as string
  }
}
