<template>
    <!-- RQ-00? List (Eigentlich RQ-021 List)-->
    <div class="kmt-textandimagelist" :class="[columnsCSSClass, alignCSSClass]">
        <!-- TODO: max 2 images (no masonry) -->
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'Textandimagelist',
  props: {

  },
  computed: {
  },
  components: {
  }
};
</script>

<style lang="scss">
    .kmt-textandimagelist {
    }
</style>
