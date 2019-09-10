<template>
    <!-- RQ-00? List (Eigentlich RQ-021 List)-->
    <div class="kmt-textandimagelist" :class="[teasercountCSSClass]">
        <!-- TODO: max 2 images (no masonry) -->
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'Textandimagelist',
  data () {
    return {
      teasercount: 0
    };
  },
  computed: {
    teasercountCSSClass () {
      return `kmt-textandimagelist--teasercount-${this.teasercount}`;
    }
  },
  mounted () {
    this.teasercount = this.$children.filter((el) => {
      return el.$options.name === 'Textandimage';
    }).length;
  }
};
</script>

<style lang="scss">
    .kmt-textandimagelist {
        display: flex;
        flex-wrap: wrap;
    }
</style>
