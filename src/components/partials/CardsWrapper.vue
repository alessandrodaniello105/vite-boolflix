<script>
import { store } from '../../data/store';
import Card from './Card.vue';
import SwiperT from './SwiperT.vue';

export default {
  name: 'CardsWrapper',
  components: {
    Card,
    SwiperT
  },
  props: {
    list: Array,
    sectionTitle: String,
    element: Object
  },
  data() {
    return {
      store
    }
  },
  methods: {
    testFunction() {
      store.selectedCard = this
      console.log(store.selectedCard)
    }
  }
}
</script>

<template>
  <div class="container">
    <h1>{{sectionTitle}}</h1>

    <SwiperT @testObj="console.log(element.id)" :list="list" />

    <!-- <div class="row">
      <Card v-for="element in list" :key="element.id" :cover="verifyPath(element)" :element="element" />
    </div> -->

  </div>
</template>

<style lang="scss" scoped>

.container {
  margin: 20px auto;
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