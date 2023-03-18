<template>
  <div>
    <router-link
      :to="{
        name: 'byIngredient',
        params: { ingredient: ingredient.strIngredient },
      }"
      v-for="ingredient of ingredients"
      :key="ingredient.idIngredient"
    >
      <h3>{{ ingredient.strIngredient }}</h3>
      <p>{{ ingredient.strDescription }}</p>
    </router-link>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import axiosClient from '@/axiosClient';
import { useRoute } from 'vue-router';
import store from '@/store';

const route = useRoute();
const ingredients = ref([]);

watch(route, () => {
  store.dispatch('searchMealsByIngredient', route.params.ingredient);
});

onMounted(() => {
  axiosClient
    .get('/list.php?i=list')
    .then(({ data }) => {
      ingredients.value = data.meals;
    });
});
</script>
