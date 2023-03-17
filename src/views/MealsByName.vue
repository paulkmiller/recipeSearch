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
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import store from '@/store';
import MealItem from '@/components/meal__item.vue';

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
