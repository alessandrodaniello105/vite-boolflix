<script>
import Main from './components/Main.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Main,
    Header
  }
}
</script>

<template>
  
  <Header />

  <Main />


</template>

<style lang="scss">
@use './scss/main.scss' as *;
</style>