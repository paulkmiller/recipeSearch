<template>
  <div>
   By Ingredients
  </div>
</template>

<script setup>

import { onMounted } from 'vue';
import axiosClient from '@/axiosClient';

onMounted(() => {
  axiosClient.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>
