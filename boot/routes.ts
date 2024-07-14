/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
// const RegisterController = () => import('@/src/controllers/auth/register_controller.js')

import LoginController from '#admin/auth/controllers/login_controller'
import RegisterController from '#admin/auth/controllers/register_controller'
import router from '@adonisjs/core/services/router'
import { middleware } from '#boot/kernel'
import DashboardController from '#admin/dashboard/controllers/dashboard_controller'
import IndexCategoryController from '#dashboard/category/controllers/index_category_controller'
import IndexRefreshController from '#dashboard/refresh/controllers/index_refresh_controller'
import IndexStatistiqueController from '#dashboard/statistique/controllers/index_statistique_controller'
import IndexSourceController from '#dashboard/source/controllers/index_source_controller'
import HomeController from '#public/home/controllers/home_controller'

router.get('/', [HomeController, 'render']).as('home')

router
  .group(() => {
    router.get('login', [LoginController, 'render']).as('login')
    router.post('login', [LoginController, 'execute']).as('login.post')
    router.get('register', [RegisterController, 'render']).as('register')
  })
  .prefix('/admin/auth')
  .as('admin.auth')


// Route with auth and admin middlewares
router
  .group(() => {
    router.get('/', [DashboardController, 'render']).as('dashboard')
    router.get('/categories', [IndexCategoryController, 'render']).as('categories')
    router.get('/refreshes', [IndexRefreshController, 'render']).as('refreshes')
    router.get('/statistiques', [IndexStatistiqueController, 'render']).as('statistiques')
    router.get('sources', [IndexSourceController, 'render']).as('sources')
  })
  .prefix('/admin/dashboard')
  .as('admin')
  .use([middleware.auth({ guards: ['web'] }), middleware.admin()])
