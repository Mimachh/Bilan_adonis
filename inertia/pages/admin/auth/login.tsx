import LoginForm from '~/components/auth/login-form'
import { LoginShell } from '~/components/layout/login_shell'

export interface LoginProps {
  mode?: 'page' | 'modal'
  onAlreadyHaveAnAccountClick?: (mode: 'login' | 'register') => void
}
const Login = (props: LoginProps) => {
  const { mode = 'page', onAlreadyHaveAnAccountClick } = props

  return (
    <LoginShell title="Login" description="Connecte toi à ton compte !">
      <LoginForm mode={mode} onAlreadyHaveAnAccountClick={onAlreadyHaveAnAccountClick} />
    </LoginShell>
  )
}

export default Login
