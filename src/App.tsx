import { Checkbox } from '@/components'

export function App() {
  return (
    <div>
      <Checkbox label={'Label Test'} checked={true} disabled={true} />
      <Checkbox label={'Label Test'} />
      <Checkbox label={'Label Test'} />
    </div>
  )
}
