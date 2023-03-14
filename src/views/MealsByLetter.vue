<template>
  <div class="routerLink">
    <router-link
      :to="{ name: 'byLetter', params: {letter} }"
      v-for="letter of letters" :key="letter"
      class="letters"
    >
      <div class="letter">
        {{ letter }}
      </div>
    </router-link>
  </div>
</template>

<script setup>
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');


</script>
