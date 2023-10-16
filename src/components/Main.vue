<script>
import CardWrapper from './partials/CardWrapper.vue';



export default {
  name: 'Main',
  props: {
    testoprova: String,
    movieList: Array
  },
  components: {
    CardWrapper
  }
}
</script>

<template>
  <main>
    <h1>{{testoprova}}</h1>

    <CardWrapper :list="movieList" :sectionTitle="'Movies'" />

  </main>
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars' as *;

main {
  color: $font-color;
  background-color: orange;
}

</style>