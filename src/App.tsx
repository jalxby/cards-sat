import { LogoutIcon } from './assets'
import { Button } from './components'

export function App() {
  return (
    <div>
      <Button variant={'tertiary'}>
        <LogoutIcon />
        Primary Button
      </Button>
    </div>
  )
}
