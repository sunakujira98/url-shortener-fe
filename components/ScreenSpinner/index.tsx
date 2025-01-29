import { Spinner } from '../Spinner'
import { Text } from '../Text'

export type ScreenSpinnerProps = {
  message: string
}

export const ScreenSpinner = ({ message }: ScreenSpinnerProps) => {
  return (
    <div className="fixed left-0 top-0 z-50 block h-full w-full bg-primary-500 dark:bg-neutral-950 opacity-75 overflow-hidden">
      <div className="relative top-1/2 my-0 block h-0 w-full text-neutral-950 dark:text-neutral-50 opacity-75">
        <div className="flex flex-col justify-center items-center gap-4">
          <Spinner variant="primary" />
          <Text variant="body2">{message}</Text>
        </div>
      </div>
    </div>
  )
}
