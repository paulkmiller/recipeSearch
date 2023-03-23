<template>
  <div class="recipe-galleryGrid">
    <RecipeCard v-for="recipe of recipes" :key="recipe.idMeal" :recipe="recipe" />
  </div>
  <div v-if="recipes">
    <div v-if="!recipes.length">
      There are no results for your search.
    </div>
  </div>
</template>

<script setup>
import RecipeCard from '@/components/card__recipe.vue';

defineProps({
  recipes: {
    required: true,
    type: Array,
  },
});
</script>
