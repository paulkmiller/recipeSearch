<template>
  <div>
    <NavMain />
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import NavMain from '@/components/nav__main.vue';
</script>
