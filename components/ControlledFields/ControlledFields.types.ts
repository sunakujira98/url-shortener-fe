import { Control, FieldErrors, FieldValues, Path } from 'react-hook-form'

export type BaseControlledFieldProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  errors?: FieldErrors<T>
}
