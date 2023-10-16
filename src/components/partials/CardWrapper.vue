<script>
export default {
  name: 'CardWrapper',
  props: {
    list: Array,
    sectionTitle: String
  },
}
</script>

<template>
  <div class="container">
    <h1>{{sectionTitle}}</h1>
    <ul>
      <li v-for="element in list" :key="element.id">{{element.original_title}}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 95vw;
  margin: 0 auto;

  border: 1px solid black;
}
</style>