<script>
export default {
  name: 'Main',
  props: {
    testoprova: String,
    list: Array,
  }
}
</script>

<template>
  <main>
    <h1>{{testoprova}}</h1>
    <ul>
      <li v-for="element in list" :key="element.id">{{element.original_title}}</li>
    </ul>
  </main>
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars' as *;

main {
  color: $font-color;
}

</style>