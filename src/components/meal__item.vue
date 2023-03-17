<template>
  <div :key="meal.idMeal" class="card stacked">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="card__img" />
    </router-link>
    <div class="card__content">
      <h2 class="card__title">{{ meal.strMeal }}</h2>
      <a
        :href="meal.strYoutube"
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
const { meal } = defineProps({
  meal: {
    type: Object,
    required: true,
  },
});
</script>
