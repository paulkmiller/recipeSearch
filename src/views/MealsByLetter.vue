<template>
  <div class="routerLink routerLink__lettersContainer">
    <router-link
      :to="{ name: 'byLetter', params: {letter} }"
      v-for="letter of letters" :key="letter"
      class="letter"
    >
      <div class="routerLink__letters">
        {{ letter }}
      </div>
    </router-link>
  </div>

  <div class="meal-galleryGrid">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import store from '@/store';

import MealItem from '@/components/meal__item.vue';

const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
  store.dispatch('searchMealsByLetter', route.params.letter);
});

onMounted(() => {
  store.dispatch('searchMealsByLetter', route.params.letter);
});

</script>
