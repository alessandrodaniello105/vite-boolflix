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

    <SearchBar />

  </header>
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars' as *;

header {
  color: $font-color;
  background-color: black;
  min-height: $h-height;
}

</style>