import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class IndexSeeder extends BaseSeeder {
  private async seed(Seeder: { default: typeof BaseSeeder }) {
    /**
     * Do not run when not in a environment specified in Seeder
     */
    // if (
    //   !Seeder.default.environment ||
    //   (!Seeder.default.environment.includes('development') && app.inDev) ||
    //   (!Seeder.default.environment.includes('testing') && app.inTest) ||
    //   (!Seeder.default.environment.includes('production') && app.inProduction)
    // ) {
    //   return
    // }

    await new Seeder.default(this.client).run()
  }

  async run() {
    await this.seed(await import('#database/seeders/user_seeder'))
    await this.seed(await import('#database/seeders/category_seeder'))
    await this.seed(await import('#database/seeders/refresh_seeder'))
    await this.seed(await import('#database/seeders/statistique_seeder'))
    await this.seed(await import('#database/seeders/source_seeder'))
  }
}