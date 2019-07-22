<template>
  <p class="label">
    <span v-for="piece in path" class="breadcrumb-piece">
      {{piece}}
    </span>
  </p>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    path: Array
  }
}
</script>

<style>
  .breadcrumb-piece:first-child {
    color: var(--copper);
  }

  .breadcrumb-piece::after {
    content: '/'
  }
</style>
