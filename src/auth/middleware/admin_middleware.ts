import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

/**
 * Auth middleware is used authenticate HTTP requests and deny
 * access to unauthenticated users.
 */
export default class AdminMiddleware {
  /**
   * The URL to redirect to, when authentication fails
   */
  redirectTo = '/auth/admin/login'

  async handle(
    ctx: HttpContext,
    next: NextFn,
  ) {
    const user = await ctx.auth.authenticate()
    if (!user.isAdmin) {
      return ctx.response.redirect().toPath('/admin/auth/login')
    }
    return next()
  }
}