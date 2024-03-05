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
  const { data } = await supabase
    .from("recipes_ingredients")
    .select("ingredients (id, name, image)")
    .eq("recipe_id", id)
    .returns<{ ingredients: IngredientResponse }[]>()

  return data ? data.map((item) => item.ingredients) : []
}

export async function findAll() {
 const { data } = await supabase.from("ingredients").select().order("name").returns<IngredientResponse[]>();

  return data ?? [];
}