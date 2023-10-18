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
      <img v-else :src="`https://image.tmdb.org/t/p/w300${cover}`" :alt="card.title || card.name" >

      
    </div>

  </div>
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars' as *;

.container {
  position: relative;
  display: flex;
  justify-content: space-between;
  color: $font-color;
  height: 400px;
  .text-box {
    font-size: 3rem;
    flex-basis: 50%;
    .overview {
      font-weight: 400;
      font-size: 20px;
    }
  }
  .img-box {
    flex-basis: 50%;
    overflow: hidden;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  
}

</style>