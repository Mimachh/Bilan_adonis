import type { HttpContext } from "@adonisjs/core/http";
import Refresh from "#dashboard/refresh/models/refresh";

export default class IndexRefreshController {
    async render({ inertia }: HttpContext) {
        const refreshes = await Refresh.all();
        return inertia.render("admin/dashboard/refresh/index", { refreshes });
    }
}