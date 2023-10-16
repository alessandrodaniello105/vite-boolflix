<script>
import CardsWrapper from './partials/CardsWrapper.vue';



export default {
  name: 'Main',
  props: {
    testoprova: String,
    movieList: Array
  },
  components: {
    CardsWrapper
  }
}
</script>

<template>
  <main>
    <h1>{{testoprova}}</h1>

    <CardsWrapper :list="movieList" :sectionTitle="'Movies'" />

  </main>
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars' as *;

main {
  color: $font-color;
  background-color: orange;
}

</style>