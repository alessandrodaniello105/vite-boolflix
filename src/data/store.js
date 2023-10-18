import {reactive} from 'vue';

export const store = reactive({
  movieapiURL: 'https://api.themoviedb.org/3/search/',
  tvsapiURL: ' https://api.themoviedb.org/3/search/tv',  
  apiParams: {
    api_key: '878007cbe1145f59af923c1e32e787a7',
    query: "",
    language: 'it-IT'
  },
  movie: null,
  tv: null,
  totalResults: null
})