<template>
  <header>
    <nav class="nav container">
      <router-link :to="{name: 'home'}" class="nav__home" >
        Pauly Craig
      </router-link>
      <div class="nav__links">
        <router-link :to="{name: 'byName'}" class="nav__link search">
          <!-- todo: turn search link into expanding searchbar in nav -->
          Search
        </router-link>
        <router-link :to="{name: 'byLetter'}" class="nav__link">
          By Letter
        </router-link>
        <router-link :to="{name: 'ingredients'}" class="nav__link">
          By Ingredient
        </router-link>
      </div>
    </nav>
  </header>
</template>
