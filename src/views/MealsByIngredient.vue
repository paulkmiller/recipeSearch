<template>
  <h1 class="">Meals for {{ ingredient.strIngredient }}</h1>
  <Meals :meals="meals" />
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import store from '@/store';
import Meals from '@/components/meal__itemLayout.vue';

const route = useRoute();
const ingredient = computed(() => store.state.ingredient);
const meals = computed(() => store.state.mealsByIngredient);

onMounted(() => {
  store.dispatch('searchMealsByIngredient', route.params.ingredient);
});
</script>
