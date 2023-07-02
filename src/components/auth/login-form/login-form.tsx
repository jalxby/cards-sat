import { useForm } from 'react-hook-form'

import { Button } from '@/components'
import { ControlledTextField } from '@/components/ui/control'
type Form = {
  login: string
  password: string
}
export const LoginForm = () => {
  const { handleSubmit, control } = useForm<Form>()
  const onsubmit = handleSubmit(data => console.log(data))

  return (
    <form onSubmit={onsubmit}>
      <ControlledTextField type={'text'} control={control} name={'login'} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
