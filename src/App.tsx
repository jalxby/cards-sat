import { Header } from '@/components'

export const App = () => (
  <Header isAuth={true} user={{ name: 'Alex', email: 'email', avatar: 'asdas' }} />
)
