<script>
import SearchBar from './partials/SearchBar.vue'


export default {
  name: 'Header',
  components: {
    SearchBar
  }
}
</script>

<template>
  <header>

    <div class="logo">
      <img src="/logo-boolflix.png" alt="">
    </div>

    <SearchBar />

  </header>
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars' as *;

header {
  color: $font-color;
  background-color: black;
  height: $h-height;
  .logo {
    width: 300px;
    height: 100%;
    display: flex;
    float: left;
    img {
      height: 60%;
      margin-left: 10px;
      align-self: center;
    }
  }
}

</style>