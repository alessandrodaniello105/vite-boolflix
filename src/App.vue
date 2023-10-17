<script>
import axios from 'axios'
import Main from './components/Main.vue';
import Header from './components/Header.vue';
import {store} from './data/store.js'

export default {
  name: 'App',
  components: {
    Main,
    Header
  },
  data(){
    return {
      store
    }
  }
  
}
</script>

<template>
  
  <Header />


  <Main
    :testoprova="store.movieapiURL"
    :moviesList="store.movie"
    :tvsList="store.tv"
    :isNotFound="store.totalResults == 0"
  />


</template>

<style lang="scss">
@use './scss/main.scss' as *;
</style>