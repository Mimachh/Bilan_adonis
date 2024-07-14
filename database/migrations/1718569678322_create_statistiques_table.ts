import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'statistiques'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('name').notNullable().unique()
      table.string('slug').notNullable().unique()

      table.decimal('stat_reference_previous_year', 15, 2).nullable()

      table.boolean('has_starting_stat_to_add').defaultTo(false)
      table.decimal('starting_stat_to_add', 15, 2).nullable()

      table.text('commentaire').nullable()

      table.integer('refresh_id').nullable().unsigned().references('id').inTable('refreshes').onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('category_id').notNullable().unsigned().references('id').inTable('categories').onDelete('CASCADE').onUpdate('CASCADE')
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}