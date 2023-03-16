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
  <div class="meal-galleryGrid">
    <div
      v-for="meal of meals"
      :key="meal.idMeal"
      class="card stacked"
      :class="isFeatured ? 'featured' : ''"
    >
      <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="card__img" />
      </router-link>
      <div class="card__content">
        <h2 class="card__title">{{ meal.strMeal }}</h2>
        <a
          :href="meal.strYoutube"
          target="_blank"
          class="youtube"
          alt="Youtube Icon"
        >
          <font-awesome-icon icon="fa-brands fa-youtube" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import store from '@/store';

const route = useRoute();
const search = ref('');
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  store.dispatch('searchMeals', search.value);
}

onMounted(() => {
  search.value = route.params.name;
  if (search.value) {
    searchMeals();
  }
});
</script>
