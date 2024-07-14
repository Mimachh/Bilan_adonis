import type { HttpContext } from "@adonisjs/core/http";
import Statistique from "#dashboard/statistique/models/statistique";

export default class IndexStatistiqueController {
    async render({ inertia }: HttpContext) {
        const statistiques = await Statistique.query().preload('sources')

        return inertia.render("admin/dashboard/statistique/index", { statistiques });
    }
}