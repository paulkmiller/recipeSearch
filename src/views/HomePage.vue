<template></template>

<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from '@/axiosClient';

const ingredients = ref([]);

onMounted(async () => {
  const response = await axiosClient.get('/list.php?i=list');
  ingredients.value = response.data;
  // store.commit('setMeals', data);
});
</script>
