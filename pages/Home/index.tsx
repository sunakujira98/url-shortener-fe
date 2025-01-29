'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/Button'
import { ControlledInput } from '@/components/ControlledFields/ControlledInput'
import { Text } from '@/components/Text'

import { homeFormSchema, THomeFormData } from './types'

const HomePage = () => {
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

  const onSubmit = (data: THomeFormData) => {
    console.log(data)
  }

  return (
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
            <Button type="submit">Get Short URL</Button>
          </form>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
          Github
        </a>
      </footer>
    </div>
  )
}

export default HomePage
