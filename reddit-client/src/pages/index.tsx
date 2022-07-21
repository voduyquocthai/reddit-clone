import { Typography } from '@material-ui/core'
import { useUser } from '../context/AuthContext'

export default function Home() {
  const { user } = useUser()

  console.log('Amplify User', user)

  return <Typography variant='h1'>Hello</Typography>
}
