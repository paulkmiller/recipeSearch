<template>
  <div>
    <div class="container__content">
      <main>
        <div class="content__header">
          <header>
            <h1 class="big-header-text">{{ meal.strMeal }}</h1>
          </header>
        </div>
        <div class="meal-contentGrid">
          <aside class="content__recipeImg">
            <figure>
              <img :src="meal.strMealThumb" :alt="meal.strMeal" />
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
                <li v-if="meal[`strIngredient${ind + 1}`]">
                  {{ meal['strMeasure' + ind] }}
                  {{ meal['strIngredient' + ind] }}
                </li>
              </template>
            </ul>
            <p class="content__tags">
              <span class="content__tagsWrap">
                <p>Region: {{ meal.strArea }}</p>
                <p>Tags: {{ meal.strTags }}</p>
                <a
                  :href="meal.strYoutube"
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
             <!-- <ol class="content__steps">
              <template v-for="(el) of meal.strInstructions.split('.')" :key="el">
                <li v-if="el">{{ el }}</li>
              </template>
            </ol> -->
            <!--<ol class="content__steps">
              <li>
                Bring 4 quarts of water to a rolling boil in a large pot. Salt
                the water generously and add the pasta.
              </li>
              <li>
                While the pasta cooks, make the pesto.
                <ul>
                  <li>Remove stems from basil leaves.</li>
                  <li>
                    Put the basil, garlic, and pine nuts or almonds into the
                    bowl of a food processor and pulse it a few times to chop
                    them up.
                  </li>
                  <li>
                    Then, turn the food processor on and
                    <strong>slowly</strong> pour the olive oil through the
                    feeder tube to blend with the chopped herbs and nuts.
                  </li>
                  <li>
                    Process until all ingredients are fully blended, stopping
                    the food processor to scrape down the sides occasionally to
                    get it all mixed.
                  </li>
                  <li>
                    Turn off the food processor, and add the salt and Parmesean,
                    then pulse a few times to blend.
                  </li>
                </ul>
              </li>
              <li>Heat a large skillet over medium heat.</li>
              <li>Add the 1/2 tsp. olive oil to the heated skillet.</li>
              <li>
                Add the cherry tomatoes to the skillet and let them blister,
                stirring occasionally and gently so they don't burst.
              </li>
              <li>Remove tomatoes from the pan and set aside.</li>
              <li>Drain the pasta, reserving 1/4 cup of the cooking water.</li>
              <li>Return the pasta to the pot</li>
              <li>
                Add the reserved cooking water and pesto to the pasta and stir
                to mix
              </li>
              <li>Plate the pasta and add 6-8 tomatoes to each plate</li>
              <li>
                Garnish with reserved basil leaves and Parmesean and serve. Buon
                Appetito!
              </li>
            </ol> -->
          </section>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '@/axiosClient';

const route = useRoute();
const meal = ref({});

onMounted(async () => {
  const response = await axiosClient.get(`/lookup.php?i=${route.params.id}`);
  meal.value = response.data.meals[0] || {};
});
</script>
