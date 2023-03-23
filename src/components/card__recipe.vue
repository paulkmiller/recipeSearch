<template>
  <div :key="recipe.idMeal" class="card stacked">
    <router-link :to="{ name: 'recipeDetails', params: { id: recipe.idMeal } }">
      <img :src="recipe.strMealThumb" :alt="recipe.strMeal" class="card__img" />
    </router-link>
    <div class="card__content">
      <h2 class="card__title">{{ recipe.strMeal }}</h2>
      <a
        :href="recipe.strYoutube"
        target="_blank"
        class="youtube"
        alt="Youtube Icon"
      >
        <font-awesome-icon icon="fa-brands fa-youtube" />
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  recipe: {
    type: Object,
    required: true,
  },
});
</script>
