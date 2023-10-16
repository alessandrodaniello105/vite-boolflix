<script>
import { store } from '../../data/store';
import axios from 'axios';

export default {
  name: 'SearchBar',
  data() {
    return {
      textToSearch: null
    }
  },
  methods: {
    searchText() {
      store.textToSearch = this.textToSearch;
      console.log('textToSearch -->', store.textToSearch)
      store.moviesList = [];
      this.getAPI(store.apiURL);
    },
    getAPI(param) {
      axios.get(param, {
        params: {
          query: store.textToSearch,
          language: 'it-IT'
        }
      })
      .then( res => {
        // console.log(res.data.results)
        store.moviesList = res.data.results
        console.log(store.moviesList)
      })
      .catch( err => {
        console.log(err.code)
      })
    }
  },
  mounted() {
    console.log('mounted tTS -->', store.textToSearch)
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