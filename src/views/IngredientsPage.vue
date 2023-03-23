<template>
  <div class="container ingredients__container">
    <aside class="ingredients__aside">
      <div class="ingredients__title">
        <h1>Ingredients</h1>
      </div>
      <div>
        <input
          type="text"
          class="ingredients__search"
          v-model="search"
          placeholder="Search for an ingredient..."
        />
        <a
          href="#"
          @click.prevent="($event) => openIngredient(ingredient)"
          v-for="ingredient of computedIngredients"
          :key="ingredient.idIngredient"
          class="ingredients__links"
        >
          <ul>
            <li>
              {{ ingredient.strIngredient }}
            </li>
          </ul>
        </a>
      </div>
    </aside>
    <section>
      <div class="ingredients__content">
        <div
          v-for="(item, index) in computedIngredientsSingle"
          :key="index"
          class="ingredients__details"
        >
          <div v-if="render">
            <IngredientsImage :ingredient="computedIngredientsImage" />
          </div>
          <div v-else>
            <img
              src="https://via.placeholder.com/150"
              alt="placeholder"
              class="ingredients__detailsImg"
            />
          </div>

          <div class="ingredients__detailsText">
            <h2>{{ item.strIngredient }}</h2>
            <p
              v-if="!item.strDescription"
              class="ingredients__detailsDescription"
            >
              lorem ipsum dolar sit amet, consectetur adipiscing elit. Morbi
              cursus nunc sit amet lorem rhoncus consectetur. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Morbi cursus nunc sit amet
            </p>
            <p>
              {{ item.strDescription }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref, computed, watch, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import IngredientsImage from '@/components/ingredients__image.vue';

import mealDB from '@/axiosClient';
import store from '@/store';

const router = useRouter();
const search = ref('');
const ingredients = ref([]);
const render = ref(true);

watchEffect(() => {
  if (ingredients.value) {
    render.value = true;
  } else {
    render.value = false;
  }
});

const computedIngredients = computed(() => {
  // eslint-disable-next-line vue/no-ref-as-operand
  if (!computedIngredients) return ingredients;

  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(search.value.toLowerCase())
  );
});

const computedIngredientsSingle = computed(() => {
  if (!computedIngredientsSingle) return ingredients;

  const results = ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(search.value.toLowerCase()));
  return results.slice(0, 1);
});

const computedIngredientsImage = computed(() => {
  if (!computedIngredientsImage) return ingredients;

  const results = ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(search.value.toLowerCase()));
  
    return results[0].strIngredient;
});

function openIngredient(ingredient) {
  store.commit('SET_INGREDIENT', ingredient);
  router.push({
    name: 'byIngredient',
    params: { ingredient: ingredient.strIngredient },
  });
}

onMounted(async () => {
  await mealDB.get('/list.php?i=list').then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>
