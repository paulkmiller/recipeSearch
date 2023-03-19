<template>
  <div>
    <h1>Ingredients</h1>
  </div>
  <div>
    <input
      type="text"
      class="search"
      v-model="search"
      placeholder="Search for an ingredient"
    />
  </div>
  <div>
    <a
      href="#"
      @click.prevent="($event) => openIngredient(ingredient)"
      v-for="ingredient of computedIngredients"
      :key="ingredient.idIngredient"
      class="block bg-white rounded p-3 mb-3 shadow"
    >
      <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
      <!-- <img :src="searchImages()" alt="ingredient" /> -->
    </a>
  </div>
</template>

<script>
import { onMounted, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import mealDB from '@/axiosClient';

// import mealDBImage from '@/axiosClient2';
import store from '@/store';

const router = useRouter();
const search = ref('');
const ingredients = ref([]);
const computedIngredients = [];

export default {
  data() {
    return {
      search: '',
      awaitingSearch: false,
    };
  },
  computed: {
    computedIngredients() {
      // eslint-disable-next-line vue/no-ref-as-operand
      if (!computedIngredients) return ingredients;

      return ingredients.value.filter((i) =>
        i.strIngredient.toLowerCase().includes(search.value.toLowerCase())
      );
    },
  },
  methods: {
    openIngredient(ingredient) {
      store.commit('SET_INGREDIENT', ingredient);
      router.push({
        name: 'byIngredient',
        params: { ingredient: ingredient.strIngredient },
      });
    },
    // isTyping(value) {
    //   if (!value) {
    //     this.searchImages(this.searchImages);
    //   }
    // },
    // searchImages(searchQuery) {
    //   this.isLoading = true;

    //   if (searchQuery.value) {
    //     store.dispatch('returnIngredientImage', searchQuery.value);
    //   } else {
    //     store.commit('SET_INGREDIENTIMAGE', []);
    //   }
    //   this.loading = false;
    // },
  },
  watch: {
    // search: function (val) {
    //   if (!this.awaitingSearch) {
    //     setTimeout(() => {
    //       this.fetchResults({ query: this.search });
    //       this.awaitingSearch = false;
    //     }, 1000); // 1 sec delay
    //   }
    //   this.awaitingSearch = true;
    // },
  },
  setup() {
    onMounted(async () => {
      await mealDB.get('/list.php?i=list').then(({ data }) => {
        ingredients.value = data.meals;
      });

      // if (search.value) {
      //   searchImages(search.value);
      // }
    });
  },
};

// const computedIngredients = computed(() => {
//   // eslint-disable-next-line vue/no-ref-as-operand
//   if (!computedIngredients) return ingredients;

//   return ingredients.value.filter((i) =>
//     i.strIngredient.toLowerCase().includes(search.value.toLowerCase())
//   );
// });

// function openIngredient(ingredient) {
//   store.commit('SET_INGREDIENT', ingredient);
//   router.push({
//     name: 'byIngredient',
//     params: { ingredient: ingredient.strIngredient },
//   });
// }

// function isTyping(value) {
//   if (!value) {
//     this.searchImages(this.searchImages);
//   }
// }

// function searchImages(searchQuery) {
//   this.isLoading = true;

//   if (searchQuery.value) {
//     store.dispatch('returnIngredientImage', searchQuery.value);
//   } else {
//     store.commit('SET_INGREDIENTIMAGE', []);
//   }

//   this.loading = false;
// }

// onMounted(async () => {
//   await mealDB.get('/list.php?i=list').then(({ data }) => {
//     ingredients.value = data.meals;
//   });

//   if (search.value) {
//     searchImages(search.value);
//   }
// });
</script>
