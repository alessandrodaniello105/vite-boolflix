<script>
export default {
  name: 'Card',
  props: {
    cover: String,
    element: Object
  }
}
</script>

<template>
  <div class="col">
    <div class="card">

      <div class="img-box">

        <img :src="`https://image.tmdb.org/t/p/w300${cover}`" alt="">

        <span v-if="cover == null || cover == undefined"> <strong>{{element.title}}</strong></span>

        
      </div>
      <div class="text-box">
        <p>Titolo: {{element.title}}</p>
        <p>Titolo originale: {{element.original_title}}</p>
        <p>Lingua: {{element.original_language}}</p>
        <p>Rating: {{element.vote_average}}</p>
      </div>
      
    </div>
  </div>
</template>

<style lang="scss" scoped>
.col {
  width: 300px;
  margin: 0 10px;


  .card {
    position: relative;
    color: white;
    width: 100%;
    text-align: center;

    &:hover .img-box {
      filter: blur(2px);
    }
    &:hover .text-box {
      z-index: 1;
    }
    .img-box {
      position: relative;
      width: 100%;

      span {
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .text-box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
      background-color: rgba(#000000, .6);
      width: 200px;
      border-radius: 3px;
    }
  }
}
</style>