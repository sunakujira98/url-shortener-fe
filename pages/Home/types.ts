import * as yup from 'yup'

export type THomeFormData = {
  url: string
}

export const homeFormSchema = yup
  .object({
    url: yup.string().required('URL is required').url('Invalid URL Format'),
  })
  .required()
