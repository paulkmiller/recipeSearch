<template>
  <div class="ms-container">
    <header class="ms-header">
      <router-link :to="{name: 'home'}">
        <h1>Meal Search</h1>
        <div class="ms-nav">
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
      </router-link>
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
