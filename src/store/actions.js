import axiosClient from '@/axiosClient';

export function searchMeals({ commit }, search) {
  axiosClient.get(`/search.php?s=${search}`).then(({ data }) => {
    commit('SET_MEALS', data.meals);
  });
}

export function searchMealsByLetter({ commit }, letter) {
  axiosClient.get(`/search.php?f=${letter}`)
    .then(({ data }) => {
      commit('SET_MEALSBYLETTER', data.meals);
    });
}

export function searchMealsByIngredeient({ commit }, ing) {
  axiosClient.get(`/filter.php?i=${ing}`).then(({ data }) => {
    commit('SET_MEALSBYINGREDIENTS', data.meals);
  });
}