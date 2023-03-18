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
  <Meals :meals="meals" />
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import store from '@/store';
import Meals from '@/components/meal__itemLayout.vue';

const route = useRoute();
const search = ref('');
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  if (search.value) {
    store.dispatch('searchMeals', search.value);
  } else {
    store.commit('SET_MEALS', []);
  }
}

onMounted(() => {
  search.value = route.params.name;
  if (search.value) {
    searchMeals();
  }
});
</script>
