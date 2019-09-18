<template>
    <!-- RQ-092 List -->
    <div class="kmt-cardlist">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'Cardlist',
  props: {
  }
};
</script>

<style lang="scss">
    .kmt-cardlist {
        @include _grid(3, 40px, 40px, '.kmt-card');
        @include center-inner-large();
    }
</style>
