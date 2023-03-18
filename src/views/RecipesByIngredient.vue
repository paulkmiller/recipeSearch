<template>
  <h1 class="">Recipes for {{ ingredient.strIngredient }}</h1>
  <RecipeGallery :recipes="recipes" />
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import store from '@/store';
import RecipeGallery from '@/components/card__gallery.vue';

const route = useRoute();
const ingredient = computed(() => store.state.ingredient);
const recipes = computed(() => store.state.recipesByIngredient);

onMounted(() => {
  store.dispatch('searchRecipesByIngredient', route.params.ingredient);
});
</script>
