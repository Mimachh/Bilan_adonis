import type { HttpContext } from "@adonisjs/core/http";
import Category from "#dashboard/category/models/category";

export default class IndexCategoryController {
    async render({ inertia }: HttpContext) {
        const categories = await Category.all();
        return inertia.render("admin/dashboard/category/index", { categories });
    }
}