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
      this.message = `"${store.apiParams.query}" non ha fornito nessun risultato`;
    }
  },
  created() {
    this.message = "Effettua una ricerca"
  }
}

</script>

<template>
  <main>
    
    <div v-if="isNotFound" class="message container">
      <h2>{{ message }}</h2>
    </div>

    <div v-else-if="store.isStart" class="first-search"><h1>{{message}}</h1></div>



    <div v-else>
      <CardsWrapper v-if="!isEmpty(moviesList)" :list="moviesList" :sectionTitle="'Movies'" />
      <CardsWrapper v-if="store.totalResults !== 0" :list="tvsList" :sectionTitle="'TVs series'" />
    </div>


  </main>
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars' as *;

main {
  color: $font-color;
  
  .first-search {
    text-align: center;
    margin: 20px 0;
  }
}

</style>