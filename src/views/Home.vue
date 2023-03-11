<template>
  <div>
    <input type="text" class="ms-search" v-model="search" placeholder="Search for a meal">
  </div>
  <div class="ms-cards">
    <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of letters" :key="letter">
      {{ letter }}
    </router-link>
  </div>

</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import storeConfig from '../vuex/store';
import api from '../API';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const ingredients = ref([])

onMounted(async () => {
  const response = await api.get('/list.php?i=list');
  console.log(response.data);
  ingredients.value = response.data;
  // store.commit('setMeals', data);
});
</script>