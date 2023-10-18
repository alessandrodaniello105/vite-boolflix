<script>
import { store } from '../../data/store';
export default {
  name: 'Stars',
  props: {
    vote: Number
  },
  data() {
    return {
      store,
      distancetest: '45px'
    }
  },
  computed: {
    rating() {
      return 90 - (this.vote * 9) 
    }
  }
}
</script>

<template>
  <div class="stars">
    <i class="fa-regular fa-star"></i>
    <i class="fa-regular fa-star"></i>
    <i class="fa-regular fa-star"></i>
    <i class="fa-regular fa-star"></i>
    <i class="fa-regular fa-star"></i>
    
    <div class="full-stars" :style="` clip-path: inset(0 ${rating}px 0 0)`">
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

.stars {
  position: relative;
  width: 90px;
  .full-stars {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }
}

.crop-left {
  clip-path: inset(0 100px 0 0);
}



</style>