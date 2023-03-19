export function SET_RECIPES(state, recipes) {
  state.recipesSearched = recipes || [];
}

export function SET_RECIPESBYLETTER(state, recipes) {
  state.recipesByLetter = recipes || [];
}

export function SET_RECIPESBYINGREDIENT(state, recipes) {
  state.recipesByIngredient = recipes || [];
}

export function SET_INGREDIENT(state, ingredient) {
  state.ingredient = ingredient;
}

export function SET_INGREDIENTIMAGE(state, ingredientImage) {
  state.ingredientImage = ingredientImage;
}
