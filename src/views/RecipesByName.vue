<template>
  <div class="routerLink" id="search__RecipesByName">
    <input
      type="text"
      class="search"
      v-model="search"
      placeholder="Search for a recipe"
      @change="searchRecipes"
    />
  </div>
  <RecipeGallery :recipes="recipes" />
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import store from '@/store';
import RecipeGallery from '@/components/card__gallery.vue';

const route = useRoute();
const search = ref('');
const recipes = computed(() => store.state.recipesSearched);

function searchRecipes() {
  if (search.value) {
    store.dispatch('searchRecipes', search.value);
  } else {
    store.commit('SET_RECIPES', []);
  }
}

onMounted(() => {
  search.value = route.params.name;
  if (search.value) {
    searchRecipes();
  }
});
</script>
