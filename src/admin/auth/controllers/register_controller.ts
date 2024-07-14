// import { User } from "#auth/models/user";
import type { HttpContext } from '@adonisjs/core/http'
import vine from '@vinejs/vine'

export default class RegisterController {
  static validator = vine.compile(
    vine.object({
      fullName: vine.string().minLength(3),
      email: vine.string().email(),
      password: vine.string().minLength(8).confirmed(),
    })
  )

  async render({ inertia, 
    // auth
   }: HttpContext) {
    
    // await auth.authenticate()
    return inertia.render('admin/auth/register')
  }

//   async execute({ auth, request, response }: HttpContext) {
//     const { email, password} = await request.validateUsing(RegisterController.validator)
//     // const user = await  User.verifyCredentials(email, password)
//     // await auth.use('web').login(user)
//     return response.redirect().toPath('/')
//   }
}
