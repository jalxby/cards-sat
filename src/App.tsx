import { Button, Card, Checkbox, Input } from '@/components'

export function App() {
  return (
    <div>
      <Button variant={'primary'}>Test checkbox</Button>
      <Checkbox left label={'Label Test'} disabled={true} checked />
      <Checkbox left label={'Label Test'} />
      <Checkbox left label={'Label Test'} />
      <Input title={'Name'} inputType={'text'} placeholder={'Name'} />
      <Input title={'Password'} inputType={'password'} placeholder={'password'} />
      <Input title={'Search'} inputType={'search'} placeholder={'search'} />
    </div>
  )
}
