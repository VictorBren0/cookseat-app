import * as recipes from "./recipesService";
import * as preparations from "./preparationsService";
import * as ingredients from "./ingredientsService";

export const services = {
    ingredients,
    recipes,
    preparations,

    storage: {
        imagePath: process.env.EXPO_PUBLIC_SUPABASE_IMAGES_URL,
    },
}