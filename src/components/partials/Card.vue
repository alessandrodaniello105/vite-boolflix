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

        <span v-if="cover == null || cover == undefined"> <strong>{{element.title}}</strong></span>
        <img :src="`https://image.tmdb.org/t/p/w300${cover}`" alt="">

        
      </div>

      <div class="text-box">
        <p>Titolo: {{element.title || element.name}}</p>
        <p>Titolo originale: {{element.original_title || element.original_name}}</p>
        <p>Lingua: <img :src="`/${element.original_language}.png`" :alt="element.original_language"></p>
        <p>Rating: {{element.vote_average}}</p>
      </div>
      
    </div>
  </div>
</template>

<style lang="scss" scoped>

@keyframes startAnim {
  0% {
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 100%);
    
  }
  100% {
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, 50%);
  }

  
}
.col {
  width: 300px;
  height: 169px;
  margin: 10px;


  .card {
    position: relative;
    color: white;
    width: 100%;
    text-align: center;
    overflow: hidden;

    &:hover .img-box {
      filter: blur(2px);
    }
    &:hover .text-box {
      z-index: 1;
      animation-name: testAnim;
      animation-duration: .5s;
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
      left: 50%;
      bottom: 50%;
      transform: translate(-50%, 50%);
      z-index: -1;
      background-color: rgba(#000000, .6);
      width: 100%;
      height: 100%;
      padding: 20px;
      border-radius: 3px;
      text-align: left;
      img {
        width: 25px;
        aspect-ratio: 16 / 9;
        vertical-align: middle;
        object-fit: cover;
        background-color: transparent;
      }
      p {
        margin: 5px 0;
      }
    }
  }
}
</style>