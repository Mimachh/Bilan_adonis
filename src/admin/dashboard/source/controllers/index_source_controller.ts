import type { HttpContext } from "@adonisjs/core/http";
import Source from "#dashboard/source/models/source";

export default class IndexSourceController {
    async render({ inertia }: HttpContext) {
        const sources = await Source.all()
        return inertia.render("admin/dashboard/source/index", { sources });
    }
}