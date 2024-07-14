import Refresh from '#dashboard/refresh/models/refresh'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Refresh.create({
      name: 'Refresh 1',
      slug: 'refresh-1',
      value: 10,
    })
  }
}