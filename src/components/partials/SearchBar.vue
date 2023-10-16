<script>
export default {
  name: 'SearchBar'
}
</script>

<template>
  <div class="container">
    <input type="text" name="search" id="search" placeholder="Inserisci il titolo che vuoi cercare">
    <button>Cerca</button>
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