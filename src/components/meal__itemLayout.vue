<template>
  <div class="meal-galleryGrid">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <div v-if="meals">
    <div v-if="!meals.length">
      There are no results for your search.
    </div>
  </div>
</template>

<script setup>
import MealItem from '@/components/meal__item.vue';

const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
  },
});
</script>
