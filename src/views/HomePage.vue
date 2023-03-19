<template>
  <RecipeGallery :recipes="recipes" />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import RecipeGallery from '@/components/card__gallery.vue';
import mealDB from '@/axiosClient';

const recipes = ref([]);

onMounted(async () => {
  // pay $2 to get rid of this loop or 10 requests
  for (let i = 0; i < 10; i += 1) {
    mealDB
      .get('/random.php')
      .then(({ data }) => recipes.value.push(data.meals[0]));
  }
});
</script>
