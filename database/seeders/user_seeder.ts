import { User } from '#auth/models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await User.create({
      email: 'mimach.dev@gmail.com',
      password: 'password',
      isAdmin: true,
    }) 
  }
}