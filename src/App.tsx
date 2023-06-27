import { Button, Card, Checkbox } from '@/components'

export function App() {
  return (
    <div>
      <Card style={{ padding: '30px' }}>
        <Button variant={'primary'}>Test checbox</Button>
        <Checkbox label={'Label Test'} disabled={true} />
        <Checkbox label={'Label Test'} />
        <Checkbox label={'Label Test'} />
      </Card>
    </div>
  )
}
