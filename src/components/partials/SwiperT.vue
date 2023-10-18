<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import Card from './Card.vue';



import { Pagination, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import { store } from '../../data/store';

export default {
 name: 'SwiperT',
 components: {
    Swiper,
    SwiperSlide,
    Card
  },
  props: {
    element: Object,
    list: Array,
    cover: String
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
  },
  data() {
    return {
      store
    }
  },
  setup() {
    return {
      modules: [Pagination, Mousewheel]
    };
  },
  
}
</script>

<template>

  <swiper
    :direction="'horizontal'"
    :mousewheel="true"
    :slidesPerView="6"
    :spaceBetween="30"
    
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="element in list" :key="element.id" > <Card @click="store.selectedCard = element, store.isSelected = true" :element="element" :cover="verifyPath(element)" /> </swiper-slide>
  </swiper>
  
</template>

<style lang="scss" scoped>


</style>