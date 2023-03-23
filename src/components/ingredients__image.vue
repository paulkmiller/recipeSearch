<template>
  <figure class="ingredients__detailsImg"
  >
    <img :src="imageUrl" />
    <figcaption>Pictured: A {{ ingredient }}</figcaption>
  </figure>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  ingredient: {
    required: true,
  },
});

const imageUrl = computed(() => `https://www.themealdb.com/images/ingredients/${props.ingredient}.png`)

</script>
