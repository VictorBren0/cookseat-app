import { supabase } from "./supabase"

export async function findByIds(ids: string[]) {
  const { data } = await supabase
    .from("ingredients")
    .select()
    .in("id", ids)
    .order("name")
    .returns<IngredientResponse[]>()

  return data ?? []
}

export async function findByRecipeId(id: string) {
  const recipeIngredientsQuery = await supabase
    .from("recipes_ingredients")
    .select("ingredient_id")
    .eq("recipe_id", id);

  const recipeIngredients = recipeIngredientsQuery.data;

  if (!recipeIngredients || recipeIngredients.length === 0) {
    return [];
  }

  const ingredientIds = recipeIngredients.map((item) => item.ingredient_id);

  const ingredientsQuery = await supabase
    .from("ingredients")
    .select("id, name, image")
    .in("id", ingredientIds);

  const ingredients = ingredientsQuery.data;

  return ingredients ?? [];
}

export async function findAll() {
  const { data } = await supabase.from("ingredients").select().order("name").returns<IngredientResponse[]>();

  return data ?? [];
}