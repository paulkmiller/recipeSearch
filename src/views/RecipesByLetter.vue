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

  <RecipeGallery :recipes="recipes" />

</template>

<script setup>
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import store from '@/store';
import RecipeGallery from '@/components/card__gallery.vue';

const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQ RSTUVWXYZ'.split('');
const recipes = computed(() => store.state.recipesByLetter);

watch(route, () => {
  store.dispatch('searchRecipesByLetter', route.params.letter);
});

onMounted(() => {
  store.dispatch('searchRecipesByLetter', route.params.letter);
});

</script>
