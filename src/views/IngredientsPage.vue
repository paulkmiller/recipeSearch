<template>
  <div>
    <h1>Ingredients</h1>
  </div>
  <div>
    <input
      type="text"
      class="search"
      v-model="search"
      placeholder="Search for an ingredient"
      @input="$event => searchImages(search)"
    />
  </div>
  <div class="list__container">
    <a
      href="#"
      @click.prevent="($event) => openIngredient(ingredient)"
      v-for="ingredient of computedIngredients"
      :key="ingredient.idIngredient"
      class="block bg-white rounded p-3 mb-3 shadow"
    >
      <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
    </a>
  </div>
  <div class="img_container">
    <img :src="recipe.strMealThumb" alt="">
  </div>
</template>

<script setup>
import { onMounted, ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import debounce from 'lodash.debounce';

import mealDB from '@/axiosClient';
import store from '@/store';

const router = useRouter();
const search = ref('');
const ingredients = ref([]);
const ingredientImages = ref([]);

const computedIngredients = computed(() => {
  // eslint-disable-next-line vue/no-ref-as-operand
  if (!computedIngredients) return ingredients;

  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(search.value.toLowerCase())
  );
});

function openIngredient(ingredient) {
  store.commit('SET_INGREDIENT', ingredient);
  router.push({
    name: 'byIngredient',
    params: { ingredient: ingredient.strIngredient },
  });
}

function searchImages(searchQuery) {
  if (searchQuery.value) {
    console.log(searchQuery.value);
    store.dispatch('returnIngredientImage', searchQuery.value);
  } else {
    store.commit('SET_INGREDIENTIMAGE', []);
  }
}

onMounted(async () => {
  await mealDB.get('/list.php?i=list').then(({ data }) => {
    ingredients.value = data.meals;
  });

  watch(search, debounce(() => {
    console.log(ingredientImages);
  }, 500));
});
</script>
