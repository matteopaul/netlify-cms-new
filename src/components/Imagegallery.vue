<template>
    <!-- RQ-021 List -->
    <div class="kmt-imagegallery" :class="imagecountCSSClass">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'Imagegallery',
  props: {},
  data(){
    return {
      imagecount: 0
    }
  },
  computed: {
    imagecountCSSClass () {
      return `kmt-imagegallery--imagecount-${this.imagecount}`;
    }
  },
  mounted(){
    this.imagecount = this.$children.filter((el) => {
      return el.$options.name === 'Imagegalleryitem';
    }).length;
  }
};
</script>

<style lang="scss">
    .kmt-imagegallery {
        &--imagecount-2 {
            @include _grid(2, 20px, 20px);
        }
    }
</style>
