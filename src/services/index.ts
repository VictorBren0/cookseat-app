import * as recipes from "./recipesService";
import * as preparations from "./preparationsService";
import * as ingredients from "./ingredientsService";

export const services = {
    ingredients,
    recipes,
    preparations,

    storage: {
        imagePath:
        "https://jvakeubiwbyrimwiqsiu.supabase.co/storage/v1/object/public/ingredients",
    },
}