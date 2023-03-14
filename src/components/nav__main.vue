<template>
  <header>
    <nav class="nav">
      <router-link :to="{name: 'home'}" class="nav__home" >
        Home
      </router-link>
      <div class="nav__links">
        <router-link :to="{name: 'byName'}" class="nav__link">
          Search Meals
        </router-link>
        <router-link :to="{name: 'byLetter'}" class="nav__link">
          Meals by Letter
        </router-link>
        <router-link :to="{name: 'byIngredient'}" class="nav__link">
          Meals by Ingredients
        </router-link>
      </div>
    </nav>
  </header>
</template>
