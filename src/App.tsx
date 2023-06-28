import { Button, Card, Checkbox } from '@/components'

export function App() {
  return (
    <div>
      <Card style={{ padding: '30px' }}>
        <Button variant={'primary'}>Test checbox</Button>
        <Checkbox left label={'Label Test'} disabled={true} />
        <Checkbox left label={'Label Test'} />
        <Checkbox left label={'Label Test'} />
      </Card>
    </div>
  )
}
