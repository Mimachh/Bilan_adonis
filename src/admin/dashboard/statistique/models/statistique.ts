import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Refresh from '#dashboard/refresh/models/refresh'
import Category from '#dashboard/category/models/category'
import Source from '#dashboard/source/models/source'

export default class Statistique extends BaseModel {
  static table = 'statistiques'
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare slug: string

  @column()
  declare statReferencePreviousYear: number | null

  @column()
  declare hasStartingStatToAdd: boolean

  @column()
  declare startingStatToAdd: number | null

  @column()
  declare commentaire: string | null

  @column()
  declare refreshId: number | null

  @column()
  declare categoryId: number | null

    @hasMany(() => Source)
    declare sources: HasMany<typeof Source>

  @column({ columnName: 'refresh' })
  @belongsTo(() => Refresh)
  declare refreshes: BelongsTo<typeof Refresh>

  @belongsTo(() => Category)
  declare category: BelongsTo<typeof Category>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
