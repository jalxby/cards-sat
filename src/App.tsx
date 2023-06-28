import { Button, Card, Checkbox, Input } from '@/components'

export function App() {
  return (
    <div>
      <Card style={{ padding: '30px' }}>
        <Button variant={'primary'}>Test checkbox</Button>
        <Checkbox left label={'Label Test'} disabled={true} checked />
        <Checkbox left label={'Label Test'} />
        <Checkbox left label={'Label Test'} />
        <Input title={'Name'} inputType={'text'} />
        <Input title={'Password'} inputType={'password'} />
        <Input title={'Search'} inputType={'search'} />
      </Card>
    </div>
  )
}
