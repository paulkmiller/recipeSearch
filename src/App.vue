<template>
  <div class="ms-container test">
    <header>
      <nav class="ms-nav">
        <router-link :to="{name: 'home'}" class="ms-nav-home" >
          Home
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
      </nav>
    </header>
    <main class="ms-main">
      <router-view />
    </main>
    <footer class="ms-footer">
        <p>© 2018 Gandalf</p>
    </footer>
  </div>
</template>

<script setup>
</script>

<!-- this is already implicitly happening via Vite  -->
<!-- <style lang="scss">
@import './assets/scss/style.scss';
</style> -->
