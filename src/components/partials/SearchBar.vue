<script>
import { store } from '../../data/store';
import axios from 'axios';

export default {
  name: 'SearchBar',
  data() {
    return {
      textToSearch: ""
    }
  },

  methods: {

    searchText() {
      if (this.textToSearch == "") {
        alert('inserisci almeno tre lettere')
      } else if (this.textToSearch.length < 3) {
        alert('inserisci almeno tre lettere')
      } else {
        store.apiParams.query = this.textToSearch;
        
        store.movie = [];
        store.tv = [];
        this.getAPI('movie');
        this.getAPI('tv');
        
      }
    },

    getAPI(type) {
      axios.get(store.movieapiURL + type, {
        params: store.apiParams
      })
      .then( res => {
        // console.log(res.data.results)
        store[type] = res.data.results;
        store.totalResults = res.data.total_results;
      })
      .catch( err => {
        console.log(err.code);
      })
    }

  },

  mounted() {
    console.log('mounted tTS -->', store.apiParams.query);
  }

}
</script>

<template>
  <div class="container">
    <input
      v-model="textToSearch"
      type="text"
      name="search"
      id="search"
      @keyup.enter="searchText"
      placeholder="Inserisci il titolo che vuoi cercare">
    <button @click="searchText">Cerca</button>
  </div>
</template>

<style lang="scss" scoped>

@use '../../scss/partials/vars' as *;
.container {
  display:flex;
  justify-content: flex-end;
  align-items: center;
  height: $h-height;
  width: fit-content;
  float: right;
  input {
    height: 30px;
    width: 250px;
  }
  button {
    border: none;
    padding: 7px;
  }
}
</style>