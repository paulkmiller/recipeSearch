<template>
  <div>
    {{ meal }}
    <img :src="meal.strMealThumb" :alt="meal.strMeal">
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '@/axiosClient';

const route = useRoute();
const meal = ref({});

onMounted(async () => {
  const response = await axiosClient.get(`/lookup.php?i=${route.params.id}`);
  meal.value = response.data.meals[0];
});

</script>