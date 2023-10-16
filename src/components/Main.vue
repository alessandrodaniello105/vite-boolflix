<script>
import CardsWrapper from './partials/CardsWrapper.vue';

export default {
  name: 'Main',
  props: {
    testoprova: String,
    movieList: Array,
    isFound: Boolean
  },
  components: {
    CardsWrapper
  }
}

</script>

<template>
  <main>
    
    <CardsWrapper :list="movieList" :sectionTitle="'Movies'" />
    <div v-if="isFound" class="message container">
      <h2>No results found</h2>
    </div>


  </main>
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars' as *;

main {
  color: white;
  background-color: orange;
}

</style>