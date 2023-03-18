<template>
  <Meals :meals="meals" />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Meals from '@/components/meal__itemLayout.vue';
import axiosClient from '@/axiosClient';

const meals = ref([]);

onMounted(async () => {
  // pay $2 to get rid of this loop or 10 requests
  for (let i = 0; i < 10; i += 1) {
    axiosClient
      .get('/random.php')
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
});
</script>
