import axiosClient from '@/axiosClient';

export function searchMeals({ commit }, search) {
  axiosClient.get(`/search.php?s=${search}`)
    .then(({ data }) => {
      commit('SET_MEALS', data.meals);
    });
}
