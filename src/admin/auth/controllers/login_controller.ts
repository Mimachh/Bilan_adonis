import { User } from "#auth/models/user";
import type { HttpContext } from "@adonisjs/core/http";
import vine from "@vinejs/vine";

export default class LoginController {
    static validator = vine.compile(
        vine.object({
            email: vine.string().email(),
            password: vine.string().minLength(8),
        })
    )

    render({ inertia }: HttpContext) {
        return inertia.render("admin/auth/login");
    }

    async execute({ auth, request, response }: HttpContext) {
        const { email, password} = await request.validateUsing(LoginController.validator)
        const user = await  User.verifyCredentials(email, password)
        await auth.use('web').login(user)

        if(user.isAdmin) {
            return response.redirect().toRoute('admin.dashboard')
        }
        return response.redirect().toPath('/')
    }
}