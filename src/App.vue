<template>
  <div class="ms-container">
    <header class="ms-nav">
      <router-link :to="{name: 'home'}">
        <h1>Home</h1>
      </router-link>
      <div class="ms-nav-links">
        <router-link to="/" class="ms-nav-link">
          Search Meals
        </router-link>
        <router-link to="/" class="ms-nav-link">
          Meals by Letter
        </router-link>
        <router-link to="/" class="ms-nav-link">
          Meals by Ingredients
        </router-link>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>
