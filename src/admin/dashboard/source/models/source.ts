import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Statistique from '#dashboard/statistique/models/statistique'
export default class Source extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare url: string | null

  @column()
  declare description: string | null

  @column()
  declare statistiqueId: number

  @belongsTo(() => Statistique)
  declare statistique: BelongsTo<typeof Statistique>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}