import { router, useForm } from '@inertiajs/react'
import FormFieldLayout from '../form-field-layout'
import { Input } from '../ui/input'
import { FormEventHandler, useEffect } from 'react'
import { BACKEND_ROUTE } from '~/config/routes'
import { Button } from '../ui/button'
import SubmitButton from '../ui/submit-button'
import { LoginProps } from '~/pages/admin/auth/login'

const RegisterForm = (props: LoginProps) => {
  const { mode = 'page', onAlreadyHaveAnAccountClick } = props
  const { data, setData, post, processing, errors, reset } = useForm({
    fullName: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation')
    }
  }, [])

  const submit: FormEventHandler = (e) => {
    e.preventDefault()

    post(BACKEND_ROUTE.register, {
      preserveScroll: true,
      onSuccess: (e) => {
        console.log(e)
      },
      onError: (e) => {
        console.log(e)
      },
    })
  }

  return (
    <>
      <form onSubmit={submit} className="space-form-field">
        <div className="md:grid md:grid-cols-2 md:gap-2">
          <FormFieldLayout fieldName="name" label="Nom" error={errors.fullName}>
            <Input
              id="name"
              name="fullName"
              value={data.fullName}
              autoComplete="name"
              onChange={(e) => setData('fullName', e.target.value)}
            />
          </FormFieldLayout>

          <FormFieldLayout fieldName="email" label="Email" error={errors.email}>
            <Input
              id="emailRegister"
              name="email"
              value={data.email}
              autoComplete="email"
              onChange={(e) => setData('email', e.target.value)}
            />
          </FormFieldLayout>
        </div>

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

        <FormFieldLayout
          fieldName="password_confirmation"
          label="Confirmation du mot de passe"
          error={errors.password_confirmation}
        >
          <Input
            id="password_confirmation"
            name="password_confirmation"
            value={data.password_confirmation}
            type="password"
            autoComplete="password_confirmation"
            onChange={(e) => setData('password_confirmation', e.target.value)}
          />
        </FormFieldLayout>

        <div className="text-center pt-4 block">
          <SubmitButton className="w-full" disabled={processing}>
            S'inscrire
          </SubmitButton>
          <Button
            type="button"
            variant={'link'}
            onClick={() => {
              if (mode == 'modal') {
                if (!onAlreadyHaveAnAccountClick) return
                onAlreadyHaveAnAccountClick('login')
              } else {
                router.visit('/admin/auth/login')
              }
            }}
          >
            Déjà un compte ?
          </Button>
        </div>
      </form>
    </>
  )
}

export default RegisterForm
