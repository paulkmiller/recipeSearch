<template>
  <div>
    <div class="container__content">
      <main>
        <div class="content__header">
          <header>
            <h1 class="big-header-text">{{ recipe.strMeal }}</h1>
          </header>
        </div>
        <div class="meal-contentGrid">
          <aside class="content__recipeImg">
            <figure>
              <img :src="recipe.strMealThumb" :alt="recipe.strMeal" />
            </figure>
          </aside>
          <section class="content__intro1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              cursus nunc sit amet lorem rhoncus consectetur.
            </p>
          </section>
          <section class="content__intro2">
            <p>
              This is where I'd expect to put additional explanation text if the
              API supported it. Unfortunately, it doesn't.
            </p>
          </section>
          <section class="content__content">
            <h2>The Ingredients</h2>
            <ul class="content__ingredients">
              <template v-for="(ind) of new Array(20)" :key="ind">
                <li v-if="recipe[`strIngredient${ind + 1}`]">
                  {{ recipe['strMeasure' + ind] }}
                  {{ recipe['strIngredient' + ind] }}
                </li>
              </template>
            </ul>
            <p class="content__tags">
              <span class="content__tagsWrap">
                <p>Region: {{ recipe.strArea }}</p>
                <p>Tags: {{ recipe.strTags }}</p>
                <a
                  :href="recipe.strYoutube"
                  target="_blank"
                  class="youtube"
                  alt="Youtube Icon"
                >
                  <font-awesome-icon icon="fa-brands fa-youtube" />
                </a>
              </span>
            </p>
          </section>
          <section class="content__instructions">
            <h2>The Process</h2>
            <!-- output large string as individual li tag split by sentence -->
            <ol class="content__steps">
              <template v-for="(el) of splitByPeriod(recipe.strInstructions)" :key="el">
                <li v-if="el">{{ el }}</li>
              </template>
            </ol>
          </section>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import mealDB from '@/axiosClient';
import { splitByPeriod } from '../filters';

const route = useRoute();
const recipe = ref({});

onMounted(async () => {
  const response = await mealDB.get(`/lookup.php?i=${route.params.id}`);
  recipe.value = response.data.meals[0] || {};
});
</script>
