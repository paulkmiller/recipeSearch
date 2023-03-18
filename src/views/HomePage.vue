<template>
  <div class="">
    <h1 class="">Random Meals</h1>
  </div>
  <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '@/store';
import Meals from '@/components/meal__itemLayout.vue';
import axiosClient from '@/axiosClient';

const meals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 10; i += 1) {
    axiosClient
      .get('/random.php')
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
});
</script>
