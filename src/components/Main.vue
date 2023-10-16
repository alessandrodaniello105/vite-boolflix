<script>
export default {
  name: 'Main',
  props: {
    testoprova: String
  }
}
</script>

<template>
  <main>
    <h1>{{testoprova}}</h1>
  </main>
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars' as *;

main {
  color: $font-color;
}

</style>