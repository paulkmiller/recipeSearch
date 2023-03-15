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
              <li>8 oz. spaghetti or linguine pasta</li>
              <li>
                2 cups fresh basil leaves, plus 4-8 reserved leaves for garnish
              </li>
              <li>2 cloves garlic</li>
              <li>2 tbsp. pine nuts or blanched almonds</li>
              <li>1/2 cup olive oil</li>
              <li>1/2 cup grated Parmesan cheese, plus 2 tbsp. for garnish.</li>
              <li>1/8 tsp salt</li>
              <li>1 pint cherry tomatoes</li>
              <li>1 tsp olive oil</li>
            </ul>
            <p class="content__tags">
              <span class="content__tagsWrap">
                <p>Region: {{ meal.strArea }}</p>
                <p>Tags: {{ meal.strTags }}</p>
              </span>
            </p>
          </section>
          <section class="content__instructions">
            <h2>The Process</h2>
            <ol class="content__steps">
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
import axiosClient from '@/axiosClient';

const route = useRoute();
const meal = ref({});

onMounted(async () => {
  const response = await axiosClient.get(`/lookup.php?i=${route.params.id}`);
  meal.value = response.data.meals[0] || {};
});
</script>

<style scoped>
.content__intro1 {
  grid-area: intro1;
}

.content__intro2 {
  grid-area: intro2;
}

.content__content {
  grid-area: content;
  overflow-y: auto;
  overflow-x: hidden;
}

.content__instructions {
  grid-area: steps;
  text-align: left;
}

.content__ingredients {
  margin-top: 1rem;
  padding-left: 2rem;
}

.content__ingredients > li {
  padding: 0.25rem;
}

.content__steps {
  counter-reset: li;
  margin-top: 1rem;
  padding-left: 1rem;
}

.content__steps > li {
  position: relative;
  margin: 0 0 0.375rem 2rem;
  padding: 0.4rem 1.5rem;
  list-style: none;
}

.content__steps > li:before {
  content: counter(li);
  counter-increment: li;
  position: absolute;
  top: -0.3rem;
  left: -1rem;
  width: 1rem;
}

.content__steps > li > ul {
  list-style: disc;
  margin-top: 1rem;
  margin-left: 1rem;
}

.content__steps > li > ul > li {
  padding: 0.5rem 0 0.5rem 0;
}

.content__recipeImg {
  grid-area: img;
}
.content__recipeImg > figure > img {
  object-fit: cover;
  height: 37rem;
  width: 100%;
  max-height: 100%;
}

.content__tags,
.content__intro1,
.content__intro2 > p {
  border-top: 3px solid #000;
  padding-top: 1rem;
}

.content__tags {
  margin-bottom: 1rem;
  padding: 1rem;
  border-top: none;
  border-bottom: 3px solid #000;
  border-top: 3px solid #000;
}

.content__tagsWrap {
  display: flex;
  justify-content: space-evenly;
}

.content__tags p + p {
  text-align: right;
}

@media (max-width: 800px) {
  .width-container {
    width: 100%;
  }

  .content__header {
    min-height: 30vw;
  }

  .meal-contentGrid {
    display: grid;
    grid-template-areas:
      'img img'
      'intro1 intro2'
      'content content'
      'steps steps';
    grid-template-rows: auto auto auto;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5vw;
    align-items: stretch;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .content__content {
    height: calc(50% - 35vw);
    overflow-y: unset;
    overflow-x: unset;
  }

  .content__recipeImg > figure > img {
    width: 100vw;
    object-fit: cover;
    object-position: center;
  }

  .content__tags,
  .content__intro1,
  .content__intro2 > p {
    font-size: 0.75rem;
  }
}

@media print {
  body {
    display: block !important;
    width: auto !important;
    float: none !important;
    position: static !important;
    overflow: visible !important;
  }

  .content__recipeImg {
    display: none;
  }

  .content__intro1,
  .content__intro2 > p {
    border: none;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .content__content {
    display: block !important;
    width: auto !important;
    float: none !important;
    position: static !important;
    overflow: visible !important;
  }

  .meal-contentGrid {
    display: block !important;
    width: auto !important;
    float: none !important;
    position: static !important;
    overflow: visible !important;
  }
}
</style>
