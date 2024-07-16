// import { User } from '#auth/models/user'
// import { PageProps } from '@adonisjs/inertia/types'
import { Head } from '@inertiajs/react'
import { Button } from '~/components/ui/button'

// type HomeProps = PageProps & {
//   user: User
// }
export default function Home(
  // props: HomeProps
) {
  // const { user } = props

  return (
    <>
      <Head title="Homepage" />

      <div className="container">
        <div className="title">AdonisJS  x Inertia x React</div>
    {/* {user && <div>Connected as {user.email}</div>} */}
    <Button>Coucou</Button>

  
      </div>
    </>
  )
}