<template>
  <div class="routerLink routerLink__lettersContainer">
    <router-link
      :to="{ name: 'byLetter', params: {letter} }"
      v-for="letter of letters" :key="letter"
      class="letter"
    >
      <div class="routerLink__letters">
        {{ letter }}
      </div>
    </router-link>
  </div>

  <Meals :meals="meals" />

</template>

<script setup>
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import store from '@/store';
import Meals from '@/components/meal__itemLayout.vue';

const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQ RSTUVWXYZ'.split('');
const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
  store.dispatch('searchMealsByLetter', route.params.letter);
});

onMounted(() => {
  store.dispatch('searchMealsByLetter', route.params.letter);
});

</script>
