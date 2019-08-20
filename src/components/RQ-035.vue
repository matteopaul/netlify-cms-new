<template>
  <p class="label rq-035-container">
    <span v-for="piece in path.split(';')" class="rq-035-piece">
      {{piece}}
    </span>
  </p>
</template>

<script>
export default {
  name: 'RQ-035',
  props: {
    path: String
  }
}
</script>

<style>
  .rq-035-piece:first-child {
    color: var(--copper);
  }

  .rq-035-piece::after {
    content: '/'
  }

  .rq-035-container {
    grid-column: span 3;
  }
</style>
