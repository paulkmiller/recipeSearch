<template></template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '@/store';
import axiosClient from '@/axiosClient';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const ingredients = ref([]);

onMounted(async () => {
  const response = await axiosClient.get('/list.php?i=list');
  console.log(response.data);
  ingredients.value = response.data;
  // store.commit('setMeals', data);
});
</script>
