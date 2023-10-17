<script>
import CardsWrapper from './partials/CardsWrapper.vue';

import { store } from '../data/store';

export default {
  name: 'Main',
  props: {
    testoprova: String,
    moviesList: Array,
    tvsList: Array,
    isFound: Boolean
  },
  components: {
    CardsWrapper
  },
  data() {
    return {
      store
    }
  },
  created() {
    console.log(store.moviesList)
  }
}

</script>

<template>
  <main>
    
    <div v-if="isFound" class="message container">
      <h2>No results found</h2>
    </div>

    <div v-else>
      <CardsWrapper v-if="!store.moviesList == []" :list="moviesList" :sectionTitle="'Movies'" />
      <CardsWrapper v-if="!store.tvsList == []" :list="tvsList" :sectionTitle="'TVs series'" />
    </div>


  </main>
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars' as *;

main {
  color: $font-color;
  background-color: $primary-color;
}

</style>