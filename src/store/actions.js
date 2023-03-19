import mealDB from '@/axiosClient';
import mealDBImage from '@/axiosClient2';

export function searchRecipes({ commit }, search) {
  mealDB.get(`/search.php?s=${search}`).then(({ data }) => {
    commit('SET_RECIPES', data.meals);
  });
}

export function searchRecipesByLetter({ commit }, letter) {
  mealDB.get(`/search.php?f=${letter}`).then(({ data }) => {
    commit('SET_RECIPESBYLETTER', data.meals);
  });
}

export function searchRecipesByIngredient({ commit }, ing) {
  mealDB.get(`/filter.php?i=${ing}`).then(({ data }) => {
    commit('SET_RECIPESBYINGREDIENT', data.meals);
  });
}

export function returnIngredientImage({ commit }, ing) {
  mealDBImage.get(`/${ing}.png`).then(({ data }) => {
    commit('SET_INGREDIENTIMAGE', data.meals);
  });
}
