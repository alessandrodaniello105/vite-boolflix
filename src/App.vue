<script>
import Main from './components/Main.vue';
import Header from './components/Header.vue';
import Jumperone from './components/Jumperone.vue';
import {store} from './data/store.js'

export default {
  name: 'App',
  components: {
    Main,
    Header,
    Jumperone
  },
  data(){
    return {
      store
    }
  },
  methods: {
    verifyPath(element) {
      if (element.backdrop_path == null) {
        return element.poster_path
      } else if (element.backdrop_path == null && element.poster_path == null) {
        return 'no image'
      } else {
        return element.backdrop_path
      }
    }
  }
  
}
</script>

<template>
  
  <div class="main-wrapper">
    <Header />

    <Jumperone v-if="store.isSelected" :cover="verifyPath(store.selectedCard)" :card="store.selectedCard" @alfonso="store.isSelected = false" />
  
    <Main
      :moviesList="store.movie"
      :tvsList="store.tv"
      :isNotFound="store.totalResults == 0"
    />
    
  </div>

</template>

<style lang="scss">
@use './scss/main.scss' as *;
</style>