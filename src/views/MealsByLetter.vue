<template>
  <div class="routerLink routerLink__lettersContainer">
    <router-link
      :to="{ name: 'byLetter', params: {letter} }"
      v-for="letter of letters" :key="letter"
      class="letter"
    >
      <div class="routerLink__letters">
        {{ letter }}
      </div>
    </router-link>
  </div>
</template>

<script setup>
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

</script>
