import type { HttpContext } from "@adonisjs/core/http";
import Category from "#dashboard/category/models/category";

export default class HomeController {
    async render({ inertia, 
        // auth 
    }: HttpContext) {
        // const user = await auth.authenticate();
        const categories = await Category.all();
        return inertia.render("home", 
            { categories,
                //  user 
            });
    }
}

