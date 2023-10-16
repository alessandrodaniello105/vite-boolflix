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
  },
  methods: {
    getAPI(param) {
      axios.get(param, {
        params: {
          query: store.textToSearch,
          language: 'it-IT'
        }
      })
      .then( res => {
        // console.log(res.data.results)
        store.moviesList = res.data.results
        console.log(store.moviesList)
      })
      .catch( err => {
        console.log(err.code)
      })
    }
  }
}
</script>

<template>
  
  <Header />


  <Main
    :testoprova="store.movieapiURL"
    :movieList="store.moviesList"
    :isFound="store.totalResults == 0"
  />


</template>

<style lang="scss">
@use './scss/main.scss' as *;
</style>