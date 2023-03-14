<template>
  <div class="routerLink">
    <input type="text" class="search" v-model="search" placeholder="Search for a meal">
  </div>
  <div class="routerLink">
    <router-link
      :to="{name: 'byLetter', params: {letter}}"
      v-for="letter of letters" :key="letter"
      class="letters">
      {{ letter }}
    </router-link>
  </div>

</template>

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
