<template>
  <p class="label">
    <span v-for="piece in path.split(';')" class="breadcrumb-piece">
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
</style>
