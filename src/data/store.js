import {reactive} from 'vue';

export const store = reactive({
  movieapiURL: 'https://api.themoviedb.org/3/search/movie?api_key=878007cbe1145f59af923c1e32e787a7',
  tvsapiURL: ' https://api.themoviedb.org/3/search/tv?api_key=878007cbe1145f59af923c1e32e787a7',  
  moviesList: null,
  tvsList: null,
  textToSearch: "",
  totalResults: null
})