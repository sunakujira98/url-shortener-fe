'use client'

import { ClipboardDocumentIcon } from '@heroicons/react/24/outline'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'

import { Button } from '@/components/Button'
import { ControlledInput } from '@/components/ControlledFields/ControlledInput'
import { Text } from '@/components/Text'
import { useCreateURLShortenerMutation } from '@/query/useURLShortener'

import { homeFormSchema, THomeFormData } from './types'

const HomePage = () => {
  const { mutate, isPending, data, isSuccess } = useCreateURLShortenerMutation()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<THomeFormData>({
    resolver: yupResolver(homeFormSchema),
    defaultValues: {
      url: '',
    },
  })

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast.success('Copied to clipboard')
  }

  const onSubmit = (data: THomeFormData) => {
    mutate(data, {
      onSuccess: () => {
        toast.success('Short URL generated successfully')
      },
      onError: (error: Error) => {
        toast.error(error.message)
      },
    })
  }

  return (
    <>
      <Toaster position="top-center" />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('/home.png')] bg-cover bg-center">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="flex flex-row items-center gap-2 justify-center">
            <Text variant="display" as="span">
              Cendekin.
            </Text>
            <Text variant="title" as="span">
              Your URL Shortener
            </Text>
          </div>
          <div className="w-full max-w-2xl p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
              <ControlledInput control={control} name="url" errors={errors} placeholder="URL" />
              {data && (
                <div className="flex items-center gap-2 justify-center">
                  <Text>Generated URL</Text>
                  <Text>{`${process.env.NEXT_PUBLIC_FRONTEND_URL}/${data.short_url}`}</Text>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/${data.short_url}`)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <ClipboardDocumentIcon className="text-neutral-950 w-4 h-4" />
                  </button>
                </div>
              )}
              <Button type="submit" loading={isPending} disabled={isSuccess}>
                Get Short URL
              </Button>
            </form>
          </div>
        </main>
      </div>
    </>
  )
}

export default HomePage
