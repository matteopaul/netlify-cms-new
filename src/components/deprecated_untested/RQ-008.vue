<template>
  <div class="rq-008-container">
    <h2 v-if="size == 'H2'" v-html="title"/>
    <h3 v-if="size == 'H3'" v-html="title"/>
  </div>
</template>

<script>
export default {
  name: 'rq-008',
  props: {
    title: {
      type: String
    },
    size: {
      type: String
    }
  }
}
</script>

<style>
  .rq-008-container {
    grid-column: span 12;
  }
</style>
