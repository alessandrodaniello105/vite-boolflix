<script>
import CardsWrapper from './partials/CardsWrapper.vue';

import { store } from '../data/store';

export default {
  name: 'Main',
  props: {
    testoprova: String,
    moviesList: Array,
    tvsList: Array,
    isNotFound: Boolean
  },
  components: {
    CardsWrapper
  },
  data() {
    return {
      store,
      message: ''
    }
  },
  methods: {
    isEmpty(list) {
      this.message = `${store.apiParams.query} in ${list} non ha fornito nessun risultato`;
    }
  },
  created() {
    console.log(store.movie)
  }
}

</script>

<template>
  <main>
    
    <div v-if="isNotFound" class="message container">
      <h2>{{ message }}</h2>
    </div>

    <div v-else>
      <CardsWrapper v-if="!isEmpty(moviesList)" :list="moviesList" :sectionTitle="'Movies'" />
      <CardsWrapper v-if="!isEmpty(tvsList)" :list="tvsList" :sectionTitle="'TVs series'" />
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