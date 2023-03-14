import axiosClient from '@/axiosClient';

export function searchMeals({ commit }, search) {
  axiosClient.get('/search.php?s=${search}`')
    .then(({ data }) => {
      debugger;
      commit('SET_MEALS', data)
    })
}