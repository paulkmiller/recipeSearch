<template>
  <div class="routerLink" id="search__MealsByName">
    <input
      type="text"
      class="search"
      v-model="search"
      placeholder="Search for a meal"
      @change="searchMeals"
    />
  </div>
  <div class="product-grid">
    <div
      v-for="meal of meals"
      :key="meal.idMeal"
      class="card stacked"
      :class="isFeatured ? 'featured' : ''"
    >
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="card__img" />
      <div class="card__content">
        <h2 class="card__title">{{ meal.strMeal }}</h2>
        <p class="card__category">{{ meal.strCategory }}</p>
        <a :href="meal.strYoutube" target="_blank">YouTube</a>

        <router-link to="/"> / View</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import store from '@/store';

const search = ref('');
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  store.dispatch('searchMeals', search.value);

  // axiosClient.get(`/search.php?s=${search.value}`);
  // .then(response => {
  //   console.log(response.data);
  //   store.commit('setMeals', response.data);
  // })
  // .catch(error => {
  //   console.log(error);
  // });
}
</script>
