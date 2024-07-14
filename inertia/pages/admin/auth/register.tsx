export interface AuthFormProps {
  mode?: 'modal' | 'page'
  onAlreadyHaveAnAccountClick?: (value: string) => void;
}
import { LoginShell } from '~/components/layout/login_shell'
import RegisterForm from '~/components/auth/register-form'

const Register = (props: AuthFormProps) => {
  const { mode = 'page', onAlreadyHaveAnAccountClick } = props

  return (
    <LoginShell
        title='Inscription'
        description="Créer un compte pour accéder à toutes les fonctionnalités de l'application."
    >
      <RegisterForm mode={mode} onAlreadyHaveAnAccountClick={onAlreadyHaveAnAccountClick} />
    </LoginShell>
  )
}

export default Register
