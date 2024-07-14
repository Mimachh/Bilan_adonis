import Statistique from '#dashboard/statistique/models/statistique'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Statistique.create({
      name: 'Statistique 1',
      slug: 'statistique-1',
      statReferencePreviousYear: 100,
      hasStartingStatToAdd: true,
      startingStatToAdd: 10,
      commentaire: 'Commentaire 1',
      categoryId: 1,
      refreshId: 1
    })
  }
}
