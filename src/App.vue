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
          query: 'Barbie',
          language: 'it-IT'
        }
      })
      .then( res => {
        console.log(res.data.results)
      })
    }
  },
  created() {
    this.getAPI(store.apiURL)
  }
}
</script>

<template>
  
  <Header />
  
  <Main :testoprova="store.apiURL" />


</template>

<style lang="scss">
@use './scss/main.scss' as *;
</style>