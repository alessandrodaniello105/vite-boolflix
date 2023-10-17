<script>
import Card from './Card.vue';

export default {
  name: 'CardsWrapper',
  components: {
    Card
  },
  props: {
    list: Array,
    sectionTitle: String
  },
  methods: {
    verifyPath(element) {
      if (element.backdrop_path == null) {
        return element.poster_path
      } else if (element.backdrop_path == null && element.poster_path) {
        
      } else {
        return element.backdrop_path
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <h1>{{sectionTitle}}</h1>

    <div class="row">
      <Card v-for="element in list" :key="element.id" :cover="verifyPath(element)" :element="element" />
    </div>

  </div>
</template>

<style lang="scss" scoped>

.container {
  // overflow: hidden;
  h1 {
    display: block;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0;
  }

//  .row {
//  display: flex;
//  }
}
</style>