export function SET_MEALS(state, meals) {
  state.searchedMeals = meals || [];
}

export function SET_MEALSBYLETTER(state, meals) {
  state.mealsByLetter = meals || [];
}

export function SET_MEALSBYINGREDIENT(state, meals) {
  state.mealsByIngredient = meals || [];
}

export function SET_INGREDIENT(state, ingredient) {
  state.ingredient = ingredient;
}
