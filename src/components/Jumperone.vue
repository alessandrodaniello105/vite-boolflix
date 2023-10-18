<script>
export default {
  name: 'Jumperone',
  props: {
    card: Object,
    cover: String
  }
}
</script>

<template>
  <div class="container">

    <div class="text-box">
      <p>
        {{card.title || card.name}}
      </p>

      <p v-if="card.original_title !== card.title || card.original_name !== card.name">
        {{card.original_title || card.original_name}}
      </p>
      
      <p class="overview">
        {{ card.overview }}
      </p>
    </div>

    <div class="img-box">

      <span v-if="cover == null || cover == undefined"> <strong>{{card.title || card.name}}</strong></span>
      <!-- <img v-else :src="`https://image.tmdb.org/t/p/w300${cover}`" :style="`background: url(https://image.tmdb.org/t/p/w300${cover}), linear-gradient(to right, black , rgba(0, 0, 0, 0));
      background-blend-mode: overlay; background-repeat:no-repeat;`" :alt="card.title || card.name" > -->
      <div v-else  class="div-test" :style="`background: url(https://image.tmdb.org/t/p/w300${cover}), linear-gradient(to right,  #000000 30%, rgba(0,0,0,0));  background-blend-mode: multiply;
    background-repeat:no-repeat; background-size:contain; background-position:right`"></div>
      
    </div>

    <div class="close-button" @click="$emit('closeCard')"><i class="fa-regular fa-circle-xmark"></i></div>
    
  </div>
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars' as *;

.container-ctm {
  max-width: 90%;
  margin: 0 auto;
}
.div-test {
  height: 100%;
}
.container {
  position: relative;
  display: flex;
  justify-content: space-between;
  color: $font-color;
  height: 400px;
  border: 2px solid grey;
  border-radius: 15px;
  padding: 0 20px;
  background-image: linear-gradient(90deg, #000000 50%, rgba(0,0,0,0));

  
  background-blend-mode:overlay;
  .text-box {
    font-size: 3rem;
    flex-basis: 50%;
    overflow: auto;
    padding: 10px 10px;
    .overview {
      font-weight: 400;
      font-size: 20px;
    }
  }
  .img-box {
    flex-basis: 50%;
    overflow: hidden;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: right;
    }
  }
  .close-button {
    position: relative;
    right: -10px;
    font-size: 2rem;
    align-self: center;
  }
}

</style>