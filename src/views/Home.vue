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
import { computed } from 'vue';
import store from '../store';

const meals = computed(() => store.state.meals);
const letters = 'ABCDEFGHIJKLMNOP'.split('');

</script>