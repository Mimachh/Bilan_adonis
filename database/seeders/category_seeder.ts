import Category from '#admin/dashboard/category/models/category'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Category.create({
      name: 'Category 1',
      slug: 'category-1',
      description: 'This is category 1',
      titleSeo: 'Category 1',
      descriptionSeo: 'This is category 1',
      keywordsSeo: 'category 1',
      isActive: true,
    })
  }
}
