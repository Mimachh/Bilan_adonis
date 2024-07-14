import { router, useForm } from '@inertiajs/react'
import { FormEventHandler } from 'react'
import { BACKEND_ROUTE } from '~/config/routes'
import FormFieldLayout from '../form-field-layout'
import { Input } from '../ui/input'
import InputError from '../input-error'
import SubmitButton from '../ui/submit-button'
import { Button } from '../ui/button'
import type { LoginProps } from '~/pages/admin/auth/login'

const LoginForm = (props: LoginProps) => {
  const { mode = 'page', onAlreadyHaveAnAccountClick } = props
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  })

  const submit: FormEventHandler = (e) => {
    e.preventDefault()
    if (processing) return
    post(BACKEND_ROUTE.login, {
      onError: () => {
        setData('password', '')
      },
    })
  }

  return (
    <>
      {'code' in errors && errors.code === 'E_INVALID_CREDENTIALS' && (
        <InputError message="No account with this credentials." />
      )}
      <form onSubmit={submit} className="space-form-field" method="POST">
        <FormFieldLayout fieldName="email" label="Email" error={errors.email}>
          <Input
            id="emailRegister"
            name="email"
            value={data.email}
            autoComplete="email"
            onChange={(e) => setData('email', e.target.value)}
          />
        </FormFieldLayout>

        <FormFieldLayout fieldName="password" label="Mot de passe" error={errors.password}>
          <Input
            id="password"
            name="password"
            value={data.password}
            type="password"
            autoComplete="password"
            onChange={(e) => setData('password', e.target.value)}
          />
        </FormFieldLayout>

        <div className="text-center pt-4 block">
          <SubmitButton type="submit" className="w-full" disabled={processing}>
            Connexion
          </SubmitButton>
          <Button
            type="button"
            variant={'link'}
            onClick={() => {
              if (mode == 'modal') {
                if (!onAlreadyHaveAnAccountClick) return
                onAlreadyHaveAnAccountClick('register')
              } else {
                router.visit('/admin/auth/register')
              }
            }}
          >
            Pas encore de compte ?
          </Button>
        </div>
      </form>
    </>
  )
}

export default LoginForm
