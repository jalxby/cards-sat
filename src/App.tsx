import { Checkbox } from '@/components'

export function App() {
  return (
    <div>
      <Checkbox label={'Label Test'} disabled={true} />
      <Checkbox label={'Label Test'} />
      <Checkbox label={'Label Test'} />
    </div>
  )
}
