<script>
import Stars from './Stars.vue';

export default {
  name: 'Card',
  components: {
    Stars
  },
  props: {
    cover: String,
    element: Object
  },
  data() {
    return {
      flags: [
        'en',
        'it'
      ]
    }
  },
  computed: {
    rating() {
      return (this.element.vote_average / 2).toFixed(2);
    }
  },
}
</script>

<template>
  <div class="col">
    <div class="card">

      <div class="img-box">

        <span v-if="cover == null || cover == undefined"> <strong>{{element.title || element.name}}</strong></span>
        <img v-else :src="`https://image.tmdb.org/t/p/w300${cover}`" :alt="element.title || element.name" >

        
      </div>

      <div class="text-box">
        
        <p>
          <strong>Titolo:</strong> {{element.title || element.name}}
        </p>

        <p v-if="element.original_title !== element.title || element.original_name !== element.name"><strong>Titolo originale:</strong> {{element.original_title || element.original_name}}</p>
        
        <p>
          <strong>Lingua:</strong>
          <img v-if="flags.includes(element.original_language)" :src="`/${element.original_language}.png`" :alt="element.original_language" />
          <span v-else>{{ element.original_language }}</span>
        </p>

        <p class="rating"><strong>Rating: </strong> <Stars :vote="element.vote_average"/></p>

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
  height: 170px;
  aspect-ratio: 16 / 9;
  margin: 10px;


  .card {
    position: relative;
    color: white;
    height: 100%;
    text-align: center;
    overflow: hidden;
    transition: all .3s linear;

    &:hover .img-box {
      filter: blur(2px);
    }
    &:hover .text-box {
      z-index: 1;
      transform: translate(-50%, 50%);
    }
    
    .img-box {
      position: relative;
      height: 170px;
      aspect-ratio: 16 / 9;
      background-color: #000000;
      
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
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      z-index: -1;
      background-color: rgba(#000000, .6);
      width: 100%;
      aspect-ratio: 16 / 9;
      padding: 20px;
      border-radius: 3px;
      text-align: left;
      transition: transform .3s ease-in-out 0s;

      img {
        width: 25px;
        aspect-ratio: 16 / 9;
        vertical-align: middle;
        object-fit: cover;
        background-color: transparent;
      }

      .rating {
        display: flex;
      }
    }
  }
}
</style>