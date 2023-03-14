<template>
  <div class="container test">
    <header>
      <nav class="nav">
        <router-link :to="{name: 'home'}" class="nav__home" >
          Home
        </router-link>
        <div class="nav__links">
          <router-link to="/" class="nav__link">
            Search Meals
          </router-link>
          <router-link to="/" class="nav__link">
            Meals by Letter
          </router-link>
          <router-link to="/" class="nav__link">
            Meals by Ingredients
          </router-link>
        </div>
      </nav>
    </header>
    <main class="main">
      <router-view />
    </main>
    <footer class="footer">
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
