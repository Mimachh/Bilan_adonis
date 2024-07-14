import Source from '#dashboard/source/models/source'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Source.create({
      url: 'https://www.example.com',
      description: 'This is an example source',
      statistiqueId: 1
    })
  }
}